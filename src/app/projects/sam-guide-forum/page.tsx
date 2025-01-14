import { Slash } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function SamarakndGuide() {
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
                href="/projects/sam-guide-forum"
              >
                Samarkand Guide Forum 2020
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="relative w-full h-[60vh] sm:h-[700px] px-10 md:px-[400px] sm:px-[150px]">
        <div className="bg-hero6" />

        <div className="flex flex-col xl:flex-row justify-between relative z-10">
          <div className="flex flex-col pt-10 sm:pt-[200px] text-center">
            <div className="w-full sm:w-[660px]">
              <h1 className="text-white text-[30px] sm:text-[48px] font-noto font-semibold text-start leading-[1.17] mb-5">
                Samarkand Guide Forum <br />
                2020
              </h1>
              <p className="text-start text-muted text-[18px] font-noto whitespace-pre-wrap ">
                Главная цель форума - это обсуждение проблем и вызовов, стоящих
                перед гидами - "культурными послами" страны.
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
                Январь | 2020
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

      <div className="px-5 sm:px-[300px]">
        <div className="flex justify-center items-center py-[60px]">
          <p className="text-start max-w-[760px] w-full font-noto font-light text-[18px] px-5">
            "Самаркандский форум гидов" - это инициатива самаркандского тур
            оператора "Silk Road Destinations" и партнеров GetGuide.uz,
            SunHouse.com, EastguidesWest.com, движения "Вкусный Узбекистан",
            Самаркандского Института Иностранных языков, Ассоциации гидов
            Узбекистана и др.. Форум является одним из первых примеров
            государственно-частного сотрудничества в сфере туризма Узбекистана.
            Главная цель форума - это обсуждение проблем и вызовов, стоящих
            перед гидами - "культурными послами" страны. Выработка плана
            действий для ответа на вопрос - каким требованиям должна отвечать
            профессия гида и индустрия туризма в целом в быстро-изменяющемся
            мире.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-evenly items-start sm:items-center gap-6 p-6">
          <div className="w-full sm:w-auto">
            <h2 className="text-[36px] font-semibold font-noto pt-[19px] border-t-4 pl-3 border-black">
              Программа
            </h2>
          </div>

          <ol className="list-decimal pl-6 sm:pl-0 text-lg sm:text-xl leading-relaxed font-noto  text-[18px] font-light">
            <li>Панельная дискуссия "Профессия Гид 3.0"</li>
            <li>
              What do tour guides expect and need to become more successful?
            </li>
            <li>Visitor Experience</li>
            <li>"Вкусный Узбекистан", как туристический продукт</li>
            <li>Что дает членство в Ассоциации гидов Узбекистана?</li>
            <li>Что такое MICE в современном туризме?</li>
            <li>Воркшоп "Service Excellence"</li>
            <li>Воркшоп "Геймификация туристического продукта"</li>
            <li>Инструменты продвижения для гидов</li>
          </ol>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-4 gap-2 sm:gap-10 py-[150px]">
          <div className="flex flex-col justify-center items-center mx-auto">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage
                src="/photo_Ilkhom-Tukhtas.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Илхом Тухтасинов🇺🇿</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Илхом Тухтасинов🇺🇿
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center ">
              Ректор Самаркандского государственного института иностранных
              языков (СамГИИЯ)
            </div>
            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Sjanne-Hulsman.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Sjannie Hulsman🇳🇱</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Sjannie Hulsman🇳🇱
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center">
              eastguideswest.com
            </div>
          </div>

          <div className="flex flex-col  items-center mx-auto">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage
                src="/photo_Mikhail-Shamsh.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback> Сергей Макаров🇰🇬</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Сергей Макаров🇰🇬
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center">
              Международный эксперт по развитию туризма. Со-основатель Samarkand
              Tourism Forum
            </div>

            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Sergei-Makarov.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback> Сергей Макаров🇰🇬</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Сергей Макаров🇰🇬
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center">
              Генеральный директор Sun House Team
            </div>
          </div>

          <div className="flex flex-col  items-center mx-auto">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage
                src="/photo_Sergei-Danilov.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Сергей Данилов🇺🇿</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Сергей Данилов🇺🇿
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center">
              Инициатор и владелец ТМ "Вкусный Узбекистан". Эксперт по
              международному туризму
            </div>

            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Ravshan-Turaku.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Равшан Туракулов🇺🇿</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Равшан Туракулов🇺🇿
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center">
              Директор Silk Road Destinations. Со-основатель Samarkand Tourism
            </div>
          </div>

          <div className="flex flex-col  items-center mx-auto">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage
                src="/photo_Nargiza-Salomo.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Наргиза Саломова🇺🇿</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Наргиза Саломова🇺🇿
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center">
              Председатель Ассоциации гидов Узбекистана
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 p-5">
        <div className="col-span-2">
          <img
            src="/CP3B2248_1x.jpg"
            className="max-w-full min-h-[100%]"
            alt=""
          />
        </div>
        <div className="grid gap-5 col-span-1">
          <div>
            <img
              src="/CP3B2671_1x.jpg"
              className="max-w-full min-h-[50%]"
              alt=""
            />
          </div>
          <div>
            <img
              src="/CP3B2171_1x.jpg"
              className="max-w-full min-h-[50%]"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5 p-5">
        <div className="grid grid-cols-1 gap-5">
          <img src="/CP3B2913_1x.jpg" className="max-w-full" alt="" />
          <img src="/CP3B2392_2x.jpg" className="max-w-full" alt="" />
        </div>
        <div className="grid grid-cols-1 gap-5">
          <img src="/CP3B2691_1x.jpg" className="max-w-full" alt="" />
          <img src="/CP3B2335_1x.jpg" className="max-w-full" alt="" />
        </div>
        <div className="grid grid-cols-1 gap-5">
          <img src="/CP3B2999_1x.jpg" className="max-w-full" alt="" />
          <img src="/CP3B2856_2x.jpg" className="max-w-full" alt="" />
        </div>
        <div className="grid grid-cols-1 gap-5">
          <img src="/CP3B2134_1x.jpg" className="max-w-full" alt="" />
          <img src="/CP3B2961_2x.jpg" className="max-w-full" alt="" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 p-5">
        <div className="col-span-2">
          <img
            src="/CP3B3244_1x.jpg"
            className="max-w-full min-h-[100%]"
            alt=""
          />
        </div>
        <div className="grid gap-5 col-span-1">
          <div>
            <img
              src="/CP3B3340_1x.jpg"
              className="max-w-full min-h-[50%]"
              alt=""
            />
          </div>
          <div>
            <img
              src="/CP3B3172_2x.jpg"
              className="max-w-full min-h-[50%]"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5 p-5">
        <div>
          <img src="/CP3B2789_2x.jpg" className="w-full" alt="" />
        </div>
        <div>
          <img src="/CP3B3196_1x.jpg" className="w-full" alt="" />
        </div>
        <div>
          <img src="/CP3B2486_1x.jpg" className="w-full" alt="" />
        </div>
        <div>
          <img src="/CP3B3394_1x.jpg" className="w-full" alt="" />
        </div>

        <div className="col-span-full">
          <img src="/CP3B3090_1x.jpg" className="w-full" alt="" />
        </div>
      </div>
    </>
  );
}
