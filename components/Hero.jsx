import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-8 md:pt-10">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <nav className="mb-14 flex flex-wrap items-center justify-between gap-4 text-sm text-taupe md:mb-20">
          <a href="#top" className="font-display text-3xl leading-none text-ink">
            Алла Таскаева
          </a>
          <div className="flex flex-wrap gap-5 text-[0.78rem] uppercase tracking-[0.18em] text-[#75665e]">
            <a href="#about">О мастере</a>
            <a href="#timeline">История</a>
            <a href="#gallery">Галерея</a>
          </div>
        </nav>

        <div className="grid items-start gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="pt-2">
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-taupe/80">
              О мастере
            </p>
            <h1 className="mb-7 max-w-xl font-display text-6xl leading-[0.92] text-ink sm:text-7xl md:text-8xl">
              Алла Таскаева
            </h1>
            <p className="mb-7 max-w-xl text-lg leading-relaxed text-[#4f413a] md:text-xl">
              Российский художник-прикладник, мастер художественного переплета и
              авторской вышивки.
            </p>
            <p className="max-w-2xl leading-relaxed text-[#66554e]">
              Основоположница и популяризатор направления текстильных блокнотов
              с объемной вышивкой, известных как «пухляши». В профессиональной
              среде и среди коллекционеров это направление закрепилось как
              «Стиль Таскаевой».
            </p>
            <div className="mt-10 hidden items-center gap-4 lg:flex">
              <div className="h-px w-16 bg-[#cdb9a7]" />
              <p className="text-xs uppercase tracking-[0.2em] text-[#8a766a]">
                Стиль Таскаевой
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="hero-photo group relative min-h-[410px] rounded-[1.9rem] sm:row-span-2">
              <Image
                src="/images/hero-main.png"
                alt="Текстильный блокнот в стиле Таскаевой"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="photo-label">Главная работа</div>
            </div>
            <div className="hero-photo group relative min-h-[195px] rounded-[1.4rem]">
              <Image
                src="/images/portrait-01.png"
                alt="Портрет Аллы Таскаевой"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 20vw"
              />
              <div className="photo-label">Портрет мастера</div>
            </div>
            <div className="hero-photo group relative min-h-[195px] rounded-[1.4rem]">
              <Image
                src="/images/hero-detail.png"
                alt="Фрагмент объемной вышивки"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 20vw"
              />
              <div className="photo-label">Фрагмент вышивки</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
