export default function Home() {
  return (
    <>
      <div className="relative h-[100dvh] sm:h-[60dvh]">
        <div className="bg-hero" />
        <div className="flex flex-col xl:flex-row relative z-10">
          <div className="flex flex-col p-5 sm:ps-[300px] pt-[150px] text-center">
            <div className="w-full sm:w-[760px]">
              <h1 className="text-white text-[43px] sm:text-[86px] font-noto font-semibold text-start leading-[80px] mb-5">
                Samarkand Tourism Forum
              </h1>
              <p className="text-start text-muted text-[20px] font-noto whitespace-pre-wrap ">
                Независимые бизнес-ивенты для участников туристического сектора
                Центрально-Азиатского региона <br />
                Главное событие для создателей тревел-впечатлений и продавцов
                туристических услуг - форум в Самарканде 2025
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 sm:px-[300px]">
        <h1 className="font-noto text-[24px] sm:text-[48px] my-10 sm:my-20 font-semibold text-[#1e1e24] ">
          Мы не договорили!
        </h1>
        <p className="font-notoarial text-start text-[18px] font-light text-[#1e1e24]">
          STF 2024 позади, но, чтобы было не так утомительно ждать следующего
          Форума, который состоится 14-15 февраля 2025 года, мы приготовили для
          вас целую серию интересных и полезных событий. Samarkand Tourism Forum
          растет и мы приглашаем друзей, партнеров и единомышленников провести
          этот год вместе с нами. Со-организатор программ STF в 2024 году:
          Проект USAID по развитию предпринимательства и бизнес-среды.
        </p>
        <hr className="my-10" />

        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
          <div className="  text-[18px] leading-[1.35] font-semibold font-noto  max-w-[140px] w-full">
            <p>28-30 июня 2024</p>
            <p>Самарканд (Узбекистан)</p>
          </div>

          <div>
            <h2 className=" text-[#1560d0] text-[24px] font-noto font-semibold mb-5">
              <span className="inline-block pe-4">✅</span>
              <a
                href="https://samarkandforum.com/tpost/besviyd1y1-kursi-povisheniya-kvalifikatsii"
                target="_blank"
                className="border-b border-[#1560d0]"
              >
                Переподготовка и повышение квалификации&ensp;
              </a>
              <span className="text-[#1e1e24]">
                для отельеров и самозанятых предпринимателей в сфере туризма из
                Навоинской области
              </span>
            </h2>

            <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
              STF и{" "}
              <a
                href="https://www.facebook.com/SilkrRoadTravelAcademy/"
                target="_blank"
                className="border-b border-[#1560d0] text-[#1560d0]"
              >
                Silk Road Travel Academy
              </a>{" "}
              провели трехдневный курс по переподготовке и повышения
              квалификации для отельеров, а также для самозанятых
              предпринимателей из Навоинской области Узбекистана. Программа для
              отельеров включает темы про устойчивое гостеприимство,
              энергосберегающий стиль управления зданиями, увеличение доходности
              бизнеса отеля с помощью автоматизации и инновационных IT-решений.
              Для самозанятых - об организации услуг по размещению в сельской
              местности, про гастрономия в сельской местности, а также про
              эффективную работу с сувенирами.
            </p>
          </div>
        </div>
        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
          <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full">
            <p>17-19 сентября 2024</p>
            <p>Париж (Франция)</p>
          </div>

          <div className="w-full">
            <h2 className="text-[#1560d0] text-[24px] font-noto font-semibold mb-5">
              <span className="inline-block pe-4">✅</span>
              <a
                href="https://samarkandforum.com/tpost/4uc9yo9ju1-covmestnii-stend-stf-na-iftm-top-resa-v"
                target="_blank"
                className="border-b border-[#1560d0]"
              >
                STF на IFTM Top Resa
              </a>
            </h2>

            <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
              Европейский рынок туризма является одним из самых стабильных и
              традиционных для Центральной Азии. Участие на международных
              туристических ярмарках - важный и необходимый инструмент для
              продвижения туристических возможностей и турпотока в регион. Мы
              знаем, что далеко не все туроператоры и представители малого
              бизнеса могут позволить себе выезд на международную ярмарку и
              покупку индивидуального стенда, и предлагаем участвовать в этих
              событиях коллективно единым стендом, совместно с STF.
            </p>
          </div>
        </div>
    
        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
          <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full">
            <p> Август - ноябрь 2024</p>
            <p>Онлайн</p>
          </div>

          <div className="w-full">
            <h2 className="text-[#1560d0] text-[24px] font-noto font-semibold mb-5">
              <span className="text-[#1e1e24]">
                {" "}
                STF Plus. Видео-стримы на нашем{" "}
              </span>
              <a
                href="https://www.youtube.com/@samarkandforum"
                target="_blank"
                className="border-b border-[#1560d0]"
              >
                Youtube-канале
              </a>
            </h2>

            <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
              Со-основатель STF, международный эксперт по развитию туризма в
              странах Шелкового пути Михаил Шамшидов беседует с десятью
              практиками туризма из разных уголков земного шара об устойчивости,
              интеграции и о самых интересных туристических трендах и практиках.
              Расписание трансляций и информация о гостях стримов будет
              опубликована в официальных соцсетях STF.
            </p>
          </div>
        </div>
        <hr className="my-10" />

        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
          <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full">
            <p>9-11 октября 2024</p>
            <p>Римини (Италия)</p>
          </div>

          <div className="w-full">
            <h2 className="text-[#1560d0] text-[24px] font-noto font-semibold mb-5">
              <span className="text-[#1e1e24]"> STF на </span>
              <a
                href="https://en.ttgexpo.it/"
                target="_blank"
                className="border-b border-[#1560d0]"
              >
                TTG Rimini
              </a>
            </h2>

            <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
              Европейский рынок туризма является одним из самых стабильных и
              традиционных для Центральной Азии. Участие на международных
              туристических ярмарках - важный и необходимый инструмент для
              продвижения туристических возможностей и турпотока в регион. Мы
              знаем, что далеко не все туроператоры и представители малого
              бизнеса могут позволить себе выезд на международную ярмарку и
              покупку индивидуального стенда, и предлагаем участвовать в этих
              событиях коллективно единым стендом, совместно с STF.
            </p>
          </div>
        </div>
        <hr className="my-10" />

        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
          <div className="  text-[18px] leading-[1.35] font-semibold font-noto max-w-[140px] w-full">
            <p> Ноябрь 2024</p>
            <p>Самарканд, Бухара (Узбекистан)</p>
          </div>

          <div className="w-full">
            <h2 className="text-[#1560d0] text-[24px] font-noto font-semibold mb-5">
              <span className="text-[#1e1e24]">
                {" "}
                STF Road Show для туроператоров Таджикистана
              </span>
            </h2>

            <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
              4-дневные Road Show для туристических фирм Таджикистана и
              Кыргызстана по Самарканду и Бухаре для знакомства с туристической
              инфраструктурой Узбекистана и тренинги от партнера STF “{" "}
              <a
                href="https://www.facebook.com/SilkrRoadTravelAcademy/"
                target="_blank"
                className="border-b border-[#1560d0] text-[#1560d0]"
              >
                Silk Road Travel Academy
              </a>{" "}
              ” по разработке совместных маркетинг-стратегий, устойчивому
              туризму, работе с онлайн-агрегаторами и экономике впечатлений.
              Центральная Азия это туристический анклав, который будет
              развиваться быстрее и качественней, если мы будем создавать
              туристические продукты вместе. В фокусе STF - налаживание и
              углубление такого качественного сотрудничества между странами
              Центральной Азии.
            </p>
          </div>
        </div>

        <hr className="my-10" />

        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
          <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full">
            <p>19-21 ноября 2024</p>
            <p> Барселона (Испания)</p>
          </div>

          <div className="w-full">
            <h2 className="text-[#1560d0] text-[24px] font-noto font-semibold mb-5">
              <span className="text-[#1e1e24]"> STF на </span>
             
              <a
                href="https://www.sihe.ch/en/"
                target="_blank"
                className="border-b border-[#1560d0]"
              >
                 Swiss International Holiday Exhibition 2024
              </a>
            </h2>

            <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
              Европейский рынок туризма является одним из самых стабильных и
              традиционных для Центральной Азии. Участие на международных
              туристических ярмарках - важный и необходимый инструмент для
              продвижения туристических возможностей и турпотока в регион. Мы
              знаем, что далеко не все туроператоры и представители малого
              бизнеса могут позволить себе выезд на международную ярмарку и
              покупку индивидуального стенда, и предлагаем участвовать в этих
              событиях коллективно единым стендом, совместно с STF.
            </p>
          </div>
        </div>
        <hr className="my-10" />

        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
          <div className="  text-[18px] leading-[1.35] font-semibold font-noto  max-w-[140px] w-full">
            <p> 17-20 ноября 2024</p>
            <p> Самарканд, Бухара (Узбекистан)</p>
          </div>

          <div className="w-full">
            <h2 className="text-[#1560d0] text-[24px] font-noto font-semibold mb-5">
              <span className="text-[#1e1e24]">
                STF Road Show для туроператоров Кыргызской Республики и
                Таджикистана
              </span>
            </h2>

            <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
              4-дневные Road Show для туристических фирм Таджикистана и
              Кыргызстана по Самарканду и Бухаре для знакомства с туристической
              инфраструктурой Узбекистана и тренинги от партнера STF “{" "}
              <a
                href="https://www.facebook.com/SilkrRoadTravelAcademy/"
                target="_blank"
                className="border-b border-[#1560d0] text-[#1560d0]"
              >
                Silk Road Travel Academy
              </a>{" "}
              ” по разработке совместных маркетинг-стратегий, устойчивому
              туризму, работе с онлайн-агрегаторами и экономике впечатлений.
              Центральная Азия это туристический анклав, который будет
              развиваться быстрее и качественней, если мы будем создавать
              туристические продукты вместе. В фокусе STF - налаживание и
              углубление такого качественного сотрудничества между странами
              Центральной Азии.
            </p>
          </div>
        </div>

        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
          <div className="  text-[18px] leading-[1.35] font-semibold font-noto  max-w-[140px] w-full">
            <p> 21-23 ноября 2024</p>
            <p> Ташкент, (Узбекистан)</p>
          </div>

          <div className="w-full">
            <h2 className="text-[#1560d0] text-[24px] font-noto font-semibold mb-5">
              <span className="text-[#1e1e24]">STF на </span>
              <a
                href="https://titf.uz/"
                target="_blank"
                className="border-b border-[#1560d0]"
              >
                TITF
              </a>
            </h2>

            <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
              TITF - место встречи для игроков узбекского туристического
              сектора, где STF не только присутствует в виде стенда, но и
              проводит свой MeetUp для потенциальных гостей, партнеров и
              спикеров предстоящего форума.
            </p>
          </div>
        </div>

        <hr className="py-10" />

        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
          <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-pre-wrap sm:whitespace-nowrap sm:max-w-[140px] w-full">
            <p>24-26 апреля 2024</p>
            <p>Алматы (Казахстан)</p>
          </div>

          <div className="w-full">
            <h2 className="text-[#1560d0] text-[24px] font-noto font-semibold mb-5">
              <span className="inline-block pe-4">✅</span>
              <a
                href="https://samarkandforum.com/tpost/froi7ymvy1-stf-prinyal-uchastie-v-kitf-2024-v-almat"
                target="_blank"
                className="border-b border-[#1560d0]"
              >
                STF на KITF 2024 в Алматы
              </a>
            </h2>

            <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24] text-wrap">
              STF всегда уделяет особое внимание развитию корпоративного сектора
              в туризме Центральной Азии. Казахстан - один из лидеров
              корпоративного и MICE туризма региона. Туристическая и отельная
              инфраструктуры Астаны и Алматы позволяют проводить корпоративные
              мероприятия разных, в том числе крупных, масштабов. Мы будем рады
              познакомиться с потенциальными партнерами и спикерами STF 2025 на
              площадке KITF.
            </p>
          </div>
        </div>
        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
          <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full">
            <p> Июнь 2024</p>
            <p>Онлайн</p>
          </div>

          <div>
            <h2 className=" text-[#1560d0] text-[24px] font-noto font-semibold mb-5">
              <span className="inline-block pe-4">✅</span>
              <a
                href="https://www.youtube.com/playlist?list=PLFXHglCF_XaRdkXD05uy6TqjB8bBBlG8V"
                target="_blank"
                className="border-b border-[#1560d0]"
              >
                Лидеры туризма Центральной Азии: опыт, партнерства, перспективы.
              </a>
              <span className="text-[#1e1e24]">
                Видео-стримы на нашем Youtube-канале
              </span>
            </h2>

            <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
              STF всегда уделяет особое внимание развитию корпоративного сектора
              в туризме Центральной Азии. Казахстан - один из лидеров
              корпоративного и MICE туризма региона. Туристическая и отельная
              инфраструктуры Астаны и Алматы позволяют проводить корпоративные
              мероприятия разных, в том числе крупных, масштабов. Мы будем рады
              познакомиться с потенциальными партнерами и спикерами STF 2025 на
              площадке KITF.
            </p>
          </div>
        </div>
        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20">
          <div className="  text-[18px] leading-[1.35] font-semibold font-noto  max-w-[140px] w-full">
            <p>7-8 июня 2024</p>
            <p>Иссык-Куль (Кыргызская Республика)</p>
          </div>

          <div>
            <h2 className=" text-[#1560d0] text-[24px] font-noto font-semibold mb-5">
              <span className="inline-block pe-4">✅</span>
              <span className="text-[#1e1e24]">STF на выставке IITF 2024</span>
            </h2>

            <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
              Кыргызстан привлекает путешественников, интересующихся
              альпинизмом, горными трекингами и другими активными видами отдыха
              и аутентичного туризма. Дестинации Кыргызстана задают высокую
              планку устойчивости и уровня сервиса для других дестинаций и
              турпродуктов региона. На ITF мы будем следить за развитием старых
              и новых дестинаций, и выбирать интересные кейсы и спикеров для
              программы STF 2025.
            </p>
          </div>
        </div>
        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-x-20 mb-10">
          <div className="  text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full">
            <p> 25 cентября 2024</p>
            <p>Бишкек (Кыргызстан)</p>
          </div>

          <div className="w-full">
            <h2 className="text-[#1560d0] text-[24px] font-noto font-semibold mb-5">
              <span className="inline-block pe-4">✅</span>
              <a
                href="https://samarkandforum.com/ru/projects/travel-tech-day-bishkek"
                target="_blank"
                className="border-b border-[#1560d0]"
              >
                TravelTech Day Bishkek 2024
              </a>
            </h2>

            <p className="font-notoarial text-start text-[16px] font-light text-[#1e1e24]">
              Приглашаем TravelTech-компании и стартапы из Центральной Азии,
              работающие с IT-технологиями в индустриях туризма и
              гостеприимства, имеющие как минимум MVP. Ключевые эксперты
              индустрии, выберут 3-х победителей, которым будет оказана
              поддержка в поиске партнеров на рынке ЦА. Презентуйте свои
              проекты, найдите партнеров и откройте новые горизонты для вашего
              бизнеса!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
