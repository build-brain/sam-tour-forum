import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Partners() {
  return (
    <div className="px-5 md:px-20 2xl:px-80 pt-32">
      <h1 className="text-5xl font-noto pb-4 font-semibold text-[#1e1e24]">
        Партнерское предложение
      </h1>
      <h2 className="text-[22px]  font-noto pb-[30px] font-light text-[#1e1e24]">
        Приглашаем лидеров отрасли разделить расходы и получить статус
        со-организатора
      </h2>
      <p className="text-[16px] font-light font-notoarial text-[#1e1e24] py-8">
        Проекты Samarkand Tourism Forum — частная инициатива участников
        туристистического сектора Центрально-Азиатского региона. Как
        организаторы мы стремимся предоставить качественную платформу для обмена
        опытом и сотрудничества, и помочь игрокам туристического сектора
        встретиться на наших площадках. Чтобы это стало возможным, мы призываем
        каждого участника вносить свой посильный вклад в дело. Большинство
        гостей берут на себя расходы по посещению форума и щедро делятся
        ресурсами и новыми идеями с другими, потому что видят в этом перспективу
        и возможности для бизнеса. Однако, как у любого события, у Samarkand
        Tourism Forum есть административные, операционные и технические расходы,
        и мы приглашаем лидеров отрасли разделить их с нами и получить статус
        со-организатора форума.
        <a
          href="https://drive.google.com/file/d/1HziynmsVhg7bedZHmqdRsMHpYsv_O0M_/view?usp=sharing"
          target="_blank"
          className="border-b border-[#1560d0] text-[#1560d0]"
        >
          {" "}
          Полный текст обращения к партнерам.
        </a>
      </p>
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full sm:w-[700px]">
          <p className="text-[18px] font-light font-notoarial text-[#1e1e24] pb-8">
            Посмотрите наше партнерское предложение. По вопросам партнерства и
            сотрудничества пишите со-основателям напрямую.
          </p>
        </div>
        <div>
          <button className="ring-[3px] ring-[#1560d0] text-[#1560d0] text-[16px] px-[15px] h-[60px] font-notoarial font-bold ">
            Партнерское предложение
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly items-center mt-10 mb-52">
        <div className="flex flex-col items-center">
          <Avatar className="w-[200px] h-[200px]">
            <AvatarImage
              width={200}
              height={200}
              src="/photo_S-Makarov_500x.jpeg"
              alt="@shadcn"
            />
            <AvatarFallback>S. Makarov</AvatarFallback>
          </Avatar>
          <span className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
            Сергей Макаров
          </span>
          <span className="text-[#7a7a7a] text-[12px] mb-[18px]">
            Co-founder
          </span>
          <div className="whitespace-pre-wrap sm:whitespace-nowrap text-[13px] text-[#1e1e24] font-noto font-light">
            (+996) 772 254 004, makarov@sunhouseteam.com
          </div>
          <div className="flex justify-center gap-10 items-center my-4">
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
        <div className="flex flex-col items-center">
          <Avatar className="w-[200px] h-[200px]">
            <AvatarImage
              src="/photo_M-Shamshidov_5.jpg"
              alt="@shadcn"
              className=" object-cover"
            />
            <AvatarFallback className="text-[24px]">
              M. Shamshidov
            </AvatarFallback>
          </Avatar>
          <span className="text-[20px] text-[#1e1e24] font-semibold font-noto my-5">
            Михаил Шамшидов
          </span>
          <span className="text-[#7a7a7a] text-[12px] mb-[18px]">
            Co-founder
          </span>
          <div className="whitespace-pre-wrap sm:whitespace-nowrap text-[13px] text-[#1e1e24] font-noto font-light">
            (+998) 935 003 936, michael@shamshidov.com
          </div>
          <div className="flex justify-center gap-10 items-center my-4">
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
    </div>
  );
}
