import SectionReveal from "./SectionReveal";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

export default function Education() {
  return (
    <SectionReveal className="mx-auto max-w-5xl px-6 py-24 md:px-8">
      <div className="grid items-center gap-8 md:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-[#d8c6b5] bg-[#f6eee4]">
          <Image
            src="/images/full/art-32.png"
            alt="Обучающие материалы и ручная техника"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 34vw"
          />
        </div>
        <div>
          <SectionTitle
            eyebrow="Образовательная деятельность"
            title="Образовательная деятельность"
          />
          <p className="max-w-2xl text-lg leading-relaxed text-[#5d4f47]">
            Алла Таскаева является автором обучающих программ и наборов,
            позволяющих освоить технику создания текстильного блокнота «с нуля»
            лицам без предварительной подготовки в области шитья и вышивки.
          </p>
        </div>
      </div>
    </SectionReveal>
  );
}
