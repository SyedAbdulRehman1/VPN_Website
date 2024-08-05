"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Windows from "@/img/windows.png";
import MultiLocation from "@/img/MultiLocation.png";
import Capability from "@/img/Capability.png";
import Faq from "@/components/main-site/Faq";
import BrandName from "@/components/BrandName";
import DownloadOptions from "@/components/main-site/DownloadOptions";
import Prominent from "@/components/Prominent";
import { useTranslations } from "next-intl";
import { post } from "@/services";
import { LINKS } from "@/utils";

const Home = () => {
  const t = useTranslations("Windows");
  const [links, setLinks] = useState<any>("");

  useEffect(() => {
    fetchDonwloads();
  }, []);

  const fetchDonwloads = async () => {
    const data = {
      query: `{
          appLinks {
            type
            icon
            link
          }
        }`,
      variables: {},
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const {
        data: { appLinks },
      }: any = await post(LINKS, data, config);
      if (appLinks?.length) {
        const obj: any = {};
        appLinks.forEach((link: any) => {
          obj[link.type] = link;
        });
        setLinks(obj);
      }
    } catch (error) {
      console.log("error fetching all payment methods", error);
    }
  };

  return (
    <>
      {/* Hero Section start√ */}
      <section className="main-banner bg-vector">
        <div className="container mx-auto  px-3 sm:px-0 lg:px-4">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div className="">
              <h1 className="block text-3xl font-bold text-gray-darkf sm:text-4xl mt-20 sm:mt-5 lg:mt-0 lg:text-3xl lg:leading-tight dark:text-white canela-regular">
                {t("PremiumHeading")} <BrandName /> {t("fortext")}{" "}
                <Prominent>Windows</Prominent>{" "}
              </h1>
              <p className="mb-6 mt-5 font-light text-gray-500 md:text-lg dark:text-gray-500">
                {t("WindowParagraph")}
              </p>

              <div className="mt-7 grid gap-5 w-full place-items-center sm:inline-flex justify-center">
                <a
                  className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center bg-gray-darkf text-white hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                  href={"/checkout"}
                >
                  {t("btnheadings")}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
                <div className=" relative flex justify-center items-center">
                  <div className="h-10 border"></div>
                  <div className="bg-white absolute text-[10px] p-[2px] text-gray-200">
                    OR
                  </div>
                </div>
                <a
                  href={links["Windows"]?.link}
                  target="_blank"
                  className="text-white bg-orange-700 items-center gap-x-3 text-center hover:text-white bg-gray-light text-xs lg:text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:virgo-orange focus:ring-offset-2 focus:orange transition py-3 px-7 dark:focus:orange"
                >
                  {t("DownloadHeading")}
                </a>
              </div>
            </div>

            <div className="flex justify-end items-end">
              <Image
                className="w-100 rounded-md"
                src={Windows.src}
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section end */}

      {/* Download Section Start */}

      <DownloadOptions />

      {/* Download Section Ends */}

      {/* Features Section start√ */}
      <section className="container bg-white dark:bg-gray-900 m-auto px-4 ">
        {/* seamlessly  */}
        <section>
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div className="flex flex-col justify-center py-4 lg:order-2">
              <h1 className="mb-4 text-2xl lg:text-4xl tracking-tight font-bold text-gray-darkf dark:text-white canela-regular">
                {t("Windowunleash")} <Prominent>Virgo</Prominent> VPN
              </h1>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                {t("WindowunleashParagraph")}
              </p>
            </div>
            <div className="flex justify-center lg:justify-start lg:order-1">
              <Image
                className="w-full"
                src={MultiLocation.src}
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>
        </section>

        {/* Free Unlimited VPN */}
        <section>
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div className="flex flex-col justify-center py-4">
              <h1 className="mb-4 text-2xl lg:text-4xl tracking-tight font-bold text-gray-darkf dark:text-white canela-regular">
                {t("EffortsText")} <Prominent>{t("Effortsubtext")}</Prominent>
              </h1>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                {t("EffortParagraph")}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                className="w-full"
                src={Capability.src}
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>
        </section>
      </section>
      {/* Features Section end */}

      {/* FAQ Section Start */}
      <Faq />
      {/* FAQ Section Ends */}
    </>
  );
};

export default Home;
