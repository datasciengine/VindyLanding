export function HeroMetricsStrip() {
  return (
    <section
      aria-label="Vindy platform metrics"
      className="border-y border-[rgba(230,231,232)] bg-white"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 px-6  text-center text-slate-50 sm:grid-cols-3 lg:px-10">
        <div className="relative px-13 py-13 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-[90%] after:-translate-x-1/2 after:bg-[#E6E7E8] sm:after:bottom-auto sm:after:right-0 sm:after:top-[5%] sm:after:h-[90%] sm:after:w-px sm:after:translate-y-0 sm:after:translate-x-0 sm:after:left-auto last:after:hidden">
          <p className="text-[16px] leading-[20px] font-weight-500 tracking-[0.01em] text-[#2962FF]">
            Response Time
          </p>
          <p className="mt-2 text-[67px] leading-[100%] font-bold text-[#040D19]">270 ms</p>
        </div>
        <div className="relative px-13 py-13 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-[90%] after:-translate-x-1/2 after:bg-[#E6E7E8] sm:after:bottom-auto sm:after:right-0 sm:after:top-[5%] sm:after:h-[90%] sm:after:w-px sm:after:translate-y-0 sm:after:translate-x-0 sm:after:left-auto last:after:hidden">
          <p className="text-[16px] leading-[20px] font-weight-500 tracking-[0.01em] text-[#2962FF]">
            Languages
          </p>
          <p className="mt-2 text-[67px] leading-[100%] font-bold text-[#040D19]">27+</p>
        </div>
        <div className="relative px-13 py-13 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-[90%] after:-translate-x-1/2 after:bg-[#E6E7E8] sm:after:bottom-auto sm:after:right-0 sm:after:top-[5%] sm:after:h-[90%] sm:after:w-px sm:after:translate-y-0 sm:after:translate-x-0 sm:after:left-auto last:after:hidden">
          <p className="text-[16px] leading-[20px] font-weight-500 tracking-[0.01em] text-[#2962FF]">
            Uptime
          </p>
          <p className="mt-2 text-[67px] leading-[100%] font-bold text-[#040D19]">100%</p>
        </div>
      </div>
    </section>
  );
}

