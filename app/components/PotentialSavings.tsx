import { FaClock, FaLightbulb , FaCalculator } from "react-icons/fa";

const savingsData = [
  { label: "Average calls/ month", value: "2,400" },
  { label: "Hours saved monthly", value: "160+" },
  { label: "Savings per call", value: "$0.80" },
  { label: "Estimated yearly savings", value: "$23,040+", isBold: true },
];

export function PotentialSavings() {
  return (
    <section
      id="savings"
      aria-label="See your potential savings"
      className="bg-white py-16 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center">
            <button className="inline-flex items-center gap-2 rounded-[43px] bg-[#EFE6FF] px-4 py-2 text-[12px] font-medium uppercase tracking-[0.05em] text-[#722DDE]">
              <FaCalculator className="h-5 w-5 text-[#722DDE]" />
              <span className="text-[12px] font-medium  leading-[20px] font-weight-500 uppercase tracking-[0.05em] text-[#722DDE]">ROI CALCULATOR</span>
            </button>
          </div>

          <h2 className="text-[45px] font-bold uppercase leading-[53px] tracking-[0] text-[#040D19] sm:text-[40px] sm:leading-[48px] lg:text-[45px] lg:leading-[53px]">
            See Your Potental Savıngs
          </h2>
        </div>

        <div className="mx-auto max-w-[1000px] text-center">
          <p className="mt-4 text-[18px] leading-[150%] tracking-[0.01em] text-[#686E75] sm:text-[18px]">
            Companies using Vindy save an average of{" "}
            <span className="font-bold text-[#2962FF]">40+ hours</span> per week
            on call handling and candidate screening. That&apos;s time your team
            can spend on what really matters.
          </p>
        </div>

        <div className="mx-auto max-w-3xl text-center">

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-[8px] bg-[#B9E2FF] px-4 py-2.5">
              <FaClock className="h-5 w-5 text-[#1549D6]" />
              <span className="text-[14px] leading-[20px] tracking-[0.05em] font-weight-500 font-medium text-[#1549D6]">
                40+ HRS SAVED/WEEK
              </span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-[8px] bg-[#BEFFE8] px-4 py-2.5">
              <FaLightbulb className="h-5 w-5 text-[#07A66E]" />
              <span className="text-[14px] leading-[20px] tracking-[0.05em] font-weight-500 font-medium text-[#07A66E]">
                3X FASTER HIRING
              </span>
            </div>
          </div>

          <div className="mt-8 rounded-[16px] border border-[#CFDBF9] max-w-[540px] mx-auto bg-[#F0F5FB] p-[22px] text-left">
            <div className="space-y-4 w-full">
              {savingsData.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between ${
                    item.isBold ? "border-t border-[#CFDBF9] pt-4" : ""
                  }`}
                >
                  <span
                    className={`text-[16px] font-weight-400 leading-[150%] tracking-[0.01em] text-[#686E75] ${
                      item.isBold
                        ? "font-bold font-weight-700 text-[18px] text-[#1D2530]"
                        : ""
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`font-weight-600 leading-[150%] tracking-[0.01em] ${
                      item.isBold
                        ? "text-[22px] font-bold font-weight-700 text-[#2962FF]"
                        : "text-[18px] leading-[150%] tracking-[0.01em] text-[#0735B5]"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
