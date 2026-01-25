import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";

export function OwnYourAI() {
  return (
    <section
      id="cta"
      aria-label="Own your AI, don't rent it"
      className="relative overflow-hidden bg-[#0a0a1a] py-24 sm:py-32"
    >
      <Image
        src="/vindy_background_3.png"
        alt="Dark blue gradient background with stars"
        title="Vindy CTA Section Background"
        fill
        priority={true}
        fetchPriority="high"
        quality={75}
        sizes="100vw"
        className="pointer-events-none object-cover"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="relative mx-auto min-h-[361px] w-full max-w-[1170px] rounded-[22px] border border-[#2962FF] bg-black p-6 text-center sm:p-12">
          <p className="text-[14px] font-medium uppercase tracking-[0.1em] text-slate-300">
            Get Started
          </p>
          <h2 className="mt-4 bg-[linear-gradient(90deg,#3C95FD_10.03%,#C4E9FD_34.28%,#5462FF_72.8%,#FFFFFF_94.32%)] bg-clip-text text-[32px] font-bold uppercase leading-[38px] tracking-[0] text-transparent sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[53px]">
            Own Your AI, Don&apos;t Rent It
          </h2>

          <div className="relative mx-auto mt-4 max-w-2xl">
            <div className="pointer-events-none absolute -left-[140px] top-0 hidden rotate-[-7.68deg] lg:block">
              <Image
                src="/robot.png"
                alt="Vindy AI robot character"
                title="Vindy AI Robot Character"
                width={126}
                height={126}
                quality={85}
                priority={true}
                fetchPriority="high"
                className="h-[125.54px] w-[126.06px]"
              />
            </div>
            <p className="text-[16px] leading-[150%] tracking-[0.01em] text-[#E6E7E8] opacity-70 sm:text-[18px]">
              Unlike traditional call centers, Vindy learns and adapts to your
              business. Get started today and see the difference AI-powered calling
              can make.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              id="cta-start-free-trial"
              href="#demo"
              className="inline-flex items-center justify-center min-h-[48px] min-w-[48px] gap-2 rounded-lg bg-[#2962FF] px-6 py-3 text-[14px] font-medium uppercase text-white shadow-lg transition hover:bg-[#2f6dff] sm:px-8 touch-manipulation"
            >
              Start Free Trial
              <RiArrowRightLine className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
