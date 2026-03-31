import SectionReveal from "./SectionReveal";
import SectionTitle from "./SectionTitle";

const timeline = [
  {
    date: "Октябрь 2016",
    text: "В октябре 2016 года Алла Таскаева создала и представила первый авторский блокнот в мягком переплете, объединив техники картонажа, шитья и декоративного оформления страниц."
  },
  {
    date: "Декабрь 2016",
    text: "Использование декоративной броши как центрального элемента композиции."
  },
  {
    date: "Июль 2017",
    text: "Внедрение многослойных рюш по периметру обложки и использование пластиковых рам в оформлении."
  },
  {
    date: "Май 2018",
    text: "Интеграция бразильской вышивки (объемные розы в технике «рококо», в «бразильской» технике), что окончательно сформировало современный облик «стиля Таскаевой»."
  }
];

export default function Timeline() {
  return (
    <SectionReveal
      id="timeline"
      className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mb-10 max-w-3xl">
        <SectionTitle
          eyebrow="История и создание направления"
          title="История и создание направления"
        />
        <p className="leading-relaxed text-[#5c4d45]">
          В процессе развития стиля автором были внедрены ключевые элементы,
          ставшие каноническими для этого направления:
        </p>
      </div>

      <div className="relative">
        <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#ccb8a7] md:block" />
        <div className="space-y-8 md:space-y-14">
          {timeline.map((item, index) => (
            <article
              key={item.date}
              className="relative md:grid md:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] md:items-start"
            >
              <div
                className={`relative rounded-[1.75rem] border border-[#d8c7b7] bg-[#f8f2ea] p-6 shadow-soft md:p-7 ${
                  index % 2 === 0 ? "md:col-start-1" : "md:col-start-3"
                }`}
              >
                <p className="mb-2 font-display text-4xl leading-none text-[#705a4e] md:text-5xl">
                  {item.date}
                </p>
                <p className="leading-relaxed text-[#5c4d45]">{item.text}</p>
              </div>

              <div className="absolute left-[-0.38rem] top-8 h-3 w-3 rounded-full border border-[#b69b84] bg-[#f6f0e8] md:relative md:left-auto md:top-9 md:col-start-2 md:mx-auto" />
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
