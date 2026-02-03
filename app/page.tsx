import Script from "next/script";
import { BuildForPerformance } from "./components/BuildForPerformance";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { GradientFeatureBackground } from "./components/GradientFeatureBackground";
import { Hero } from "./components/Hero";
import { HeroMetricsStrip } from "./components/HeroMetricsStrip";
import { HowToWork } from "./components/HowToWork";
import { DemoCallSection } from "./components/DemoCallSection";
import { MainHeader } from "./components/MainHeader";
import { OwnYourAI } from "./components/OwnYourAI";
import { PotentialSavings } from "./components/PotentialSavings";
import { TrustedCompaniesStrip } from "./components/TrustedCompaniesStrip";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {   
        "@type": "WebSite",
        "@id": "https://vindy.ai/#website",
        url: "https://vindy.ai",
        name: "Vindy",
        alternateName: "Vindy AI",
        description:
          "Automate your hiring process with AI-powered voice assistant",
        publisher: {
          "@type": "Organization",
          name: "Vindy",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://vindy.ai/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How quickly can I get started?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can go live in under 10 minutes. Our setup wizard guides you through connecting your phone system and customizing Vindy's responses.",
            },
          },
          {
            "@type": "Question",
            name: "What languages does Vindy support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Vindy supports over 100 languages including English, Spanish, French, German, and many more. We're constantly adding new languages based on customer demand.",
            },
          },
          {
            "@type": "Question",
            name: "Is my data secure?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, absolutely. We use enterprise-grade encryption and comply with GDPR, CCPA, and other major data protection regulations. Your data is stored securely and never shared with third parties.",
            },
          },
          {
            "@type": "Question",
            name: "Can I customize the voice and personality?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! You can customize Vindy's voice, tone, speaking style, and personality to match your brand. We offer multiple voice options and can create custom voices for enterprise customers.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-white text-slate-50">
        <MainHeader />
        <Hero />
        <HeroMetricsStrip />
        <TrustedCompaniesStrip />
        <GradientFeatureBackground />
        <BuildForPerformance />
        <HowToWork />
        <PotentialSavings />
        <DemoCallSection />
        <OwnYourAI />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
