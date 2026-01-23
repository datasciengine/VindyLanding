import Image from "next/image";

export function TrustedCompaniesStrip() {
  return (
    <section
      aria-label="Trusted by leading companies"
    >
      <Image
        src="/trusted_background.png"
        alt="Muted logo strip showing companies that trust Vindy"
        title="Companies That Trust Vindy"
        width={1920}
        height={160}
        quality={75}
        className="block h-auto w-full object-contain"
        priority={false}
        sizes="100vw"
      />
    </section>
  );
}

