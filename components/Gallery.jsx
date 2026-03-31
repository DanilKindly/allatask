"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import SectionReveal from "./SectionReveal";
import SectionTitle from "./SectionTitle";

const primaryTiles = [
  {
    label: "Портрет с работой",
    src: "/images/full/art-02.png",
    featured: true,
    priority: true,
    size: "md:col-span-7 md:row-span-6",
    aspect: "aspect-[4/5] md:aspect-auto",
    objectPosition: "object-[50%_36%]"
  },
  {
    label: "Коллекционный блокнот, небесная палитра",
    src: "/images/full/art-16.png",
    size: "md:col-span-5 md:row-span-3",
    aspect: "aspect-[5/4] md:aspect-auto",
    objectPosition: "object-center"
  },
  {
    label: "Пастельная миниатюра",
    src: "/images/full/art-07.png",
    featured: true,
    size: "md:col-span-5 md:row-span-3",
    aspect: "aspect-[5/4] md:aspect-auto",
    objectPosition: "object-center"
  },
  {
    label: "Светлая серия с цветочным медальоном",
    src: "/images/full/art-23.png",
    size: "md:col-span-4 md:row-span-3",
    aspect: "aspect-[4/3] md:aspect-auto",
    objectPosition: "object-center"
  },
  {
    label: "Зеленая коллекция",
    src: "/images/full/art-20.png",
    size: "md:col-span-4 md:row-span-3",
    aspect: "aspect-[4/3] md:aspect-auto",
    objectPosition: "object-center"
  },
  {
    label: "Винтажная пластика и рюши",
    src: "/images/full/art-31.png",
    size: "md:col-span-4 md:row-span-3",
    aspect: "aspect-[4/3] md:aspect-auto",
    objectPosition: "object-center"
  },
  {
    label: "Теплый нюдовый блокнот",
    src: "/images/full/art-32.png",
    size: "md:col-span-4 md:row-span-3",
    aspect: "aspect-[4/3] md:aspect-auto",
    objectPosition: "object-center"
  }
];

const details = [
  { src: "/images/full/art-04.png", label: "Брошь с вышивкой" },
  { src: "/images/full/art-26.png", label: "Микровышивка, бутоны" },
  { src: "/images/full/art-24.png", label: "Фрагмент цветочной композиции" },
  { src: "/images/full/art-30.png", label: "Декоративный корешок" },
  { src: "/images/full/art-15.png", label: "Медальон и подвеска" },
  { src: "/images/full/art-05.png", label: "Рельеф и кружево" }
];

export default function Gallery() {
  const galleryItems = useMemo(
    () => [...primaryTiles.map((i) => ({ src: i.src, label: i.label })), ...details],
    []
  );
  const [activeIndex, setActiveIndex] = useState(-1);
  const [mounted, setMounted] = useState(false);
  const detailRailRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeIndex < 0) {
      return;
    }
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(-1);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % galleryItems.length);
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, galleryItems.length]);

  const scrollDetails = (direction) => {
    if (!detailRailRef.current) {
      return;
    }
    const amount = direction === "next" ? 340 : -340;
    detailRailRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <SectionReveal
      id="gallery"
      className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-28"
    >
      <SectionTitle
        eyebrow="Галерея работ"
        title="Кураторская подборка: форма, фактура и ручная пластика"
      />
      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#6e5f57] md:mb-10">
        Отобраны только сильные кадры с разным планом и тоном: портрет,
        коллекционные обложки и детали вышивки выстраиваются в цельную
        визуальную историю.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[88px] md:gap-5 lg:auto-rows-[102px]">
        {primaryTiles.map((item) => (
          <article
            key={item.label}
            className={`gallery-tile group relative overflow-hidden rounded-[1.45rem] ${item.size} ${item.aspect}`}
          >
            <Image
              src={item.src}
              alt={item.label}
              fill
              priority={item.priority}
              className={`cursor-zoom-in object-cover transition duration-700 group-hover:scale-[1.02] ${item.objectPosition}`}
              sizes={
                item.featured
                  ? "(max-width: 767px) 100vw, (max-width: 1024px) 70vw, 58vw"
                  : "(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 34vw"
              }
              onClick={() =>
                setActiveIndex(galleryItems.findIndex((photo) => photo.src === item.src))
              }
            />
            <div className="gallery-caption bg-gradient-to-t from-[#140f0ccc] via-[#21181480] to-transparent">
              <span className="text-[0.69rem] tracking-[0.12em] md:text-[0.72rem]">
                {item.label}
              </span>
            </div>
            {item.featured && (
              <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/75 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#5f4e46] backdrop-blur-sm">
                Кураторский акцент
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-[#8c776a]">
        <div className="h-px w-12 bg-[#cdb8a7]" />
        <p>Нажмите на изображение, чтобы открыть полноэкранный просмотр</p>
      </div>

      <div className="mt-10">
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a7468]">
            Детали и вышивка
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-full border border-[#ccb8a7] bg-[#f7f1e8] px-3 py-1 text-xs text-[#6f5d53] transition hover:bg-[#efe5da]"
              onClick={() => scrollDetails("prev")}
            >
              Назад
            </button>
            <button
              type="button"
              className="rounded-full border border-[#ccb8a7] bg-[#f7f1e8] px-3 py-1 text-xs text-[#6f5d53] transition hover:bg-[#efe5da]"
              onClick={() => scrollDetails("next")}
            >
              Далее
            </button>
          </div>
        </div>
        <div
          ref={detailRailRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
        >
          {details.map((item, idx) => (
            <article
              key={item.src}
              className="gallery-tile group relative aspect-[4/3] min-w-[230px] snap-start overflow-hidden rounded-[1.2rem] border border-[#d7c5b6] md:min-w-[270px]"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="cursor-zoom-in object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 56vw, 20vw"
                onClick={() =>
                  setActiveIndex(
                    galleryItems.findIndex((photo) => photo.src === item.src)
                  )
                }
              />
              <div className="gallery-caption">
                <span>{`Деталь ${idx + 1}`}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {mounted && activeIndex >= 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/78 px-4 py-6 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setActiveIndex(-1);
            }
          }}
        >
          <button
            type="button"
            className="absolute right-5 top-5 rounded-full border border-white/40 bg-white/10 px-3 py-1 text-sm text-white transition hover:bg-white/20"
            onClick={() => setActiveIndex(-1)}
          >
            Закрыть
          </button>

          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/20"
            onClick={() =>
              setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
            }
          >
            ←
          </button>

          <div className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
            <Image
              src={galleryItems[activeIndex].src}
              alt={galleryItems[activeIndex].label}
              fill
              className="object-contain bg-[#161210]"
              sizes="100vw"
              priority
            />
          </div>

          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/20"
            onClick={() => setActiveIndex((prev) => (prev + 1) % galleryItems.length)}
          >
            →
          </button>
        </div>
      )}
    </SectionReveal>
  );
}
