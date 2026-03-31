import SectionReveal from "./SectionReveal";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const features = [
  {
    title: "Тактильность",
    text: "Мягкая, объемная обложка из плотного хлопка (включая фактурный японский хлопок)."
  },
  {
    title: "Сложный декор",
    text: "Сочетание многослойного кружева, рюш и центрального медальона (броши) с ручной вышивкой."
  },
  {
    title: "Тонирование",
    text: "Использование страниц, окрашенных вручную натуральными компонентами (кофе, чай, лепестки роз)."
  }
];

export default function StyleFeatures() {
  return (
    <SectionReveal className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
      <div className="rounded-[2.2rem] border border-[#d6c5b5] bg-[#f8f3ec]/95 p-7 md:p-11">
        <SectionTitle
          eyebrow="Особенности авторского стиля"
          title="Особенности авторского стиля"
        />
        <div className="grid gap-5 md:grid-cols-3 md:grid-rows-[auto_auto]">
          <article className="rounded-[1.7rem] border border-[#d3c1b0] bg-[#f4ebe0] p-6 md:col-span-2 md:row-span-2">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#8e7767]">
              Изделия Аллы Таскаевой
            </p>
            <h3 className="mb-3 font-display text-5xl leading-none text-[#5e4a3f] md:text-6xl">
              {features[0].title}
            </h3>
            <p className="max-w-xl text-lg leading-relaxed text-[#5f4f47]">
              {features[0].text}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#d2bfad]">
                <Image
                  src="/images/full/art-04.png"
                  alt="Брошь с вышивкой"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 48vw, 26vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#d2bfad]">
                <Image
                  src="/images/full/art-26.png"
                  alt="Деталь вышивки роз"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 48vw, 26vw"
                />
              </div>
            </div>
          </article>

          {features.slice(1).map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-[#d8c9ba] bg-[#fbf8f3] p-5"
            >
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#947f72]">
                Авторский признак
              </p>
              <h3 className="mb-2 font-display text-3xl text-[#5b493f]">
                {item.title}
              </h3>
              <p className="leading-relaxed text-[#62524a]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
