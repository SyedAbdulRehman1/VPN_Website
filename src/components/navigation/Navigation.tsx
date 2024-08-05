"use client";
import Link from "next/link";
import { HomeRoutes } from "@/utils/routes";
import { usePathname } from "next/navigation";
import Applications from "@/components/navigation/ApplicationDropdown";
import classNames from "classnames";
import React, { useState, useEffect } from "react";
import { LogoNav } from "../Logo";
import NavigationItem from "./NavigationItems";
import { useTranslations } from "next-intl";
import { getTokenn } from "@/services/local-storage";
import { useRouter } from "next/navigation";

interface ScrollClassProps {
  className?: string;
  threshold?: number;
}

const Navigation: React.FC<ScrollClassProps> = ({
  className = "bg-white  border-b dark:bg-gray-900 dark:border-gray-700",
  threshold = 100,
}) => {
  const router = useRouter();
  const [scrollClass, setScrollClass] = useState("");
  const handleScroll = () => {
    // console.log(window.scrollY)
    if (window.scrollY > threshold) {
      setScrollClass(className);
    } else {
      setScrollClass("md:bg-transparent ");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const [toggle, setToggle] = useState(false);

  const t = useTranslations("Navigation");
  const isLoggedIn = () => {
    const token = getTokenn();
    if (!token) {
      router.push("/login");
    } else {
      router.push("/clientarea");
    }
  };
  return (
    <>
      <nav
        className={classNames(
          scrollClass,
          " xs:bg-white sm:bg-white fixed w-full z-20 top-0 left-0"
        )}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4">
          <Link href="/" passHref>
            <LogoNav />
          </Link>

          <div className="flex md:order-2">
            <span
              onClick={isLoggedIn}
              className="cursor-pointer text-dark dark:text-white  bg-none outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-2"
            >
              {t("myAccount")}
            </span>

            <Link
              href={"/checkout"}
              className="text-white sm:hidden md:block bg-gray-darkf focus:ring-4 font-medium rounded-md text-sm px-3 py-2 text-center mr-3 md:mr-0"
            >
              {t("getStarted")}
            </Link>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setToggle((prevState) => !prevState)}
            >
              <span className="sr-only">Open main menu</span>
              {toggle ? (
                <svg
                  width="67"
                  height="73"
                  viewBox="0 0 67 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.7708 3.79175L4.0625 43.0417H33.5L30.2292 69.2084L62.9375 29.9584H33.5L36.7708 3.79175Z"
                    stroke="#F78E41"
                    strokeWidth="6.54167"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={classNames(
              "items-center justify-start ",
              toggle ? "" : "hidden",
              " w-full md:flex md:w-auto md:order-1"
            )}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium   rounded-lg  md:flex-row md:space-x-8 md:mt-0 ">
              {[
                HomeRoutes.homeLink,
                HomeRoutes.features,
                HomeRoutes.applications,
                HomeRoutes.pricing,
                HomeRoutes.helpSupport,
              ].map((route) =>
                typeof route == "string" ? (
                  <NavigationItem pathName={route} key={route} />
                ) : (
                  <Applications key="application" />
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>

    // <div>
    //   <nav className="bg-orange-500 mt-48 p-4">
    //   <ul className="flex space-x-4">
    //     <li>
    //       <Link href="/">
    //         <span className="text-white">Home</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/features">
    //         <span className="text-white">Features</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="#">
    //         <span className="text-white">Products</span>
    //       </Link>
    //     </li>
    //     <ul>

    //     <li>
    //       <Link href={Routes.iosApplication}>
    //         <span className={pathname == Routes.iosApplication ? "text-red-800" : "text-white"}>iOS/iPad App</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href={Routes.androidApplication}>
    //         <span className="text-white">Android App</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href={Routes.windowsApplication}>
    //         <span className="text-white">Windows App</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href={Routes.macApplication}>
    //         <span className="text-white">MacOS App</span>
    //       </Link>
    //     </li>
    //     </ul>
    //     <li>
    //       <Link href="/pricing">
    //         <span className="text-white">Pricing</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/">
    //         <span className="text-white">Help Desk</span>
    //       </Link>
    //     </li>
    //     {/* Add more navigation items as needed */}
    //   </ul>
    // </nav>
    // </div>
  );
};

export default Navigation;
