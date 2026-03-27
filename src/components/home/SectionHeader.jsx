const SectionHeader = ({ eyebrow, title }) => (
  <div className="mb-10">
    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--accent)]">
      {eyebrow}
    </p>
    <h2 className="mt-3 font-sans text-4xl font-bold tracking-tight md:text-6xl">
      {title}
    </h2>
  </div>
);

export default SectionHeader;
