"use client";

import { useState } from "react";
import Image from "next/image";

const timeline = {
  en: [
    {
      date: "October 2016",
      text:
        "In October 2016, Alla Taskaeva created and presented her first authorial notebook in a soft binding, combining cartonnage, sewing, and decorative page design.",
      image: "/images/full/art-16.png"
    },
    {
      date: "December 2016",
      text:
        "Use of a decorative brooch as the central compositional element.",
      image: "/images/full/art-07.png"
    },
    {
      date: "July 2017",
      text:
        "Introduction of layered ruffles along the cover perimeter and the use of plastic frames in the design.",
      image: "/images/full/art-23.png"
    },
    {
      date: "May 2018",
      text:
        "Integration of Brazilian embroidery (dimensional roses in the “rococo” technique), which finalized the contemporary look of the “Taskaeva Style”.",
      image: "/images/full/art-32.png"
    }
  ],
  ru: [
    {
      date: "Октябрь 2016",
      text:
        "В октябре 2016 года Алла Таскаева создала и представила первый авторский блокнот в мягком переплете, объединив техники картонажа, шитья и декоративного оформления страниц.",
      image: "/images/full/art-16.png"
    },
    {
      date: "Декабрь 2016",
      text:
        "Использование декоративной броши как центрального элемента композиции.",
      image: "/images/full/art-07.png"
    },
    {
      date: "Июль 2017",
      text:
        "Внедрение многослойных рюш по периметру обложки и использование пластиковых рам в оформлении.",
      image: "/images/full/art-23.png"
    },
    {
      date: "Май 2018",
      text:
        "Интеграция бразильской вышивки (объемные розы в технике «рококо»), что окончательно сформировало современный облик «стиля Таскаевой».",
      image: "/images/full/art-32.png"
    }
  ]
};

const typeCards = [
  {
    src: "/images/full/art-01.png",
    captionEn:
      "Notebook in a simple design characterized by the absence of outer ruffles",
    captionRu:
      "Блокнот в простом дизайне характеризуется отсутствием внешних рюш в обложке"
  },
  {
    src: "/images/full/art-02.png",
    captionEn: "Notebook with ruffles characterized by outer ruffle detailing",
    captionRu: "Блокнот с рюшами характеризуется внешними рюшами в обложке"
  },
  {
    src: "/images/full/art-03.png",
    captionEn: "Notebook with a window characterized by a cut-out element",
    captionRu: "Блокнот с окном характеризуется окном в обложке"
  }
];

const gallery = [
  "/images/full/art-20.png",
  "/images/full/art-21.png",
  "/images/full/art-22.png",
  "/images/full/art-23.png",
  "/images/full/art-24.png",
  "/images/full/art-25.png",
  "/images/full/art-26.png",
  "/images/full/art-27.png",
  "/images/full/art-28.png",
  "/images/full/art-29.png",
  "/images/full/art-30.png",
  "/images/full/art-31.png",
  "/images/full/art-32.png",
  "/images/full/art-33.png",
  "/images/full/art-15.png"
];

const copy = {
  en: {
    title: "Notebooks in Taskaeva Style",
    nav: {
      about: "About",
      history: "History",
      features: "Features",
      types: "Design Types",
      gallery: "Gallery",
      recognition: "Recognition",
      education: "Education"
    },
    about: [
      "Alla Taskaeva is a Russian applied artist, master of artistic bookbinding and authorial embroidery.",
      "She is the founder and popularizer of textile notebooks with dimensional embroidery, often called “puffy notebooks”.",
      "In the professional community and among collectors, this direction is known as “Taskaeva Style”."
    ],
    historyTitle: "History and creation of the direction",
    historyIntro:
      "In the process of style development, key elements were introduced and became canonical for this direction:",
    featuresTitle: "Features of the authorial style",
    features: [
      "Alla Taskaeva’s works (traditionally called “puffy notebooks”) are characterized by the following features:",
      "Tactility: soft, dimensional covers made of dense cotton (including textured Japanese cotton).",
      "Complex decor: combination of layered lace, ruffles, and a central medallion (brooch) with hand embroidery.",
      "Toning: use of pages hand-tinted with natural components (coffee, tea, rose petals)."
    ],
    typesTitle: "Types of notebook designs in Taskaeva Style",
    recognitionTitle: "Recognition and exhibition activity",
    recognition: [
      "Alla Taskaeva created a unique educational ecosystem that removes geographic boundaries.",
      "Learning from scratch: her authorial method allows anyone, regardless of country and initial skills, to reach a professional level.",
      "International reach: Alla Taskaeva’s courses were translated into English, making her school accessible to thousands of students in Europe, the USA, Asia, and other regions.",
      "Global community: students around the world continue developing this direction, gaining recognition at international exhibitions and marketplaces while following the principles of “Taskaeva Style”.",
      "The master’s name has become a common reference. The phrase “notebook in Taskaeva style” is now an international sign of quality and authenticity.",
      "Alla Taskaeva’s work has had a significant influence on the development of contemporary artistic bookbinding, inspiring many followers and masters.",
      "In 2024, the master’s works were presented at the international exhibition “Art of Dolls” in Moscow."
    ],
    educationTitle: "Educational activity",
    education:
      "Alla Taskaeva is the author of educational programs and kits that allow people without prior sewing and embroidery training to master textile notebook making from scratch.",
    contacts: "Contacts"
  },
  ru: {
    title: "Блокноты в стиле Таскаевой",
    nav: {
      about: "О мастере",
      history: "История",
      features: "Особенности",
      types: "Типы дизайнов",
      gallery: "Галерея",
      recognition: "Признание",
      education: "Обучение"
    },
    about: [
      "Алла Таскаева — российский художник-прикладник, мастер художественного переплета и авторской вышивки.",
      "Основоположница и популяризатор направления текстильных блокнотов с объемной вышивкой, известных как «пухляши».",
      "В профессиональной среде и среди коллекционеров данное направление закрепилось под названием «Стиль Таскаевой»."
    ],
    historyTitle: "История и создание направления",
    historyIntro:
      "В процессе развития стиля автором были внедрены ключевые элементы, ставшие каноническими для этого направления:",
    featuresTitle: "Особенности авторского стиля",
    features: [
      "Изделия Аллы Таскаевой (традиционно называемые «пухляшами») характеризуются следующими признаками.",
      "Тактильность: мягкая, объемная обложка из плотного хлопка (включая фактурный японский хлопок).",
      "Сложный декор: сочетание многослойного кружева, рюш и центрального медальона (броши) с ручной вышивкой.",
      "Тонирование: использование страниц, окрашенных вручную натуральными компонентами (кофе, чай, лепестки роз)."
    ],
    typesTitle: "Типы дизайнов блокнотов в стиле Таскаевой",
    recognitionTitle: "Признание и выставочная деятельность",
    recognition: [
      "Алла Таскаева создала уникальную образовательную экосистему, стирающую географические границы.",
      "Обучение с нуля: авторская методика позволяет любому человеку, независимо от страны проживания и начальных навыков, достичь профессионального уровня.",
      "Международный охват: курсы Аллы Таскаевой переведены на английский язык, что сделало ее школу доступной для тысяч учеников в Европе, США, Азии и других регионах.",
      "Мировое сообщество: ученики Аллы по всему миру успешно развивают это направление, добиваясь признания на международных выставках и торговых площадках, работая строго по канонам «Стиля Таскаевой».",
      "Имя мастера стало нарицательным. Фраза «Блокнот в стиле Таскаевой» сегодня является международным знаком качества и подлинности изделия.",
      "Творчество Аллы Таскаевой оказало значительное влияние на развитие современного художественного переплета, вдохновив множество последователей и мастеров.",
      "В 2024 году работы мастера были представлены на международной выставке «Искусство куклы» в Москве."
    ],
    educationTitle: "Образовательная деятельность",
    education:
      "Алла Таскаева является автором обучающих программ и наборов, позволяющих освоить технику создания текстильного блокнота «с нуля» лицам без предварительной подготовки в области шитья и вышивки.",
    contacts: "Контакты"
  }
};

