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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SamarkandTourismForum() {
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
                href="/projects/samarkand-tourism-forum"
              >
                Samarkand Tourism Forum 2024
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="relative w-full h-[60vh] sm:h-[700px] px-10 md:px-[400px] sm:px-[150px]">
        <div className="bg-hero3" />

        <div className="flex flex-col xl:flex-row justify-between relative z-10">
          <div className="flex flex-col pt-10 sm:pt-[200px] text-center">
            <div className="w-full sm:w-[660px]">
              <h1 className="text-white text-[30px] sm:text-[48px] font-noto font-semibold text-start leading-[1.17] mb-5">
                Samarkand <br /> Tourism Forum <br /> 2024
              </h1>
              <p className="text-start text-muted text-[18px] font-noto whitespace-pre-wrap ">
                9 и 10 февраля 2024 года в Самарканде состоялся третий Samarkand
                Tourism Forum - ежегодный независимый бизнес-ивент для
                участников туристического сектора Центрально-Азиатского региона
                и событие года для создателей тревел-впечатлений и продавцов
                туристических услуг.
              </p>
            </div>
          </div>
          <div className="flex flex-col  items-start sm:items-center mt-4 sm:mt-[14rem]">
            <div className="flex  items-center gap-5 w-full">
              <div>
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
                </svg>
              </div>

              <div className="text-white font-normal font-noto text-[18px]">
                Февраль | 2024
              </div>
            </div>
            <div className="flex justify-center items-center gap-5 py-4 sm:pt-[60px] w-full">
              <div className="t1060__imgwrapper">
                <img
                  src="/education_location.svg"
                  alt=""
                  className="w-[50px] h-[50px]"
                />
              </div>
              <div className="text-white font-normal font-noto text-[18px]">
                Самарканд, СамГИИЯ
              </div>
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
          Расписание
        </button>

        <button
          onClick={() => handleScrollTo("culture")}
          className={`rounded-[30px] border-2 border-[#9b9baa] py-3 px-5 text-[12px] ${
            isActive("culture") ? "bg-[#9b9baa] text-white" : "bg-white"
          }`}
        >
          Культурная программа
        </button>
        <button
          onClick={() => handleScrollTo("datetime")}
          className={`rounded-[30px] border-2 border-[#9b9baa] py-3 px-5 text-[12px] ${
            isActive("datetime") ? "bg-[#9b9baa] text-white" : "bg-white"
          }`}
        >
          Место проведения
        </button>
        <button
          onClick={() => handleScrollTo("reviews")}
          className={`rounded-[30px] border-2 border-[#9b9baa] py-3 px-5 text-[12px] ${
            isActive("reviews") ? "bg-[#9b9baa] text-white" : "bg-white"
          }`}
        >
          Отзывы
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
      <div className="px-5 sm:px-[300px]">
        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
          <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-pre-wrap sm:whitespace-nowrap sm:max-w-[140px] w-full">
            <p>Четверг, 19:00</p>
          </div>

          <div className="w-full">
            <h2 className=" text-[24px] font-noto font-semibold mb-5">
              MeetUp STF
            </h2>

            <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24] text-wrap">
              Участие по{" "}
              <a href="#" className="border-b border-[#1560d0] text-[#1560d0]">
                предварительной регистрации
              </a>
              . Мероприятие проводится в ресторане{" "}
              <a href="#" className="border-b border-[#1560d0] text-[#1560d0]">
                Suzani Lounge-Bar
              </a>{" "}
              по адресу
              <a href="#" className="border-b border-[#1560d0] text-[#1560d0]">
                {" "}
                ул. Мирзо Улугбека, 59
              </a>
            </p>
          </div>
        </div>
        <hr className="my-10" />
      </div>
      <section className="bg-hero4 pt-[90px] pb-[30px]" id="owners">
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[300px]">
          <h1 className="text-left text-[42px] font-noto font-semibold mb-10">
            <span className="bg-white">Пятница 9 февраля</span>
          </h1>
          <p className="text-left text-[22px] font-noto font-light mb-[90px]">
            <span className="bg-white">
              9:30 — 10:00 Официальное открытие форума
            </span>
          </p>

          <div
            className="grid gap-4 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-2 
                lg:grid-cols-2 
                xl:grid-cols-3"
          >
            <div className="flex flex-col w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] bg-gray-200  rounded-md">
              <div
                className="w-full h-[75px] text-white py-[20px] px-[30px]"
                style={{ backgroundColor: "rgb(155, 155, 170)" }}
              >
                <h2 className="text-[22px] font-noto font-semibold">
                  Зал 1, этаж 4
                </h2>
              </div>
              <div className="py-[40px] px-[30px] bg-[#E9E9EC]">
                <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                  10:00 – 11:30{" "}
                </p>
                <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                  Панельная дискуссия{" "}
                </p>
                <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                  How To: государственно-частное парнерство в сфере туризма в
                  Центральной Азии
                </h1>
                <p className="text-left text-[16px] font-noto font-light">
                  Развитие существующих и создание новых дестинаций невозможно
                  без активного участия государства и местных органов власти.
                  Какие проекты могут и должны получать государственную
                  поддержку для резкого прыжка на глобальный рынок туризма?
                  Какие программы господдержки проектов в сфере туризма вообще
                  существуют в странах Центральной Азии? Поговорим об этом на
                  примере успешных кейсов, реализованных в партнерстве
                  государства и бизнеса.
                </p>

                <div className="py-[20px]">
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Участники
                  </p>

                  <ul className="text-[14px] font-noto font-light text-[#1e1e24]">
                    <li>
                      Рустам Кобилов, заместитель хокима Самаркандской области
                      (Самарканд)
                    </li>
                    <li>
                      Джамшид Абдусаламов, первый заместитель председателя
                      Комитета по туризму Министерства экологии, охраны
                      окружающей среды и изменения климата Республики Узбекистан
                      (Ташкент)
                    </li>
                    <li>
                      Кайрат Садвакасов, председатель Правления АО «Национальная
                      компания «Kazakh Tourism» (Астана)
                    </li>
                    <li>
                      Максат Усубалиев, вице-президент Фонда поддержки развития
                      туризма в Кыргызской Республике (Бишкек)
                    </li>
                    <li>
                      Алишер Закиров, заместитель хокима Кашкадарьинской области
                      (Карши)
                    </li>
                    <li>
                      Алишер Шерназаров, эксперт по разработке Национальной
                      деловой повестки программы IBECA (CIPE) Таджикистан
                      (Душанбе)
                    </li>
                    <li>
                      Малика Мукимова с докладом «Развитие туристической отрасли
                      РУз как приоритетное направление Национальной Бизнес
                      Повестки программы IBECA UZ» (Ташкент)
                    </li>
                    <li>
                      Николай Ярмов, заместитель директора проекта USAID по
                      развитию предпринмательства и бизнес-среды по Центральной
                      Азии (Ташкент)
                    </li>
                    <li>
                      Айюб Сабиров, руководитель авиационного коммерческого
                      отдела международного аэропорта Airmarakanda (Самарканд)
                    </li>
                  </ul>
                </div>
                <p className="text-[14px] font-noto font-light text-[#1e1e24]">
                  Модератор <br />
                  Диёр Мирзаахмедов, председатель Маркетинговой ассоциации
                  Узбекистана (Ташкент)
                </p>
                <hr className="my-[20px] bg-black h-[2px]" />
                <div className="py-[20px]">
                  <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                    12:00 – 13:30{" "}
                  </p>
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Круглый стол
                  </p>
                  <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                    Как стать агротуристическим объектом
                  </h1>

                  <p className="text-left text-[16px] font-noto font-light">
                    Как разрабатывать и монетизировать агро-инициативы для
                    туризма? Как предпринимателю превратить свой агропроект в
                    туристический объект? Круглый стол с практиками и
                    экспертами.
                  </p>
                  <div className="py-[20px]">
                    <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                      Участники
                    </p>

                    <ul className="text-[14px] font-noto font-light text-[#1e1e24]">
                      <li>
                        Мухаммад Умар Аслам, эксперт в области агротуризма и
                        сельского хозяйства, сотрудник Международного аграрного
                        университета в Узбекистане (Исламабад)
                      </li>
                      <li>
                        Шухрат Разаков, рыбный ресторанный комплекс “Эко-туризм”
                        (Термез)
                      </li>
                      <li>
                        Саодат Мурадуллаева, зам. директора и амбассадор
                        UzumFermer, сомелье (Ташкент)
                      </li>
                    </ul>
                  </div>
                  <p className="text-[14px] font-noto font-light text-[#1e1e24]">
                    Модератор <br />
                    Фаррух Ирназаров, глава представительства Chemonics
                    International в Узбекистане (Ташкент)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] bg-gray-200  rounded-md">
              <div
                className="w-full h-[75px] text-white py-[20px] px-[30px]"
                style={{ backgroundColor: "rgb(155, 155, 170)" }}
              >
                <h2 className="text-[22px] font-noto font-semibold">
                  Зал 2, этаж 3
                </h2>
              </div>
              <div className="py-[40px] px-[30px] bg-[#E9E9EC]">
                <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                  10:30 – 11:30{" "}
                </p>
                <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                  Доклад
                </p>
                <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                  Pост присутствия международных гостиничных сетей: плюсы и
                  минусы для локального рынка
                </h1>
                <p className="text-left text-[16px] font-noto font-light">
                  Приход в страну глобальных гостиничных сетей — важный
                  репутационный рубеж и позитивный экономический сигнал для
                  инвесторов и крупного бизнеса. Однако международные сети и их
                  стабильное соотношение цены, качества и уровня сервиса не
                  всегда оказывают позитивный эффект на игроков локального
                  рынка. Зачем уже сложившейся экосистеме гостеприимства
                  зарубежные гостиничные сети? И как локальному отелю выжить и
                  преуспеть в состязании с глобальными гигантами.
                </p>

                <div className="pt-[510px]" />
                <div className="flex justify-between gap-2 items-center">
                  <Avatar className="w-[70px] h-[70px]">
                    <AvatarImage
                      src="/f_Artem-Klykov_225x1.jpg"
                      alt="@shadcn"
                      className=" object-cover"
                    />
                    <AvatarFallback>f_Artem</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-left text-[14px] font-noto font-light">
                      Артем Клыков, эксперт по развитию гостиничного бизнеса,
                      профессор Международного университета туризма “Шелковый
                      путь” (Самарканд), университета Swissam (Санкт-Петербург)
                    </p>
                  </div>
                </div>
                <hr className="my-[20px] bg-black h-[2px]" />
                <div className="py-[20px]">
                  <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                    12:00 – 13:00
                  </p>
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Тренинг для гидов
                  </p>
                  <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                    Гиды как проводники в устойчивый туризм
                  </h1>

                  <p className="text-left text-[16px] font-noto font-light">
                    Почти любой турист скажет, что хотел бы путешествовать
                    ответственно и экологично. Но большинству не хватает
                    элементарных знаний и понятных инструкций, что именно нужно
                    для этого делать (и не делать). Именно гиды, которые всегда
                    находятся в прямом контакте с гостями, могут выполнить эту
                    просветительскую и разъясняющую функцию.
                  </p>
                  <div className="pt-[210px]" />
                  <div className="flex justify-between gap-2 items-center">
                    <Avatar className="w-[70px] h-[70px]">
                      <AvatarImage
                        src="/f_B-Davies_500x604.jpg"
                        alt="@shadcn"
                        className=" object-cover"
                      />
                      <AvatarFallback>f_Artem</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-left text-[14px] font-noto font-bold">
                        Ведущие
                      </p>
                      <p className="text-left text-[14px] font-noto font-light">
                        Barnaby Davies (Гастингс), основатель консалтинговой
                        компании EastguidesWest
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] bg-gray-200  rounded-md">
              <div
                className="w-full h-[75px] text-white py-[20px] px-[30px]"
                style={{ backgroundColor: "rgb(155, 155, 170)" }}
              >
                <h2 className="text-[22px] font-noto font-semibold">
                  Зал 3, этаж 2
                </h2>
              </div>
              <div className="py-[40px] px-[30px] bg-[#E9E9EC]">
                <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                  10:30 – 11:30
                </p>
                <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                  Круглый стол
                </p>
                <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                  Гиды VS Туроператоры
                </h1>
                <p className="text-left text-[16px] font-noto font-light">
                  Чего хотят гиды от туроператоров и чего туроператоры ждут от
                  гидов? Почему сотрудничество получается, а почему — нет?
                  Публичный «батл» на площадке Samarkand Tourism Forum. Пусть
                  победит сильнейший!
                </p>

                <div className="pt-[530px]" />
                <div>
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Гиды
                  </p>

                  <ul className="text-[14px] font-noto font-light text-[#1e1e24]">
                    <li>Камила Гафурова, гид (Самарканд)</li>
                    <li>Собир Пулатов, гид-сопровождающий (Бухара)</li>
                    <li>Аслбек Садыров, гид-сопровождающий (Ташкент)</li>
                  </ul>
                </div>
                <div className="mb-[30px]">
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Туроператоры
                  </p>

                  <ul className="text-[14px] font-noto font-light text-[#1e1e24]">
                    <li>
                      Владимир Долгий, учредитель туристической компании Asia
                      Adventures (Ташкент)
                    </li>
                    <li>
                      Тимур Алимов, директор туроператора Минзифа Тревел
                      (Бухара)
                    </li>
                    <li>
                      Мадина Мирзаева, туроператор Orient Star Group (Ташкент)
                    </li>
                    <li>Гаухар Досова, туроператор Friendly Tours (Алматы)</li>
                  </ul>
                </div>
                <p className="text-[14px] font-noto font-light text-[#1e1e24]">
                  Модератор <br />
                  Саид Муминов, гид Silk Road Destination (Самарканд)
                </p>
                <hr className="my-[20px] bg-black h-[2px]" />
                <div className="py-[20px]">
                  <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                    12:00 – 13:00
                  </p>
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Воркшоп
                  </p>
                  <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                    Идеальное коммерческое предложение для MICE-клиентов
                  </h1>

                  <p className="text-left text-[16px] font-noto font-light">
                    Что такое “идеальное коммерческое предложение” для
                    MICE-клиента? Из чего оно состоит и как его создать?
                    Подробный план действий от клиентского ТЗ и оценки своих
                    возможностей, до бюджетирования, правил коммуникации с
                    клиентом и анализа уже реализованного проекта.
                  </p>
                  <div className="pt-[220px]" />
                  <div>
                    <p className="text-left text-[14px] font-noto font-bold">
                      Ведущие
                    </p>
                    <p className="text-left text-[14px] font-noto font-light">
                      Мария Крылова, MICE эксперт (Москва) и Екатерина Гутникова
                      MICE эксперт (Санкт-Петербург)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white w-full my-[45px] px-5 sm:px-[300px]">
          <div className="container mx-auto py-[45px]">
            <p className="font-noto text-[22px] font-semibold text-[#1e1e24]">
              13:00 – 14:30 &ensp;&ensp;&ensp;&ensp; Обед
            </p>
          </div>
        </div>

        <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[300px]">
          <div
            className="grid gap-4 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-2 
                lg:grid-cols-2 
                xl:grid-cols-3"
          >
            <div className="flex flex-col w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] bg-gray-200  rounded-md">
              <div
                className="w-full h-[75px] text-white py-[20px] px-[30px]"
                style={{ backgroundColor: "rgb(155, 155, 170)" }}
              >
                <h2 className="text-[22px] font-noto font-semibold">
                  Зал 1, этаж 4
                </h2>
              </div>
              <div className="py-[40px] px-[30px] bg-[#E9E9EC]">
                <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                  14:30 – 16:00
                </p>
                <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                  Круглый стол ассоциаций
                </p>
                <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                  Гармонизация целей ассоциаций туризма Центральной Азии и
                  Шелкового пути. Что можно сделать вместе?
                </h1>
                <p className="text-left text-[16px] font-noto font-light">
                  Какие вопросы стоят на повестке туристических ассоциаций? Как
                  ассоциации могут помочь друг другу в исполнении собственных и
                  совместных задач? STF предоставляет спикерам ассоциаций
                  туризма Центральной Азии свою площадку для публичной
                  стратегической сессии по гармонизации (синхронизации)
                  тактических и стратегических целей.
                </p>

                <div className="py-[20px]">
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Участники
                  </p>

                  <ul className="text-[14px] font-noto font-light text-[#1e1e24]">
                    <li>
                      Раиса Ибрагимова, исполнительный директор, Ассоциация
                      гостеприимства Узбекистана (Ташкент)
                    </li>
                    <li>
                      Джамшед Юсупов, исполнительный директор общественной
                      организации “Ассоциация развития туризма Зарафшана”
                      (Худжанд)
                    </li>
                    <li>
                      Феруза Франс, Ассоциация устойчивого туризма Узбекистана
                      (Ташкент)
                    </li>
                    <li>
                      Сергей Глуховеров, основатель тур компании Travel Experts,
                      член правления КАТО (Бишкек)
                    </li>
                    <li>
                      Михаил Петрушков, председатель правления Таджикской
                      ассоциации туризма, основанной на сообществах ТАТОС
                      (Душанбе)
                    </li>
                  </ul>
                </div>
                <div className="pt-[190px]" />
                <p className="text-[14px] font-noto font-light text-[#1e1e24]">
                  Модератор <br />
                  Диёр Мирзаахмедов, председатель Маркетинговой ассоциации
                  Узбекистана (Ташкент)
                </p>

                <hr className="my-[20px] bg-black h-[2px]" />

                <div className="pt-[600px]" />

                <hr className="my-[20px] bg-black h-[2px]" />
                <div className="py-[20px]">
                  <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                    16:30 – 18:00
                  </p>
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Круглый стол
                  </p>
                  <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                    Женское предпринимательство как устойчивая практика
                  </h1>

                  <p className="text-left text-[16px] font-noto font-light">
                    Исследователи экономических трендов единогласны в оценке:
                    уровень развития женского предпринимательства и активное
                    участие женщин в рынке труда напрямую коррелирует с
                    динамикой роста ВВП. Индекс женской предпринимательской
                    активности в Центральной Азии растет с каждым годом и
                    особенно высок в сфере услуг и торговле. Какие факторы
                    помогают или мешают женщинам начинать свой бизнес в
                    Центральной Азии, почему женщинам важно выходить из
                    обстоятельств неоплачиваемого и прекарного труда и как
                    именно туризм может стать дверью к экономической
                    самостоятельности женщин в регионе?
                  </p>
                  <div className="py-[20px]">
                    <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                      Участники
                    </p>

                    <ul className="text-[14px] font-noto font-light text-[#1e1e24]">
                      <li>
                        Зульфия Таирова, создатель женского центра и
                        аутентичного SPA-салона Tarika, организатор женских
                        трансформационных туров в Бухару и города Узбекистана
                        (Бухара)
                      </li>
                      <li>
                        Юлдуз Мамадиерова, владелец текстильного производства
                        (Шахрисабз)
                      </li>
                      <li>
                        Банур Абдиева с презентацией "Роль женщины в развитии
                        устойчивого туризма", Дестинация Каракол (Каракол)
                      </li>
                      <li>
                        Асель Дилдебаева, владелец глэмпинга "Royal Gate", Тосор
                        (Южный берег Иссык-Куля)
                      </li>
                      <li>
                        Назира Аманова, соучредитель туристической компании
                        Mumtoz tour (Ташкент)
                      </li>
                    </ul>
                  </div>
                  <p className="text-[14px] font-noto font-light text-[#1e1e24]">
                    Модератор <br />
                    Лола Сайфи, основатель галереи Human House (Ташкент)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] bg-gray-200  rounded-md">
              <div
                className="w-full h-[75px] text-white py-[20px] px-[30px]"
                style={{ backgroundColor: "rgb(155, 155, 170)" }}
              >
                <h2 className="text-[22px] font-noto font-semibold">
                  Зал 2, этаж 3
                </h2>
              </div>
              <div className="py-[40px] px-[30px] bg-[#E9E9EC]">
                <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                  14:00 – 15:00
                </p>
                <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                  Мастер-класс
                </p>
                <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                  Как отельерам автоматизировать свой бизнес
                </h1>
                <p className="text-left text-[16px] font-noto font-light">
                  В какой-то момент для бизнеса становится важно
                  автоматизировать те процессы, которые поддаются автоматизации.
                  Особенно это важно в сфере услуг, где важно организовать
                  бесперебойный, стабильный и качественный сервис. Например, в
                  отеле. Как собрать воедино все процессы управления отелем? Как
                  работать с отчетностью и кадрами в условиях атоматизации? И
                  как продвигать свой бренд на рынке при помощи инструментов
                  автоматизации?
                </p>

                <div className="pt-[510px]" />
                <div className="flex justify-between gap-2 items-center">
                  <Avatar className="w-[70px] h-[70px]">
                    <AvatarImage
                      src="/f_Doniyor-Khaydarov_.jpg"
                      alt="@shadcn"
                      className=" object-cover"
                    />
                    <AvatarFallback>f_Doniyor</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-left text-[14px] font-noto font-light">
                      Дониер Хайдаров, эксперт в области туризма и
                      гостеприимства, директор офиса Exely в Узбекистане
                      (Ташкент)
                    </p>
                  </div>
                </div>
                <hr className="my-[20px] bg-black h-[2px]" />
                <div className="py-[20px]">
                  <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                    15:30 – 16:30
                  </p>
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Мастер-класс
                  </p>
                  <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                    Все, что вы хотели знать про кулинарный туризм (но боялись
                    спросить)
                  </h1>

                  <p className="text-left text-[16px] font-noto font-light">
                    Страны Центральной Азии созданы для такого направления, как
                    гастротуризм. Но как его практиковать правильно? Каким
                    бывает food tourism и как можно действительно глубоко
                    погрузить гостя в национальные кулинарные традиции, но
                    избежать клише. Об этом мастер-класс от шефа и гида по
                    кулинарному Сан-Себастьяну.
                  </p>
                  <div className="pt-[100px]" />
                  <div className="flex justify-between gap-2 items-center">
                    <Avatar className="w-[70px] h-[70px]">
                      <AvatarImage
                        src="/f_Gregory-Schaefer_1.jpg"
                        alt="@shadcn"
                        className=" object-cover"
                      />
                      <AvatarFallback>f_Gregory</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-left text-[14px] font-noto font-light">
                        Gregory Schaefer, foodtours-гид и основатель Basque
                        Bites (Сан-Себастьян)
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-[20px] bg-black h-[2px]" />

                <div className="py-[20px]">
                  <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                    17:00 – 18:00
                  </p>
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Мастер-класс
                  </p>
                  <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                    Сервис на 200%
                  </h1>

                  <p className="text-left text-[16px] font-noto font-light">
                    Туристы, которые путешествуют по всему миру, уже достаточно
                    опытны и их не просто удивить достопримечательностями.
                    Важно, чтобы тур был не просто переездом из точки А в точку
                    Б, а стал настоящим путешествием, наполненным приятными
                    сюрпризами. Как сделать стандартный тур более эмоционально
                    насыщенным и удивить самых бывалых туристов? Как улучшить
                    сервисную составляющую вашего тур продукта?
                  </p>
                  <div className="pt-[500px]" />
                  <div className="flex justify-between gap-2 items-center">
                    <Avatar className="w-[70px] h-[70px]">
                      <AvatarImage
                        src="/f_Sergei-Glukhoverov.jpg"
                        alt="@shadcn"
                        className=" object-cover"
                      />
                      <AvatarFallback>Glukhoverov</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-left text-[14px] font-noto font-light">
                        Сергей Глуховеров, основатель тур компании Travel
                        Experts, член правления КАТО (Бишкек)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] bg-gray-200  rounded-md">
              <div
                className="w-full h-[75px] text-white py-[20px] px-[30px]"
                style={{ backgroundColor: "rgb(155, 155, 170)" }}
              >
                <h2 className="text-[22px] font-noto font-semibold">
                  Зал 3, этаж 2
                </h2>
              </div>
              <div className="py-[40px] px-[30px] bg-[#E9E9EC]">
                <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                  14:00 – 15:00
                </p>
                <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                  Мастер-класс
                </p>
                <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                  Что значит устойчивость на примере туризма в Центральной Азии
                </h1>
                <p className="text-left text-[16px] font-noto font-light">
                  Центральная Азия - это не туристический масс-маркет. Регион -
                  обладает уникальной исторической инфраструктурой и природными
                  ландшафтами: от пустынь Туркменистана и Узбекистана до
                  семитысячников Кыргызстана и Таджикистана. Как продавать
                  турпродукты и организовывать сервис на 4* в особо уязвимых
                  дестинациях Центральной Азии? И как организовать устойчивость
                  не на словах, а на деле? Об этом расскажет Елена Калашникова,
                  эксперт с 25-летним опытом сотрудничества и развития новых
                  турпродуктов и территорий в Центральной Азии.
                </p>

                <div className="pt-[390px]" />

                <div className="flex justify-between gap-2 items-center">
                  <Avatar className="w-[70px] h-[70px]">
                    <AvatarImage
                      src="/f_Elena-Kalashnikova.jpg"
                      alt="@shadcn"
                      className=" object-cover"
                    />
                    <AvatarFallback>Kalashnikova</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-left text-[14px] font-noto font-light">
                      Елена Калашникова, основатель и директор туроператора
                      «Ak-Sai Travel», партнер франчайзинговой сети «As a Nomad»
                      (Бишкек)
                    </p>
                  </div>
                </div>
                <hr className="my-[20px] bg-black h-[2px]" />
                <div className="py-[20px]">
                  <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                    15:30 – 16:30
                  </p>
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Мастер-класс
                  </p>
                  <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                    Adventure Tourism
                  </h1>

                  <p className="text-left text-[16px] font-noto font-light">
                    Куда движется приключенческий туризм как направление? Кто
                    ваш турист, как выглядит его путь и почему не стоит
                    продавать приключенческие туры как массовые? Глубокий анализ
                    трендов и подходов в приключенческом туризме, а так же
                    разбор успешных кейсов из Центральной Азии.
                  </p>
                  <div className="pt-[190px]" />
                  <div className="flex justify-between gap-2 items-center">
                    <Avatar className="w-[70px] h-[70px]">
                      <AvatarImage
                        src="/f_Alovaddin-Kalonov_.jpg"
                        alt="@shadcn"
                        className=" object-cover"
                      />
                      <AvatarFallback>f_Alovaddin</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-left text-[14px] font-noto font-light">
                        Аловаддин Калонов, владелец Paramount Journey (Худжанд)
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-[20px] bg-black h-[2px]" />

                <div className="py-[20px]">
                  <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                    17:00 – 18:00
                  </p>
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Воркшоп
                  </p>
                  <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                    Аналитика своими руками для маркетинга и создания
                    турпродукта
                  </h1>

                  <p className="text-left text-[16px] font-noto font-light">
                    Как туристической организации — от тур агенств до
                    туристического ведомства — организовать свою аналитику? Из
                    каких источников брать данные и на что обращать внимание?
                    Воркшоп по организации аналитики данных, работе с их
                    источниками и инструментами контент-анализа.
                  </p>
                  <div className="pt-[520px]" />
                  <div className="flex justify-between gap-2 items-center">
                    <Avatar className="w-[70px] h-[70px]">
                      <AvatarImage
                        src="/f_Nadezhda-Ebel_240x.png"
                        alt="@shadcn"
                        className=" object-cover"
                      />
                      <AvatarFallback>f_Nadezhda</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-left text-[14px] font-noto font-light">
                        Надежда Эбель, директор аналитического центра
                        Profi.travel (Москва)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-full my-[45px] px-5 sm:px-[300px]">
          <div className="container mx-auto py-[45px]">
            <p className="font-noto text-[22px] font-semibold text-[#1e1e24]">
              18:30 – 21:00 &ensp;&ensp;&ensp;&ensp; Гала-ужин и вручение премий
              STF Award
            </p>
          </div>
        </div>

        <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[300px]">
          <h1 className="text-left text-[42px] font-noto font-semibold mb-10">
            <span className="bg-white">Суббота, 10 февраля</span>
          </h1>

          <div
            className="grid gap-4 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-2 
                lg:grid-cols-2 
                xl:grid-cols-3"
          >
            <div className="flex flex-col w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] bg-gray-200  rounded-md">
              <div
                className="w-full h-[75px] text-white py-[20px] px-[30px]"
                style={{ backgroundColor: "rgb(155, 155, 170)" }}
              >
                <h2 className="text-[22px] font-noto font-semibold">
                  Зал 1, этаж 4
                </h2>
              </div>
              <div className="py-[40px] px-[30px] bg-[#E9E9EC]">
                <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                  10:00 – 11:00
                </p>
                <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                  Доклады
                </p>
                <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                  Устойчивость для дестинаций
                </h1>
                <p className="text-left text-[16px] font-noto font-light">
                  Успешные кейсы туристических дестинаций, активно внедряющих
                  практики устойчивости.
                </p>

                <div className="py-[20px]">
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Участники
                  </p>

                  <ul className="text-[14px] font-noto font-light text-[#1e1e24]">
                    <li>
                      Чынгыз Мааткеримов, "Каракол. Устойчивая модель. Начать с
                      малого", Дестинация Каракол (Каракол)
                    </li>
                    <li>
                      Mohamed Raaidh, консультант по туризму и гостеприимству
                      (Мале)
                    </li>
                  </ul>
                </div>

                <div className="pt-[300px]" />
                <p className="text-[14px] font-noto font-light text-[#1e1e24]">
                  Модератор <br />
                  Михаил Шамшидов, со-основатель STF (Ташкент)
                </p>

                <hr className="my-[20px] bg-black h-[2px]" />
                <div className="py-[20px]">
                  <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                    11:30 – 12:30
                  </p>
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Круглый стол
                  </p>
                  <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                    Развитие туризма в приграничных регионах
                  </h1>

                  <p className="text-left text-[16px] font-noto font-light">
                    В приграничных регионах Центральной Азии заложен
                    значительный потенциал для развития туризма. Это обусловлено
                    экономическими и культурными связями, а также географической
                    близостью туристических центров соседних стран. Кроме
                    очевидных трудностей, которые возникают при пересечении
                    границ, для увеличения взаимных туристических потоков
                    существуют и другие препятствия. Например, недостаточная
                    осведомленность сторон о возможностях друг друга, изменениях
                    в миграционном законодательстве, и неразвитость партнерских
                    связей. В ходе дискуссии эксперты туризма из приграничных
                    областей Кыргызской Республики, Таджикистана и Узбекистана
                    обсудят как преодолеваемые вызовы, так и возникающие
                    возможности, которые представляют собой эти уникальные
                    регионы для туристической индустрии.
                  </p>
                  <div className="py-[20px]">
                    <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                      Участники
                    </p>

                    <ul className="text-[14px] font-noto font-light text-[#1e1e24]">
                      <li>
                        Асель Арзива, автор туров, основатель “Mazzali travel”
                        (Наманган)
                      </li>
                      <li>Фарангиз Шарипова, гид, автор туров (Худжанд)</li>
                      <li>
                        Шухрат Раззаков, предприниматель, основатель рыбного
                        ресторана и агропредприятия “Экотуризм” (Термез)
                      </li>
                      <li>
                        Мунира Акилова, дизайнер и основатель MunirBrand,
                        тренер, Сертифицированный гид на Шелковом пути WFTGA
                        (Худжанд)
                      </li>
                      <li>
                        Азамат Жаманкулов, экс-Министр культуры, туризма и
                        информации КР (Бишкек)
                      </li>
                    </ul>
                  </div>
                  <p className="text-[14px] font-noto font-light text-[#1e1e24]">
                    Модератор <br />
                    Михаил Шамшидов, со-основатель STF (Ташкент)
                  </p>
                </div>

                <hr className="my-[20px] bg-black h-[2px]" />
                <div className="py-[20px]">
                  <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                    13:00 – 14:00
                  </p>
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Мастер-класс
                  </p>
                  <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                    Как сделать ресторан для туристов
                  </h1>

                  <p className="text-left text-[16px] font-noto font-light">
                    Как сделать ресторан, ориентированный на туристов? Какие
                    ошибки допускают рестораторы на этом пути.
                  </p>
                  <div className="pt-[500px]" />
                  <div className="flex justify-between gap-2 items-center">
                    <Avatar className="w-[70px] h-[70px]">
                      <AvatarImage
                        src="/f_Sanjar-Maksudov_15.jpg"
                        alt="@shadcn"
                        className=" object-cover"
                      />
                      <AvatarFallback>Maksudov_15</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-left text-[14px] font-noto font-light">
                        Санжар Максудов, основатель управляющей группы Smart
                        Group, серийный IT-предприниматель, создатель платформы
                        для управления ресторанами Jowi, президент Гильдии
                        рестораторов Узбекистана
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] bg-gray-200  rounded-md">
              <div
                className="w-full h-[75px] text-white py-[20px] px-[30px]"
                style={{ backgroundColor: "rgb(155, 155, 170)" }}
              >
                <h2 className="text-[22px] font-noto font-semibold">
                  Зал 2, этаж 3
                </h2>
              </div>
              <div className="py-[40px] px-[30px] bg-[#E9E9EC]">
                <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                  10:00 – 11:00
                </p>
                <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                  Мастер-класс
                </p>
                <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                  Как практиковать устойчивость в MICE-проектах
                </h1>
                <p className="text-left text-[16px] font-noto font-light">
                  MICE-проекты ассоциируются скорее с перепотреблением, чем с
                  устойчивыми практиками. Это отчасти справедливо: люди, как
                  правило, потребляют интенсивнее, когда им не нужно оплачивать
                  свои счета напрямую. Может ли MICE вообще быть устойчивым и
                  как можно практиковать ответственный туризм в MICE-проектах?
                </p>

                <div className="pt-[230px]" />
                <div className="flex justify-between gap-2 items-center">
                  <Avatar className="w-[70px] h-[70px]">
                    <AvatarImage
                      src="/f_S-Hulsman-Louwers_.jpg"
                      alt="@shadcn"
                      className=" object-cover"
                    />
                    <AvatarFallback>Hulsman</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-left text-[14px] font-noto font-bold">
                      Участники
                    </p>
                    <p className="text-left text-[14px] font-noto font-light">
                      Sjannie Hulsman-Louwers (Антверпен), основатель
                      консалтинговой компании EastguidesWest
                    </p>
                  </div>
                </div>
                <hr className="my-[20px] bg-black h-[2px]" />
                <div className="py-[20px]">
                  <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                    11:30 – 12:30
                  </p>
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Мастер-класс
                  </p>
                  <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                    Работа с проблемными туристами
                  </h1>

                  <p className="text-left text-[16px] font-noto font-light">
                    Что делать, когда турист недоволен чем-то? А если эмоции при
                    этом выражаются открыто, на публике, демонстративно? Как
                    действовать в конфликтных ситуациях и спасти гостю отпуск,
                    себе — репутацию, и добиться хороших отзывов даже в самой
                    сложной ситуации? Мастер-класс с разбором конкретных кейсов
                    и примеров того, как мыслит турист.
                  </p>
                  <div className="pt-[530px]" />
                  <div className="flex justify-between gap-2 items-center">
                    <Avatar className="w-[70px] h-[70px]">
                      <AvatarImage
                        src="/f_Evgenii-Zalberg_25.jpg"
                        alt="@shadcn"
                        className=" object-cover"
                      />
                      <AvatarFallback>f_Evgenii</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-left text-[14px] font-noto font-light">
                        Евгений Зальберг, турлидер, эксперт по качеству и
                        конфликтологии в туризме (Нетания / Санкт-Петербург)
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-[20px] bg-black h-[2px]" />

                <div className="py-[20px]">
                  <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                    13:00 – 14:00
                  </p>
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Мастер-класс
                  </p>
                  <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                    Expectation-managment
                  </h1>

                  <p className="text-left text-[16px] font-noto font-light">
                    Что такое “управление ожиданиями” и почему поставщику
                    туристических услуг и самому туристу нужно знать, чего
                    ожидать друг от друга. Люка Лессер расскажет, чего от
                    путешествия по Центральной Азии ожидают туристы из разных
                    стран.
                  </p>
                  <div className="pt-[480px]" />
                  <div className="flex justify-between gap-2 items-center">
                    <Avatar className="w-[70px] h-[70px]">
                      <AvatarImage
                        src="/f_Luca-Laesser_200x2.jpg"
                        alt="@shadcn"
                        className=" object-cover"
                      />
                      <AvatarFallback>Laesser_200x2</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-left text-[14px] font-noto font-light">
                        Luca Lesser, со-основатель Kalpak Travel (Аграу)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] bg-gray-200  rounded-md">
              <div
                className="w-full h-[75px] text-white py-[20px] px-[30px]"
                style={{ backgroundColor: "rgb(155, 155, 170)" }}
              >
                <h2 className="text-[22px] font-noto font-semibold">
                  Зал 3, этаж 2
                </h2>
              </div>
              <div className="py-[40px] px-[30px] bg-[#E9E9EC]">
                <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                  10:00 – 11:00
                </p>
                <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                  Воркшоп
                </p>
                <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                  Как быть в тренде: работа с трендами в туризме
                </h1>
                <p className="text-left text-[16px] font-noto font-light">
                  Туристическому бизнесу — как и любому другому — важно
                  понимать, распознавать и взаимодействовать с динамическими
                  показателями, которые формируют клиентские ожидания от
                  продукта или услуги. То есть, с трендами. Как работать с ними?
                  И какие социально-экономические тренды в туризме актуальны
                  именно сейчас? Как их искать и применять, чтобы на их основе
                  создавать туристические продукты? Разберем конкретные кейсы
                  участников. <br />
                  <span className="bg-[#FDD896]">
                    Требуется{" "}
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdmrwK-Gy9COLyTqzRnnkM8N_r0J1_RU7epuD98pSDIewmHTw/viewform"
                      className="border-b border-[#1560d0] text-[#1560d0]"
                    >
                      предварительная запись.
                    </a>
                  </span>
                </p>

                <div className="pt-[150px]" />

                <div className="flex justify-between gap-2 items-center">
                  <Avatar className="w-[70px] h-[70px]">
                    <AvatarImage
                      src="/f_Nadezhda-Ebel_240x.png"
                      alt="@shadcn"
                      className=" object-cover"
                    />
                    <AvatarFallback>f_Nadezhda</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-left text-[14px] font-noto font-light">
                      Надежда Эбель, директор аналитического центра Profi.travel
                      (Москва)
                    </p>
                  </div>
                </div>
                <hr className="my-[20px] bg-black h-[2px]" />
                <div className="py-[20px]">
                  <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                    11:30 – 12:30
                  </p>
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Мастер-класс
                  </p>
                  <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                    Является ли «зелёный» отель более прибыльным?
                  </h1>

                  <p className="text-left text-[16px] font-noto font-light">
                    Eco Nubia, расположенный на острове Биге на реке Нил в
                    Асуане (Египет) - образцовый пример устойчивой дестинации.
                    Комплекс Eco Nubia расположен на опустевших 40 лет назад
                    традиционных домах на острове Биге и, строго придерживаясь
                    принципов экологичности и устойчивости, хорошо зарабатывает.
                    А еще - инвестирует заработанное в инфрастуктуру острова,
                    нубийской архитектуры, и сохранение местной кухни и ремесел.
                    Неужели «зеленый» отель может быть таким прибыльным? И как
                    этого добиться?
                  </p>
                  <div className="pt-[430px]" />
                  <div className="flex justify-between gap-2 items-center">
                    <Avatar className="w-[70px] h-[70px]">
                      <AvatarImage
                        src="/f_Ahmed-Yehia_250x25.jpg"
                        alt="@shadcn"
                        className=" object-cover"
                      />
                      <AvatarFallback>f_Ahmed</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-left text-[14px] font-noto font-light">
                        Ahmed Yehia, основатель Eco Nubia Ecolodge и STO-Egypt
                        (Асуан)
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-[20px] bg-black h-[2px]" />

                <div className="py-[20px]">
                  <p className="text-[18px] font-noto font-semibold text-[#1e1e24] mb-[30px]">
                    13:00 – 14:00
                  </p>
                  <p className="text-[14px] font-noto font-bold text-[#1e1e24]">
                    Партнерская сессия
                  </p>
                  <h1 className="text-[22px] font-noto font-semibold mb-[25px]">
                    Региональная экономическая интеграция в сфере туризма
                  </h1>

                  <p className="text-left text-[16px] font-noto font-light">
                    Центр международного частного предпринимательства CIPE
                    представляет программу под названием "Улучшение бизнес-среды
                    в Центральной Азии" (IBECA). Ключевая цель программы -
                    выявить основные барьеры, которые мешают туристическому
                    сектору Центральной Азии активно развиваться и предложить
                    решения для бизнеса. Эксперты CIPE расскажут об уже
                    проведенных исследованиях и текущих выводах, и приглашают
                    практиков туризма к обсуждению экономических «болей»
                    индустрии и способов их преодолеть.
                  </p>
                  <div className="pt-[100px]" />
                  <div className="py-[20px]">
                    <ul className="text-[14px] font-noto font-light text-[#1e1e24]">
                      <li>
                        Алишер Шерназаров, эксперт по разработке Национальной
                        Деловой Повестки программы IBECA (CIPE) Таджикистан
                        (Душанбе)
                      </li>
                      <li>
                        Мохру Махмудова, представитель программы IBECA (CIPE) в
                        Таджикистане (Душанбе)
                      </li>
                      <li>
                        Малика Мукимова, представитель программы IBECA (CIPE) в
                        Узбекистане (Ташкент)
                      </li>
                      <li>
                        Раиса Ибрагимова, исполнительный директор, Ассоциация
                        гостеприимства Узбекистана (Ташкент)
                      </li>
                      <li>
                        Михаил Петрушков, председатель правления Таджикской
                        ассоциации туризма, основанной на сообществах (ТАТОС)
                        (Душанбе)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="px-5 sm:px-[300px]">
        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
          <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-pre-wrap sm:whitespace-nowrap sm:max-w-[140px] w-full">
            <p>14:00 – 16:00</p>
          </div>

          <div className="w-full">
            <h2 className=" text-[24px] font-noto font-semibold mb-5">
              STF Плов
            </h2>
          </div>
        </div>
        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
          <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-pre-wrap sm:whitespace-nowrap sm:max-w-[140px] w-full">
            <p>16:00 – 17:30</p>
          </div>

          <div className="w-full">
            <small className="font-bold"> Круглый стол</small>
            <h2 className=" text-[24px] font-noto font-semibold mb-5">
              Современное образование в сфере туризма и гостеприимства. Как
              объединить потребности индустрии и возможности учебных заведений
            </h2>
            <div className="py-[20px]">
              <ul className="text-[14px] font-noto font-light text-[#1e1e24]">
                <li>
                  Наталия Гринева, генеральный управляющий Movenpick Samarkand
                  (Самарканд)
                </li>
                <li>
                  Валерия Александрова, операционный менеджер Hilton Samarkand
                  Regency, СТЦ Silk Road Samarkand
                </li>
                <li>
                  Alex Condor, профессор TEAM University (Пало Альто, Ташкент)
                </li>
                <li>
                  Эрдоган Экиз, профессор, декан Central Asian University
                  (Ташкент)
                </li>
                <li>
                  Мунира Обидова, первый заместитель директора филиала ГУ
                  Международного университета туризма и предпринимательства
                  Таджикистана в Согдийской области (Худжанд)
                </li>
              </ul>
            </div>
            <div className="py-[20px]">
              <p className="text-left text-[16px] font-noto font-light">
                Модератор <br />
                Артем Клыков, эксперт по развитию гостиничного бизнеса,
                профессор Международного университета туризма “Шелковый путь”
                (Самарканд), университета Swissam (Санкт-Петербург)
              </p>
              <p className="py-[20px] text-left text-[16px] font-noto font-light">
                В настоящее время индустрия гостеприимства находится в стадии
                активного развития и трансформации. Все больше специалистов
                требуется для развития проектов в гостиничной и ресторанной
                сферах. Трансформируются и меняются также знания, навыки и
                компетенции, которые ожидает рынок от новых профессионалов
                индустрии. Готовы ли учебные заведения к новым вызовам рынка,
                что выбирают студенты, какие образовательные программы и форматы
                наиболее востребованы сейчас и будут актуальны завтра — обсудим
                на круглом столе вместе с представителями индустрии и экспертами
                сферы профессионального образования, а студенты Silk Road
                Univercity проведут презентацию своего исследования о проблемах
                городской навигации.
              </p>

              <p className="text-left text-[16px] font-noto font-light">
                <span className="bg-[#FDD896] ">
                  Эта сессия состоится в новом месте.
                </span>{" "}
                Мероприятие будет проходить на территории "SILK ROAD
                International University of Tourism and Cultural Heritage" по
                адресу Университетский бульвар, 17.
              </p>
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
          <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-pre-wrap sm:whitespace-nowrap sm:max-w-[140px] w-full">
            <p>18:00 – 19:30</p>
          </div>

          <div className="w-full">
            <small className="font-bold">(Неформальный) круглый стол</small>
            <h2 className=" text-[24px] font-noto font-semibold mb-5">
              Как рассказывать туристам об узбекском вине
            </h2>
            <div className="py-[20px]">
              <ul className="text-[14px] font-noto font-light text-[#1e1e24]">
                <li>
                  Кирилл Бурлуцкий, винный писатель, судья винных конкурсов,
                  основатель Школы сомелье WineJet (Санкт-Петербург, Ташкент
                </li>
                <li>
                  Gregory Shaefer, foodtours-гид и основатель Basque Bites
                  (Сан-Себастьян)
                </li>
              </ul>
            </div>
            <div className="py-[20px]">
              <p className="text-left text-[16px] font-noto font-light">
                Доклад с дегустацией и общение в формате speakeasy, а так же
                дегустация вин от UzumFermer.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-10" />

        <section id="culture">
          <h1 className="text-[36px] font-noto pb-10 font-semibold text-[#1e1e24]">
            Культурная программа
          </h1>

          <div className="flex sm:flex-nowrap flex-wrap justify-evenly items-center gap-5 sm:gap-10 pb-8">
            <div className="w-full sm:w-[560px]">
              <p className="font-noto text-[12px] tracking-[2.5px] font-semibold mb-5">
                Каждый день в 11:00 и 14:30
              </p>
              <p className="font-noto text-[22px] font-semibold">
                Иммерсивный аудио-спектакль IN.VISIBLE SAMARKAND
              </p>
              <p className="font-noto text-[14px]  font-semibold">
                Категории билетов: Basic & In.Visible Samarkand или STF All
                Inclusive
              </p>
              <p className="font-noto text-[16px] font-light">
                Группа зрителей надевает наушники и отправляется исследовать
                город. В наушниках звучит голос героя, который ведет группу по
                самым интересным и неочевидным местам, и рассказывает личную
                историю, тесно связанную с историей Самарканда.
              </p>
              <ul className="font-noto text-[16px] font-light">
                <li>
                  Спектакль проходит параллельно другим мероприятиям форума.
                </li>
                <li>
                  <span className="bg-[#FDD896]">
                    Требуется предварительная регистрация
                  </span>
                  , так как количество участников ограничено.
                </li>
                <li>Cпектакль доступен на русском и английском языках.</li>
                <li>Продолжительность спектакля около 1,5 часов.</li>
              </ul>
              <div className="pt-[60px]">
                <button className="ring-[3px] ring-[#1560d0] text-[#1560d0] text-[14px] px-[15px] h-[30px] font-notoarial font-bold ">
                  Подробнее о спектакле
                </button>
              </div>
            </div>
            <div>
              <img src="/CP3B4771.jpg" alt="" />
            </div>
          </div>

          <div className="flex sm:flex-nowrap flex-wrap justify-evenly items-center gap-5 sm:gap-10 pb-8">
            <div className="w-full sm:w-[560px]">
              <p className="font-noto text-[12px] tracking-[2.5px] font-semibold mb-5">
                Пятница 09 февраля, 19:30 - 21:00
              </p>
              <p className="font-noto text-[22px] font-semibold">
                Праздничный Gala Dinner, командная
                интеллектуально-развлекательная игра Мозгобойня и вручение
                премии STF Award
              </p>
              <p className="font-noto text-[14px]  font-semibold">
                Категории билетов: Basic & Gala Dinner или STF All Inclusive
              </p>
              <p className="font-noto text-[16px] font-light">
                Церемония вручения ежегодной премии STF Award за лучшие проекты
                и выдающиеся достижения в сфере туризма Центральной Азии. А так
                же командная интеллектуально-развлекательная игра «Мозгобойня» и
                вкусный ужин в компании участников, спикеров и партнеров форума.
                Мероприятие будет проходить в ресторане Samarkand Saroy по
                адресу ул. А. Темура, 117.
              </p>
            </div>
            <div>
              <img src="/img_gala-dinner.png" alt="" />
            </div>
          </div>
        </section>

        <section id="datetime">
          <h1 className="text-[36px] font-noto pb-10 font-semibold text-[#1e1e24]">
            Место проведения
          </h1>
          <div className="w-full sm:w-[560px]">
            <p className="font-noto text-[16px] font-light">
              Основные мероприятия форума проводятся в корпусе Самаркандского
              института иностранных языков на улице Гагарина 43
            </p>
          </div>
        </section>
      </div>
      <div className="w-full h-[450px] my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d646.621042595674!2d66.93975149137556!3d39.67501958922424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19741647d86f%3A0x8ed89b47f4114589!2sSamarqand%20davlat%20chet%20tillar%20instituti%2C%20Sharq%20tillari%20fakulteti!5e0!3m2!1sru!2sde!4v1705660507440!5m2!1sru!2sde"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="px-5 sm:px-[300px]">
        <section id="reviews">
          <h1 className="text-[36px] font-noto pb-10 font-semibold text-[#1e1e24]">
            Отзывы
          </h1>
          <div className="flex flex-wrap sm:flex-nowrap justify-evenly  gap-5">
            <div  className="w-full max-w-[500px]">
              <iframe
                name="f02b84e635b38ab95"
                width="100%"
                height="350px"
                data-testid="fb:post Facebook Social Plugin"
                title="fb:post Facebook Social Plugin"
                allow="encrypted-media"
                src="https://www.facebook.com/v18.0/plugins/post.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfb1113f10b8743c3d%26domain%3Dsamarkandforum.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fsamarkandforum.com%252Ffa45707c2c57777d1%26relation%3Dparent.parent&amp;container_width=817&amp;href=https%3A%2F%2Fwww.facebook.com%2Fshiutha%2Fposts%2Fpfbid0GDJD4cKfCjMbQrm8UTajTRtMdhJkSurLh9unmJ7ETJwyTEbbwfPv3bCC37vkW5ZUl&amp;locale=en_GB&amp;sdk=joey&amp;show_text=true&amp;width=500"
              ></iframe>
              <iframe
                name="fc28d1029f94a3c3f"
                width="100%"
                height="1000px"
                data-testid="fb:post Facebook Social Plugin"
                title="fb:post Facebook Social Plugin"
                allow="encrypted-media"
                src="https://www.facebook.com/v18.0/plugins/post.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dffe0f48974715d45c%26domain%3Dsamarkandforum.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fsamarkandforum.com%252Ffa45707c2c57777d1%26relation%3Dparent.parent&amp;container_width=775&amp;href=https%3A%2F%2Fwww.facebook.com%2FMuhammadumaraslam64%2Fposts%2Fpfbid02x6uuk9857wtr2DTYtjKEgYyq1CqcEt16wNjvUs6gNbDuZVV3hi5bGW5Csjyk3oCEl&amp;locale=en_GB&amp;sdk=joey&amp;show_text=true&amp;width=500"
              ></iframe>
            </div>
            <div  className="w-full max-w-[500px]">
              <iframe
                name="f3e0888dffceaffa9"
                width="100%"
                height="250px"
                data-testid="fb:post Facebook Social Plugin"
                title="fb:post Facebook Social Plugin"
                allow="encrypted-media"
                src="https://www.facebook.com/v18.0/plugins/post.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df88fb1c326c2ee3ed%26domain%3Dsamarkandforum.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fsamarkandforum.com%252Ffa45707c2c57777d1%26relation%3Dparent.parent&amp;container_width=803&amp;href=https%3A%2F%2Fwww.facebook.com%2Fsjannie.hulsman%2Fposts%2Fpfbid0cRn2rTA4BQTvsz2JsqsLjiQjyVo2twuj5XZegLXVqKMQqfKfSqGKxDWBv9rdhsoyl&amp;locale=en_GB&amp;sdk=joey&amp;show_text=true&amp;width=500"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
     
      <section id="partners">
        <div className="px-5 sm:px-[300px] bg-[#E9E9EC]">
          <div className="flex justify-center items-center flex-col py-[90px]">
            <h2 className="text-[36px] font-semibold font-noto  mb-10">
              Официальный партнер
            </h2>

            <img src="/logo_SSIFL_662x662.png" alt="" />
            <p className="text-center font-noto text-[22px] font-semibold my-10 w-full sm:w-[560px]">
              Самаркандский институт иностранных языков (СамГИИЯ)
            </p>
          </div>
        </div>
        <div className="px-5 sm:px-[300px] my-10">
          <div className="flex justify-center items-center flex-col py-[90px]">
            <h2 className="text-[36px] font-semibold font-noto  mb-10">
              Партнеры
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-20 my-10">
            <a href="https://www.usaid.gov/ru/uzbekistan" target="_blank">
              <img
                src="/logo_USAID_Vert_Ru_2.png"
                className="w-[200px]"
                alt=""
              />
            </a>
            <a href="https://exely.com/" target="_blank">
              <img
                src="/exely_purple_with_tr.png"
                className="w-[200px]"
                alt=""
              />
            </a>
            <a href="https://www.cipe.org/" target="_blank">
              <img src="/logo_CIPE_630x630.png" className="w-[200px] " alt="" />
            </a>
            <a href="https://www.facebook.com/SilkrRoadTravelAcademy/" target="_blank">
              <img src="/logo_SRTA_200x200.jpeg" className="w-[200px]" alt="" />
            </a>
            <a href="https://silkroaddestinations.com/" target="_blank"> 
              <img src="/logo_SRD_600x396.png" className="w-[200px]" alt="" />
            </a>
            <a href="https://invisible.uz/" target="_blank">
              <img
                src="/logo_Invisible-Samar.png "
                className="w-[200px]"
                alt=""
              />
            </a>

            <a href="https://sunhouseteam.com/" target="_blank"> 
              <img
                src="/logo_SunHouse-Team_5.png "
                className="w-[200px]"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="px-5 sm:px-[300px] my-10">
          <div className="flex justify-center items-center flex-col py-[90px]">
            <h2 className="text-[36px] font-semibold font-noto  mb-10">
              Информационные партнеры
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-20 my-10">
            <a href="https://marketing.uz/" target="_blank">
              <img src="/logo_marketing-uz.png" className="w-[200px]" alt="" />
            </a>
            <a href="https://kun.uz/" target="_blank">
              <img
                src="/logo_KUN-UZ_300x300.jpg"
                className="w-[200px]"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="px-5 sm:px-[300px] my-10">
          <div className="flex justify-center items-center flex-col py-[90px]">
            <h2 className="text-[36px] font-semibold font-noto  mb-10">
              HoReCa партнеры
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-20 my-10">
            <a href="https://www.zarafshonparkside.com/en/home/" target="_blank">
              <img
                src="/logo_Zarafshon-Parks.png"
                className="w-[200px]"
                alt=""
              />
            </a>
            <a href="https://www.booking.com/hotel/uz/emirkhan.ru.html" target="_blank">
              <img
                src="/logo_EmirHan_331x124.png"
                className="w-[200px]"
                alt=""
              />
            </a>
            <a href="https://www.google.com/maps/place/Mramor+steyk+house/@39.684766,66.9877498,18z/data=!4m6!3m5!1s0x3f4d19d3c5e138c7:0xa460c9f9bd08fe8e!8m2!3d39.6846278!4d66.9876168!16s%2Fg%2F11tcwp1w84?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
              <img
                src="/logo_Mramor-Steak-Ho.jpg"
                className="w-[200px]"
                alt=""
              />
            </a>
            <a href="https://www.google.com/maps/place/Green+Tree+Restaurant/@39.6470645,66.9932774,17z/data=!3m1!4b1!4m6!3m5!1s0x3f4d1fd6234b3157:0xe946444b3a79564f!8m2!3d39.6470645!4d66.9932774!16s%2Fg%2F11kk16fz2y?hl=ru&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
              <img
                src="/logo_Green-Tree-Rest.jpg"
                className="w-[200px]"
                alt=""
              />
            </a>
            <a href="https://www.booking.com/hotel/uz/comfort-samarkand.ru.html?label=gen173rf-1BCAso7gFCEWNvbWZvcnQtc2FtYXJrYW5kSAdYA2juAYgBAZgBIbgBGcgBDNgBAegBAYgCAaICEnNhbWFya2FuZGZvcnVtLmNvbagCA7gC6cmYvAbAAgHSAiRhMDM2ODFkMy05MDMxLTQ3MzItYTQ4ZC0zYTAyZDMzMmZmMTbYAgXgAgE&sid=ad178aec9b51f3e69affe537e983fc7a&dist=0&keep_landing=1&sb_price_type=total&type=total&" target="_blank">
              <img src="/logo_Comfort-Hotel.jpg" className="w-[200px]" alt="" />
            </a>
            <a href="https://www.radissonhotels.com/en-us/hotels/radisson-individuals-panarams-tashkent" target="_blank">
              <img src="/logo_panarams_442x11.png" className="w-full" alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
