import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function kruglyiStol() {
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
                href="/projects/kruglyi-stol-assotsiatsii"
              >
                Круглый стол ассоциаций Центрально-Азиатского туризма
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
              Круглый стол ассоциаций Центральноа-Азиатского туризма
            </h1>
            <p className="font-noto font-light text-[18px]">
              Важное мероприятия для всех профессионалов туристической индустрии
              центрально-азиатского региона.
            </p>
          </div>
          <div>
            <img src="/event-cover_Kruglyi-.png" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 gap-2 sm:gap-10 py-[150px]">
          <div className="flex flex-col  items-center mx-auto">
            <Avatar className="w-[100px] h-[100px]">
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
          </div>

          <div className="flex flex-col  items-center mx-auto">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage
                src="/photo_Mikhail-Shamsh (1).png"
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
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
          <div className="relative h-[315px]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/MqdopMVl0L8?rel=0&fmt=18&html5=1&showinfo=0"
              frameBorder="0"
              allowFullScreen
              title="Video 1"
            ></iframe>
          </div>
          <div className="relative h-[315px]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/RK918ciNhp8?rel=0&fmt=18&html5=1&showinfo=0"
              frameBorder="0"
              allowFullScreen
              title="Video 2"
            ></iframe>
          </div>
          <div className="relative h-[315px]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/ItL3lxLs4ws?rel=0&fmt=18&html5=1&showinfo=0"
              frameBorder="0"
              allowFullScreen
              title="Video 3"
            ></iframe>
          </div>
          <div className="relative h-[315px]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/VPYr5xhQDOo?rel=0&fmt=18&html5=1&showinfo=0"
              frameBorder="0"
              allowFullScreen
              title="Video 4"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
