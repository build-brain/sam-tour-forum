import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Vebinar() {
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
                href="/projects/seriya-vebinarov-po-sozdaniyu-turprodukta"
              >
                Серия вебинаров по созданию тур-продукта
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="px-5 sm:px-[300px]">
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center py-[30px]">
          <div className="max-w-[560px] w-full">
            <p className="tracking-[2.5px] font-noto font-semibold text-[12px] mb-[14px]">
              Февраль 2021
            </p>
            <h1 className="sm:text-[48px] text-[22px]  mb-[28px] font-noto font-semibold">
              Серия вебинаров по созданию тур-продукта
            </h1>
            <p className="font-noto font-light text-[18px]">
              Серия вебинаров, посвященных вопросам создания качественных
              туристических продуктов.
            </p>
          </div>
          <div>
            <img src="/event-cover_Seriya-w.png" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-4 gap-2 sm:gap-10 py-[150px]">
          <div className="flex flex-col justify-center items-center mx-auto">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage
                src="/photo_Jane-Connelly.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Джейн Коннелли 🇺🇸🇪🇸</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Джейн Коннелли 🇺🇸🇪🇸
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Gastronomy Tourism Expert
            </div>
            <div className="flex justify-center gap-2 items-center">
              <div>
                <a
                  href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEVbwwM5fZSKwAAAZRlh0sotsTKiwG4Y8qSYEzhJswLpp3ODaJWZGKE54JIf8KccVhojel6PdOieNaanVjbVaw5D8Ifij98JaFqUQo8Lwzxoa4HDowA2x-K01Jo_eb4ZGna2T8=&original_referer=https://samarkandforum.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fjanepconnelly"
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
                      d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858 50 50 50Zm23-31.0002V52.363c0-8.9114-4.7586-13.0586-11.1079-13.0586-5.1234 0-7.4123 2.8199-8.6942 4.7942v-4.1124h-9.6468c.1297 2.7235 0 29.0136 0 29.0136h9.6484v-16.203c0-.8675.0657-1.731.3203-2.3513.6981-1.7351 2.284-3.5286 4.9491-3.5286 3.4905 0 4.8859 2.6611 4.8859 6.5602v15.5227H73ZM53.1979 44.0986v.094h-.0632c.0069-.0111.0148-.0228.0229-.0346.0137-.0198.0281-.0401.0403-.0594ZM28 31.0123C28 28.1648 30.1583 26 33.4591 26c3.3016 0 5.3302 2.1648 5.3934 5.0123 0 2.7851-2.0918 5.0156-5.4567 5.0156h-.064c-3.2351 0-5.3318-2.2305-5.3318-5.0156Zm10.2177 37.9875h-9.6445V39.9862h9.6445v29.0136Z"
                      fill="#000000"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Tigran-Mkrtych.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Тигран Мкртычев🇷🇺</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Тигран Мкртычев🇷🇺
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Директор государственного музея искусств Республики Каракалпакстан
              им. И. В. Савицого
            </div>
            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Karlygash-Maka.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Карлыгаш Макатова🇰🇿</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Карлыгаш Макатова🇰🇿
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Гид-переводчик
            </div>
          </div>

          <div className="flex flex-col  items-center mx-auto">
            <Avatar className="w-[100px] h-[100px] mt-10">
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
                src="/photo_Timur-Gubaev.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Тимур Губаев🇰🇬</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Тимур Губаев🇰🇬
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Президент Федерации сноубординга Кыргызской республики. Чемпион
              Кыргыстана и Казахстана по сноуборду
            </div>

            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Sergei-Glukhov.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Сергей Глуховеров🇰🇬</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Сергей Глуховеров🇰🇬
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Директор тур-компании "Travel Experts", президент КАТО
            </div>
          </div>

          <div className="flex flex-col  items-center mx-auto">
            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Alla-Peresolov.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback> Алла Пересолова 🇪🇸</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Алла Пересолова 🇪🇸
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Эксперт по устойчивому туризму. Экс-директор программы ЮНВТО по
              Шелковому пути
            </div>

            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Dmitrii-Kostyu.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback> Дмитрий Костюшкин</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Дмитрий Костюшкин
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Сотрудник международного института Центрально-Азиатских
              исследований под эгидой ЮНЕСКО
            </div>

            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Maria-du-Pless.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback> Мария Дю Плесси🇿🇦</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Мария Дю Плесси🇿🇦
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Гид по ЮАР, член Cape Town Tour Guide Association,
              capetraveller.com
            </div>
          </div>

          <div className="flex flex-col  items-center mx-auto">
            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Sergei-Danilov (1).png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback> Сергей Данилов🇺🇿</AvatarFallback>
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
                src="/photo_Maksar-Damir-U.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback> Максат Дамир уулу🇰🇬</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
            Максат Дамир уулу🇰🇬
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center">
            
            Экс-директор Департамента туризма. Заместитель министра культуры, информации и туризма Кыргызской Республики
            </div>


            <Avatar className="w-[100px] h-[100px] mt-10">
              <AvatarImage
                src="/photo_Anastasiya-Lav.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback> Анастасия Лаврикова🇮🇹</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
            Анастасия Лаврикова🇮🇹
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center">
            
            Президент Всемирного форума профессиональных гидов "Русский. Улетный", бизнес-коуч, гид в Милане
            </div>


          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[315px]"
                src="https://www.youtube.com/embed/IwsY8_6qNtc?rel=0&fmt=18&html5=1&showinfo=0"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[315px]"
                src="https://www.youtube.com/embed/v5AWox1x_3M?rel=0&fmt=18&html5=1&showinfo=0"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[315px]"
                src="https://www.youtube.com/embed/YxzK_v1xPV4?rel=0&fmt=18&html5=1&showinfo=0"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[315px]"
                src="https://www.youtube.com/embed/M8sdbq1J3bU?rel=0&fmt=18&html5=1&showinfo=0"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[315px]"
                src="https://www.youtube.com/embed/M9-o7cNgh0c?rel=0&fmt=18&html5=1&showinfo=0"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[315px]"
                src="https://www.youtube.com/embed/lC-TtJ9FiKw?rel=0&fmt=18&html5=1&showinfo=0"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[315px]"
                src="https://www.youtube.com/embed/pgMJK-jQNRE?rel=0&fmt=18&html5=1&showinfo=0"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[315px]"
                src="https://www.youtube.com/embed/AJoOKfbya0A?rel=0&fmt=18&html5=1&showinfo=0"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[315px]"
                src="https://www.youtube.com/embed/VOoSlE-pf-k?rel=0&fmt=18&html5=1&showinfo=0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
