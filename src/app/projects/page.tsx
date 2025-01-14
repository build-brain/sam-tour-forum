"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Projects() {
  const [activeSection, setActiveSection] = useState<string>("forum");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (id: string) => activeSection === id;

  return (
    <div className="px-4 md:px-20 2xl:px-80 pt-32">
      <h1 className="text-5xl font-noto pb-4 font-semibold text-[#1e1e24]">
        Проекты
      </h1>

      <div className="flex  sticky top-24 gap-4 items-center">
        <button
          onClick={() => handleScrollTo("forum")}
          className={`rounded-[30px] border-2 border-[#9b9baa] py-3 px-5 text-[12px] ${
            isActive("forum") ? "bg-[#9b9baa] text-white" : "bg-white"
          }`}
        >
          Форумы и конференции
        </button>

        <button
          onClick={() => handleScrollTo("conference")}
          className={`rounded-[30px] border-2 border-[#9b9baa] py-3 px-5 text-[12px] ${
            isActive("conference") ? "bg-[#9b9baa] text-white" : "bg-white"
          }`}
        >
          Онлайн-мероприятия
        </button>
      </div>

      <section id="forum" className=" scroll-mt-24">
        <h2 className="text-3xl font-bold pt-20">Форумы и конференции</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
          <div className="max-w-[560px] w-full mb-24">
            <div>
              <img
                src="/poster_TravelTech-Da.png"
                alt="poster"
                className="w-full h-[340px]"
              />
            </div>
            <h2 className="font-notoarial text-sm tracking-[2.5px] font-semibold mt-5">
              Сентябрь 2024
            </h2>
            <h1 className="text-[22px] font-notoarial font-semibold text-[#1e1e24] mb-2">
              TravelTech Day Bishkek
            </h1>
            <p className="text-[16px] font-light font-notoarial text-[#1e1e24] ">
              25 сентября в Бишкеке перед международной аудиторией и жюри
              конференции выступили инновационные туристические проекты из
              Казахстана, Кыргызстана, Узбекистана и России. 9 тревел-стартапов
              стали победителеями конкурса питчей
            </p>
            <Link href={"/projects/travel-tech-day-bishkek"}>
              <button className="border-2 border-[#1560d0] text-[#1560d0] text-[13px] px-[15px] h-9 font-notoarial font-bold mt-5">
                Подробнее
              </button>
            </Link>
          </div>
          <div className="max-w-[560px] w-full mb-24">
            <div>
              <img
                src="/hero-art_1680x1020.png"
                alt="poster2"
                className="w-full h-[340px]"
              />
            </div>
            <h2 className="font-notoarial text-sm tracking-[2.5px] font-semibold mt-5">
              Февраль 2024
            </h2>
            <h1 className="text-[22px] font-notoarial font-semibold text-[#1e1e24] mb-2">
              Samarkand Tourism Forum 2024
            </h1>
            <p className="text-[16px] font-light font-notoarial text-[#1e1e24] ">
              9 и 10 февраля 2024 года в Самарканде состоялся третий Samarkand
              Tourism Forum - ежегодный независимый бизнес-ивент для участников
              туристического сектора Центрально-Азиатского региона и событие
              года для создателей тревел-впечатлений и продавцов туристических
              услуг.
            </p>

            <Link href={"/projects/samarkand-tourism-forum"}>
              <button className="border-2 border-[#1560d0] text-[#1560d0] text-[13px] px-[15px] h-9 font-notoarial font-bold mt-5">
                Подробнее
              </button>
            </Link>
          </div>
          <div className="max-w-[560px] w-full mb-24">
            <div>
              <img
                src="/img_hero.jpg"
                alt="poster2"
                className="w-full h-[340px]"
              />
            </div>
            <h2 className="font-notoarial text-sm tracking-[2.5px] font-semibold mt-5">
              Февраль 2023
            </h2>
            <h1 className="text-[22px] font-notoarial font-semibold text-[#1e1e24] mb-2">
              International Travel Bazaar 2023
            </h1>

            <p className="text-[16px] font-light font-notoarial text-[#1e1e24] ">
              Событие года для создателей тревел-впечатлений и продавцов
              туристических услуг Центральной Азии, ориентированных на развитие,
              сотрудничество и поиск новых решений.
            </p>

            <Link href={"/projects/international-travel-bazaar"}>
              <button className="border-2 border-[#1560d0] text-[#1560d0] text-[13px] px-[15px] h-9 font-notoarial font-bold mt-5">
                Подробнее
              </button>
            </Link>
          </div>
          <div className="max-w-[560px] w-full mb-24">
            <div>
              <img
                src="/hero_image_Samarkand.png"
                alt="poster2"
                className="w-full h-[340px]"
              />
            </div>

            <h2 className="font-notoarial text-sm tracking-[2.5px] font-semibold mt-5">
              Февраль 2024
            </h2>
            <h1 className="text-[22px] font-notoarial font-semibold text-[#1e1e24] mb-2">
              Samarkand Tourism Forum 2024
            </h1>

            <p className="text-[16px] font-light font-notoarial text-[#1e1e24] ">
              9 и 10 февраля 2024 года в Самарканде состоялся третий Samarkand
              Tourism Forum - ежегодный независимый бизнес-ивент для участников
              туристического сектора Центрально-Азиатского региона и событие
              года для создателей тревел-впечатлений и продавцов туристических
              услуг.
            </p>
            <Link href={"/projects/sam-guide-forum"}>
              <button className="border-2 border-[#1560d0] text-[#1560d0] text-[13px] px-[15px] h-9 font-notoarial font-bold mt-5">
                Подробнее
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section id="conference" className="my-20 scroll-mt-24">
        <h2 className="text-3xl font-bold pt-20 pb-10">Онлайн-мероприятия</h2>

        <div className="grid grid-cols-1  sm:grid-cols-3 gap-2 sm:gap-5">
          <Link
            href="https://www.youtube.com/playlist?list=PLFXHglCF_XaRdkXD05uy6TqjB8bBBlG8V"
            target="_blank"
          >
            <div className="rounded-lg relative h-[308px] bg-image">
              <h1 className="text-[22px] font-noto text-white my-[30px] mr-[60px] ml-[30px] font-semibold">
                Лидеры туризма <br /> Центральной Азии: опыт, партнерства,
                перспективы
              </h1>
              <div className="absolute text-[22px] top-10 end-8">
                <svg
                  role="presentation"
                  className="t959__card-arrow "
                  width="14"
                  height="24"
                  viewBox="0 0 14 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    d="M1 0.994385L12 11.9944L1 22.9944"
                    stroke="white"
                    strokeWidth="2"
                  ></path>{" "}
                </svg>
              </div>

              <div className="absolute bottom-0 left-0 m-[30px] text-[16px] font-notoarial font-light text-white">
                Практические примеры успешных проектов, способы улучшения
                туристической инфраструктуры и маркетинга.
              </div>
            </div>
          </Link>
          <Link
            href="https://www.youtube.com/playlist?list=PLFXHglCF_XaS4kMfCbgkVNtLQJGWDnC-p"
            target="_blank"
          >
            <div className="rounded-lg relative h-[308px] bg-image2">
              <h1 className="text-[22px] font-noto text-white my-[30px] mr-[60px] ml-[30px] font-semibold">
                Устойчивость в туризме и для туризма
              </h1>
              <div className="absolute text-[22px] top-10 end-8">
                <svg
                  role="presentation"
                  className="t959__card-arrow "
                  width="14"
                  height="24"
                  viewBox="0 0 14 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    d="M1 0.994385L12 11.9944L1 22.9944"
                    stroke="white"
                    strokeWidth="2"
                  ></path>{" "}
                </svg>
              </div>

              <div className="absolute bottom-0 left-0 m-[30px] text-[16px] font-notoarial font-light text-white">
                Серия подкастов по тем устойчивости в туристической отрасли
              </div>
            </div>
          </Link>
          <Link href={"/projects/podkast"}>
            <div className="rounded-lg relative h-[308px] bg-image3">
              <h1 className="text-[22px] font-noto text-white my-[30px] mr-[60px] ml-[30px] font-semibold">
                Подкасты с профи туризма
              </h1>
              <div className="absolute text-[22px] top-10 end-8">
                <svg
                  role="presentation"
                  className="t959__card-arrow "
                  width="14"
                  height="24"
                  viewBox="0 0 14 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    d="M1 0.994385L12 11.9944L1 22.9944"
                    stroke="white"
                    strokeWidth="2"
                  ></path>{" "}
                </svg>
              </div>

              <div className="absolute bottom-0 left-0 m-[30px] text-[16px] font-notoarial font-light text-white">
                Серия подкастов с профессионалами туристической отрасли.
              </div>
            </div>
          </Link>
        
          <Link href={"/projects/kruglyi-stol-assotsiatsii"}>
          <div className="rounded-lg relative h-[308px] bg-image4">
            <h1 className="text-[22px] font-noto text-white my-[30px] mr-[60px] ml-[30px] font-semibold">
              Круглый стол ассоциаций Центрально-Азиатского туризма
            </h1>
            <div className="absolute text-[22px] top-10 end-8">
              <svg
                role="presentation"
                className="t959__card-arrow "
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M1 0.994385L12 11.9944L1 22.9944"
                  stroke="white"
                  strokeWidth="2"
                ></path>{" "}
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 m-[30px] text-[16px] font-notoarial font-light text-white">
              Важное мероприятия для всех профессионалов туристической индустрии
              Центрально-Азиатского региона.
            </div>
          </div>
          </Link>
         
          <Link href={"/projects/seriya-vebinarov-po-sozdaniyu-turprodukta"}>
          <div className="rounded-lg relative h-[308px] bg-image5">
            <h1 className="text-[22px] font-noto text-white my-[30px] mr-[60px] ml-[30px] font-semibold">
              Серия вебинаров по созданию тур-продукта
            </h1>
            <div className="absolute text-[22px] top-10 end-8">
              <svg
                role="presentation"
                className="t959__card-arrow "
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M1 0.994385L12 11.9944L1 22.9944"
                  stroke="white"
                  strokeWidth="2"
                ></path>{" "}
              </svg>
            </div>

            <div className="absolute bottom-0 left-0 m-[30px] text-[16px] font-notoarial font-light text-white">
              Серия вебинаров, посвященных вопросам создания качественных
              туристических продуктов.
            </div>
          </div>
          </Link>

          <Link href={"/projects/seriya-vebinarov-po-vosstanovleniyu-turizma"}>
          
          
        
          <div className="rounded-lg  relative h-[308px] bg-image6">
            <h1 className="text-[22px] font-noto text-white my-[30px] mr-[60px] ml-[30px] font-semibold">
              Серия вебинаров по восстановлению туризма
            </h1>
            <div className="absolute text-[22px] top-10 end-8">
              <svg
                role="presentation"
                className="t959__card-arrow "
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M1 0.994385L12 11.9944L1 22.9944"
                  stroke="white"
                  strokeWidth="2"
                ></path>{" "}
              </svg>
            </div>

            <div className="absolute bottom-0 left-0 m-[30px] text-[16px] font-notoarial font-light text-white">
              Профессионалы туристической отрасли обсуждают, как будут
              восстанавливать туризм после пандемии.
            </div>
          </div>
            </Link>
        </div>
      </section>
    </div>
  );
}
