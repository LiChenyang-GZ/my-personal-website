const TickerBar = ({ tickerSkills }) => (
  <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-black/5 bg-[rgba(248,241,232,0.94)] backdrop-blur-xl">
    <div className="overflow-hidden">
      <div className="inline-flex min-w-max animate-ticker-slow">
        {[...tickerSkills, ...tickerSkills, ...tickerSkills].map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="px-5 py-4 text-[0.95rem] font-bold tracking-[0.04em] text-[rgba(31,27,24,0.78)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default TickerBar;
