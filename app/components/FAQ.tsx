"use client";

import { useState } from "react";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";

const faqItems = [
  {
    id: 1,
    question: "How quickly can I get started?",
    answer:
      "You can go live in under 10 minutes. Our setup wizard guides you through connecting your phone system and customizing Vindy's responses.",
    isOpen: true,
  },
  {
    id: 2,
    question: "What languages does Vindy support?",
    answer:
      "Vindy supports over 100 languages including English, Spanish, French, German, and many more. We're constantly adding new languages based on customer demand.",
    isOpen: false,
  },
  {
    id: 3,
    question: "Is my data secure?",
    answer:
      "Yes, absolutely. We use enterprise-grade encryption and comply with GDPR, CCPA, and other major data protection regulations. Your data is stored securely and never shared with third parties.",
    isOpen: false,
  },
  {
    id: 4,
    question: "Can I customize the voice and personality?",
    answer:
      "Yes! You can customize Vindy's voice, tone, speaking style, and personality to match your brand. We offer multiple voice options and can create custom voices for enterprise customers.",
    isOpen: false,
  },
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="bg-[#F0F5FB] py-16 sm:py-32"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-[45px] font-bold uppercase leading-[53px] tracking-[0] text-[#040D19] sm:text-[36px] sm:leading-[44px] lg:text-[40px] lg:leading-[48px]">
            Frequently Asked Questıons
          </h2>
          <p className="mt-3 text-[18px] leading-[150%] tracking-[0.01em] text-[#686E75]/70 opacity-70 sm:text-[18px]">
            Everything you need to know about Vindy
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqItems.map((item) => {
            const isOpen = openItems.includes(item.id);
            return (
              <div
                key={item.id}
                className={`rounded-[14px] border border-[#2962FF] bg-[#FFFFFF] p-[22px] ${
                  isOpen
                    ? "border-[#2962FF]"
                    : "border-[#E6E7E8] hover:border-[#2962FF]"
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-[16px] font-semibold leading-[150%] tracking-[0.01em] text-[#040D19] sm:text-[18px]">
                    {item.question}
                  </h3>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen
                        ? "bg-[#2962FF] text-white"
                        : "bg-[#E6E7E8]/50 text-[#2962FF]"
                    }`}
                  >
                    {isOpen ? (
                      <RiArrowDownSLine className="h-5 w-5" />
                    ) : (
                      <RiArrowRightSLine className="h-5 w-5" />
                    )}
                  </div>
                </button>
                {isOpen && (
                  <p className="mt-4 text-[14px] leading-[30px] tracking-[0.01em] text-[#686E75]/80 opacity-80 sm:text-[15px]">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
