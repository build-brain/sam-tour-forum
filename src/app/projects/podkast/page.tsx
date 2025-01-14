import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Podkasts() {
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
                href="/projects/podkast"
              >
                Подкасты с профи туризма
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="px-5 sm:px-[300px]">
        <div className="flex flex-wrap justify-between items-center py-[30px]">
          <div>
            <p className="tracking-[2.5px] font-noto font-semibold text-[12px] mb-[14px]">
              Октябрь 2022
            </p>
            <h1 className="sm:text-[48px] text-[22px]  mb-[28px] font-noto font-semibold">
              Подкасты с профи туризма
            </h1>
            <p className="font-noto font-light text-[18px]">
              Серия подкастов с профессионалами туристической отрасли.
            </p>
          </div>
          <div>
            <img src="/event-cover_Podcast- (1).png" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-4 gap-2 sm:gap-10 py-[150px]">
          <div className="flex flex-col justify-center items-center mx-auto">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage
                src="/photo_Alexandra-Tosu.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Alexandra Tosun🇨🇭</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Alexandra Tosun🇨🇭
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Indy Guide co-founder
            </div>
            <div className="flex justify-center gap-2 items-center">
              <div>
                <a
                  href="https://www.facebook.com/alexandratosun84"
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
                      d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858 50 50 50Zm3.431-73.9854c-2.5161.0701-5.171.6758-7.0464 2.4577-1.5488 1.4326-2.329 3.5177-2.5044 5.602-.0534 1.4908-.0458 2.9855-.0382 4.4796.0058 1.1205.0115 2.2407-.0085 3.3587-.6888.005-1.3797.0036-2.0709.0021-.9218-.0019-1.8441-.0038-2.7626.0096 0 .8921.0013 1.7855.0026 2.6797.0026 1.791.0052 3.5853-.0026 5.3799.9185.0134 1.8409.0115 2.7627.0096.6912-.0015 1.382-.0029 2.0708.0021.0155 3.5565.0127 7.1128.0098 10.669-.0036 4.4452-.0072 8.8903.0252 13.3354 1.8903-.0134 3.7765-.0115 5.6633-.0095 1.4152.0014 2.8306.0028 4.2484-.0022.0117-4.0009.0088-7.9986.0058-11.9963-.0029-3.9979-.0058-7.9957.0059-11.9964.9533-.005 1.9067-.0036 2.86-.0021 1.2713.0019 2.5425.0038 3.8137-.0096.396-2.679.7335-5.3814.9198-8.0947-1.2576-.0058-2.5155-.0058-3.7734-.0058-1.2578 0-2.5157 0-3.7734-.0059 0-.4689-.0007-.9378-.0014-1.4066-.0022-1.4063-.0044-2.8123.0131-4.2188.198-1.0834 1.3158-1.9104 2.3992-1.8403h5.1476c.0117-2.8069.0117-5.602 0-8.4089-.6636 0-1.3273-.0007-1.9911-.0014-1.9915-.0022-3.9832-.0044-5.975.0131Z"
                      fill="#000000"
                    ></path>
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/alexandra-tosun/"
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
                src="/photo_Erkin-Tikenov.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Еркин Тикенов🇰🇿</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Еркин Тикенов🇰🇿
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Директор исследовательской компании Инсайд Тревел. Докторант по
              туризму
            </div>
            <div className="flex justify-center items-center gap-2">
              <a
                href="https://www.linkedin.com/in/yerkin-tikenov-04409690/"
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

          <div className="flex flex-col  items-center mx-auto">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage
                src="/photo_Sergei-Pischul.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback> Сергей Пищулов🇷🇺</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Сергей Пищулов🇷🇺
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center mb-5">
              Маркетолог tutu.ru
            </div>
            <div className="flex justify-center items-center gap-2">
              <a
                href="https://www.facebook.com/psg.manowar"
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
                    d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858 50 50 50Zm3.431-73.9854c-2.5161.0701-5.171.6758-7.0464 2.4577-1.5488 1.4326-2.329 3.5177-2.5044 5.602-.0534 1.4908-.0458 2.9855-.0382 4.4796.0058 1.1205.0115 2.2407-.0085 3.3587-.6888.005-1.3797.0036-2.0709.0021-.9218-.0019-1.8441-.0038-2.7626.0096 0 .8921.0013 1.7855.0026 2.6797.0026 1.791.0052 3.5853-.0026 5.3799.9185.0134 1.8409.0115 2.7627.0096.6912-.0015 1.382-.0029 2.0708.0021.0155 3.5565.0127 7.1128.0098 10.669-.0036 4.4452-.0072 8.8903.0252 13.3354 1.8903-.0134 3.7765-.0115 5.6633-.0095 1.4152.0014 2.8306.0028 4.2484-.0022.0117-4.0009.0088-7.9986.0058-11.9963-.0029-3.9979-.0058-7.9957.0059-11.9964.9533-.005 1.9067-.0036 2.86-.0021 1.2713.0019 2.5425.0038 3.8137-.0096.396-2.679.7335-5.3814.9198-8.0947-1.2576-.0058-2.5155-.0058-3.7734-.0058-1.2578 0-2.5157 0-3.7734-.0059 0-.4689-.0007-.9378-.0014-1.4066-.0022-1.4063-.0044-2.8123.0131-4.2188.198-1.0834 1.3158-1.9104 2.3992-1.8403h5.1476c.0117-2.8069.0117-5.602 0-8.4089-.6636 0-1.3273-.0007-1.9911-.0014-1.9915-.0022-3.9832-.0044-5.975.0131Z"
                    fill="#000000"
                  ></path>
                </svg>
              </a>
            </div>

            <Avatar className="w-[100px] h-[100px] mt-10">
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
                src="/photo_Kairat-Itybaev.png"
                alt="@shadcn"
                className=" object-cover"
              />
              <AvatarFallback>Кайрат Итибаев🇰🇬</AvatarFallback>
            </Avatar>
            <p className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
              Кайрат Итибаев🇰🇬
            </p>
            <div className="text-[12px] text-[#1e1e24] font-noto font-light text-center">
              Управляющий директор по международным связям и инвестициям Фонда
              поддержки развития туризма Кыргызской Республики
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
          <div className="relative h-[315px]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/TFI3OZZ53lY?rel=0&fmt=18&html5=1&showinfo=0"
              frameBorder="0"
              allowFullScreen
              title="Video 1"
            ></iframe>
          </div>
          <div className="relative h-[315px]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/52kw6xDsvk0?rel=0&fmt=18&html5=1&showinfo=0"
              frameBorder="0"
              allowFullScreen
              title="Video 2"
            ></iframe>
          </div>
          <div className="relative h-[315px]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/a1k0ZpJ5Cmo?rel=0&fmt=18&html5=1&showinfo=0"
              frameBorder="0"
              allowFullScreen
              title="Video 3"
            ></iframe>
          </div>
          <div className="relative h-[315px]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/omWLkqNNMjQ?rel=0&fmt=18&html5=1&showinfo=0"
              frameBorder="0"
              allowFullScreen
              title="Video 4"
            ></iframe>
          </div>
          <div className="relative h-[315px]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/B42sgc-BWJo?rel=0&fmt=18&html5=1&showinfo=0"
              frameBorder="0"
              allowFullScreen
              title="Video 5"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
