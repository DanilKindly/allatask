import SectionReveal from "./SectionReveal";
import SectionTitle from "./SectionTitle";

export default function Recognition() {
  return (
    <SectionReveal className="px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1240px] rounded-[2.4rem] border border-[#d8c6b5] bg-[#f3ebe1] px-6 py-10 md:px-10 md:py-14">
        <SectionTitle
          eyebrow="Признание и выставочная деятельность"
          title="Признание и выставочная деятельность"
        />

        <div className="grid gap-x-6 gap-y-6 lg:grid-cols-12 lg:gap-x-7 lg:gap-y-7">
          <section className="space-y-4 lg:col-span-7 lg:space-y-5">
            <p className="max-w-[62ch] leading-relaxed text-[#5a4c45]">
              Алла Таскаева создала уникальную образовательную экосистему,
              стирающую географические границы.
            </p>
            <p className="max-w-[62ch] leading-relaxed text-[#5a4c45]">
              Обучение с нуля: авторская методика позволяет любому человеку,
              независимо от страны проживания и начальных навыков, достичь
              профессионального уровня.
            </p>
            <blockquote className="max-w-[46rem] rounded-3xl border border-[#cfbaa8] bg-[#f8f2ea] p-5 font-display text-[2rem] leading-[1.16] text-[#604d43] lg:max-w-[40rem] lg:p-6 lg:text-[2.15rem]">
              Имя мастера стало нарицательным. Фраза «Блокнот в стиле Таскаевой»
              сегодня является международным знаком качества и подлинности
              изделия.
            </blockquote>
          </section>

          <aside className="grid gap-4 lg:col-span-5 lg:grid-cols-2 lg:auto-rows-fr lg:gap-5">
            <article className="rounded-2xl border border-[#d4c2b1] bg-[#f9f4ed] p-5 lg:h-full">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8f7a6e]">
                Международный охват
              </p>
              <p className="mt-2 leading-relaxed text-[#5d4f47]">
                Курсы Аллы Таскаевой переведены на английский язык, что сделало
                ее школу доступной для тысяч учеников в Европе, США, Азии и
                других регионах.
              </p>
            </article>
            <article className="rounded-2xl border border-[#d4c2b1] bg-[#f9f4ed] p-5 lg:h-full">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8f7a6e]">
                Мировое сообщество
              </p>
              <p className="mt-2 leading-relaxed text-[#5d4f47]">
                Ученики Аллы по всему миру успешно развивают это направление,
                добиваясь признания на международных выставках и торговых
                площадках, работая строго по канонам «Стиля Таскаевой».
              </p>
            </article>
            <article className="rounded-[1.4rem] border border-[#d3bfad] bg-gradient-to-br from-[#f9f3ec] to-[#f4e9de] p-6 lg:col-span-2 lg:p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8f7a6e]">
                Профессиональное наследие
              </p>
              <p className="mt-3 font-display text-3xl leading-none text-[#5c4b43] md:text-[2.1rem]">
                Стиль Таскаевой
              </p>
              <p className="mt-3 leading-relaxed text-[#5d4f47]">
                Сегодня это не только авторская техника, но и устойчивая школа
                с международной репутацией, где ручная работа читается как знак
                подлинного уровня.
              </p>
              <div className="mt-5 h-px w-full bg-[#d9c7b8]" />
              <div className="mt-4 grid grid-cols-2 gap-3 text-[#5f5048]">
                <div className="rounded-xl border border-[#d9c6b6] bg-[#fbf6ef] px-3 py-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#8f7a6e]">
                    География
                  </p>
                  <p className="mt-1 text-sm">Европа, США, Азия</p>
                </div>
                <div className="rounded-xl border border-[#d9c6b6] bg-[#fbf6ef] px-3 py-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#8f7a6e]">
                    Формат
                  </p>
                  <p className="mt-1 text-sm">Обучение с нуля</p>
                </div>
              </div>
            </article>
          </aside>

          <div className="border-t border-[#d7c4b3] pt-5 text-[#5c4d45] lg:col-span-7">
            <p className="leading-relaxed">
              Творчество Аллы Таскаевой оказало значительное влияние на развитие
              современного художественного переплета в России, вдохновив множество
              последователей и мастеров.
            </p>
          </div>
          <div className="border-t border-[#d7c4b3] pt-5 text-[#5c4d45] lg:col-span-5">
            <p className="leading-relaxed">
              В 2024 году работы мастера были представлены на международной
              выставке «Искусство куклы» в Москве (Гостиный двор).
            </p>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
