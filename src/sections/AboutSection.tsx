export default function AboutSection() {
  return (
    <section className="bg-[#0a0f1a] py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="uppercase tracking-[0.3em] text-sm text-[#3533cd] font-semibold mb-6 block">About Us</span>
        <p className="text-2xl md:text-4xl font-bold text-white leading-snug md:leading-snug">
          From strategic intelligence to executive immersion, from partner scouting to joint venture creation, we help global innovators move beyond surface-level narratives and engage directly with the people, technologies, and opportunities shaping the future.
        </p>
        <div className="mt-12 md:mt-16 space-y-3 md:space-y-4 text-lg md:text-2xl">
          <p className="text-slate-500">— We are not a tour operator.</p>
          <p className="text-slate-500">— We are not a traditional consultancy.</p>
          <p className="text-white font-semibold">— We are your China innovation intelligence and execution partner.</p>
        </div>
      </div>
    </section>
  );
}
