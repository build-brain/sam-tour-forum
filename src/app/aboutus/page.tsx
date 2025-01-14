"use client";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutUs() {
  const [activeSection, setActiveSection] = useState<string>("owners");

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
        О нас
      </h1>

      <div className="flex  flex-wrap sticky top-24 gap-4 items-center z-[50]">
        <button
          onClick={() => handleScrollTo("owners")}
          className={`rounded-[30px] border-2 border-[#9b9baa] py-3 px-5 text-[12px] ${
            isActive("owners") ? "bg-[#9b9baa] text-white" : "bg-white"
          }`}
        >
          Основатели
        </button>

        <button
          onClick={() => handleScrollTo("projects")}
          className={`rounded-[30px] border-2 border-[#9b9baa] py-3 px-5 text-[12px] ${
            isActive("projects") ? "bg-[#9b9baa] text-white" : "bg-white"
          }`}
        >
          Проектная команда
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
          onClick={() => handleScrollTo("news")}
          className={`rounded-[30px] border-2 border-[#9b9baa] py-3 px-5 text-[12px] ${
            isActive("news") ? "bg-[#9b9baa] text-white" : "bg-white"
          }`}
        >
          Новости
        </button>
      </div>
      <p className="text-[16px] font-light font-notoarial text-[#1e1e24] py-8">
        Samarkand Tourism Forum - это деловая площадка для профи туризма стран
        Шелкового пути, объединяющая туроператоров, гидов, отельеров, туристские
        сервисы и тревел-стартапы. Здесь вы найдете единомышленников и среду,
        способствующую внедрению технологий, применению современных инструментов
        маркетинга, созданию новых продуктов. Здесь вы будете в тренде! Наш
        контент нацелен на поддержку и развитие турбизнеса и дестинаций. У нас
        регулярно проходят онлайн- и оффлайн-встречи по актуальным темам с
        участием топ-экспертов. Мы открыты для партнёрств и помогаем участникам
        с новыми связями. Подписывайтесь на наш Telegram-канал, чтобы узнавать о
        событиях первыми. И, конечно, мы всегда рады видеть вас на наших
        мероприятиях и встречах!
      </p>

      <section id="owners" className=" scroll-mt-32 sm:scroll-mt-24">
        <h2 className="text-3xl font-bold pt-20">Основатели</h2>

        <div className="grid grid-cols-1  sm:grid-cols-3 gap-2 sm:gap-5">
          <div className="my-10">
            <img   src="/photo_S-Makarov_500x.jpeg"
              alt="Makarov"
              className="w-[360px] h-[360px] mb-5"/>
        
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Сергей Макаров
            </p>
            <p className="text-[#7a7a7a] text-[12px] mb-[18px]">
              Со-основатель, генеральный директор{" "}
              <a
                href="https://silkroadevent.com/"
                className="border-b border-[#1560d0] text-[#1560d0]"
                target="_blank"
                rel="noopener"
              >
                Silk Road Event
              </a>
            </p>
            <hr className="bg-[#2ab7ca] max-w-[50px] mb-[25px] w-full h-[2px]" />
            <div className="whitespace-pre-wrap sm:whitespace-nowrap text-[13px] text-[#1e1e24] font-noto font-light">
              (+996) 772 254 004, makarov@sunhouseteam.com
            </div>
            <div className="flex justify-start gap-5 items-center my-4">
              <div>
                <a
                  href="https://silkroadevent.com/"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    role="presentation"
                    width="30"
                    height="30"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm23.567-58.55v.125a24.723 24.723 0 0 1 0 16.85v.125a25.074 25.074 0 0 1-47.087 0v-.125a24.723 24.723 0 0 1 0-16.85v-.125a25.073 25.073 0 0 1 47.087 0ZM35.23 44.985h-4.663a19.608 19.608 0 0 0 0 10.03h4.663a41.946 41.946 0 0 1 0-10.03Zm.903 15.044h-3.51a20.06 20.06 0 0 0 6.017 6.444 30.466 30.466 0 0 1-2.507-6.444Zm-3.51-20.058h3.51a30.465 30.465 0 0 1 2.432-6.444 20.059 20.059 0 0 0-5.942 6.444Zm8.75 20.058a15.896 15.896 0 0 0 6.093 9.277V60.03h-6.093Zm-1.078-5.014h7.17v-10.03h-7.17a36.004 36.004 0 0 0 0 10.03Zm1.078-15.044h6.093v-9.277a15.896 15.896 0 0 0-6.093 9.277Zm22.44 0h3.51a20.06 20.06 0 0 0-6.017-6.444 30.466 30.466 0 0 1 2.508 6.444Zm-5.24 0a15.896 15.896 0 0 0-6.092-9.277v9.277h6.092Zm-6.092 20.058v9.277a15.896 15.896 0 0 0 6.092-9.277h-6.092Zm0-5.014h7.17a36.004 36.004 0 0 0 0-10.03h-7.17v10.03Zm11.408 5.014a30.466 30.466 0 0 1-2.508 6.444A20.06 20.06 0 0 0 67.4 60.03h-3.51Zm.827-5.014h4.664c.87-3.287.87-6.743 0-10.03h-4.664c.203 1.664.304 3.339.301 5.015a40.487 40.487 0 0 1-.3 5.015Z"
                      fill="#000000"
                    ></path>
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://t.me/visitCA" target="_blank" rel="noopener">
                  <svg
                    role="presentation"
                    width="30"
                    height="30"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z"
                      fill="#000000"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="my-10">
            <img
              src="/f_R-Turakulov_500x50.jpg"
              alt="Turakulov_500x50"
              className="w-[360px] h-[360px]"
            />
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Равшан Туракулов
            </p>
            <p className="text-[#7a7a7a] text-[12px] mb-[18px]">
              Со-основатель, генеральный директор{" "}
              <a
                href="https://silkroaddestinations.com/"
                className="border-b border-[#1560d0] text-[#1560d0]"
                target="_blank"
                rel="noopener"
              >
                SilkRoad Destinations
              </a>
            </p>
            <hr className="bg-[#2ab7ca] max-w-[50px] mb-[25px] w-full h-[2px]" />
          </div>
          <div className="my-10">
            <img
              src="/photo_M-Shamshidov_5.jpg"
              alt="Shamshidov_5"
              className="w-[360px] h-[360px]"
            />
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Михаил Шамшидов
            </p>

            <p className="text-[#7a7a7a] text-[12px] mb-[18px]">
              Со-основатель, эксперт по развитию туризма,{" "}
              <a
                href="https://linktr.ee/tourismolog"
                className="border-b border-[#1560d0] text-[#1560d0]"
                target="_blank"
                rel="noopener"
              >
                Tourismolog
              </a>
            </p>
            <hr className="bg-[#2ab7ca] max-w-[50px] mb-[25px] w-full h-[2px]" />
            <div className="whitespace-pre-wrap sm:whitespace-nowrap text-[13px] text-[#1e1e24] font-noto font-light">
              (+996) 772 254 004, makarov@sunhouseteam.com
            </div>
            <div className="flex justify-start gap-5 items-center my-4">
              <div>
                <a
                  href="https://silkroadevent.com/"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    role="presentation"
                    width="30"
                    height="30"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm23.567-58.55v.125a24.723 24.723 0 0 1 0 16.85v.125a25.074 25.074 0 0 1-47.087 0v-.125a24.723 24.723 0 0 1 0-16.85v-.125a25.073 25.073 0 0 1 47.087 0ZM35.23 44.985h-4.663a19.608 19.608 0 0 0 0 10.03h4.663a41.946 41.946 0 0 1 0-10.03Zm.903 15.044h-3.51a20.06 20.06 0 0 0 6.017 6.444 30.466 30.466 0 0 1-2.507-6.444Zm-3.51-20.058h3.51a30.465 30.465 0 0 1 2.432-6.444 20.059 20.059 0 0 0-5.942 6.444Zm8.75 20.058a15.896 15.896 0 0 0 6.093 9.277V60.03h-6.093Zm-1.078-5.014h7.17v-10.03h-7.17a36.004 36.004 0 0 0 0 10.03Zm1.078-15.044h6.093v-9.277a15.896 15.896 0 0 0-6.093 9.277Zm22.44 0h3.51a20.06 20.06 0 0 0-6.017-6.444 30.466 30.466 0 0 1 2.508 6.444Zm-5.24 0a15.896 15.896 0 0 0-6.092-9.277v9.277h6.092Zm-6.092 20.058v9.277a15.896 15.896 0 0 0 6.092-9.277h-6.092Zm0-5.014h7.17a36.004 36.004 0 0 0 0-10.03h-7.17v10.03Zm11.408 5.014a30.466 30.466 0 0 1-2.508 6.444A20.06 20.06 0 0 0 67.4 60.03h-3.51Zm.827-5.014h4.664c.87-3.287.87-6.743 0-10.03h-4.664c.203 1.664.304 3.339.301 5.015a40.487 40.487 0 0 1-.3 5.015Z"
                      fill="#000000"
                    ></path>
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://t.me/visitCA" target="_blank" rel="noopener">
                  <svg
                    role="presentation"
                    width="30"
                    height="30"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z"
                      fill="#000000"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="my-10 scroll-mt-32 sm:scroll-mt-24">
        <h2 className="text-3xl font-bold pt-20 pb-10">Проектная команда</h2>

        <div className="grid grid-cols-1  sm:grid-cols-4 gap-2 sm:gap-10">
          <div className="flex flex-col justify-center items-center mx-auto">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage
                src="/photo_K-Anikeeva_100.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback className="text-[24px]">
                Ксения Аникеева
              </AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Ксения Аникеева
            </p>
            <div className="text-[13px] text-[#1e1e24] font-noto font-light text-center ">
              Продюсер форума, куратор программы и контента
            </div>
            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_T-Mudadov_100x.jpg"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback className="text-[24px]">
                Тахир Мурадов
              </AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Тахир Мурадов
            </p>
            <div className="text-[13px] text-[#1e1e24] font-noto font-light text-center">
              Финансовый отдел
            </div>
          </div>
          <div className="flex flex-col  items-center mx-auto">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage
                src="/photo_D-Bichurina_10 (1).png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback className="text-[24px]">
                Дина Бичурина
              </AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Дина Бичурина
            </p>
            <div className="text-[13px] text-[#1e1e24] font-noto font-light text-center">
              Работа с соцсетями
            </div>
          </div>
          <div className="flex flex-col  items-center mx-auto">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage
                src="/photo_S-Muminov_100x.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback className="text-[24px]">
                Саид Муминов
              </AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Саид Муминов
            </p>
            <div className="text-[13px] text-[#1e1e24] font-noto font-light text-center">
              Координация площадки и работа с локальными партнерами
            </div>
          </div>
          <div className="flex flex-col  items-center mx-auto">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage
                src="/f_K-Gudova_500x500.jpg"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback className="text-[24px]">
                Екатерина Гудова
              </AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Екатерина Гудова
            </p>
            <div className="text-[13px] text-[#1e1e24] font-noto font-light text-center">
              Логистика
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="my-48 scroll-mt-32 sm:scroll-mt-24">
        <h2 className="text-3xl font-bold pt-20 pb-10">Контакты</h2>

        <div className="grid grid-cols-1  gap-2">
          <p className="text-[26px] font-noto font-light">
            team@samarkandforum.com
          </p>
          <p className="text-[26px] font-noto font-light">+998 985-735-511</p>
          <p className="text-[16px] font-noto font-light ">
            Адрес для почтовой корреспонденции <br />
            140157, Самарканд, пл. Кук-Сарай, 1
          </p>
        </div>
        <div className="mt-10">
          <a href="https://t.me/visitCA" target="_blank" rel="noopener">
            <svg
              role="presentation"
              width="48"
              height="48"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z"
                fill="#000000"
              ></path>
            </svg>
          </a>
        </div>
      </section>

      <section id="news" className="mt-[600px] mb-48 scroll-mt-32 sm:scroll-mt-24">
        <h2 className="text-3xl font-bold pt-20 pb-5">Новости</h2>
        <p className="text-[22px] font-light font-notoarial text-[#1e1e24] pb-10">
          Важные события Samarkand Tourism Forum
        </p>

        <div className="grid grid-cols-1  gap-2 sm:gap-5 ">
          <div className="ring-2 ring-gray-600 min-h-[40vh] flex items-center justify-center">
            <span className="text-center">Feed not found.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
