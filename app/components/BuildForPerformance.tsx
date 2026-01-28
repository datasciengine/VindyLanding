import Image from "next/image";

const performanceCards = [
  {
    id: 1,
    image: "/performance/performance_1.png",
    metric: "<270MS",
    title: "ULTRA-FAST RESPONSE",
    description: "Lightning-fast latency",
    bgColor: "#07077573",
  },
  {
    id: 2,
    image: "/performance/performance_2.png",
    metric: "27+",
    title: "GLOBAL REACH",
    description: "Languages supported",
    bgColor: "#03185159",
  },
  {
    id: 3,
    image: "/performance/performance_3.png",
    metric: "GDPR",
    title: "ENTERPRISE SECURITY",
    description: "Fully compliant",
    bgColor: "#07077573",
  },
  {
    id: 4,
    image: "/performance/performance_4.png",
    metric: "24/7",
    title: "CONSISTENT AVAILABLITY",
    description: "Never miss a call",
    bgColor: "#03185159",
  },
  {
    id: 5,
    image: "/performance/performance_5.png",
    metric: "HD",
    title: "CALL QUALITY",
    description: "Crystal clear voice",
    bgColor: "#07077573",
  },
  {
    id: 6,
    image: "/performance/performance_6.png",
    metric: "99.2%",
    title: "AI ACCURACY",
    description: "Intent recognition",
    bgColor: "#03185159",
  },
];

export function BuildForPerformance() {
  return (
    <section
      id="performance"
      aria-label="Build for performance"
      className="relative bg-black py-32 sm:py-40"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto text-center">
          <h2 className="text-[45px] font-bold uppercase leading-[53px] tracking-[0]  sm:text-[40px] sm:leading-[48px] lg:text-[45px] lg:leading-[53px]">
            <span className="bg-[linear-gradient(90deg,#3C95FD_10.03%,#C4E9FD_34.28%,#5462FF_72.8%,#FFFFFF_94.32%)] bg-clip-text text-transparent">
              BUILD FOR PERFORMANCE
            </span>
          </h2>
          <p className="mt-6 font-weight-400 max-w-4xl mx-auto text-[20px] leading-[150%] tracking-[0.01em] text-[#686E75] sm:text-[20px]">
            Let Vindy handle the first round of candidate screening
            Enterprise-grade technology that scales with your businesswhile you
            focus on the best talent.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1213px] grid-cols-1 gap-5 justify-items-center opacity-50 sm:grid-cols-2 lg:grid-cols-3">
          {performanceCards.map((card) => (
            <article
              key={card.id}
              className="flex h-[290px] w-full max-w-[391px] flex-col gap-3 rounded-[16px] p-[30px] backdrop-blur-[28px]"
              style={{ backgroundColor: card.bgColor }}
            >
              <div className="flex h-[80px] items-center justify-start">
                <Image
                  src={card.image}
                  alt={`Vindy ${card.title.toLowerCase()} - ${card.description}`}
                  title={`Vindy ${card.title} - ${card.description}`}
                  width={90}
                  height={90}
                  quality={85}
                  className="-ml-4 h-auto w-auto"
                />
              </div>
              <h3 className="text-[28px] font-weight-600 font-bold leading-[32px] text-[#FFFFFF] mt-2">
                {card.metric}
              </h3>
              <p className="text-[18px] leading-[22px] font-semibold uppercase tracking-[0.05em] text-[#A4BCFF]">
                {card.title}
              </p>
              <p className="border-b border-[#2962FF] w-10"></p>
              <p className="text-[14px] font-weight-400 leading-[22px] tracking-[0.05em] text-[#E6E7E8]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
