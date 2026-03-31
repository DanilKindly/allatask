import SectionReveal from "./SectionReveal";

const kinds = ["Вышивка", "Дизайн", "Шитье", "Переплетное дело"];

export default function CreativityKinds() {
  return (
    <SectionReveal className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-28">
      <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#8b776a]">
        Виды творчества
      </p>
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-8">
        {kinds.map((item) => (
          <li
            key={item}
            className="group flex items-center gap-6"
          >
            <span className="font-display text-5xl leading-none text-[#5d4c43] transition-colors duration-300 group-hover:text-[#8a6f5f] md:text-6xl">
              {item}
            </span>
            <span className="hidden h-px w-12 bg-[#cfbba9] last:hidden md:block" />
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}
