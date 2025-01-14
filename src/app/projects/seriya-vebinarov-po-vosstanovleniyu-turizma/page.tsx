import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function VebinarSpaseniye() {
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
                href="/projects/seriya-vebinarov-po-vosstanovleniyu-turizma"
              >
                Серия вебинаров по восстановлению туризма
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="px-5 sm:px-[300px]">
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center py-[30px]">
          <div className="max-w-[560px] w-full">
            <p className="tracking-[2.5px] font-noto font-semibold text-[12px] mb-[14px]">
              Апрель 2020
            </p>
            <h1 className="sm:text-[48px] text-[22px]  mb-[28px] font-noto font-semibold">
              Серия вебинаров по восстановлению туризма
            </h1>
            <p className="font-noto font-light text-[18px]">
              Профессионалы туристической отрасли обсуждают, как будут
              восстанавливать туризм после пандемии.
            </p>
          </div>
          <div>
            <img src="/event-cover_Seriya-v.png" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-4 gap-2 sm:gap-10 py-[150px]">
          <div className="flex flex-col justify-center items-center mx-auto">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage
                src="/photo_Anastasiya-Pod.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback> Анастасия Подорожная🇷🇺</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Анастасия Подорожная🇷🇺
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Технический директор Appreal Group, автор текстов для
              путеводителей "Это моя земля" и TopTripTip
            </div>

            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Sophia-Ibbotso.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Sophia Ibbotson🇬🇧</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Sophia Ibbotson🇬🇧
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              World Bank Tourism Consultant
            </div>

            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Sandzhar-Mumin.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Санджар Муминов🇦🇪</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Санджар Муминов🇦🇪
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Президент Международного консорциума бизнес-консультантов «Aston
              Alliance». Патентный поверенный Республики Узбекистан
            </div>

            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Sergei-Danilov (2).png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Сергей Данилов🇺🇿</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Сергей Данилов🇺🇿
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Инициатор и владелец ТМ "Вкусный Узбекистан". Эксперт по
              международному туризму
            </div>
          </div>

          <div className="flex flex-col  items-center mx-auto">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage
                src="/photo_Andrei-Suleiko.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback> Андрей Сулейков🇷🇺</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Андрей Сулейков🇷🇺
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Директор направления Цифровой туризм в "Русатом - Международная
              сеть", suleykov.ru
            </div>

            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Anula-Galevska.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Анула Галевска🇵🇱🇷🇺</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Анула Галевска🇵🇱🇷🇺
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Консультант по ответственному туризму. Основатель Sustainable
              Tourism Made Easy
            </div>

            <Avatar className="w-[100px] h-[100px] mt-5">
              <AvatarImage
                src="/photo_Sergei-Dolzhen.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Сергей Долженков🇰🇬</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Сергей Долженков🇰🇬
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-20"></div>

            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Sjannie-Hulsma.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback> Sjannie Hulsman🇳🇱</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Sjannie Hulsman🇳🇱
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              eastguideswest.com
            </div>
          </div>

          <div className="flex flex-col  items-center mx-auto">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage
                src="/photo_Mihkail-Shamsh.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback> Михаил Шамшидов🇺🇿</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Михаил Шамшидов🇺🇿
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Международный эксперт по развитию туризма. Со-основатель Samarkand
              Tourism Forum
            </div>

            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Alla-Peresolov (1).png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback> Алла Пересолова🇪🇸</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Алла Пересолова🇪🇸
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Эксперт по устойчивому туризму
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
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Директор Silk Road Destinations. Со-основатель Samarkand Tourism
            </div>

            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Tatiana-Spurno.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Татьяна Спурнова🇷🇺</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Татьяна Спурнова🇷🇺
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Основатель и генеральный директор креативного агентства Maxmedium
            </div>
          </div>

          <div className="flex flex-col  items-center mx-auto">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage
                src="/photo_Ahmed-Yehia.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback> Ahmed Yehia🇪🇬</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Ahmed Yehia🇪🇬
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Founder & CEO Eco Nubia Ecolodge (Egypt)
            </div>

            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Svetlana-Ivano.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback> Светлана Иванова🇷🇺</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Светлана Иванова🇷🇺
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Председатель Правления Содружества профессиональных
              гидов-переводчиков и экскурсоводов Санкт-Петербурга
            </div>

            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Ati-Tosun.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback> Ati Tosun🇨🇭</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Ati Tosun🇨🇭
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Indy Guide co-founder
            </div>

            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Maxim-Kravchen.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback> Максим Кравченко🇺🇦</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Максим Кравченко🇺🇦
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Отельер и тренер по гостеприимству
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
          <div>
            <iframe
              className="w-full h-[350px]"
              src="https://www.youtube.com/embed/1qlgvQtRKQs?rel=0&amp;fmt=18&amp;html5=1&amp;showinfo=0"
            ></iframe>
          </div>
          <div>
            <iframe
              className="w-full h-[350px]"
              src="https://www.youtube.com/embed/JeGEGEORdGw?rel=0&amp;fmt=18&amp;html5=1&amp;showinfo=0"
            ></iframe>
          </div>
          <div>
            <iframe
              className="w-full h-[350px]"
              src="https://www.youtube.com/embed/gx_VaifF5K0?rel=0&amp;fmt=18&amp;html5=1&amp;showinfo=0"
            ></iframe>
          </div>
          <div>
            <iframe
              className="w-full h-[350px]"
              src="https://www.youtube.com/embed/hBBvZfyJ6a4?rel=0&amp;fmt=18&amp;html5=1&amp;showinfo=0"
            ></iframe>
          </div>
          <div>
            <iframe
              className="w-full h-[350px]"
              src="https://www.youtube.com/embed/Z2nJ-mm-1dk?rel=0&amp;fmt=18&amp;html5=1&amp;showinfo=0"
            ></iframe>
          </div>
          <div>
            <iframe
              className="w-full h-[350px]"
              src="https://www.youtube.com/embed/noYk9IF5t0w?rel=0&amp;fmt=18&amp;html5=1&amp;showinfo=0"
            ></iframe>
          </div>
          <div>
            <iframe
              className="w-full h-[350px]"
              src="https://www.youtube.com/embed/85ESUd316YU?rel=0&amp;fmt=18&amp;html5=1&amp;showinfo=0"
            ></iframe>
          </div>
          <div>
            <iframe
              className="w-full h-[350px]"
              src="https://www.youtube.com/embed/s430DZoL2Qg?rel=0&amp;fmt=18&amp;html5=1&amp;showinfo=0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
