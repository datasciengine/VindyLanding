"use client";

import Image from "next/image";
import { RiVoiceAiLine } from "react-icons/ri";
import { trackCTAClick } from "../lib/gtm";

export function Hero() {
  const handleCTAClick = () => {
    trackCTAClick("Talk to Vindy", "talk_to_vindy_section", "#demo");
  };
  return (
    <section
      id="hero"
      className="relative flex min-h-[100vh] items-start justify-center overflow-hidden bg-black pt-24 sm:pt-28"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/vindy_hero_section_1.png"
        alt="Abstract blue AI waveform background used by Vindy"
        title="Vindy AI Voice Assistant Background"
        fill
        priority
        fetchPriority="high"
        quality={75}
        sizes="100vw"
        className="pointer-events-none object-cover"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[260px] bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <div className="-mt-10 mb-4 flex w-full justify-center sm:-mt-16 sm:mb-6">
          <div className="relative h-[290px] w-full max-w-[90%] sm:h-[280px] sm:max-w-[600px] lg:h-[370px] lg:max-w-[751px]">
            <Image
              src="/vindy_hero_section.gif"
              alt="Animated AI waveform representing Vindy voice assistant"
              title="Vindy AI Voice Assistant Animation"
              fill
              priority
              fetchPriority="high"
              unoptimized={true}
              className="h-full w-full object-contain"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 600px, 751px"
            />
          </div>
        </div>

        <p className="mb-6 inline-flex items-center gap-2 rounded-[43px] border border-[#1D2530] bg-[#1C1D26] px-[12px] py-[6px] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#BD97FF]">
          <RiVoiceAiLine aria-hidden="true" className="h-4 w-4" />
          AI-powered voice assistant
        </p>

        <div className="relative flex w-full flex-col items-center space-y-[28px]">
          <p className="mb-1 text-[24px] font-bold leading-[30px] text-white sm:text-[26px]">
            Meet Vindy
          </p>

          <h1
            id="hero-heading"
            className="mb-4 text-balance bg-[linear-gradient(90deg,#3C95FD_10.03%,#C4E9FD_34.28%,#5462FF_72.8%,#FFFFFF_94.32%)] bg-clip-text text-[32px] font-bold uppercase leading-[38px] tracking-[0] text-transparent sm:text-[40px] sm:leading-[44px] lg:text-[48px] lg:leading-[53px]"
          >
            Your AI Voice Assistant
          </h1>

          <p className="mb-5 max-w-xl rounded-[6px] px-4 py-3 text-[15px] font-normal leading-[150%] tracking-[0.01em] text-slate-100 sm:text-[16px]">
            Automate calls, qualify leads, and never miss an opportunity. Vindy
            handles conversations so you can focus on what matters.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#demo"
              onClick={handleCTAClick}
              className="inline-flex items-center justify-center min-h-[48px] min-w-[48px] rounded-[6px] bg-[#2962FF] px-[28px] py-[12px] text-xs font-semibold uppercase text-white sm:px-[35px] sm:py-[14px] touch-manipulation"
            >
              <RiVoiceAiLine aria-hidden="true" className="mr-2 h-4 w-4" />
              Talk to Vindy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

