"use client";
import Faq from "@/components/main-site/Faq";
import Image from "next/image";
import Homeicon from "@/img/home-icon.svg";
import Issue from "@/img/Fix-issue.svg";
import Billing from "@/img/Billing.svg";
import Accounts from "@/img/Accounts.svg";
import Connectivity from "@/img/Connectivity.svg";
import { useTranslations } from "next-intl";

// import feature_icon from "@/img/featured-icon.png";
const Home = () => {
  const t = useTranslations("HelpDesk");
  return (
    <>
      <section className="main-banner bg-vector">
        <div className="container mx-auto text-center  px-5 py-32 sm:px-0 lg:px-12">
          {/* Title */}
          <h1 className="my-3 text-3xl leading-relaxed canela-regular text-gray-800">
            {t("helpdeskTitle")}
          </h1>
          <p className="leading-relaxed text-gray-800 text-sm">
            {t("BrowserHeading")}
          </p>

          <div className="flex items-center justify-center mt-4">
            <div className="w-full relative">
              <svg
                className="absolute top-5 left-5 w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <input
                type="search"
                className="p-4 px-12 w-full border-0 z-20 text-sm text-gray-900 bg-gray-100 rounded-md border-gray-300 focus:ring-orange-500 focus:ring-1 focus:border-orange-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500"
                placeholder={t("PlaceHolderText")}
                required
              />
              <a href="#">
                <button
                  type="button"
                  className="absolute top-0 right-0 p-4 text-sm font-medium h-full text-white bg-orange-800 rounded-r-md border border-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-400 dark:focus:ring-orange-500"
                >
                  {t("Searchtext")}
                </button>
              </a>
            </div>
          </div>
          <p className="text-gray-500 mt-7 text-sm">
            {t("POPULARText")} &nbsp;{" "}
            <a className="text-gray-800 font-bold border-b border-black ">
              {" "}
              &nbsp; {t("WhatText")}
            </a>{" "}
            &nbsp;{" "}
            <a className="text-gray-800 font-bold border-b border-black">
              {" "}
              {t("myText")}
            </a>
          </p>
        </div>
        <hr />
      </section>

      <section>
        <div className="container px-4 lg:px-10 m-auto max-w-screen-xl mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col lg:border-r">
              <div className="flex items-center justify-start gap-3 h-100">
                <Image
                  className="rounded-md"
                  src={Homeicon.src}
                  width={50}
                  height={50}
                  alt=""
                />
                <h3 className="font-bold text-xl text-gray-darkf">
                  {t("GettingStartedText")}
                </h3>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <h4 className="font-bold text-sm text-gray-darkf">
                  {t("FirststepsText")}
                </h4>
                <h4 className="font-bold text-sm text-gray-darkf">
                  {t("InstallationText")}
                </h4>
                <h4 className="font-bold text-sm text-gray-darkf">
                  {t("ManualText")}
                </h4>
                <h4 className="text-sm text-gray-darkf">{t("ArticalsText")}</h4>
              </div>
            </div>
            <div className="col lg:border-r">
              <div className="flex items-center justify-start gap-3 h-100">
                <Image
                  className="rounded-md"
                  src={Issue.src}
                  width={50}
                  height={50}
                  alt=""
                />
                <h3 className="font-bold text-xl text-gray-darkf">
                  {t("FixHeading")}
                </h3>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <h4 className="font-bold text-sm text-gray-darkf">
                  {t("speedText")}
                </h4>
                <h4 className="font-bold text-sm text-gray-darkf">
                  {t("connectionText")}
                </h4>
                <h4 className="font-bold text-sm text-gray-darkf">
                  {t("streamingText")}
                </h4>
                <h4 className="text-sm text-gray-darkf">{t("articalsText")}</h4>
              </div>
            </div>
            <div className="col">
              <div className="flex items-center justify-start gap-3 h-100">
                <Image
                  className="rounded-md"
                  src={Billing.src}
                  width={50}
                  height={50}
                  alt=""
                />
                <h3 className="font-bold text-xl text-gray-darkf">
                  {t("BillingText")}
                </h3>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <h4 className="font-bold text-sm text-gray-darkf">
                  {t("RefundText")}
                </h4>
                <h4 className="font-bold text-sm text-gray-darkf">
                  {t("InvoicesText")}
                </h4>
                <h4 className="font-bold text-sm text-gray-darkf">
                  {t("FAQText")}
                </h4>
                <h4 className="text-sm text-gray-darkf">{t("ArticlesText")}</h4>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="col lg:border-r">
              <div className="flex items-center justify-start gap-3 h-100">
                <Image
                  className="rounded-md"
                  src={Accounts.src}
                  width={50}
                  height={50}
                  alt=""
                />
                <h3 className="font-bold text-xl text-gray-darkf">
                  {t("AccountText")}
                </h3>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <h4 className="font-bold text-sm text-gray-darkf">
                  {t("2FAText")}
                </h4>
                <h4 className="font-bold text-sm text-gray-darkf">
                  {t("EmailText")}
                </h4>
                <h4 className="font-bold text-sm text-gray-darkf">
                  {t("FAQText")}
                </h4>
                <h4 className="text-sm text-gray-darkf">{t("ArticlesText")}</h4>
              </div>
            </div>
            <div className="col lg:border-r">
              <div className="flex items-center justify-start gap-3 h-100">
                <Image
                  className="rounded-md"
                  src={Issue.src}
                  width={50}
                  height={50}
                  alt=""
                />
                <h3 className="font-bold text-xl text-gray-darkf">
                  {t("VirgoText")}
                </h3>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <h4 className="font-bold text-sm text-gray-darkf">
                  {t("VirgoVpnText")}
                </h4>
                <h4 className="font-bold text-sm text-gray-darkf">
                  {t("Surfshark")}
                </h4>
                <h4 className="font-bold text-sm text-gray-darkf">
                  {t("FeaturesText")}
                </h4>
                <h4 className="text-sm text-gray-darkf">{t("ArticlesText")}</h4>
              </div>
            </div>
            <div className="col">
              <div className="flex items-center justify-start gap-3 h-100">
                <Image
                  className="rounded-md"
                  src={Connectivity.src}
                  width={50}
                  height={50}
                  alt=""
                />
                <h3 className="font-bold text-xl text-gray-darkf">
                  {t("ConnectivityText")}
                </h3>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <h4 className="font-bold text-sm text-gray-darkf">
                  {t("IosText")}
                </h4>
                <h4 className="font-bold text-sm text-gray-darkf">
                  {t("AndroidText")}
                </h4>
                <h4 className="font-bold text-sm text-gray-darkf">
                  {t("WindowText")}
                </h4>
                <h4 className="text-sm text-gray-darkf">{t("ArticlesText")}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
};
export default Home;