export default function HomePage() {
  const [lang, setLang] = useState("en");
  const t = copy[lang];

  return (
    <main className="page">
      <div className="doc">
        <header>
          <h1 className="site-title">{t.title}</h1>
          <nav className="site-nav">
            <a href="#about">{t.nav.about}</a>
            <a href="#history">{t.nav.history}</a>
            <a href="#features">{t.nav.features}</a>
            <a href="#types">{t.nav.types}</a>
            <a href="#gallery">{t.nav.gallery}</a>
            <a href="#recognition">{t.nav.recognition}</a>
            <a href="#education">{t.nav.education}</a>
            <button type="button" onClick={() => setLang("en")}>
              EN
            </button>
            <button type="button" onClick={() => setLang("ru")}>
              RU
            </button>
          </nav>
        </header>

        <section id="about" className="section">
          <div className="intro">
            <Image
              src="/images/portrait-01.png"
              alt="Alla Taskaeva"
              width={520}
              height={680}
              className="img"
              priority
            />
            <div className="text">
              {t.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="history" className="section">
          <p className="center-caption">{t.historyTitle}</p>
          <div className="text">
            <p>{t.historyIntro}</p>
          </div>
          <div className="history-rows text">
            {timeline[lang].map((item) => (
              <article key={item.date} className="history-row">
                <div className="history-dot">
                  <p>
                    <strong>{item.date}:</strong>
                  </p>
                  <p>{item.text}</p>
                </div>
                <Image src={item.image} alt={item.date} width={460} height={340} className="img" />
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="section">
          <p className="center-caption">{t.featuresTitle}</p>
          <ul className="features-list text">
            {t.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="types" className="section">
          <p className="center-caption">{t.typesTitle}</p>
          <div className="types">
            {typeCards.map((card) => (
              <figure key={card.src}>
                <Image src={card.src} alt={card.captionRu} width={700} height={870} className="img" />
                <figcaption>{lang === "en" ? card.captionEn : card.captionRu}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="gallery" className="section">
          <div className="grid-gallery">
            {gallery.map((src, idx) => (
              <div key={src + idx} className="gallery-cell">
                <Image
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  className="gallery-cell-img"
                  sizes="(max-width: 700px) 33vw, 20vw"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="recognition" className="section">
          <p className="center-caption">{t.recognitionTitle}</p>
          <div className="text">
            {t.recognition.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <p className="center-caption">{t.educationTitle}</p>
          <div className="text">
            <p>{t.education}</p>
          </div>
        </section>

        <footer className="footer">
          <div>{t.contacts}: YouTube · Instagram · VK</div>
          <div>
            <a href="https://www.youtube.com/@allataskaeva" target="_blank" rel="noreferrer">
              youtube.com/@allataskaeva
            </a>{" "}
            ·{" "}
            <a href="https://instagram.com/allataskaeva" target="_blank" rel="noreferrer">
              instagram.com/allataskaeva
            </a>{" "}
            ·{" "}
            <a href="https://vk.com/allataskaevamk" target="_blank" rel="noreferrer">
              vk.com/allataskaevamk
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

