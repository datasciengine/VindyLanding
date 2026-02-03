"use client";

import { useMemo, useState } from "react";

type ApiResponse<T> = {
  data: T;
  success: boolean;
  message: string | null;
  isResourceKey?: boolean;
};

type LanguageCode = "en-US" | "tr-TR";

function buildNormalizedPhone(localPart: string): string {
  const digits = localPart.replace(/\D/g, "");
  if (!digits) return "";
  return `+90${digits}`;
}

export function DemoCallSection() {
  const [step, setStep] = useState<1 | 2>(1);
  const [isKvkkOpen, setIsKvkkOpen] = useState(false);
  const [isKvkkAccepted, setIsKvkkAccepted] = useState(false);
  const [languageCode, setLanguageCode] = useState<LanguageCode>("tr-TR");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneLocal, setPhoneLocal] = useState("");
  const [normalizedPhone, setNormalizedPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [validationCode, setValidationCode] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const canSendOtp = useMemo(() => {
    return firstName.trim() && lastName.trim() && phoneLocal.trim();
  }, [firstName, lastName, phoneLocal]);

  async function handleSendOtp() {
    setErrorMessage(null);
    setStatusMessage(null);

    if (!canSendOtp) {
      setErrorMessage("Please fill in your name and phone number.");
      return;
    }

    const phone = buildNormalizedPhone(phoneLocal);
    if (!phone) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }

    try {
      setIsSendingOtp(true);

      const response = await fetch("/api/sms/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          FirstName: firstName,
          LastName: lastName,
          LanguageCode: languageCode,
          PhoneNumber: phone,
        }),
      });

      const data = (await response.json()) as ApiResponse<boolean>;

      if (!response.ok || data?.success === false) {
        throw new Error(data?.message ?? "Could not send verification code.");
      }

      setNormalizedPhone(phone);
      setOtpSent(true);
      setStep(2);
      setStatusMessage("Verification code sent. Please check your phone.");
    } catch (error) {
      if (error instanceof Error) {
        switch (error.message) {
          case "InvalidNumber":
            setErrorMessage("Please enter a valid phone number.");
            break;
      
          case "SmsLimitExceeded":
            setErrorMessage(
              "You have reached the maximum number of SMS limit. Please try again later."
            );
            break;
      
          case "AnErrorOcuredWhenSmsSending":
            setErrorMessage(
              "An error occurred while sending the SMS. Please try again later."
            );
            break;
      
          default:
            setErrorMessage(error.message);
        }
      } else {
        setErrorMessage("Something went wrong while sending the code.");
      }
    } finally {
      setIsSendingOtp(false);
    }
  }

  async function handleValidateAndCall(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    setStatusMessage(null);

    if (!otpSent || !normalizedPhone) {
      setErrorMessage("Please request and receive the SMS code first.");
      return;
    }

    if (!validationCode.trim()) {
      setErrorMessage("Please enter the verification code you received.");
      return;
    }

    try {
      setIsVerifying(true);

      const response = await fetch("/api/sms/validate-and-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          PhoneNumber: normalizedPhone,
          ValidationCode: validationCode,
          CompanyName: companyName || "",
          Email: email || null,
          FirstName: firstName,
          LastName: lastName,
          Title: title || null,
        }),
      });

      const data = (await response.json()) as ApiResponse<boolean>;

      if (!response.ok || data?.success === false) {
        throw new Error(data?.message ?? "Verification failed. Please try again.");
      }

      setStatusMessage(
        `Verified. Vindy will call you shortly at ${normalizedPhone}.`
      );
      setStep(1);
      setFirstName("");
      setLastName("");
      setPhoneLocal("");
      setNormalizedPhone("");
      setCompanyName("");
      setEmail("");
      setTitle("");
      setValidationCode("");
      setOtpSent(false);
      setIsSendingOtp(false);
      setIsVerifying(false);
      setStatusMessage(null);
      setErrorMessage(null);
    } catch (error) {
      if (error instanceof Error) {
        switch (error.message) {
          case "OtpCodeUsedBefore":
            setErrorMessage("The verification code has already been used. Please request a new code.");
            setTimeout(() => {
              setStep(1);
              setStatusMessage(null);
              setErrorMessage(null);
            }, 3000);
            break;
          case "VindyCallErrorMessage":
            setErrorMessage("An error occurred while calling the number. Please try again later.");
            setTimeout(() => {
              setStep(1);
              setStatusMessage(null);
              setErrorMessage(null);
            }, 3000);
            break;
          case "OtpCodeExpired":
            setErrorMessage("The verification code has expired. Please request a new code.");
            setTimeout(() => {
              setStep(1);
              setStatusMessage(null);
              setErrorMessage(null);
            }, 3000);
            break;
          case "WrongOtpCode":
            setErrorMessage("The verification code is incorrect. Please check the code and try again.");
            break;
          default:
            setErrorMessage("Something went wrong. Please try again.");
        }
      }
    } finally {
      setIsVerifying(false);
    }
  }

  return (
    <section
      id="demo"
      aria-label="Live demo"
      className="bg-gradient-to-b from-white via-[#F3F6FF] to-white pb-20"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[14px] font-medium uppercase tracking-[0.1em] text-[#686E75]">
            Live Demo
          </p>
          <h2 className="mt-3 text-[40px] font-bold uppercase leading-[48px] tracking-[0] text-[#040D19] sm:text-[44px] sm:leading-[52px] lg:text-[48px] lg:leading-[56px]">
            Verify your number, get a call
          </h2>
          <p className="mt-3 text-[16px] leading-[150%] tracking-[0.01em] text-[#686E75] sm:text-[18px]">
            Enter your details once, get an SMS code, then let Vindy call the same
            number to show how it talks to candidates.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-[24px] border border-[#CFDBF9] bg-white/95 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)] sm:p-8 lg:p-10">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E3EEFF] px-3 py-1">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2962FF] text-[12px] font-semibold text-white">
                1
              </span>
              <span className="text-[12px] font-medium tracking-[0.08em] text-[#1549D6] uppercase">
                Enter details
              </span>
            </div>
            <div className="hidden items-center gap-2 text-[12px] text-[#686E75] sm:flex">
              <span className="inline-block h-[1px] w-8 bg-[#CFDBF9]" />
              <span>Then verify code &amp; get a live call.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              {step === 1 ? (
                <div className="rounded-2xl bg-[#F4F7FF] p-6 sm:p-7 lg:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="demo-firstName"
                      className="mb-1.5 block text-xs font-medium text-[#040D19]"
                    >
                      First name
                    </label>
                    <input
                      id="demo-firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First name"
                      className="w-full rounded-md border border-[#CFDBF9] bg-white px-3 py-2.5 text-sm text-[#040D19]
                                 placeholder:text-[#9CA3AF] focus:border-[#2962FF] focus:outline-none focus:ring-2 focus:ring-[#2962FF]"
                    />
                  </div>
              
                  <div>
                    <label
                      htmlFor="demo-lastName"
                      className="mb-1.5 block text-xs font-medium text-[#040D19]"
                    >
                      Last name
                    </label>
                    <input
                      id="demo-lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last name"
                      className="w-full rounded-md border border-[#CFDBF9] bg-white px-3 py-2.5 text-sm text-[#040D19]
                                 placeholder:text-[#9CA3AF] focus:border-[#2962FF] focus:outline-none focus:ring-2 focus:ring-[#2962FF]"
                    />
                  </div>
                </div>
              
                <div className="relative pt-5">
                <label
                    htmlFor="demo-phone-local"
                    className="mb-1.5 block text-xs font-medium text-[#040D19]"
                  >
                    Language
                  </label>
                    <select
                      id="demo-language"
                      value={languageCode}
                      onChange={(e) => setLanguageCode(e.target.value as LanguageCode)}
                      className="peer w-full appearance-none rounded-md border border-[#CFDBF9] bg-white
                                px-3 py-2.5 pr-10 text-sm text-[#040D19]
                                focus:border-[#2962FF] focus:outline-none focus:ring-2 focus:ring-[#2962FF]"
                    >
                      <option value="en-US">English</option>
                      <option value="tr-TR">Türkçe</option>
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-3 top-10 flex items-center text-[#6B7280]">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5.25 7.5L10 12.25L14.75 7.5" />
                      </svg>
                    </div>
                  </div>

              
                <div className="mt-5">
                  <label
                    htmlFor="demo-phone-local"
                    className="mb-1.5 block text-xs font-medium text-[#040D19]"
                  >
                    Phone number
                  </label>
              
                  <div className="flex overflow-hidden rounded-md border border-[#CFDBF9] bg-white focus-within:ring-2 focus-within:ring-[#2962FF]">
                    <div className="flex items-center bg-[#F8FAFF] px-3 text-sm font-medium text-[#040D19]">
                      +90
                    </div>
                    <input
                      id="demo-phone-local"
                      type="tel"
                      value={phoneLocal}
                      onChange={(e) => setPhoneLocal(e.target.value)}
                      placeholder="5XX XXX XXXX"
                      className="w-full px-3 py-2.5 text-sm text-[#040D19] placeholder:text-[#9CA3AF]
                                 focus:outline-none"
                    />
                  </div>
              
                  <p className="mt-1.5 text-xs text-[#686E75]">
                    We&apos;ll send the OTP and demo call to this number.
                  </p>
                  <div className="mt-5">
                  <label className="flex items-start gap-2 text-xs text-[#686E75]">
                    <input
                      type="checkbox"
                      checked={isKvkkAccepted}
                      readOnly
                      onClick={(e) => {
                        e.preventDefault();  
                        setIsKvkkOpen(true);   
                      }}
                      className="mt-0.5 h-4 w-4 rounded border-[#CFDBF9] text-[#2962FF]
                                focus:ring-[#2962FF]"
                    />

                    <span>
                      <button
                        type="button"
                        onClick={() => setIsKvkkOpen(true)}
                        className="font-medium text-[#2962FF] underline"
                      >
                        KVKK
                      </button>{" "}
                      kapsamında kişisel verilerimin işlenmesine izin veriyorum.
                    </span>
                  </label>
                </div>
                {isKvkkOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                      <div
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setIsKvkkOpen(false)}
                      />

                      <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                        <div className="flex items-start justify-between">
                          <h3 className="text-sm font-semibold text-[#040D19]">
                            KVKK Açıklaması
                          </h3>

                          <button
                            onClick={() => setIsKvkkOpen(false)}
                            className="text-[#9CA3AF] hover:text-[#040D19]"
                          >
                            ✕
                          </button>
                        </div>

                        <div className="mt-3 text-xs leading-relaxed text-[#686E75]">
                          Vindy sesli asistanını test etmek amacıyla yaptığım görüşmenin
                          kayıt altına alınmasına, sesimin eğitim, analiz ve tanıtım amaçlı
                          kullanılmasına, iletişim bilgilerimin tanıtım/test amaçlı geri dönüş
                          için kullanılmasına ve kişisel bilgilerimin anonim tutulmasına onay
                          veriyorum.
                          <br />
                          <br />
                          <span className="text-[11px]">
                            (Dilediğiniz zaman info@vindy.ai adresinden verilerinizin
                            silinmesini talep edebilirsiniz.)
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            setIsKvkkAccepted(true);
                            setIsKvkkOpen(false);
                          }}
                          className="mt-5 inline-flex w-full items-center justify-center
                                    rounded-full bg-[#2962FF] px-4 py-2.5 text-xs
                                    font-semibold uppercase text-white
                                    hover:bg-[#2f6dff]"
                        >
                          Okudum, anladım
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={isSendingOtp || !canSendOtp || !isKvkkAccepted}
                  className="mt-7 inline-flex w-full items-center justify-center rounded-full
                             bg-[#2962FF] px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white
                             shadow-sm transition hover:bg-[#2f6dff]
                             disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSendingOtp ? "Sending code..." : "Send verification code"}
                </button>
              
                {(statusMessage || errorMessage) && (
                  <div className="mt-4 rounded-md border px-3 py-2 text-sm
                                  ${statusMessage ? 'border-[#A7F3D0] bg-[#ECFDF5]' : 'border-[#FECACA] bg-[#FEF2F2]'}">
                    {statusMessage && (
                      <p className="text-[#065F46]">{statusMessage}</p>
                    )}
                    {errorMessage && (
                      <p className="text-[#B91C1C]">{errorMessage}</p>
                    )}
                  </div>
                )}
              </div>
              
              ) : (
                    <form
                      onSubmit={handleValidateAndCall}
                      className="rounded-2xl bg-[#F4F7FF] p-6 sm:p-7 lg:p-8"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#686E75]">
                        Step 2 · Verify & start call
                      </p>

                      <div className=" py-3  text-sm text-[#040D19]">
                        We sent an SMS code to{" "}
                        <span className="font-semibold">
                          {normalizedPhone || buildNormalizedPhone(phoneLocal) || "your number"}
                        </span>
                      </div>

                      <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="demo-company"
                            className="mb-1.5 block text-xs font-medium text-[#040D19]"
                          >
                            Company name
                          </label>
                          <input
                            id="demo-company"
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="Name of the company"
                            className="w-full rounded-md border border-[#CFDBF9] bg-white px-3 py-2.5 text-sm
                                      text-[#040D19] placeholder:text-[#9CA3AF]
                                      focus:border-[#2962FF] focus:outline-none focus:ring-2 focus:ring-[#2962FF]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="demo-title"
                            className="mb-1.5 block text-xs font-medium text-[#040D19]"
                          >
                            Title <span className="font-normal text-[#686E75]">(optional)</span>
                          </label>
                          <input
                            id="demo-title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title of the person"
                            className="w-full rounded-md border border-[#CFDBF9] bg-white px-3 py-2.5 text-sm
                                      text-[#040D19] placeholder:text-[#9CA3AF]
                                      focus:border-[#2962FF] focus:outline-none focus:ring-2 focus:ring-[#2962FF]"
                          />
                        </div>
                      </div>

                      <div className="mt-5">
                        <label
                          htmlFor="demo-email"
                          className="mb-1.5 block text-xs font-medium text-[#040D19]"
                        >
                          Email <span className="font-normal text-[#686E75]">(optional)</span>
                        </label>
                        <input
                          id="demo-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@company.com"
                          className="w-full rounded-md border border-[#CFDBF9] bg-white px-3 py-2.5 text-sm
                                    text-[#040D19] placeholder:text-[#9CA3AF]
                                    focus:border-[#2962FF] focus:outline-none focus:ring-2 focus:ring-[#2962FF]"
                        />
                      </div>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end">
                        <div className="flex-1">
                          <label
                            htmlFor="demo-otp"
                            className="mb-1.5 block text-xs font-medium text-[#040D19]"
                          >
                            Verification code
                          </label>
                          <input
                            id="demo-otp"
                            type="text"
                            inputMode="numeric"
                            value={validationCode}
                            onChange={(e) => setValidationCode(e.target.value)}
                            placeholder="Enter the SMS code"
                            className="w-full rounded-md border border-[#CFDBF9] bg-white px-3 py-2.5 text-sm
                                      text-[#040D19] placeholder:text-[#9CA3AF]
                                      focus:border-[#2962FF] focus:outline-none focus:ring-2 focus:ring-[#2962FF]"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isVerifying}
                          className="inline-flex h-[44px] min-w-[220px] items-center justify-center
                                    rounded-full bg-[#2962FF] px-4 text-xs font-semibold uppercase
                                    tracking-wide text-white shadow-sm transition
                                    hover:bg-[#2f6dff] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {isVerifying ? "Verifying..." : "Verify & start call"}
                        </button>
                      </div>

                      {(statusMessage || errorMessage) && (
                        <div
                          className={`mt-4 rounded-md border px-4 py-3 text-sm ${
                            statusMessage
                              ? "border-[#A7F3D0] bg-[#ECFDF5] text-[#065F46]"
                              : "border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]"
                          }`}
                        >
                          {statusMessage || errorMessage}
                        </div>
                      )}
                    </form>

              )}
            </div>

            <aside className="lg:col-span-2">
              <div className="h-full rounded-[18px] border border-[#E1E7FF] bg-gradient-to-b from-white to-[#F4F7FF] p-6 sm:p-7">
                <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#686E75]">
                  How it works
                </p>
                <ol className="mt-4 space-y-3 text-[14px] leading-[20px] text-[#040D19]">
                  <li>
                    <span className="font-semibold text-[#2962FF]">1.</span>{" "}
                    Enter your details and phone number.
                  </li>
                  <li>
                    <span className="font-semibold text-[#2962FF]">2.</span>{" "}
                    Tap <span className="font-semibold">Send code</span> to receive an OTP.
                  </li>
                  <li>
                    <span className="font-semibold text-[#2962FF]">3.</span>{" "}
                    Enter the OTP, then tap{" "}
                    <span className="font-semibold">Verify & start call</span>.
                  </li>
                  <li>
                    <span className="font-semibold text-[#2962FF]">4.</span>{" "}
                    Vindy calls the same number you verified.
                  </li>
                </ol>

                <div className="mt-6 rounded-[12px] bg-[#F0F5FB] p-4">
                  <p className="text-[12px] font-medium text-[#686E75]">
                    Phone match
                  </p>
                  <p className="mt-1 text-[13px] text-[#040D19]">
                    The OTP and call are tied to:
                  </p>
                  <p className="mt-1 font-semibold text-[#040D19]">
                    {normalizedPhone ||
                      (phoneLocal.trim() && buildNormalizedPhone(phoneLocal)) ||
                      "—"}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
