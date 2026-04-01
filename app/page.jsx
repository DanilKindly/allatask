"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const content = {
  en: {
    brand: "Alla Taskaeva",
    nav: [
      { id: "intro", label: "Intro" },
      { id: "about", label: "About" },
      { id: "history", label: "History" },
      { id: "features", label: "Features" },
      { id: "gallery", label: "Gallery" },
      { id: "recognition", label: "Recognition" },
      { id: "education", label: "Education" }
    ],
    intro: {
      kicker: "Biographical archive page",
      title: "Alla Taskaeva",
      subtitle:
        "Russian applied artist, master of authorial textile bookbinding and embroidery.",
      text:
        "Founder and key popularizer of textile notebooks with dimensional embroidery, widely known among collectors and professionals as the Taskaeva style."
    },
    about: {
      kicker: "About the master",
      title: "About the master",
      paragraphs: [
        "Alla Taskaeva developed an authorial language where textile binding, decorative composition, and embroidery are united into one coherent craft approach.",
        "Her works are recognizable for soft tactile covers, layered construction, and carefully built ornamental centers.",
        "In the professional community, the phrase “a notebook in the Taskaeva style” is now associated with quality and authenticity."
      ]
    },
    history: {
      kicker: "History and development",
      title: "History and creation of the direction",
      intro:
        "Key milestones that formed the visual and technical basis of the style:",
      items: [
        {
          date: "October 2016",
          title: "First authorial notebook",
          text:
            "The first textile notebook in a soft binding was presented, combining cartonnage, sewing, and decorative page design.",
          image: "/images/full/art-02.png"
        },
        {
          date: "December 2016",
          title: "Decorative brooch as center",
          text:
            "A decorative brooch became a compositional center, defining the structure of the cover’s visual rhythm.",
          image: "/images/full/art-04.png"
        },
        {
          date: "July 2017",
          title: "Layered trim and framing",
          text:
            "Multi-layer ruffles and frame elements were integrated into covers, strengthening volume and tactile complexity.",
          image: "/images/full/art-31.png"
        },
        {
          date: "May 2018",
          title: "Brazilian embroidery integration",
          text:
            "Brazilian embroidery and dimensional floral techniques finalized the mature form of the Taskaeva style.",
          image: "/images/full/art-26.png"
        }
      ]
    },
    features: {
      kicker: "Authorial style",
      title: "Features of the style",
      items: [
        {
          title: "Tactility",
          text:
            "Soft dimensional cover made from dense textile materials, including textured cotton fabrics."
        },
        {
          title: "Complex decor",
          text:
            "Layered lace, ruffles, and a central embroidered medallion form the core composition."
        },
        {
          title: "Toned pages",
          text:
            "Pages are often toned by hand with natural components such as tea, coffee, and floral infusions."
        },
        {
          title: "Hand craftsmanship",
          text:
            "Every object is assembled manually, preserving a distinct artisan character in structure and details."
        }
      ]
    },
    gallery: {
      kicker: "Gallery",
      title: "Curated selection",
      note: "Click an image to view it larger.",
      images: [
        "/images/full/art-16.png",
        "/images/full/art-07.png",
        "/images/full/art-23.png",
        "/images/full/art-20.png",
        "/images/full/art-32.png",
        "/images/full/art-33.png",
        "/images/full/art-24.png",
        "/images/full/art-15.png",
        "/images/full/art-30.png"
      ]
    },
    details: {
      kicker: "Details and embroidery",
      title: "Details and embroidery",
      images: [
        "/images/full/art-04.png",
        "/images/full/art-26.png",
        "/images/full/art-05.png",
        "/images/full/art-14.png",
        "/images/full/art-21.png",
        "/images/full/art-27.png"
      ]
    },
    recognition: {
      kicker: "Recognition and exhibition activity",
      title: "Recognition and exhibition activity",
      paragraphs: [
        "Alla Taskaeva created an educational ecosystem that removes geographic boundaries and makes the craft accessible from entry level to professional practice.",
        "Her educational materials were translated into English, which opened access to students in Europe, the USA, Asia, and other regions.",
        "In 2024, her works were presented at the international exhibition “Art of Dolls” in Moscow (Gostiny Dvor)."
      ],
      points: [
        {
          title: "International reach",
          text:
            "Students from different countries study and practice the method in a consistent authorial framework."
        },
        {
          title: "Professional community",
          text:
            "The direction has become visible in exhibitions, collector circles, and applied art communities."
        },
        {
          title: "Professional legacy",
          text:
            "The phrase “Taskaeva style” now functions as a recognizable quality marker."
        }
      ]
    },
    education: {
      kicker: "Educational activity",
      title: "Educational activity",
      text:
        "Alla Taskaeva is the author of educational programs and kits that allow people with no previous experience in sewing and embroidery to master the full notebook-making process.",
      kindsTitle: "Fields of creativity",
      kinds: ["Embroidery", "Design", "Sewing", "Bookbinding"]
    },
    footer: {
      line: "Alla Taskaeva · Authorial textile bookbinding and embroidery",
      contacts: "Contacts"
    },
    ui: {
      language: "Language",
      close: "Close",
      prev: "Previous",
      next: "Next"
    }
  },
  ru: {
    brand: "Алла Таскаева",
    nav: [
      { id: "intro", label: "Вступление" },
      { id: "about", label: "О мастере" },
      { id: "history", label: "История" },
      { id: "features", label: "Особенности" },
      { id: "gallery", label: "Галерея" },
      { id: "recognition", label: "Признание" },
      { id: "education", label: "Обучение" }
    ],
    intro: {
      kicker: "Биографическая архивная страница",
      title: "Алла Таскаева",
      subtitle:
        "Российский художник-прикладник, мастер авторского текстильного переплета и вышивки.",
      text:
        "Основоположница и ключевой популяризатор направления текстильных блокнотов с объемной вышивкой, известного как «стиль Таскаевой»."
    },
    about: {
      kicker: "О мастере",
      title: "О мастере",
      paragraphs: [
        "Алла Таскаева сформировала авторский язык, в котором текстильный переплет, декоративная композиция и вышивка объединены в цельную ремесленную систему.",
        "Ее работы узнаваемы по мягкой тактильной обложке, многослойной конструкции и тщательно выстроенному центру декора.",
        "В профессиональной среде выражение «блокнот в стиле Таскаевой» стало знаком качества и подлинности изделия."
      ]
    },
    history: {
      kicker: "История и развитие",
      title: "История и создание направления",
      intro:
        "Ключевые этапы, сформировавшие визуальную и техническую основу стиля:",
      items: [
        {
          date: "Октябрь 2016",
          title: "Первый авторский блокнот",
          text:
            "Представлен первый текстильный блокнот в мягком переплете, объединяющий техники картонажа, шитья и декоративного оформления страниц.",
          image: "/images/full/art-02.png"
        },
        {
          date: "Декабрь 2016",
          title: "Брошь как композиционный центр",
          text:
            "Декоративная брошь стала центральным элементом композиции и задала ритм оформления обложки.",
          image: "/images/full/art-04.png"
        },
        {
          date: "Июль 2017",
          title: "Многослойный декор",
          text:
            "В оформление внедрены многослойные рюши и рамочные элементы, усилившие объем и фактурность изделий.",
          image: "/images/full/art-31.png"
        },
        {
          date: "Май 2018",
          title: "Интеграция бразильской вышивки",
          text:
            "Использование бразильской и объемной цветочной вышивки окончательно сформировало зрелый облик «стиля Таскаевой».",
          image: "/images/full/art-26.png"
        }
      ]
    },
    features: {
      kicker: "Авторский стиль",
      title: "Особенности авторского стиля",
      items: [
        {
          title: "Тактильность",
          text:
            "Мягкая объемная обложка из плотных текстильных материалов, включая фактурный хлопок."
        },
        {
          title: "Сложный декор",
          text:
            "Многослойное кружево, рюши и центральный вышитый медальон формируют композиционный центр."
        },
        {
          title: "Тонированные страницы",
          text:
            "Страницы часто окрашиваются вручную натуральными компонентами: чаем, кофе и цветочными настоями."
        },
        {
          title: "Ручная сборка",
          text:
            "Каждое изделие собирается вручную, сохраняя ремесленный характер конструкции и деталей."
        }
      ]
    },
    gallery: {
      kicker: "Галерея",
      title: "Кураторская подборка",
      note: "Нажмите на изображение, чтобы открыть крупный просмотр.",
      images: [
        "/images/full/art-16.png",
        "/images/full/art-07.png",
        "/images/full/art-23.png",
        "/images/full/art-20.png",
        "/images/full/art-32.png",
        "/images/full/art-33.png",
        "/images/full/art-24.png",
        "/images/full/art-15.png",
        "/images/full/art-30.png"
      ]
    },
    details: {
      kicker: "Детали и вышивка",
      title: "Детали и вышивка",
      images: [
        "/images/full/art-04.png",
        "/images/full/art-26.png",
        "/images/full/art-05.png",
        "/images/full/art-14.png",
        "/images/full/art-21.png",
        "/images/full/art-27.png"
      ]
    },
    recognition: {
      kicker: "Признание и выставочная деятельность",
      title: "Признание и выставочная деятельность",
      paragraphs: [
        "Алла Таскаева создала образовательную систему, которая снимает географические границы и делает ремесло доступным от начального уровня до профессиональной практики.",
        "Обучающие материалы переведены на английский язык, благодаря чему школа стала доступна ученикам в Европе, США, Азии и других регионах.",
        "В 2024 году работы мастера были представлены на международной выставке «Искусство куклы» в Москве (Гостиный двор)."
      ],
      points: [
        {
          title: "Международный охват",
          text:
            "Ученики из разных стран обучаются и развивают направление в единой авторской системе."
        },
        {
          title: "Профессиональное сообщество",
          text:
            "Направление активно представлено на выставках, в коллекционерской среде и в сообществах прикладного искусства."
        },
        {
          title: "Профессиональное наследие",
          text:
            "Фраза «стиль Таскаевой» закрепилась как узнаваемый маркер качества."
        }
      ]
    },
    education: {
      kicker: "Образовательная деятельность",
      title: "Образовательная деятельность",
      text:
        "Алла Таскаева — автор обучающих программ и наборов, позволяющих освоить технику создания текстильного блокнота с нуля людям без предварительной подготовки в шитье и вышивке.",
      kindsTitle: "Виды творчества",
      kinds: ["Вышивка", "Дизайн", "Шитье", "Переплетное дело"]
    },
    footer: {
      line: "Алла Таскаева · Авторский текстильный переплет и вышивка",
      contacts: "Контакты"
    },
    ui: {
      language: "Язык",
      close: "Закрыть",
      prev: "Назад",
      next: "Далее"
    }
  }
};

