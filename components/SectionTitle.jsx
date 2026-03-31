export default function SectionTitle({ eyebrow, title }) {
  return (
    <header className="mb-8 md:mb-12">
      <p className="mb-3 text-[0.66rem] uppercase tracking-[0.28em] text-taupe/80">
        {eyebrow}
      </p>
      <h2 className="max-w-4xl font-display text-4xl leading-[1.03] text-ink sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </header>
  );
}
