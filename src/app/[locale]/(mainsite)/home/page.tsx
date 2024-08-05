"use client";
import React from "react";
import Image from "next/image";

import bannerImg from "@/img/hero-section-image.webp";
import homenetflix from "@/img/seemless-playback.webp";
import checkConnection from "@/img/check-connection.webp";
import freeVPN from "@/img/free-vpn.webp";
import check_icon from "@/img/check-icon.svg";
import multipleLocations from "@/img/multiple-locations.webp";
import dashboardImg from "@/img/dash-img.webp";
import Faq from "@/components/main-site/Faq";
import multiple_screens from "@/img/multiple-screens.png";
import {
  FeatureBandwidth,
  FeatureCountries,
  FeaturePolicy,
  FeatureServers,
} from "@/components/main-site/FeaturesImg";
import BrandName from "@/components/BrandName";
import SectionTitle from "@/components/SectionTitle";
import DownloadOptions from "@/components/main-site/DownloadOptions";
import Prominent from "@/components/Prominent";
import PricingCards from "@/components/main-site/PricingCards";
import { useTranslations } from "next-intl";

import { getPageMetadata } from "@/utils/Metadata";
import { Metadata } from "next";
import Link from "next/link";

// export const metadata: Metadata = getPageMetadata("home")

const Home = () => {
  const t = useTranslations("Index");
  return (
    <>

      {/* Hero Section start√ */}
      <section className="main-banner bg-vector">
        <div className="container mx-auto  pt-16 pb-8   px-3 sm:px-0 lg:px-4">
          <div className="gap-3 items-center px-4 mx-auto max-w-screen-xl xl:gap-5 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div className="">
              <h1 className="block text-3xl font-bold text-gray-darkf sm:text-4xl mt-20 sm:mt-5 lg:mt-0 lg:text-5xl lg:leading-tight dark:text-white canela-regular">
                {t("heroSectionTitle")} <BrandName />
              </h1>

              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                <Link
                  className="border text-gray-darkf items-center gap-x-3 text-center hover:bg-orange hover:text-dark bg-gray-light text-sm lg:text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:virgo-orange focus:ring-offset-2 focus:orange transition py-3 px-4 dark:focus:orange"
                  href="#"
                >
                  {t("download")} <BrandName text />
                </Link>
                <Link
                  className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center bg-gray-darkf text-white hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                  href="/checkout"
                >
                  {t("btnheading")}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>

            <div className="">
              <Image
                className="w-full rounded-md"
                src={bannerImg}
                placeholder="empty"
                alt=""
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section end */}

      {/* Features Section start√ */}
      <section className="container bg-white dark:bg-gray-900 m-auto px-4 ">
        {/* Title */}
        <SectionTitle
          SectionTitle={
            <>
              {t("benefitsTitle")} <BrandName />
            </>
          }
          className="lg:text-4xl text-2xl"
          SectionSubtitle={t("subtitle")}
          SectionName={t("FeaturesTitle")}
        />

        {/* Seemless Playback */}
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-2xl lg:text-4xl tracking-tight font-extrabold text-gray-darkf dark:text-white">
                {t("seamlessHeading")}
              </h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                {t("seamlessParagraph")}
              </p>
              <div className="features mt-4">
                <ul className=" w-max mt-3">
                  <li className="md:text-lg  mx-3 text-dark-gray-color">
                    {t("seemlessfirstli")}
                  </li>
                  <li className="md:text-lg  mx-3 text-dark-gray-color">
                    {t("seemlesssecondli")}
                  </li>
                  <li className="md:text-lg  mx-3 text-dark-gray-color">
                    {t("seemlessthirdli")}
                  </li>
                </ul>
              </div>
            </div>
            <Image
              className="w-full "
              src={homenetflix}
              alt="dashboard image"
            />
          </div>
        </section>

        {/* Zero Surveillance */}
        <section>
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div className="flex flex-col justify-center py-4 lg:order-2">
              <h1 className="mb-4 text-2xl lg:text-4xl tracking-tight font-extrabold text-gray-darkf dark:text-white">
                {t("zeroHeading")}
              </h1>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                {t("zeroParagraph")}
              </p>
              <div className="mt-4">
                <div className="w-max flex mx-5 mt-3">
                  <Image src={check_icon.src} width={20} height={20} alt="" />
                  <p className="md:text-lg  mx-3 text-dark-gray-color">
                    {t("zerofirstli")}
                  </p>
                </div>
                <div className="w-max flex mx-5 mt-3">
                  <Image src={check_icon.src} width={20} height={20} alt="" />
                  <p className="md:text-lg  mx-3 text-dark-gray-color">
                    {t("zerosecondli")}
                  </p>
                </div>
                <div className="w-max flex mx-5 mt-3">
                  <Image src={check_icon.src} width={20} height={20} alt="" />
                  <p className="md:text-lg  mx-3 text-dark-gray-color">
                    {t("zerothirdli")}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start lg:order-1">
              <Image
                className="w-full"
                src={checkConnection}
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
              <h1 className="mb-4 text-2xl lg:text-4xl tracking-tight font-extrabold text-gray-darkf dark:text-white">
                {t("freeHeading")}
              </h1>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                {t("freeparagraph")}
              </p>
              <div className="mt-4">
                <div className="w-max flex mx-5 mt-3">
                  <Image src={check_icon.src} width={20} height={20} alt="" />
                  <p className="md:text-lg  mx-3 text-dark-gray-color">
                    {t("freefirstli")}
                  </p>
                </div>
                <div className="w-max flex mx-5 mt-3">
                  <Image src={check_icon.src} width={20} height={20} alt="" />
                  <p className="md:text-lg  mx-3 text-dark-gray-color">
                    {t("freesecondli")}
                  </p>
                </div>
                <div className="w-max flex mx-5 mt-3">
                  <Image src={check_icon.src} width={20} height={20} alt="" />
                  <p className="md:text-lg  mx-3 text-dark-gray-color">
                    {t("freethirdli")}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image className="w-full" src={freeVPN} alt="" />
            </div>
          </div>
        </section>
      </section>
      {/* Features Section end */}

      {/* Reliable Global Server section starts */}
      <section className="mt-5 bg-server-section py-10">
        <div className="container m-auto gap-8 py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-10 lg:px-6">
          <div className="flex flex-col  mt-10 h-max">
            <h1 className="font-bold  mb-6 text-gray-darkf text-3xl lg:text-5xl canela-regular text-center lg:text-start">
              {t("Reliableheading")} <Prominent>{t("Globalheading")}</Prominent>{" "}
              {t("Serverheading")} <Prominent>{t("Networkheading")}</Prominent>
            </h1>
            <p className="mt-7 font-light text-gray md:text-lg dark:text-gray-400">
              {t("reliableparagraph")}
            </p>

            <div className="flex  justify-between mt-4">
              <div className="w-max flex items-center mx-5 mt-8">
                <FeatureServers />

                <div>
                  <p className="text-[12px] lg:text-3xl mx-3 text-gray-darkf font-bold">
                    100+
                  </p>
                  <p className="text-[12px] lg:text-lg mx-3">
                    {t("Serverheading")}
                  </p>
                </div>
              </div>
              <div className="w-max flex items-center mx-5 mt-8">
                <FeatureBandwidth />
                <div>
                  <p className="text-[17px] md:text-3xl mx-3 text-gray-darkf font-bold">
                    {t("Unlimitedheading")}
                  </p>
                  <p className="text-[14px] mx-3">{t("Bandwidthtext")}</p>
                </div>
              </div>
            </div>
            <div className="flex  justify-between mt-4">
              <div className="w-max flex items-center mx-5 mt-8">
                <FeatureCountries />
                <div>
                  <p className="text-[12px] lg:text-2xl mx-3  text-gray-darkf font-bold">
                    20+
                  </p>
                  <p className="text-[12px] mx-3">{t("countriestext")}</p>
                </div>
              </div>
              <div className="w-max flex items-center mx-5 mt-8">
                <FeaturePolicy />
                <div>
                  <p className="text-[17px] md:text-3xl mx-3 text-gray-darkf font-bold">
                    {t("Zerologstext")}
                  </p>
                  <p className="text-[14px] mx-3">{t("Policytext")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              className="w-100 center"
              src={multipleLocations}
              width={450}
              height={450}
              alt=""
            />
          </div>
        </div>
      </section>
      {/* Reliable Global Server section ends */}

      {/* Apps Showcase Section Starts */}

      <section className="text-center mt-4 px-4">
        {/* Title */}
        <SectionTitle
          SectionTitle={
            <>
              {t("pricingText")} <Prominent>{t("pricingProminent")}</Prominent>
            </>
          }
          className="lg:text-4xl text-2xl"
          SectionSubtitle={t("pricingparagraph")}
          SectionName={t("PricingTitle")}
        />

        <Image
          className="w-100 mt-5 m-auto"
          src={dashboardImg}
          width={900}
          alt=""
        />
        <DownloadOptions />
      </section>
      {/* Apps Showcase Section Ends */}

      {/* Apps Showcase Section Starts */}
      <section>
        <div className="container m-auto text-center mt-16">
          {/* Title */}
          <SectionTitle
            SectionTitle={
              <>
                {t("planheading")}{" "}
                <Prominent>{t("comfortabletext")} </Prominent>
                {t("toyoutext")}
              </>
            }
            className="lg:text-4xl text-2xl"
            SectionSubtitle={t("rangeparagraph")}
            SectionName={t("PricingTitle")}
          />
        </div>
        <div className="container mt-10 px-4 md:px-6 m-auto max-w-screen-xl">
          <PricingCards />
        </div>
      </section>
      {/* Apps Showcase Section Ends */}

      {/* FAQ Section Start */}
      <Faq />
      {/* FAQ Section Ends */}

      <section className="bg-vector mt-10 py-20 px-4 mx-auto ">
        <div className="container m-auto flex flex-col md:flex-row max-w-screen-xl">
          <div className="md:w-1/2 flex justify-start items-center">
            <Image
              className="w-full"
              src={multiple_screens.src}
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="md:w-1/2 features-2 mt-4 md:mt-0 md:px-5 md:flex md:flex-col md:justify-center">
            <h1 className="font-extrabold text-xl text-center md:text-start md:text-4xl canela-regular text-dark">
              {t("unleashpara")} <span className="text-orange-600">Virgo</span>{" "}
              VPN
            </h1>
            <ul className="list-disc pl-2 mt-7 font-normal inter text-[10px]  md:text-[15px]">
              <li className="flex items-center gap-2 mb-6 font-normal">
                {t("advancetext")}
              </li>
              <li className="flex items-center gap-2 mb-6 font-normal">
                {t("ourtext")}
              </li>
              <li className="flex items-center gap-2 mb-6 font-normal">
                {t("optimizetext")}
              </li>
              <li className="flex items-center gap-2 mb-6 font-normal">
                {t("reachtext")}
              </li>
              <li className="flex items-center gap-2 mb-6 font-normal">
                {t("begintext")}
              </li>
              <li className="flex items-center gap-2 mb-6 font-normal">
                {t("comprehensivetext")}
              </li>
            </ul>
            <div className="flex justify-center md:justify-start">
              <Link
                className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center bg-gray-darkf text-white hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                href="#"
              >
                {t("btnheading")}
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
