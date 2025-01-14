import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Bazar() {
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
                href="/projects/international-travel-bazaar"
              >
                International Travel Bazaar 2023
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="relative w-full h-[60vh] sm:h-[700px] px-10  sm:px-[300px] flex justify-evenly gap-5 items-center">
        <div className="bg-hero5" />

        <div className="flex flex-col xl:flex-row justify-between relative z-10 items-center">
          <div className="flex flex-col pt-10  text-center">
            <div className="w-full sm:w-[660px]">
              <h1 className="text-white text-[30px] sm:text-[48px] font-noto font-semibold text-start leading-[1.17] mb-5">
                International Travel Bazaar
              </h1>
              <p className="text-start text-muted text-[18px] font-noto whitespace-pre-wrap ">
                Двухдневное очное мероприятие с очень насыщенной программой для
                создателей тревел-впечатлений и продавцов туристических услуг
                Центральной Азии, ориентированных на развитие, сотрудничество и
                поиск новых решений.
              </p>
            </div>
          </div>
          <div className="flex flex-col   pt-10">
            <div className="flex justify-evenly items-center gap-5">
              <svg
                role="presentation"
                width="50px"
                height="50px"
                fill="none"
                stroke="#fff"
                strokeWidth="5.79"
                strokeMiterlimit="10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
              >
                <path d="M83.4 18h8.5v70.3H8.1V18h65.7zM25.7 27.8V8.7M44.3 64.3H25.1M74.3 64.3H55.1M44.3 45.3H25.1M74.3 45.3H55.1M72.4 27.8V8.7"></path>
              </svg>
              <div className="text-white font-normal font-noto text-[18px]">
                Февраль | 2023
              </div>
            </div>
            <div className="flex justify-evenly items-center gap-5 py-4 sm:pt-[60px]">
              <img
                src="/education_location.svg"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <div className="text-white font-normal font-noto text-[18px]">
                Самарканд, СамГИИЯ
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-[60px]">
        <p className="text-start max-w-[560px] w-full font-noto font-light text-[18px] px-5">
          Samarkand Tourism Forum - это международная платформа, созданная для
          профессионалов туристической индустрии и тех, кто хочет расти и
          зарабатывать вместе с нами. Мы приглашаем в Самарканд туроператоров и
          гидов, рестораторов, отельеров и аффилированный с туризмом бизнес,
          представителей креативных индустрий и государственного сектора. В
          течение двух дней практики и инсайдеры туристической индустрии из
          разных стран будут делиться своими идеями и решениями, чтобы вы могли
          больше зарабатывать, успешнее находить клиентов и открывать новые ниши
          и рынки. Только реальные кейсы, актуальные тревел-тенденции и
          проверенные спикерами стратегии, которые сразу можно применять на
          практике.
        </p>
      </div>

      <div className="px-5 sm:px-[300px] py-10">
        <div className="flex flex-wrap justify-evenly items-center gap-6 sm:gap-10 p-4">
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[22%]">
            <img
              src="/Tilda_Icons_40_Print.svg"
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]"
              alt=""
            />
            <p className="font-noto text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-center mt-[10px] sm:mt-[12px] mb-[20px] sm:mb-[25px]">
              2 дня
            </p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[22%]">
            <img
              src="/touragency_globe.svg"
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]"
              alt=""
            />
            <p className="font-noto text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-center mt-[10px] sm:mt-[12px] mb-[20px] sm:mb-[25px]">
              9 стран
            </p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[22%]">
            <img
              src="/Layer_14.svg"
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]"
              alt=""
            />
            <p className="font-noto text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-center mt-[10px] sm:mt-[12px] mb-[20px] sm:mb-[25px]">
              20 событий
            </p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[22%]">
            <img
              src="/Layer_16.svg"
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]"
              alt=""
            />
            <p className="font-noto text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-center mt-[10px] sm:mt-[12px] mb-[20px] sm:mb-[25px]">
              40 спикеров
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap py-20 gap-5">
          <div className="flex  items-center gap-5 ">
            <img
              src="/education_location (1).svg"
              alt=""
              className="w-[50px] h-[50px] text-black"
            />
            <div className="text-black font-semibold font-noto text-[22px]">
              Самарканд
              <p className="font-noto text-[14px] font-light">
                Все мероприятия в рамках Travel Bazaar будут проходить в
                Самарканде. Основной площадкой станет удобно расположенный в
                центре города Институт иностранных языков.
              </p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <img
              src="/Layer_20.svg"
              alt=""
              className="w-[50px] h-[50px] text-black"
            />
            <div className="text-black font-semibold font-noto text-[22px]">
              10 - 11 февраля (Пт, Сб)
              <p className="font-noto text-[14px] font-light">
                Открытие состоится в первый день в Актовом зале Института
                иностранных языков.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[560px] w-full ">
          <h1 className="font-noto font-semibold text-[36px] mb-[40px]">
            День 1. Пятница 10 февраля
          </h1>
          <p className="text-center text-[18px] font-noto font-light">
            Пожалуйста, обратите внимание, что некоторые мероприятия проходят
            параллельно. В программе возможны изменения. Форум идет на русском
            языке, но в некоторых событиях участвуют англоговорящие спикеры. В
            таких случаях организаторами будет предоставлен последовательный
            перевод.
          </p>
        </div>

        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-center sm:items-start  text-center sm:text-left">
          <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full mb-4 sm:mb-0">
            <p>10:00 – 11:45</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start m-0 sm:me-20">
            <img
              src="/img1.jpg"
              className="rounded-full object-cover w-[170px] h-[170px] mx-5"
              alt=""
            />
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-noto font-semibold mb-[15px]">
              Как гиду зарабатывать больше?
              <br />
              <span className="text-[#1e1e24] text-[14px] font-noto font-semibold">
                Панельная дискуссия
              </span>
            </h2>
            <p className="font-notoarial text-[16px] font-light text-[#1e1e24]">
              Гиды - главные проводники для гостей и непосредственные создатели
              туристического опыта. Как им выжить и процветать в условиях
              восстанавливающегося рынка и растущей конкуренции? <br /> <br />
              Равшан Туракулов (директор Silk Road Destinations, Самарканд),
              Шавкат Турдыкулов (Sogda Tour, Самарканд), Наргиза Саломова
              (председатель ассоциации гидов Узбекистана и национальный тренер
              по подготовке гидов WFTGA, Ташкент), Отабек Каршиев (гид высшей
              категории, Ташкент).
              <br /> <br />
              Модератор: Саид Муминов (Silk Road Destinations, Самарканд).
            </p>
          </div>
        </div>

        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-center sm:items-start  text-center sm:text-left">
          <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full mb-4 sm:mb-0">
            <p>10:30 – 11:45</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start m-0 sm:me-20">
            <img
              src="/img7.jpg"
              className="rounded-full object-cover w-[170px] h-[170px] mx-5"
              alt=""
            />
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-noto font-semibold mb-[15px]">
              Мотивация и удержание персонала в туристическом бизнесе: довольный
              сотрудник - счастливый клиент
              <br />
              <span className="text-[#1e1e24] text-[14px] font-noto font-semibold">
                Мастер-класс
              </span>
            </h2>
            <p className="font-notoarial text-[16px] font-light text-[#1e1e24]">
              Как справиться с неконтролируемой текучестью кадров и во сколько
              она реально обходится бизнесу? Почему денежное вознаграждение
              быстро перестаёт работать? Мастер-класс о современной теории
              мотивации, о роли руководителя в работе с персоналом и о том, как
              мотивация сотрудников отражается на ваших клиентах. <br /> <br />
              Татьяна Коваль (эксперт по корпоративной культуре и HR,
              преподаватель, директор по развитию агентства «Апостроф»,
              Ташкент).
            </p>
          </div>
        </div>

        <hr className="my-10" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start  text-center sm:text-left">
          <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full mb-4 sm:mb-0">
            <p>12:00 – 13:15</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start m-0 sm:me-20">
            <img
              src="/img2.jpg"
              className="rounded-full object-cover w-[170px] h-[170px] mx-5"
              alt=""
            />
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-noto font-semibold mb-[15px]">
              Как гиды и водители могут удивить туристов?
              <br />
              <span className="text-[#1e1e24] text-[14px] font-noto font-semibold">
                Мастер-класс
              </span>
            </h2>
            <p className="font-notoarial text-[16px] font-light text-[#1e1e24]">
              Туристов все реже интересуют протокольные маршруты по
              достопримечательностям и затертые до дыр городские легенды. Гид -
              это еще и активный горожанин, который может предложить нечто
              большее: личную историю, неизвестные локации и погружение в
              неформальные быт и историю своей дестинации. Как проводники - гиды
              и водители - могут улучшить свою персональную экспертизу и
              предложить что-то уникальное своим гостям? <br />
              <br />
              Alexandra Tosun (со-основатель INDY GUIDE, Цюрих). <br /> <br />
              Участвуют англоговорящие спикеры. Событие будет содержать
              последовательный перевод. <br />
            </p>
          </div>
        </div>

        <hr className="my-10" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start  text-center sm:text-left">
          <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full mb-4 sm:mb-0">
            <p>12:00 – 13:00</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start m-0 sm:me-20">
            <img
              src="/img5.jpg"
              className="rounded-full object-cover w-[170px] h-[170px] mx-5"
              alt=""
            />
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-noto font-semibold mb-[15px]">
              Продвижение брендов и территорий с помощью экспедиционного формата
              <br />
              <span className="text-[#1e1e24] text-[14px] font-noto font-semibold">
                Мастер-класс
              </span>
            </h2>
            <p className="font-notoarial text-[16px] font-light text-[#1e1e24]">
              Как в рамках одного проекта по продвижению бренда или территории
              получить и яркие нативные видеоролики, и фотографии, и публикации
              в СМИ, и интерес местных жителей, а также решить задачи в сфере PR
              HR и PR GR? Как экспедиционный формат делает всё это возможным -
              на примере совместного проекта крупнейшей золотодобывающей
              компании России "Полюс" и команды путешественников DDEXP. <br />{" "}
              <br />
              Сергей Пищулов (маркетолог и руководитель экспедиционного проекта
              «Градус открытий», Москва).
            </p>
          </div>
        </div>

        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-center sm:items-start  text-center sm:text-left">
          <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full mb-4 sm:mb-0">
            <p>14:00 – 15:15</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start m-0 sm:me-20">
            <img
              src="/img4.jpg"
              className="rounded-full object-cover w-[170px] h-[170px] mx-5"
              alt=""
            />
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-noto font-semibold mb-[15px]">
              Как создавать групповые программы, чтобы туристы чувствовали себя
              как на индивидуальном туре?
              <br />
              <span className="text-[#1e1e24] text-[14px] font-noto font-semibold">
                Мастер-класс
              </span>
            </h2>
            <p className="font-notoarial text-[16px] font-light text-[#1e1e24]">
              Верно ли утверждение, что если турист приобрел групповой тур, то
              его удел — это жизнь по правилам? Но если туристический бизнес
              строится на принципе возвратности туриста, рекомендациях и
              сарафанном радио, то можно ли при групповом туре сделать
              счастливым каждого путешественника? Поговорим о важности
              свободного времени внутри путешествия и о том как у каждого члена
              группы создать ощущение, что он на индивидуальном туре, а не на
              групповом. <br />
              <br />
              Евгений Зальберг (гид, тренер, руководитель направления развития
              бизнеса компании «Турмашина», Санкт-Петербург).
            </p>
          </div>
        </div>

        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-center sm:items-start  text-center sm:text-left">
          <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full mb-4 sm:mb-0">
            <p>14:00 – 15:15</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start m-0 sm:me-20">
            <img
              src="/img3.jpg"
              className="rounded-full object-cover w-[170px] h-[170px] mx-5"
              alt=""
            />
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-noto font-semibold mb-[15px]">
              Когда туризм идет не по плану: культура против экономики
              <br />
              <span className="text-[#1e1e24] text-[14px] font-noto font-semibold">
                Мастер-класс
              </span>
            </h2>
            <p className="font-notoarial text-[16px] font-light text-[#1e1e24]">
              Довольно часто туристы по незнанию или неосведомленности могут
              оказывать негативное влияние на местную культуру и экономическое
              развитие. Всех туристов можно поделить на две категории – тех, кто
              изучает местную культуру или тех, кто критикует её. Через личные
              истории двух опытных путешественников будут рассмотрены следующие
              вопросы: как превратиться из культурного критика в культурного
              исследователя? Что можно и чего нельзя делать, когда вы
              погружаетесь в местную культуру и хотите внести свой вклад в
              местное экономическое развитие? <br /> <br />
              Jason Brahim (приверженец спортивного и экстремального туризма,
              участник IronMan, Питсбург), Фаррух Ирназаров (глава
              представительства Chemonics International в Узбекистане, Ташкент){" "}
              <br /> <br />
              Участвуют англоговорящие спикеры. Событие будет содержать
              последовательный перевод.
            </p>
          </div>
        </div>

        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-center sm:items-start  text-center sm:text-left">
          <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full mb-4 sm:mb-0">
            <p>15:30 – 16:30</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start m-0 sm:me-20">
            <img
              src="/img24_education-in-t.jpeg"
              className="rounded-full object-cover w-[170px] h-[170px] mx-5"
              alt=""
            />
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-noto font-semibold mb-[15px]">
              Что туризм ждет от образования?
              <br />
              <span className="text-[#1e1e24] text-[14px] font-noto font-semibold">
                Круглый стол
              </span>
            </h2>
            <p className="font-notoarial text-[16px] font-light text-[#1e1e24]">
              За одним столом соберутся те, кто нанимает специалистов
              туристической индустрии и те, кто обучает их, чтобы обсудить
              прошлое, настоящее и будущее индустрии туризма и гостеприимства в
              Узбекистане. Чем они могут поделиться друг с другом, чтобы сделать
              будущее туризма более ярким и плодотворным? Откровенный диалог
              может открыть новые возможности для сотрудничества и обнаружить
              решения для возникающих противоречий. <br /> <br />
              Профессор Эрдоган Экиз (декан TEAM University, Ташкент), Акмалжон
              Одилов (заведующий кафедрой «Общепрофессиональных и специальных
              дисциплин» Международного университета туризма и культурного
              наследия «Шелковый путь», Самарканд), Индира Рахманова (доктор
              наук, Сингапурский Институт развития менеджмента, Ташкент), Малика
              Мирзаева (владелица ресторана и отеля «Platan», Самарканд), Санжар
              Халмурадов (руководитель туроператора Peopletravel, Ташкент),
              Зироат Расулова (основатель Sogda Tour и Silk Tour, Самарканд)
            </p>
          </div>
        </div>

        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-center sm:items-start  text-center sm:text-left">
          <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full mb-4 sm:mb-0">
            <p>15:30 – 16:30</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start m-0 sm:me-20">
            <img
              src="/img26.jpg"
              className="rounded-full object-cover w-[170px] h-[170px] mx-5"
              alt=""
            />
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-noto font-semibold mb-[15px]">
              Каракол. Уникальный путь к дестинации
              <br />
              <span className="text-[#1e1e24] text-[14px] font-noto font-semibold">
                Мастер-класс
              </span>
            </h2>
            <p className="font-notoarial text-[16px] font-light text-[#1e1e24]">
              Альбина Алимова (руководителя дестинации Каракол, менеджер
              проектов Фонда поддержки развития туризма, Бишкек). <br />
              <br />
            </p>
          </div>
        </div>

        <hr className="my-10" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start  text-center sm:text-left">
          <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full mb-4 sm:mb-0">
            <p>15:30 – 16:30</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start m-0 sm:me-20">
            <img
              src="/img8.jpg"
              className="rounded-full object-cover w-[170px] h-[170px] mx-5"
              alt=""
            />
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-noto font-semibold mb-[15px]">
              Как гиду создать персональный бренд в соцсетях?
              <br />
              <span className="text-[#1e1e24] text-[14px] font-noto font-semibold">
                Воркшоп
              </span>
            </h2>
            <p className="font-notoarial text-[16px] font-light text-[#1e1e24]">
              Сегодня недостаточно быть квалифицированным и эрудированным
              профессионалом. Каков ваш уникальный профиль? Чем вы отличаетесь
              от других гидов и что можете предложить вашим гостям? И как все
              это выгодно и адекватно предъявить с помощью соцсетей? Воркшоп по
              созданию персонального бренда для гидов. <br /> <br />
              Камила Гафурова (гид-экскурсовод, преподаватель СамГИИЯ,
              Самарканд).
            </p>
          </div>
        </div>

        <hr className="my-10" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start  text-center sm:text-left">
          <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full mb-4 sm:mb-0">
            <p>16:45 – 18:15</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start m-0 sm:me-20">
            <img
              src="/img9.jpg"
              className="rounded-full object-cover w-[170px] h-[170px] mx-5"
              alt=""
            />
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-noto font-semibold mb-[15px]">
              Сколько стоят "зеленые технологии"?
              <br />
              <span className="text-[#1e1e24] text-[14px] font-noto font-semibold">
                Круглый стол
              </span>
            </h2>
            <p className="font-notoarial text-[16px] font-light text-[#1e1e24]">
              Все вокруг говорят про устойчивый туризм. Но это ведь дорого? Или
              нет? Во сколько туроператору, отельеру или ресторатору обойдется
              эко-ответственный туризм и как быстро удастся его окупить? <br />
              <br />
              Шерзод Каттаходжаев (менеджер проекта ПРООН “Содействие в
              строительстве энергоэффективного сельского жилья в Узбекистане”,
              Ташкент), Martin Petrich (эксперт по устойчивому развитию туризма
              консалтинговой компании mascontour, Берлин), Назира Мийнекеева
              (управляющий сетью отелей Olive Kyrgyzstan, независимый эксперт по
              онлайн продажам ОТА и автоматизации отелей, Бишкек). <br /> <br />
              Модератор: Антон Коваль, эксперт по устойчивому развитию,
              генеральный директор агентства “Апостроф” (Ташкент). <br /> <br />
              Участвуют англоговорящие спикеры. Событие будет содержать
              последовательный перевод. <br /> <br />
            </p>
          </div>
        </div>

        <hr className="my-10" />
        <div className="flex flex-wrap gap-5 items-center">
          <div>
            <img
              src="/cafe_coffeetogo.svg"
              alt=""
              className="w-[45px] h-[45px]"
            />
          </div>
          <div>
            <p className="text-[22px] font-noto font-semibold ">
              Кофе-брейки <br />
              <span className="text-[14px] font-light">
                Перерывы на кофе и нетворкинг в течение дня.
              </span>
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[560px] w-full my-20">
          <h1 className="font-noto font-semibold text-[36px] mb-[40px]">
            Культурная программа
          </h1>
        </div>

        <div className="flex sm:flex-nowrap flex-wrap justify-evenly items-center gap-5 sm:gap-10 mb-[60px]">
          <div className="w-full sm:w-[560px]">
            <p className="font-noto text-[22px] font-semibold mb-[34px]">
              IN.VISIBLE SAMARKAND
            </p>
            <p className="font-noto text-[20px] pb-[26px]  font-light opacity-50">
              15:30 - 17:30
            </p>
            <p className="font-noto text-[16px] font-light">
              IN.VISIBLE SAMARKAND - это иммерсивный аудио-перформанс в жанре
              сайт-специфик, который исполняется прямо на улицах города
              Самарканда. 25 зрителей надевают наушники и отправляются
              исследовать город. Голос героя проведет группу по самым
              интересным, неочевидным и важным местам и улицам, и расскажет свою
              историю, тесно связанную с историей Самарканда. <br /> <br />
              Аудиоспектакль доступен на русском и английском языках. <br />{" "}
              <br />
              Количество участников ограничено. Требуется предварительная
              регистрация. <br /> <br />
              Продолжительность: 100 минут. <br />
            </p>
          </div>
          <div>
            <img src="/img20_invisible-sama.png" alt="" />
          </div>
        </div>

        <div className="flex sm:flex-nowrap flex-wrap justify-evenly items-center gap-5 sm:gap-10 pb-[150px]">
          <div className="w-full sm:w-[560px]">
            <p className="font-noto text-[22px] font-semibold mb-[34px]">
              SPECIAL* ГАЛА-УЖИН И ВРУЧЕНИЕ ПРЕМИИ STF AWARD
            </p>
            <p className="font-noto text-[20px] pb-[26px]  font-light opacity-50">
              19:00 - 21:30
            </p>
            <p className="font-noto text-[16px] font-light">
              Праздничный гала-ужин для гостей Samarkand Tourism Forum и первое
              вручение премии STF Award. Вкусный ужин в ресторане “Самарканд” и
              неформальное общение со спикерами и партнерами STF. <br /> <br />
              *Cобытие не входит в основную деловую программу форума и доступно
              для категории билетов Advanced. Как поднять категорию билетов
              Standart и Student до категории Advanced см. в разделе FAQ
            </p>
          </div>
          <div>
            <img src="/img21_gala-dinner.jpg" alt="" />
          </div>
        </div>

        <div className="mx-auto max-w-[560px] w-full ">
          <h1 className="font-noto text-center font-semibold text-[36px] mb-[40px]">
            День 2. Суббота 11 февраля
          </h1>
          <p className="text-center text-[18px] font-noto font-light">
            Пожалуйста, обратите внимание, что некоторые мероприятия проходят
            параллельно. В программе возможны изменения. Форум идет на русском
            языке, но в некоторых событиях участвуют англоговорящие спикеры. В
            таких случаях организаторами будет предоставлен последовательный
            перевод.
          </p>
        </div>

        <hr className="my-10" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start  text-center sm:text-left">
          <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full mb-4 sm:mb-0">
            <p>10:00 – 11:15</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start m-0 sm:me-20">
            <img
              src="/img10.jpg"
              className="rounded-full object-cover w-[170px] h-[170px] mx-5"
              alt=""
            />
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-noto font-semibold mb-[15px]">
              Точки роста: как сделать город туристской дестинацией №1?
              <br />
              <span className="text-[#1e1e24] text-[14px] font-noto font-semibold">
                Панельная дискуссия
              </span>
            </h2>
            <p className="font-notoarial text-[16px] font-light text-[#1e1e24]">
              Города и дестинации Центральной Азии - всемирно признанные
              туристические жемчужины. Подлинная история, древняя культура и
              уникальные ландшафты привлекают туристов со всего мира. Но через
              какие процессы и проблемы действительно проходят такие дестинации?
              Тысячелетняя история это наследие или проклятье? Нужно ли таким
              городам меняться и со временем переосмыслять свой публичный образ?
              Как сегодня создаются новые туристические «единороги» и с какими
              рисками сталкиваются на этом пути? <br /> <br />
              Татьяна Спурнова (основатель “Бюро трансформаций бизнеса” и
              креативного MICE-агентства MaxMedium, бизнес-наставник, ментор и
              автор книг по MICE и event, Аланья), Диёр Мирзаахмедов
              (Председатель правления Маркетинговой Ассоциации Узбекистана,
              Ташкент), Еркин Тикенов (директор консалтинговой компании Инсайд
              Тревел, кандидат PhD, Алматы), Фозилжон Касимов (глава и
              основатель сервиса и компании Emehmon, Ташкент), Дмитрий
              Мартыненко (директор коммерческого департамента Air Marakanda,
              Самарканд), Инна Пехова (директор по развитию Silk Road Samarkand,
              Самарканд), Нурлан Анарбаев (начальник отдела разработки проектов
              Фонда поддержки развития туризма в Кыргызской Республике, Бишкек),
              Альбина Алимова (руководитель дестинации Каракол, менеджер
              проектов Фонда поддержки развития туризма, Бишкек). <br /> <br />
              Модератор: Михаил Шамшидов (международный эксперт по развитию
              туризма, Ташкент). <br />
            </p>
          </div>
        </div>

        <hr className="my-10" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start  text-center sm:text-left">
          <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full mb-4 sm:mb-0">
            <p>10:00 – 11:15</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start m-0 sm:me-20">
            <img
              src="/img23_insurance-in-t.jpg"
              className="rounded-full object-cover w-[170px] h-[170px] mx-5"
              alt=""
            />
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-noto font-semibold mb-[15px]">
              Как развивать устойчивый туризм на практике? Реальные кейсы из
              Кыргызстана
              <br />
              <span className="text-[#1e1e24] text-[14px] font-noto font-semibold">
                Мастер-класс
              </span>
            </h2>
            <p className="font-notoarial text-[16px] font-light text-[#1e1e24]">
              Опыт туроператоров, гостевого бизнеса и ассоциаций Кыргызстана.
              Как работает и какие плоды приносит партнерство локальных
              туристических объединений и международных партнеров по внедрению
              устойчивых практик. <br /> <br />
              Дамира Раева (заместитель директора Хельветас Кыргызстан, Бишкек),
              Наргиза Кудайбердиева (менеджер проекта ГринТур-устойчивый туризм
              в Кыргызской Руспублике, Бишкек), Кубан Ашыркулов (эксперт КАТОС,
              Бишкек). <br /> <br />
            </p>
          </div>
        </div>

        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-center sm:items-start  text-center sm:text-left">
          <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full mb-4 sm:mb-0">
            <p>11:30 – 13:00</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start m-0 sm:me-20">
            <img
              src="/img13.jpg"
              className="rounded-full object-cover w-[170px] h-[170px] mx-5"
              alt=""
            />
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-noto font-semibold mb-[15px]">
              Как сделать лучший ресторанный сервис
              <br />
              <span className="text-[#1e1e24] text-[14px] font-noto font-semibold">
                Воркшоп
              </span>
            </h2>
            <p className="font-notoarial text-[16px] font-light text-[#1e1e24]">
              Как создать такой ресторан, в который гости и туристы захотят
              возвращаться снова и снова? Как улучшить свой сервис, наладить
              внутренний менеджмент и контроль качества? Как презентовать гостям
              национальную кухню дружелюбно, отвечая на их индивидуальные
              запросы и потребности? Об этом и многом другом воркшоп от двух
              ресторанных экспертов и практиков. <br /> <br />
              Александр Машков (сервис-тренер, эксперт по сервису и
              гостеприимству, Ташкент), Малика Соотбекова (ex-CEO сети
              ресторанов “Mayram Group”, эксперт по стратегическому управлению
              ресторанным бизнесом, Бишкек). <br /> <br />
            </p>
          </div>
        </div>

        <hr className="my-10" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start  text-center sm:text-left">
          <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full mb-4 sm:mb-0">
            <p>11:30 – 13:00</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start m-0 sm:me-20">
            <img
              src="/img12.jpg"
              className="rounded-full object-cover w-[170px] h-[170px] mx-5"
              alt=""
            />
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-noto font-semibold mb-[15px]">
              Чего хочет корпоративный турист?
              <br />
              <span className="text-[#1e1e24] text-[14px] font-noto font-semibold">
                Мастер-класс
              </span>
            </h2>
            <p className="font-notoarial text-[16px] font-light text-[#1e1e24]">
              Какие продукты, услуги и сервис ожидают корпоративные заказчики и
              организаторы в Центральной Азии? Как Самарканду конкурировать за
              корпоративных клиентов со Стамбулом, центрально-азиатским пустыням
              - с пустынями ОАЭ, а Иссык-Кулю - с курортами Анталии? Честный
              разговор с практиком и экспертом в сфере MICE. <br /> <br />
              Татьяна Спурнова (основатель “Бюро трансформаций бизнеса” и
              креативного MICE-агентства MaxMedium, бизнес-наставник, ментор и
              автор книг по MICE и event, Аланья). <br /> <br />
            </p>
          </div>
        </div>

        <hr className="my-10" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start  text-center sm:text-left">
          <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full mb-4 sm:mb-0">
            <p>14:45 – 16:00</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start m-0 sm:me-20">
            <img
              src="/img15.jpg"
              className="rounded-full object-cover w-[170px] h-[170px] mx-5"
              alt=""
            />
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-noto font-semibold mb-[15px]">
              Не только Burning Man: фестивальные кейсы в Центральной Азии
              <br />
              <span className="text-[#1e1e24] text-[14px] font-noto font-semibold">
                Круглый стол
              </span>
            </h2>
            <p className="font-notoarial text-[16px] font-light text-[#1e1e24]">
              Мультидисциплинарные фестивали под открытым небом - важные
              инициативы для региона. Как поп-ап фестивали развивают свои
              дестинации, с какими вызовами сталкиваются и как выстраивают свою
              экономику? <br /> <br />
              Санжар Халмурадов (фестиваль “Стихия”, Ташкент), Татьяна Пилпани
              (генеральный директор фестиваля FOURE и агентства FOUREevent,
              Алматы), Чингиз Батырбеков (со-основатель и директор
              международного фестиваля музыки и искусств KOLFEST, Бишкек).{" "}
              <br /> <br />
              Модератор: Фаррух Ирназаров (глава представительства Chemonics
              International в Узбекистане, Ташкент). <br /> <br />
            </p>
          </div>
        </div>

        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-center sm:items-start  text-center sm:text-left">
          <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full mb-4 sm:mb-0">
            <p>14:45 – 16:00</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start m-0 sm:me-20">
            <img
              src="/img14.jpg"
              className="rounded-full object-cover w-[170px] h-[170px] mx-5"
              alt=""
            />
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-noto font-semibold mb-[15px]">
              Как получить рейтинг 9+ на Booking.com, Tripadvisor и Google?
              <br />
              <span className="text-[#1e1e24] text-[14px] font-noto font-semibold">
                Мастер-класс
              </span>
            </h2>
            <p className="font-notoarial text-[16px] font-light text-[#1e1e24]">
              Если отеля нет в интернете, значит у него нет бизнеса. Сегодня
              всем очевидно, что быть на онлайн площадках жизненно необходимо.
              Однако, только "быть" недостаточно. Нужно умело работать с ОТА.
              Что важно понимать про Booking.com, чтобы пользоваться всеми
              преимуществами, которые дает платформа? И как Booking.com связан с
              мета-поисковиками и сайтами для путешественников? <br /> <br />
              Назира Мийнекеева (управляющий сетью отелей Olive Kyrgyzstan,
              независимый эксперт по онлайн продажам ОТА и автоматизации отелей,
              Бишкек).
            </p>
          </div>
        </div>

        <hr className="my-10" />
        <div className="flex flex-col sm:flex-row items-center sm:items-start  text-center sm:text-left">
          <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full mb-4 sm:mb-0">
            <p>16:15 – 17:15</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start m-0 sm:me-20">
            <img
              src="/img11_invisible-sama.png"
              className="rounded-full object-cover w-[170px] h-[170px] mx-5"
              alt=""
            />
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-noto font-semibold mb-[15px]">
              AR и сторителлинг: иммерсивный спектакль-экскурсия "IN.VISIBLE
              SAMARKAND”
              <br />
              <span className="text-[#1e1e24] text-[14px] font-noto font-semibold">
                Мастер-класс
              </span>
            </h2>
            <p className="font-notoarial text-[16px] font-light text-[#1e1e24]">
              За последние 20 лет контент и методы его потребления кардинально
              изменились. Теперь зрителю недостаточно быть просто наблюдателем,
              а нетерпимость к плоскому контенту в низком разрешении выросла
              настолько, что затронула все сферы, связанные с досугом. В том
              числе туризм. Как дополненная реальность и продвинутый
              сторителлинг отвечают на эти изменения и как они могут удивить
              тех, кто видел всё? <br /> <br />
              Равшан Туракулов (директор Silk Road Destinations, Самарканд),
              Ксения Аникеева (креативный и исполнительный продюсер в сфере
              исполнительских искусств, автор концепции и сценария проекта
              “IN.VISIBLE SAMARKAND”, Москва - Самарканд). <br />
            </p>
          </div>
        </div>

        <hr className="my-10" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start  text-center sm:text-left">
          <div className="text-[18px] leading-[1.35] font-semibold font-noto whitespace-nowrap max-w-[140px] w-full mb-4 sm:mb-0">
            <p>16:15 – 17:30</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-start m-0 sm:me-20">
            <img
              src="/img18.jpg"
              className="rounded-full object-cover w-[170px] h-[170px] mx-5"
              alt=""
            />
          </div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-noto font-semibold mb-[15px]">
              Агротузрим в странах Шелкового пути: текущие практики и
              перспективы
              <br />
              <span className="text-[#1e1e24] text-[14px] font-noto font-semibold">
                Панельная дискуссия
              </span>
            </h2>
            <p className="font-notoarial text-[16px] font-light text-[#1e1e24]">
              Страны Центральной Азии богаты плодородными сельскохозяйственными
              угодьями и именно сельское хозяйство - основной источник дохода и
              трудовой занятости региона. Несмотря на это, в Центральной Азии
              отсутствует сельский туризм и это проблема государственной
              важности. Агротуризм нужен странам Шелкового пути именно сейчас,
              когда они совершают стремительный шаг вперед, а города и
              дестинации Узбекистана, Кыргызстана, Казахстана и других стран ШОС
              превращаются в востребованные туристические направления. Кроме
              того, агротуризм может принести развивающимся странам ощутимые
              экономические выгоды. Мы поговорим об инновационных подходах и
              идеях в агротуризме, посмотрим, что уже сделано, чего еще
              предстоит достигнуть и какие потрясающие стратегии в сфере
              агротуризма могут быть реализованы в Центральной Азии. А также
              узнаем, какой потенциал агротуризм имеет в Узбекистане и как он
              развивается в Грузии прямо сейчас. <br /> <br />
              Мухаммад Умар Аслам (эксперт в области агротуризма и сельского
              хозяйства, сотрудник международного департамента
              Сельскохозяйственного университета в Узбекистане, Исламабад), Ян
              Паттерсон (профессор кафедры управления туризмом Международного
              университета туризма и культурного наследия «Шелковый путь»,
              Брисбен), Лела Хартишвили (консультант по агротуризму FAO и доцент
              в Ilia State University, Тбилиси). <br /> <br />
              Модератор: Фаррух Ирназаров (глава представительства Chemonics
              International в Узбекистане, Ташкент). <br />
            </p>
          </div>
        </div>

        <hr className="my-10" />
        <div className="flex flex-wrap gap-5 items-center">
          <div>
            <img
              src="/cafe_coffeetogo.svg"
              alt=""
              className="w-[45px] h-[45px]"
            />
          </div>
          <div>
            <p className="text-[22px] font-noto font-semibold ">
              Кофе-брейки <br />
              <span className="text-[14px] font-light">
                Перерывы на кофе и нетворкинг в течение дня.
              </span>
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[560px] w-full my-20">
          <h1 className="font-noto font-semibold text-[36px] mb-[40px]">
            Культурная программа
          </h1>
        </div>

        <div className="flex sm:flex-nowrap flex-wrap justify-evenly items-center gap-5 sm:gap-10 mb-[60px]">
          <div className="w-full sm:w-[560px]">
            <p className="font-noto text-[22px] font-semibold mb-[34px]">
              IN.VISIBLE SAMARKAND
            </p>
            <p className="font-noto text-[20px] pb-[26px]  font-light opacity-50">
              11:00 - 13:00 <br />
              16:15 - 18:15
            </p>
            <p className="font-noto text-[16px] font-light">
              IN.VISIBLE SAMARKAND - это иммерсивный аудио-перформанс в жанре
              сайт-специфик, который исполняется прямо на улицах города
              Самарканда. 25 зрителей надевают наушники и отправляются
              исследовать город. Голос героя проведет группу по самым
              интересным, неочевидным и важным местам и улицам, и расскажет свою
              историю, тесно связанную с историей Самарканда. <br /> <br />
              Аудиоспектакль доступен на русском и английском языках. <br />{" "}
              <br />
              Количество участников ограничено. Требуется предварительная
              регистрация. <br /> <br />
              Продолжительность: 100 минут. <br />
            </p>
          </div>
          <div>
            <img src="/img20_invisible-sama.png" alt="" />
          </div>
        </div>

        <div className="flex sm:flex-nowrap flex-wrap justify-evenly items-center gap-5 sm:gap-10 mb-[180px]">
          <div className="w-full sm:w-[560px]">
            <p className="font-noto text-[22px] font-semibold mb-[34px]">
              Razumboy
            </p>
            <p className="font-noto text-[20px] pb-[26px]  font-light opacity-50">
              19:30 - 21:00
            </p>
            <p className="font-noto text-[16px] font-light">
              Razumboy - это интеллектуально-развлекательная игра со специальной
              программой для участников STF, посвященной туристической тематике.
              “Razumboy” - командная игра, в которой участники делятся на
              команды по 6-8 человек. Игра проводится в формате викторины по
              эксклюзивно разработанным правилам, в которой несколько команд
              противостоят друг другу и отвечают на вопросы из разных областей
              знаний.
            </p>
          </div>
          <div>
            <img src="/img22_razumboy.png" alt="" />
          </div>
        </div>

        <div className="mx-auto w-full ">
          <h1 className="font-noto text-center font-semibold text-[36px] mb-[40px]">
            При поддержке Министерства культуры и туризма Республики Узбекистан
          </h1>

          <div className="pb-[150px]">
            <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-20 my-10">
              <a href="https://uzbektourism.uz/" target="_blank">
                <img
                  src="/logo_MoTCHRUz_548x18.png"
                  className="w-full"
                  alt=""
                />
              </a>
            </div>
          </div>

          <h1 className="font-noto text-center font-semibold text-[36px] mb-[40px]">
            Генеральный партнер
          </h1>
          <div className="pb-[150px]">
            <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-20 my-10">
              <a href="https://samdchti.uz/ru/" target="_blank">
                <img src="/logo_SSIFL_662x662.png" className="w-full" alt="" />
              </a>
            </div>
          </div>

          <h1 className="font-noto text-center font-semibold text-[36px] mb-[40px]">
            Официальные партнеры
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-20 my-10 pb-[150px]">
            <a href="https://www.usaid.gov/" target="_blank">
              <img
                src="/logo_USAID_Vert_Ru_2.png"
                className="w-[200px]"
                alt=""
              />
            </a>
            <a href="https://www.fundtourism.com/" target="_blank">
              <img
                src="/logo_TDSFKR_Vert_En_.png"
                className="w-[200px]"
                alt=""
              />
            </a>
            <a href="https://teamuni.uz/" target="_blank">
              <img
                src="/logo_Team-University.png"
                className="w-[200px]"
                alt=""
              />
            </a>
            <a href="https://silkroaddestinations.com/" target="_blank">
              <img src="/logo_SRD_600x396.png" className="w-[200px]" alt="" />
            </a>
            <a href="https://www.helvetas.org/en/switzerland" target="_blank">
              <img src="/logo_Helvetas.png" className="w-[200px]" alt="" />
            </a>
            <a
              href="https://www.switch-asia.eu/project/green-tour/"
              target="_blank"
            >
              <img src="/logo_Green-Tour-Proj.png" className="w-full" alt="" />
            </a>

            <a href="https://www.switch-asia.eu/" target="_blank">
              <img src="/logo_Switch-Asia.png" alt="" />{" "}
            </a>
          </div>

          <h1 className="font-noto text-center font-semibold text-[36px] mb-[40px]">
            Партнеры
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-20 my-10">
            <a href="https://marketing.uz/" target="_blank">
              <img src="/logo_marketing-uz.png" className="w-[200px]" alt="" />
            </a>
            <a href="https://www.mascontour.info/de/" target="_blank">
              <img src="/logo_mascontour.jpg" className="w-[200px]" alt="" />
            </a>
            <a href="https://indyguide.com/" target="_blank">
              <img src="/logo_indie-guide.jpg" className="w-[200px]" alt="" />
            </a>
            <a href="https://invisible.uz/" target="_blank">
              <img
                src="/logo_Invisible-Samar.png"
                className="w-[200px]"
                alt=""
              />
            </a>

            <a href="https://shamshidov.com/" target="_blank">
              <img src="/logo_Turismolog.jpg" className="w-full" alt="" />
            </a>

            <a href="https://www.switch-asia.eu/" target="_blank">
              <img src="/logo_Switch-Asia.png" alt="" />{" "}
            </a>

            <a href=" https://silkroadevent.com/" target="_blank">
              <img
                src="/logo_SilkRoad-Event.png"
                className="w-[200px]"
                alt=""
              />
            </a>

            <a
              href="https://www.booking.com/hotel/uz/zilol-baxt.ru.html"
              target="_blank"
            >
              <img src="/logo_Zilol-Baxt.jpg" className="w-[200px]" alt="" />
            </a>

            <a
              href="https://www.hilton.com/en/hotels/skddbgi-hilton-garden-inn-samarkand/"
              target="_blank"
            >
              <img
                src="/logo_Hilton-Garden-I.png"
                className="w-[200px]"
                alt=""
              />
            </a>

            <a
              href="https://www.booking.com/hotel/uz/gur-emir-palace.ru.html"
              target="_blank"
            >
              <img
                src="/logo_Guremir-Palace_.png"
                className="w-[200px]"
                alt=""
              />
            </a>

            <a href="https://hotel-maroqanda.business.site/" target="_blank">
              <img
                src="/logo_Maroqanda-Hotel.png"
                className="w-[200px]"
                alt=""
              />
            </a>

            <a
              href="https://www.instagram.com/samarqand_saroy/"
              target="_blank"
            >
              <img
                src="/logo_Samarkand-Saroy.png"
                className="w-[200px]"
                alt=""
              />
            </a>

            <a href="https://dilimahhotel.com/en/" target="_blank">
              <img src="/logo_DiliMah.png" className="w-[200px]" alt="" />
            </a>

            <a
              href="https://www.facebook.com/SilkrRoadTravelAcademy/"
              target="_blank"
            >
              <img src="/logo_SRTA_200x200.jpeg" className="w-[200px]" alt="" />
            </a>

            <a href="https://www.facebook.com/voyrazumboy/" target="_blank">
              <img src="/logo_RazumBoy.jpg" className="w-[200px]" alt="" />
            </a>

            <a href="https://www.facebook.com/sunhouseteam/" target="_blank">
              <img
                src="/logo_SunHouse-Team_5.png"
                className="w-[200px]"
                alt=""
              />
            </a>

            <a href="https://platan.uz/" target="_blank">
              <img
                src="/logo_Platan-Restaura.jpg"
                className="w-[200px]"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
