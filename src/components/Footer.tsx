"use client";
import React from "react";
import Image from 'next/image';

import Link from "next/link";

const Footer = () => {
  // const [showFooter, setShowFooter] = useState(true);
  // useEffect(() => {
  //   // Hide footer after an hour
  //   const interval = setInterval(() => {
  //     setShowFooter(true);
  //   }, 3600000); // 3600000 ms = 1 hour

  //   return () => clearInterval(interval); // Cleanup on component unmount
  // }, []);
  return (
    <>
      {/* {showFooter && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#E9E9EC] text-black py-4 flex justify-center items-center z-50">
          <div className="max-w-screen-xl w-full flex justify-between items-center px-5 md:px-10">
            <div className="flex justify-evenly gap-5 items-center">
              <p>Присоедениться к нам в Telegram!</p>
              <Link href="https://t.me/samarkandforum" passHref>
                <Button variant="outline">
                  Подписаться на канал
                </Button>

              </Link>
            </div>
          </div>
        </div>
      )} */}
      <footer className="relative max-container padding-container py-20  flex flex-col gap-12 lg:gap-20 bg-[#111111] text-white">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between px-5 sm:px-[300px]">
          <div className="flex flex-col gap-12 lg:w-1/3">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Link href="/">
                  <Image
                    src="/logofoooter.png"
                    alt="logo"
                    width={120}
                    height={42.5}
                  />
                </Link>
              </div>
            </div>
          </div>
          <FooterCard
            link1="Проекты"
            linkHref1="/projects"
            link2="О нас"
            linkHref2="/aboutus"
            link3="Отзывы"
            linkHref3="/reviews"
          />
          <FooterCard
            link1="Партнерам"
            linkHref1="/partners"
            link2="Фасилитация"
            linkHref2="fasilitation"
          />
          <FooterCard
            link1="team@samarkandforum.com"
            link2="+998 93 500 39 36"
            link3="Telegram Us"
          />
          <div className="flex flex-col gap-4">
            <ul
              role="list"
              className="flex justify-between  gap-3 items-center flex-wrap mt-5 custom-list"
              aria-label="Social media links"
            >
              <li className="t-sociallinks__item t-sociallinks__item_telegram">
                <a
                  href="https://t.me/samarkandforum"
                  target="_blank"
                  rel="nofollow noopener"
                  aria-label="Telegram Chat"
                  title="Telegram Chat"
                  style={{ width: "33px", height: "33px" }}
                >
                  <svg
                    className="t-sociallinks__svg"
                    role="presentation"
                    width="33px"
                    height="33px"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z"
                      fill="#ffffff"
                    />
                  </svg>
                </a>
              </li>
              <li className="t-sociallinks__item t-sociallinks__item_youtube">
                <a
                  href="https://www.youtube.com/channel/UC_OcIdicIkL0hLPuC47RLeQ"
                  target="_blank"
                  rel="nofollow noopener"
                  aria-label="YouTube"
                  title="YouTube"
                  style={{ width: "33px", height: "33px" }}
                >
                  <svg
                    className="t-sociallinks__svg"
                    role="presentation"
                    width="33px"
                    height="33px"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm17.9-67.374c3.838.346 6 2.695 6.474 6.438.332 2.612.626 6.352.626 10.375 0 7.064-.626 11.148-.626 11.148-.588 3.728-2.39 5.752-6.18 6.18-4.235.48-13.76.7-17.992.7-4.38 0-13.237-.184-17.66-.552-3.8-.317-6.394-2.44-6.916-6.218-.38-2.752-.626-6.022-.626-11.222 0-5.788.209-8.238.7-10.853.699-3.732 2.48-5.54 6.548-5.96C36.516 32.221 40.55 32 49.577 32c4.413 0 13.927.228 18.322.626Zm-23.216 9.761v14.374L58.37 49.5l-13.686-7.114Z"
                      fill="#ffffff"
                    />
                  </svg>
                </a>
              </li>
              <li className="t-sociallinks__item t-sociallinks__item_instagram">
                <a
                  href="https://www.instagram.com/samarkandforum/"
                  target="_blank"
                  rel="nofollow noopener"
                  aria-label="Instagram"
                  title="Instagram"
                  style={{ width: "33px", height: "33px" }}
                >
                  <svg
                    className="t-sociallinks__svg"
                    role="presentation"
                    width="33px"
                    height="33px"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z"
                      fill="#ffffff"
                    />
                  </svg>
                </a>
              </li>
              <li className="t-sociallinks__item t-sociallinks__item_facebook">
                <a
                  href="https://www.facebook.com/samarkandforum/"
                  target="_blank"
                  rel="nofollow noopener"
                  aria-label="Facebook"
                  title="Facebook"
                  style={{ width: "33px", height: "33px" }}
                >
                  <svg
                    className="t-sociallinks__svg"
                    role="presentation"
                    width="33px"
                    height="33px"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858 50 50 50Zm23-31.0002V52.363c0-8.9114-4.7586-13.0586-11.1079-13.0586-5.1234 0-7.4123 2.8199-8.6942 4.7942v-4.1124h-9.6468c.1297 2.7235 0 29.0136 0 29.0136h9.6484v-16.203c0-.8675.0657-1.731.3203-2.3513.6981-1.7351 2.284-3.5286 4.9491-3.5286 3.4905 0 4.8859 2.6611 4.8859 6.5602v15.5227H73ZM53.1979 44.0986v.094h-.0632c.0069-.0111.0148-.0228.0229-.0346.0137-.0198.0281-.0401.0403-.0594ZM28 31.0123C28 28.1648 30.1583 26 33.4591 26c3.3016 0 5.3302 2.1648 5.3934 5.0123 0 2.7851-2.0918 5.0156-5.4567 5.0156h-.064c-3.2351 0-5.3318-2.2305-5.3318-5.0156Zm10.2177 37.9875h-9.6445V39.9862h9.6445v29.0136Z"
                      fill="#ffffff"
                    ></path>{" "}
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

interface FooterCardProps {
  link1: string;
  linkHref1?: string;
  link2: string;
  linkHref2?: string;
  link3?: string;
  linkHref3?: string;
  link4?: string;
  linkHref4?: string;
}

const FooterCard = ({
  link1,
  linkHref1 = "#",
  link2,
  linkHref2 = "#",
  link3,
  linkHref3 = "#",
  link4,
  linkHref4 = "#",
}: FooterCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="flex flex-col gap-4 mt-4">
        <Link className="opacity-70" href={linkHref1}>
          {link1}
        </Link>
        <Link className="opacity-70" href={linkHref2}>
          {link2}
        </Link>
        <Link className="opacity-70" href={linkHref3}>
          {link3}
        </Link>
        {link4 && (
          <Link className="opacity-70" href={linkHref4}>
            {link4}
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Footer;
