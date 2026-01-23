import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";

export function GradientFeatureBackground() {
  return (
    <section
      id="features"
      aria-label="Vindy hiring assistant features"
      className="relative py-24 sm:py-32"
    >
      <Image
        src="/feature_3.png"
        alt="Soft gradient background with flowing lines used in Vindy features section"
        title="Vindy Features Section Background"
        fill
        priority={false}
        quality={75}
        sizes="100vw"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto text-center">
          <p className="text-[16px] font-weight-500 uppercase tracking-[0] leading-[100%] text-[#686E75]">
            Features
          </p>
          <h2 className="mt-3  text-[45px] font-extrabold uppercase leading-[53px] tracking-[0] text-[#040D19] sm:text-[40px] sm:leading-[48px] lg:text-[45px] lg:leading-[53px]">
            Streamline your hiring
          </h2>
          <p className="mt-3 text-[18px] leading-[150%] tracking-[0.01em] text-[#686E75] sm:text-[18px]">
            Let Vindy handle the first round of candidate screening while you
            focus on the best talent.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <article className="group flex flex-col rounded-[16px] border border-[#86DCBD] bg-[rgba(255,255,255,0.5)] p-8 text-center">
            <div className="mb-6 flex justify-center">
              <Image
                src="/features/feature1_1.png"
                width={160}
                height={140}
                quality={85}
                alt="Automated candidate screening illustration"
                title="Candidate Screening Feature"
                className="h-[145px] w-[145px]"
              />
            </div>
            <h3 className="text-[22px] font-semibold font-weight-600 leading-[22px] text-[#040D19] text-center tracking-[0]">
              Candidate Screening
            </h3>
            <p className="mt-3 text-[16px] font-weight-400 opacity-50 leading-[26px] text-[#4F565E]">
              Automatically screen candidates with intelligent qualifying
              questions. Filter the best talent before the interview.
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <div className="inline-flex h-[32px] w-[210px] pr-10 pl-2 items-center justify-center gap-[6px] rounded-[43px] bg-[#BEFFE8] px-3 py-1.5">
                <FaArrowCircleRight className="h-4 w-4 text-[#040D19]" />
                <span className="text-[12px] font-weight-500 font-medium uppercase text-[#07A66E]">
                  Save 15+ Hours/Week
                </span>
              </div>
            </div>
          </article>

          <article className="group flex flex-col rounded-[16px] border border-[#C0A5FF] bg-[rgba(255,255,255,0.5)] p-8 text-center">
            <div className="mb-6 flex justify-center">
              <Image
                src="/features/feature1_2.png"
                width={160}
                height={140}
                quality={85}
                alt="Salary and experience matching illustration"
                title="Salary & Experience Matching Feature"
                className="h-[145px] w-[145px]"
              />
            </div>
            <h3 className="text-[22px] font-semibold font-weight-600 leading-[22px] text-[#040D19] text-center tracking-[0]">
              Salary &amp; Experience
            </h3>
            <p className="mt-3 text-[16px] font-weight-400 opacity-50 leading-[26px] text-[#4F565E]">
              Vindy asks about salary expectations, years of experience and
              availability to ensure perfect matches.
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <div className="inline-flex h-[32px] w-[210px] pr-4 pl-2 items-center justify-center gap-[6px] rounded-[43px] bg-[#EFE6FF] px-3 py-1.5">
                <FaArrowCircleRight className="h-4 w-4 text-[#040D19]" />
                <span className="text-[12px] font-weight-500 font-medium uppercase text-[#722DDE]">
                  90% Qualification Rate
                </span>
              </div>
            </div>
          </article>

          <article className="group flex flex-col rounded-[16px] border border-[#82A3FF] bg-[rgba(255,255,255,0.5)] p-8 text-center">
            <div className="mb-6 flex justify-center">
              <Image
                src="/features/feature1_3.png"
                width={160}
                height={140}
                quality={85}
                alt="Recruiter dashboard illustration"
                title="Recruiter Dashboard Feature"
                className="h-[145px] w-[145px]"
              />
            </div>
            <h3 className="text-[22px] font-semibold font-weight-600 leading-[22px] text-[#040D19] text-center tracking-[0]">
              Recruiter Dashboard
            </h3>
            <p className="mt-3 text-[16px] font-weight-400 opacity-50 leading-[26px] text-[#4F565E]">
              Real-time analytics, candidate scoring and conversation
              transcripts all in one interface.
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <div className="inline-flex h-[32px] w-[210px] pr-10 pl-2 items-center justify-center gap-[6px] rounded-[43px] bg-[#E0E7FB] px-3 py-1.5">
                <FaArrowCircleRight className="h-4 w-4 text-[#040D19]" />
                <span className="text-[12px] font-weight-500 font-medium uppercase text-[#2962FF]">
                  Full Transparency
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

