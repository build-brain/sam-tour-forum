"use client";
import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useState, useEffect } from "react";
import Fancybox from "@/components/Fancybox";

import "react-fancybox/lib/fancybox.css";
export default function TravelTechDayBishkek() {
  const [activeSection, setActiveSection] = useState<string>("owners");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50% 0px",
      threshold: 0,
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
    <>
      <div className="mt-[8rem] mb-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[300px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="font-light font-noto text-[16px]"
                href="/projects"
              >
                Проекты
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="font-light font-noto text-[16px]"
                href="/projects/travel-tech-day-bishkek"
              >
                TravelTech Day Bishkek
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="relative w-full h-[60vh] sm:h-[700px] px-10  sm:px-[300px]">
        <div className="bg-hero2" />

        <div className="flex flex-col xl:flex-row justify-between relative z-10">
          <div className="flex flex-col pt-10 sm:pt-[200px] text-center">
            <div className="w-full sm:w-[660px]">
              <h1 className="text-white text-[30px] sm:text-[48px] font-noto font-semibold text-start leading-[1.17] mb-5">
                TravelTech Day <br />
                Bishkek
              </h1>
              <p className="text-start text-muted text-[18px] font-noto whitespace-pre-wrap ">
                25 сентября в Бишкеке перед международной аудиторией и жюри
                конференции выступили инновационные туристические проекты из
                Казахстана, Кыргызстана, Узбекистана и России. 9
                тревел-стартапов стали победителеями конкурса питчей.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start sm:items-center mt-4 sm:mt-[10rem]">
            <div className="flex justify-evenly items-center gap-5">
              {" "}
              <svg
                role="presentation"
                className="t1060__item_icon"
                width="50px"
                height="50px"
                fill="none"
                stroke="#fff"
                strokeWidth="5.79"
                strokeMiterlimit="10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
              >
                <path
                  className="st0"
                  d="M83.4 18h8.5v70.3H8.1V18h65.7zM25.7 27.8V8.7M44.3 64.3H25.1M74.3 64.3H55.1M44.3 45.3H25.1M74.3 45.3H55.1M72.4 27.8V8.7"
                ></path>
              </svg>{" "}
              <div className="text-white font-normal font-noto text-[18px]">
                Сентябрь | 2024
              </div>{" "}
            </div>
            <div className="flex justify-evenly items-center gap-5 py-4 sm:pt-[60px]">
              {" "}
              <div className="t1060__imgwrapper">
                {" "}
                <img
                  src="/education_location.svg"
                  alt=""
                  className="w-[50px] h-[50px]"
                />{" "}
              </div>{" "}
              <div className="text-white font-normal font-noto text-[18px]">
                Бишкек, Технопарк
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="flex  flex-wrap sticky top-10 sm:top-24 gap-2 sm:gap-4 items-center z-[50] py-5  sm:py-3 px-5 sm:px-[300px]">
        <button
          onClick={() => handleScrollTo("owners")}
          className={`rounded-[30px] border-2 border-[#9b9baa] py-3 px-5 text-[12px] ${
            isActive("owners") ? "bg-[#9b9baa] text-white" : "bg-white"
          }`}
        >
          Победители
        </button>
        <button
          onClick={() => handleScrollTo("gallery")}
          className={`rounded-[30px] border-2 border-[#9b9baa] py-3 px-5 text-[12px] ${
            isActive("gallery") ? "bg-[#9b9baa] text-white" : "bg-white"
          }`}
        >
          Галерея
        </button>
        <button
          onClick={() => handleScrollTo("what")}
          className={`rounded-[30px] border-2 border-[#9b9baa] py-3 px-5 text-[12px] ${
            isActive("what") ? "bg-[#9b9baa] text-white" : "bg-white"
          }`}
        >
          Что это такое ?
        </button>
        <button
          onClick={() => handleScrollTo("conference")}
          className={`rounded-[30px] border-2 border-[#9b9baa] py-3 px-5 text-[12px] ${
            isActive("conference") ? "bg-[#9b9baa] text-white" : "bg-white"
          }`}
        >
          Программа
        </button>

        <button
          onClick={() => handleScrollTo("datetime")}
          className={`rounded-[30px] border-2 border-[#9b9baa] py-3 px-5 text-[12px] ${
            isActive("datetime") ? "bg-[#9b9baa] text-white" : "bg-white"
          }`}
        >
          Место и время
        </button>

        <button
          onClick={() => handleScrollTo("contact")}
          className={`rounded-[30px] border-2 border-[#9b9baa] py-3 px-5 text-[12px] ${
            isActive("contact") ? "bg-[#9b9baa] text-white" : "bg-white"
          }`}
        >
          Контакты
        </button>
        <button
          onClick={() => handleScrollTo("partners")}
          className={`rounded-[30px] border-2 border-[#9b9baa] py-3 px-5 text-[12px] ${
            isActive("partners") ? "bg-[#9b9baa] text-white" : "bg-white"
          }`}
        >
          Партнеры
        </button>
        
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[300px]">
        <section id="owners">
          <h2 className="text-3xl font-bold font-noto">Победители</h2>
          <p className="text-[18px] font-light font-notoarial text-[#1e1e24] py-8">
            В конкурсе питчей TravelTech Day Bishkek победили 9 тревел-стартапов
            из Казахстана, Кыргызстана, Узбекистана и России. Экспертную оценку
            проектов дали представители компаний: Мой агент, Sabre, Accelerate
            Prosperity, Ratehawk, Emehmon, Novotel, MBANK и организаторы
            конференции STF и Travel Massive. Победители были определены в трех
            номинациях:
          </p>
          <div className="grid grid-cols-1 place-items-center">
            <div className="flex items-start justify-center w-full  max-w-[760px]">
              <img
                src="/beach_with_umbrella_flat.svg"
                className="bg-cover w-[65px] h-[65px]"
                alt=""
              />

              <div className="ps-[30px]">
                <p className="font-noto text-[18px] text-[#1e1e24] font-semibold">
                  Лучший TravelTech-стартап
                </p>
                <div className="pt-[14px] font-noto font-light text-[16px] text-[#1e1e24] leading-[3rem]">
                  🏆{" "}
                  <a
                    className="border-b border-[#1560d0] text-[#1560d0] text-[16px] font-light font-noto"
                    href="https://globaltravel.space"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Global Travel Space
                  </a>{" "}
                  — система Single Window Solution для ведения бизнеса в тревел
                  сфере в одном окне.
                  <br />
                  <a
                    className="border-b border-[#1560d0] text-[#1560d0] text-[16px] font-light font-noto"
                    href="https://izde.online/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    IZDE
                  </a>{" "}
                  — сервис lastminute бронирований аренды жилья на территории
                  КР.
                  <br />
                  <a
                    className="border-b border-[#1560d0] text-[#1560d0] text-[16px] font-light font-noto"
                    href="http://gobus.kg/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GOBUS
                  </a>{" "}
                  — компания в сфере пассажирских перевозок и транспортных услуг
                  в КР .
                </div>
              </div>
            </div>
            <div className="flex items-start w-full mt-10 max-w-[760px]">
              <img
                src="/department_store_flat.svg"
                className="bg-cover w-[65px] h-[65px]"
                alt=""
              />

              <div className="ps-[30px]">
                <p className="font-noto text-[18px] text-[#1e1e24] font-semibold">
                  Лучший TravelTech-стартап в категории MVP
                </p>
                <div className="pt-[14px] font-noto font-light text-[16px] text-[#1e1e24] leading-[3rem]">
                  🏆{" "}
                  <a
                    className="border-b border-[#1560d0] text-[#1560d0] text-[16px] font-light font-noto"
                    href="https://smartta.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    SmartTA
                  </a>{" "}
                  — CRM для туристических агентств.
                  <br />
                  <a
                    className="border-b border-[#1560d0] text-[#1560d0] text-[16px] font-light font-noto"
                    href="https://qazaqtourism.kz/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    OTA
                  </a>{" "}
                  — единая платформа, объединяющая сервисы, локации и
                  дестинации.
                  <br />
                  <a
                    className="border-b border-[#1560d0] text-[#1560d0] text-[16px] font-light font-noto"
                    href="https://drive.google.com/file/d/1cGNws4s8HLjFI_XRhbTuxzwVxe4SL7D2/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Happy Road
                  </a>{" "}
                  — приложение, строящее интересные маршруты по городу.
                </div>
              </div>
            </div>
            <div className="flex items-start w-full mt-10 max-w-[760px]">
              <img
                src="/camping_flat.svg"
                className="bg-cover w-[65px] h-[65px]"
                alt=""
              />

              <div className="ps-[30px]">
                <p className="font-noto text-[18px] text-[#1e1e24] font-semibold">
                  Лучший HotelTech-стартап
                </p>
                <div className="pt-[14px] font-noto font-light text-[16px] text-[#1e1e24] leading-[3rem]">
                  🏆{" "}
                  <a
                    className="border-b border-[#1560d0] text-[#1560d0] text-[16px] font-light font-noto"
                    href="https://homestay.kz/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Homestay
                  </a>{" "}
                  — услуги в отеле и коммуникация с гостем.
                  <br />
                  <a
                    className="border-b border-[#1560d0] text-[#1560d0] text-[16px] font-light font-noto"
                    href="https://starphone.kg/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    🏆 Star Phone
                  </a>{" "}
                  — многоканальная платформа для взаимодействия с клиентами.
                  <br />
                  <a
                    className="border-b border-[#1560d0] text-[#1560d0] text-[16px] font-light font-noto"
                    href="https://touchh.ru/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    touchh
                  </a>{" "}
                  — онлайн интерфейс гостя, дополнительные продажи в номерах
                  средств размещения.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id="gallery" className="py-[10rem]">
        <h2 className="text-3xl font-bold font-noto px-4 sm:px-[300px] my-10">
          Галерея
        </h2>
        <div className="w-full h-[100dvh] mb-10">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VvzMMWl9tlw"
            title="Видеоотчет по TravelTech Day Bishkek  прошедшему 25 сентября 2024 | События Samarkand Tourism Forum"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>

        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <div className="grid grid-cols-3 gap-1">
            <div className="grid gap-1 col-span-1">
              <div>
                <a data-fancybox="gallery" href="/photo_TTDB-2_2024092.jpg">
                  <img
                    src="/photo_TTDB-2_2024092.jpg"
                    className="max-w-full min-h-[50%]"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a data-fancybox="gallery" href="/photo_TTDB-3_2024092.jpg">
                  <img
                    src="/photo_TTDB-3_2024092.jpg"
                    className="max-w-full min-h-[50%]"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-span-2">
              <a data-fancybox="gallery" href="/photo_TTDB-1_2024092.jpg">
                <img
                  src="/photo_TTDB-1_2024092.jpg"
                  className="max-w-full min-h-[100%]"
                  alt=""
                />
              </a>
            </div>

            <div className="col-span-2">
              <a data-fancybox="gallery" href="/photo_TTDB-4_2024092.JPG">
                <img
                  src="/photo_TTDB-4_2024092.JPG"
                  className="max-w-full min-h-[100%]"
                  alt=""
                />
              </a>
            </div>
            <div className="col-span-1">
              <a data-fancybox="gallery" href="/photo_TTDB-5_2024092.jpg">
                <img
                  src="/photo_TTDB-5_2024092.jpg"
                  className="max-w-full min-h-[100%] object-cover object-center"
                  alt=""
                />
              </a>
            </div>
          </div>
        </Fancybox>
      </section>

      <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[300px]">
        <section id="what" className="pt-[14rem]">
          <h2 className="text-3xl font-bold font-noto  mb-10">
            Что такое TravelTech Day Bishkek?
          </h2>
          <p className="text-[18px] font-light font-notoarial text-[#1e1e24] py-4">
            <span className="font-bold">TravelTech Day Bishkek</span> — это
            возможность для IT-компаний и стартапов в туризме продемонстрировать
            свои продукты туроператорам, отельерам, инвесторам, стартапам,
            гос-организациям и другим заинтересованным сторонам региона ЦА и
            найти новые партнерства.
          </p>

          <div className="flex flex-wrap sm:flex-nowrap justify-evenly items-center my-10 gap-5">
            <div className="flex flex-col justify-center items-center">
              <img src="/vector.svg" alt="" />
              <span className="mt-[12px] mb-[25px] font-noto font-semibold text-[#1e1e24] text-[28px]">
                Презентации проектов
              </span>
              <span className="text-center text-[14px] font-light font-noto text-[#1e1e24]">
                TravelTech компаний и стартапов, работающих в индустрии туризма
                и гостеприимства.
              </span>
            </div>
            <div className="flex flex-col  justify-center items-center">
              <img src="/vector (1).svg" alt="" />
              <span className="mt-[12px] mb-[25px] font-noto font-semibold text-[#1e1e24] text-[28px]">
                Панельные дискуссии
              </span>
              <span className="text-center text-[14px] font-light font-noto text-[#1e1e24]">
                О возможностях развития туристического бизнеса с использованием
                ИТ-технологий.
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src="/vector (2).svg" alt="" />
              <span className="mt-[12px] mb-[25px] font-noto font-semibold text-[#1e1e24] text-[28px]">
                Презентации проектов
              </span>
              <span className="text-center text-[14px] font-light font-noto text-[#1e1e24]">
                Мероприятие посетит более 150 участников заинтересованных в
                поиске партнеров
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center my-20">
            <hr className="w-full max-w-[140px] h-[2px] bg-[#1e1e24]" />
          </div>
          <div className="mx-auto my-20 w-full max-w-[960px] text-center text-[38px] font-noto font-light text-[#1e1e24]">
            Более 75 участников. 9 тревел-стартапов победитилей в конкурсе
            питчей.
          </div>
          <div className="flex justify-center items-center my-20">
            <hr className="w-full max-w-[140px] h-[2px] bg-[#1e1e24]" />
          </div>
        </section>

        <section id="conference" className="pt-[14rem]">
          <h2 className="text-3xl font-bold font-noto  mb-10">
            Программа конференции
          </h2>
          <hr className="my-10" />

          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
            <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-pre-wrap sm:whitespace-nowrap sm:max-w-[260px] w-full">
              <p>10:30</p>
            </div>

            <div className="w-full">
              <h2 className="text-[24px] font-noto font-semibold mb-5">
                Регистрация
              </h2>
            </div>
          </div>
          <hr className="my-10" />
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
            <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-pre-wrap sm:whitespace-nowrap sm:max-w-[260px] w-full">
              <p>11:00</p>
            </div>

            <div className="w-full">
              <h2 className="text-[24px] font-noto font-semibold mb-5">
                Открытие конференции
              </h2>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                Приветственные слова организаторов конференции
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                Сергей Макаров, STF
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                Михаил Шамшидов, STF
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                Азис Абакиров, High Technology Park
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                Айдар Бакиров, Международная IT академия GEEK
              </p>

              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                Спикеры USAID и Travel Massive
              </p>
            </div>
          </div>
          <hr className="my-10" />
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
            <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-pre-wrap sm:whitespace-nowrap sm:max-w-[260px] w-full">
              <p>12:30</p>
            </div>

            <div className="w-full">
              <h2 className="text-[24px] font-noto font-semibold mb-5">
                Цифровизация индустрии туризма и TravelTech
              </h2>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24] mb-10">
                Обзорные доклады и презентации TravelTech-проектов, экспертные
                мнения
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                Интеграция разрозненного тревел контента на примере решений
                Sabre
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24] mb-10">
                Альфира Салихова, Sabre
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                Цифровизация дистрибуции авиабилетов
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24] mb-10">
                Алексей Ивашко, Мой агент
              </p>

              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                Презентации проектов:
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                GoBus – компания в сфере пассажирских перевозок и транспортных
                услуг в Кыргызстане;
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                GTS - система Single Window Solution для ведения бизнеса в
                тревел сфере в одном окне;
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                IndyGuide – ведущая региональная платформа бронирования для
                местных гидов, водителей и туроператоров;
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                izde.online – поиск краткосрочной аренды жилья на территории КР;
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24] mb-10">
                Star - агрегатор тревел контента для экосистем, агентств и
                корпоративных игроков.
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                Экспертное жюри:
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                Алексей Ивашко, Мой агент
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                Альфира Салихова, Sabre
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                Максат Табылганов, MBANK
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                Еркин Тикенов, Incide Travel, Kazakh Tourism Public Council
                (модератор)
              </p>
            </div>
          </div>
          <hr className="my-10" />

          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
            <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-pre-wrap sm:whitespace-nowrap sm:max-w-[260px] w-full">
              <p style={{ color: "rgb(155, 155, 170)" }}>14:00</p>
            </div>

            <div className="w-full">
              <h2
                className="text-[24px] font-noto font-semibold mb-5"
                style={{ color: "rgb(155, 155, 170)" }}
              >
                Перерыв
              </h2>
            </div>
          </div>
          <hr className="my-10" />

          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
            <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-pre-wrap sm:whitespace-nowrap sm:max-w-[260px] w-full">
              <p>15:00</p>
            </div>

            <div className="w-full">
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24] ">
                2ГИС как инфраструктура для туризма:
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24] mb-10">
                Кто мы? ⁠Что мы делаем? ⁠Как мы это делаем? Возможности 2ГИС для
                туризма
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                Обзорный доклад
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24] ">
                Анастасия Карибаева, 2ГИС
              </p>
            </div>
          </div>
          <hr className="my-10" />

          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
            <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-pre-wrap sm:whitespace-nowrap sm:max-w-[260px] w-full">
              <p>15:15</p>
            </div>

            <div className="w-full">
              <h2 className="text-[24px] font-noto font-semibold mb-5">
                Выступления TravelTech-стартапов
              </h2>

              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24] mb-10">
                Выступление стартапов, мнения экспертов, обсуждение
              </p>

              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24] mb-10">
                Зачем нужны инвестиции и роль АР <br />
                Айжан Алишерова, Accelerate Prosperity
              </p>

              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24] mb-10">
                Arcona XR Metaverse — платформа для размещения цифрового
                контента в слое дополненной реальности (AR) в любом месте на
                планете Земля (онлайн).
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24] mb-10">
                Презентации проектов: <br />
                ameeyda! – ненавязчиво рассказывает пользователю о городском
                наследии (MVP);
                <br />
                Happy Road – приложение строющее интересные маршруты (MVP);
                <br />
                Nomady – соединяет путешественников с местными туроператорами в
                Центральной Азии, организуя групповые туры (MVP);
                <br />
                OTA – единая платформа, объединяющая сервисы, локации и
                дестинации;
                <br />
                SmartTA – CRM для туристических агентств;
                <br />
              </p>

              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24] mb-10">
                Экспертное жюри: <br />
                Айжан Алишерова, Accelerate Prosperity
                <br />
                Михаил Шамшидов, STF
                <br />
                Фазыл Касимов, Emehmon
                <br />
                Представитель Travel Massive (модератор)
                <br />
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                Выступления стартапов: <br />
                FOX Lobster Ink – онлайн платформа по обучению персонала в
                гостиничном и ресторанном бизнесе;
                <br />
                Homestay – услуги в отеле и коммуникация с гостем;
                <br />
                Pana – платформа аренды жилья и различных мест размещения в три
                клика, возможность для отдыха и проживания в окружении друзей,
                семьи, коллег и впечатлений;
                <br />
                Star Phone — Многоканальная платформа для взаимодействия с
                клиентами;
                <br />
                touchh – онлайн интерфейс гостя, дополнительные продажи в
                номерах средств размещения (онлайн).
                <br />
              </p>
            </div>
          </div>
          <hr className="my-10" />
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
            <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-pre-wrap sm:whitespace-nowrap sm:max-w-[260px] w-full">
              <p>10:30</p>
            </div>

            <div className="w-full">
              <h2 className="text-[24px] font-noto font-semibold mb-5">
                Цифровизация индустрии гостеприимства и HotelTech
              </h2>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24] mb-10">
                Презентации продуктов, панельная дискуссия, выступления
                стартапов, мнения экспертов, обсуждение
              </p>

              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24] mb-10">
                Презентации проектов: <br />
                Exely – это комплексное решение для онлайн-продаж и управления
                отелем и постоянная забота о клиентах. <br />
                Ratehawk – платформа онлайн-бронирования отелей, авиабилетов,
                аренды автомобилей и организации других услуг в сфере
                путешествий; <br />
                As a Nomad - экосистема для путешественников в Центральную Азию.{" "}
                <br />
              </p>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24] mb-10">
                Экспертное жюри: <br />
                Айжан Алишерова, Accelerate Prosperity <br />
                Альфира Салихова, Sabre <br />
                Асель Азнабаеваэ, Ratehawk <br />
                Руслан Калимов, Novotel <br />
                Вячеслав Кошелев, As a Nomad (модератор) <br />
              </p>

              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24] mb-10">
                Выступления стартапов: <br />
                FOX Lobster Ink – онлайн платформа по обучению персонала в
                гостиничном и ресторанном бизнесе; <br />
                Homestay – услуги в отеле и коммуникация с гостем; <br />
                Pana – платформа аренды жилья и различных мест размещения в три
                клика, возможность для отдыха и проживания в окружении друзей,
                семьи, коллег и впечатлений; <br />
                Star Phone — Многоканальная платформа для взаимодействия с
                клиентами; <br />
                touchh – онлайн интерфейс гостя, дополнительные продажи в
                номерах средств размещения (онлайн). <br />
              </p>
            </div>
          </div>
          <hr className="my-10" />
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
            <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-pre-wrap sm:whitespace-nowrap sm:max-w-[260px] w-full">
              <p>18:00</p>
            </div>

            <div className="w-full">
              <h2 className="text-[24px] font-noto font-semibold mb-5">
                Завершение конференции
              </h2>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                Окончание формальной части мероприятия
              </p>
            </div>
          </div>
          <hr className="my-10" />
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
            <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-pre-wrap sm:whitespace-nowrap sm:max-w-[260px] w-full">
              <p>19:00</p>
            </div>

            <div className="w-full">
              <h2 className="text-[24px] font-noto font-semibold mb-5">
                Митап Travel Massive
              </h2>
              <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
                Деловое общение в неформальной обстановке
              </p>
            </div>
          </div>
          <hr className="my-10" />
        </section>

        <section id="datetime" className="pt-[5rem]">
          <h2 className="text-3xl font-bold font-noto  mb-4">Место и время</h2>
          <p className="text-[18px] font-light font-notoarial text-[#1e1e24] py-4">
            Мероприятие будет проходить в Бишкеке 25 сентября в формате офлайн.
          </p>
          <div className="flex flex-wrap items-start gap-5 mt-[30px] mb-[60px]">
            <div className="flex">
              <img
                src="/education_location (1).svg"
                className="w-[45px] h-[45px] me-4"
                alt=""
              />
              <div className="flex flex-col max-w-[560px] w-full">
                <h2 className="text-[22px] pb-[8px] font-noto font-semibold text-[#1e1e24]">
                  Бишкек
                </h2>
                <p className="text-[14px] font-light font-notoarial text-[#1e1e24]">
                  Мероприятие проводится в формате офлайн на территории
                  Технопарка, в амфитеатре Flutter.
                </p>
              </div>
            </div>
            <div className="flex">
              <img
                src="/Layer_20.svg"
                className="w-[45px] h-[45px] me-4"
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="text-[22px] pb-[8px] font-noto font-semibold text-[#1e1e24]">
                  25 сентября (Ср)
                </h2>
                <p className="text-[14px] font-light font-notoarial text-[#1e1e24]">
                  Мероприятие проходит в течение всего дня.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <div className="grid grid-cols-3 gap-1">
          <div className="grid gap-1 col-span-1">
            <div>
              <a data-fancybox="gallery" href="/img_hall2.jpg">
                <img
                  src="/img_hall2.jpg"
                  className="max-w-full min-h-[50%]"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a data-fancybox="gallery" href="/img_hall4.jpg">
                <img
                  src="/img_hall4.jpg"
                  className="max-w-full min-h-[50%]"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-span-2">
            <a data-fancybox="gallery" href="/img_hall3.jpg">
              <img
                src="/img_hall3.jpg"
                className="max-w-full min-h-[100%]"
                alt=""
              />
            </a>
          </div>
        </div>
      </Fancybox>
      <div
        id="rec786505409"
        className="r t-rec t-rec_pt_0 t-rec_pb_0"
        style={{ paddingTop: "0px", paddingBottom: "0px" }}
        data-animationappear="off"
        data-record-type="131"
      >
        <div className="t123">
          <div>
            <div className="w-full h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1462.3756233367724!2d74.63379467987998!3d42.85698538156722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb73dd9a2891f%3A0x8d714c952939f7fc!2sTechnopark!5e0!3m2!1sru!2sde!4v1724687616835!5m2!1sru!2sde"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[300px]">
        <section id="contact" className="pt-[5rem]">
          <h2 className="text-3xl font-bold font-noto  mb-10">Контакты</h2>
          <p className="text-[18px] font-light font-notoarial text-[#1e1e24] py-4">
            Пишите нам на team@samarkandforum.com или в{" "}
            <a
              href="https://t.me/visitCA"
              target="_blank"
              className="border-b border-[#1560d0] text-[#1560d0]"
            >
              Telegram
            </a>
            .
          </p>
        </section>

        <section id="partners" className="pt-[5rem]">
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-[36px] font-semibold font-noto  mb-10">
              Со-организатор
            </h2>
            <span className="max-w-[560px] w-full font-noto text-[22px] font-light text-center">
              Проект USAID по развитию предпринимательства и бизнес-среды
            </span>

            <a
              href="https://www.usaid.gov/ru/uzbekistan"
              target="_blank"
              className="my-[10rem]"
            >
              <img src="/logo_USAID_Vert_Ru_2.png" alt="" />
            </a>
          </div>
          <div className="flex justify-center flex-col items-center gap-10">
            <h2 className="text-[36px] font-semibold font-noto  mb-10">
              Партнеры мероприятия
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-20 my-10">
              <a href="https://www.travelmassive.com/">
                <img src="/logo_Travel-Massive_.png" className="w-[200px] h-[200px]" alt="" />
              </a>
              <a href="#">
                <img src="/logo_Tech4Travel.png" className="w-[200px] h-[200px]" alt="" />
              </a>
              <a href="#">
                <img src="/logo_Technopark_500x.png" className="w-[200px] h-[200px]" alt="" />
              </a>
              <a href="#">
                <img src="/logo_High-Technology.png" className="w-[200px] h-[200px]" alt="" />
              </a>
              <a href="https://geeks.kg/">
                <img src="/logo_Geeks_551x565_i.jpg" className="w-[200px] h-[200px]" alt="" />
              </a>
              <a href="https://info-service.kg/">
                <img src="/photo_2024-09-20_134.jpeg " className="w-[200px] h-[200px]" alt="" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
