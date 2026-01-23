import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Setup",
    description: "Connect your phone system and customize Vindy in minutes.",
  },
  {
    number: "02",
    title: "Activate",
    description: "Go live instantly. Vindy starts handling calls immediately.",
  },
  {
    number: "03",
    title: "Analyze",
    description: "Real-time insights and transcripts from every conversation.",
  },
  {
    number: "04",
    title: "Customize",
    description: "Fine-tune responses based on your unique needs.",
  },
];

export function HowToWork() {
  return (
    <section
      id="how-it-works"
      aria-label="How to go live in 4 simple steps"
      className="relative  py-16 sm:py-32"
    >
      <Image
        src="/vindy_background_2.png"
        alt="Soft gradient background with flowing lines"
        title="Vindy How To Work Section Background"
        fill
        priority={false}
        quality={75}
        sizes="100vw"
        className="pointer-events-none object-cover"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto text-center">
          <p className="text-[16px] font-medium uppercase leading-[100%] tracking-[0.1em] text-[#686E75]">
            How to Work
          </p>
          <h2 className="mt-3 text-[45px] font-bold uppercase leading-[53px] tracking-[0] text-[#040D19] sm:text-[40px] sm:leading-[48px] lg:text-[45px] lg:leading-[53px]">
            Go Lıve ın 4 Sımple Steps
          </h2>
          <p className="mt-3 text-[18px] leading-[150%] tracking-[0.01em] text-[#686E75] sm:text-[18px]">
            From signup to your first automated call in under 10 minutes.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1211px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="relative flex flex-col gap-2"
            >
              <p className="text-[106px] font-regular leading-[110px] font-weight-40 text-[#040D19]">
                {step.number}
              </p>
              <h3 className="text-[20px] font-weight-600 font-semibold leading-[24px] text-[#2962FF]">
                {step.title}
              </h3>
              <p className="text-[18px] font-weight-400 leading-[26px] text-[#363D47]/70 opacity-70">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
