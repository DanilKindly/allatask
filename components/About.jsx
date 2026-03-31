import SectionTitle from "./SectionTitle";
import SectionReveal from "./SectionReveal";
import Image from "next/image";

export default function About() {
  return (
    <SectionReveal id="about" className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <SectionTitle
            eyebrow="О мастере"
            title="А́лла Таска́ева — российский художник-прикладник, мастер художественного переплета и авторской вышивки"
          />
          <p className="max-w-2xl text-lg leading-relaxed text-[#54463f]">
            Основоположница и популяризатор направления текстильных блокнотов с
            объемной вышивкой, известных как «пухляши».
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-[#62534b]">
            В профессиональной среде и среди коллекционеров данное направление
            закрепилось под названием «Стиль Таскаевой».
          </p>
        </div>

        <aside className="space-y-4 lg:pt-20">
          <blockquote className="rounded-[2rem] border border-[#d7c6b6] bg-[#f8f2e9] p-7 font-display text-3xl leading-tight text-[#624f45] md:text-4xl">
            «Блокнот в стиле Таскаевой» сегодня является международным знаком
            качества и подлинности изделия.
          </blockquote>
          <div className="grid grid-cols-[1fr_auto] items-stretch gap-4">
            <div className="relative min-h-[210px] overflow-hidden rounded-[1.5rem] border border-[#d9c8b8]">
              <Image
                src="/images/full/art-03.png"
                alt="Портрет Аллы Таскаевой"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 24vw"
              />
            </div>
            <div className="flex w-10 flex-col items-center justify-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#8a7569]">
              <span className="h-14 w-px bg-[#ccb7a5]" />
              <span className="[writing-mode:vertical-rl]">мастер</span>
              <span className="h-14 w-px bg-[#ccb7a5]" />
            </div>
          </div>
        </aside>
      </div>
    </SectionReveal>
  );
}