export default function HomePage() {
  const [lang, setLang] = useState("en");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useEffect(() => {
    const saved = localStorage.getItem("site_lang");
    if (saved === "en" || saved === "ru") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("site_lang", lang);
  }, [lang]);

  const t = content[lang];

  const lightboxImages = useMemo(
    () => [...t.gallery.images, ...t.details.images],
    [t.gallery.images, t.details.images]
  );

  const openLightbox = (src) => {
    const idx = lightboxImages.findIndex((item) => item === src);
    setLightboxIndex(idx);
  };

  return (
    <main className="page-shell" lang={lang}>
      <div className="page-container">
        <header className="pb-6">
          <div className="flex flex-col gap-4 border-b border-[var(--line)] pb-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xl font-semibold tracking-[-0.01em]">{t.brand}</p>
            <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
              <span>{t.ui.language}</span>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-md border px-2.5 py-1 ${
                  lang === "en"
                    ? "border-[var(--line)] bg-[#f2ece4] text-[var(--text)]"
                    : "border-transparent"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("ru")}
                className={`rounded-md border px-2.5 py-1 ${
                  lang === "ru"
                    ? "border-[var(--line)] bg-[#f2ece4] text-[var(--text)]"
                    : "border-transparent"
                }`}
              >
                RU
              </button>
            </div>
          </div>
          <nav className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--muted)]">
            {t.nav.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <section id="intro" className="section">
          <p className="section-kicker">{t.intro.kicker}</p>
          <h1 className="section-title">{t.intro.title}</h1>
          <div className="prose">
            <p>{t.intro.subtitle}</p>
            <p>{t.intro.text}</p>
          </div>
          <figure className="simple-image mt-5">
            <Image
              src="/images/hero-main.png"
              alt={t.intro.title}
              width={1600}
              height={1100}
              priority
            />
          </figure>
        </section>

        <section id="about" className="section">
          <p className="section-kicker">{t.about.kicker}</p>
          <h2 className="section-title">{t.about.title}</h2>
          <div className="two-col">
            <div className="prose">
              {t.about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <figure className="simple-image">
              <Image
                src="/images/portrait-01.png"
                alt={t.about.title}
                width={900}
                height={1200}
              />
            </figure>
          </div>
        </section>

        <section id="history" className="section">
          <p className="section-kicker">{t.history.kicker}</p>
          <h2 className="section-title">{t.history.title}</h2>
          <p className="note">{t.history.intro}</p>
          <div className="mt-5 space-y-8">
            {t.history.items.map((item) => (
              <article key={item.date} className="simple-grid md:grid-cols-[1fr_220px] md:items-start">
                <div className="prose">
                  <p className="mb-1 text-sm uppercase tracking-[0.11em] text-[var(--muted)]">
                    {item.date}
                  </p>
                  <p className="mb-2 text-lg font-semibold tracking-[-0.01em]">{item.title}</p>
                  <p>{item.text}</p>
                </div>
                <figure className="simple-image">
                  <Image src={item.image} alt={item.title} width={700} height={520} />
                </figure>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="section">
          <p className="section-kicker">{t.features.kicker}</p>
          <h2 className="section-title">{t.features.title}</h2>
          <div className="features-grid mt-3">
            {t.features.items.map((item) => (
              <article key={item.title} className="prose">
                <p className="mb-1 font-semibold">{item.title}</p>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="section">
          <p className="section-kicker">{t.gallery.kicker}</p>
          <h2 className="section-title">{t.gallery.title}</h2>
          <p className="note">{t.gallery.note}</p>
          <div className="gallery-grid mt-4 grid grid-cols-2 gap-3">
            {t.gallery.images.map((src, idx) => (
              <button
                key={src + idx}
                type="button"
                className="simple-image text-left"
                onClick={() => openLightbox(src)}
              >
                <Image src={src} alt={`${t.gallery.title} ${idx + 1}`} width={900} height={700} />
              </button>
            ))}
          </div>
        </section>

        <section id="details" className="section">
          <p className="section-kicker">{t.details.kicker}</p>
          <h2 className="section-title">{t.details.title}</h2>
          <div className="details-grid mt-4 grid grid-cols-2 gap-3">
            {t.details.images.map((src, idx) => (
              <button
                key={src + idx}
                type="button"
                className="simple-image text-left"
                onClick={() => openLightbox(src)}
              >
                <Image src={src} alt={`${t.details.title} ${idx + 1}`} width={800} height={600} />
              </button>
            ))}
          </div>
        </section>

        <section id="recognition" className="section">
          <p className="section-kicker">{t.recognition.kicker}</p>
          <h2 className="section-title">{t.recognition.title}</h2>
          <div className="prose">
            {t.recognition.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-4 space-y-3">
            {t.recognition.points.map((item) => (
              <div key={item.title} className="prose">
                <p className="mb-1 font-semibold">{item.title}</p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <p className="section-kicker">{t.education.kicker}</p>
          <h2 className="section-title">{t.education.title}</h2>
          <div className="prose">
            <p>{t.education.text}</p>
          </div>
          <p className="mt-5 text-sm uppercase tracking-[0.12em] text-[var(--muted)]">
            {t.education.kindsTitle}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2.5">
            {t.education.kinds.map((item) => (
              <li
                key={item}
                className="rounded-md border border-[var(--line)] px-3 py-1.5 text-sm text-[var(--text)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <footer className="section pb-3">
          <p className="text-sm text-[var(--muted)]">{t.footer.line}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="text-[var(--muted)]">{t.footer.contacts}:</span>
            <a href="https://www.youtube.com/@allataskaeva" target="_blank" rel="noreferrer">
              YouTube
            </a>
            <a href="https://instagram.com/allataskaeva" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://vk.com/allataskaevamk" target="_blank" rel="noreferrer">
              VK
            </a>
          </div>
        </footer>
      </div>

      {lightboxIndex >= 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setLightboxIndex(-1);
            }
          }}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded border border-white/40 px-3 py-1 text-sm text-white"
            onClick={() => setLightboxIndex(-1)}
          >
            {t.ui.close}
          </button>
          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded border border-white/40 px-3 py-2 text-sm text-white"
            onClick={() =>
              setLightboxIndex((prev) =>
                prev <= 0 ? lightboxImages.length - 1 : prev - 1
              )
            }
          >
            {t.ui.prev}
          </button>
          <div className="relative w-full max-w-4xl overflow-hidden rounded border border-white/30 bg-[#161310]">
            <Image
              src={lightboxImages[lightboxIndex]}
              alt="Preview"
              width={1800}
              height={1300}
              className="h-auto w-full"
            />
          </div>
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded border border-white/40 px-3 py-2 text-sm text-white"
            onClick={() =>
              setLightboxIndex((prev) =>
                prev >= lightboxImages.length - 1 ? 0 : prev + 1
              )
            }
          >
            {t.ui.next}
          </button>
        </div>
      )}
    </main>
  );
}
