"use client";

const BRANDS = [
  "GlobalHR",
  "ScaleUp",
  "Nexus",
  "Vertex",
  "Quantum",
  "Innovate",
  "Apex",
  "TechCorp",
];

export function TrustedCompaniesStrip() {
  const brandList = [...BRANDS, ...BRANDS];

  return (
    <section
      aria-label="Trusted by leading companies"
      className="relative overflow-hidden border-y border-[#E6E7E8] bg-[#F5F6F7] py-8 md:py-10 "
    >
      <div className="flex w-max animate-trusted-marquee gap-12 md:gap-16 lg:gap-20 px-4 md:px-6">
        {brandList.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="shrink-0 text-2xl font-semibold tracking-tight text-[#686E75] md:text-2xl lg:text-3xl whitespace-nowrap"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
