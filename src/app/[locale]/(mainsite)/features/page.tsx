"use client";
import Faq from "@/components/main-site/Faq";
import Image from "next/image";
import document_security from "@/img/document-security.svg";
import kill_img from "@/img/toggle-button.svg";
import web_security from "@/img/web-security.svg";
import file_security from "@/img/file-security.svg";
import internet_key from "@/img/internet-key.svg";
import security_lock from "@/img/security-lock.svg";
import DownloadOptions from "@/components/main-site/DownloadOptions";
import PricingCards from "@/components/main-site/PricingCards";
import SectionTitle from "@/components/SectionTitle";
import Prominent from "@/components/Prominent";
import BrandName from "@/components/BrandName";
import { useTranslations } from "next-intl";

// import feature_icon from "@/img/featured-icon.png";
const Home = () => {
  const t = useTranslations("FeaturesPage");
  return (
    <>

      <section className='main-banner bg-vector'>
        <div className="container mx-auto  px-4 py-32 sm:px-0 lg:px-4">
          <div className="md:w-75 mb-4 text-center lg:mb-16">
            {/* Title */}
            <SectionTitle
              SectionTitle={<>{t("Discovertext")} <Prominent>{t("UltimateProminent")} </Prominent> {t("PrivacyProminent")} </>}
              className="text-6xl leading-relaxed"
              SectionSubtitle={t("VPNService")}
              SectionName="Features"
            />
          </div>
          <div className="flex justify-center">
            <div className="mt-5 grid gap-3 sm:inline-flex">
              <a
                className="inline-flex border justify-center text-gray-darkf items-center gap-x-3 text-center hover:bg-orange hover:text-dark bg-gray-light text-sm lg:text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:virgo-orange focus:ring-offset-2 focus:orange transition py-3 px-4 dark:focus:orange"
                href="#"
              >
                {t("downloadtext")}
              </a>
              <a
                className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center bg-gray-darkf text-white hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                href="#"
              >
                {t("btnheading")}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container m-auto max-w-screen-xl mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col border-r">
              <div className="py-10 px-10 flex flex-col items-center text-center justify-center  h-100">
                <Image className="rounded-md" src={document_security.src} width={110} height={80} alt="" />
                <div className="mt-8">
                  <h3 className="font-bold text-xl text-gray-darkf">{t("logsHeading")}</h3>
                  <p className="mt-2 text-[15px] text-gray-darkf">{t("logsParagraph")}</p>
                </div>
              </div>
            </div>
            <div className="col border-r">
              <div className="py-10 px-10 flex flex-col items-center text-center justify-center  h-100">
                <Image className="rounded-md" src={kill_img.src} width={110} height={80} alt="" />
                <div className="mt-8">
                  <h3 className="font-bold text-xl text-gray-darkf">{t("killHeading")}</h3>
                  <p className="mt-2 text-[15px] text-gray-darkf">{t("killParagraph")}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="py-10 px-10 flex flex-col items-center text-center justify-center  h-100">
                <Image className="rounded-md" src={web_security.src} width={110} height={80} alt="" />
                <div className="mt-8">
                  <h3 className="font-bold text-xl text-gray-darkf">{t("privateHeading")}</h3>
                  <p className="mt-2 text-[15px] text-gray-darkf">{t("privateParagraph")}</p>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col border-r">
              <div className="py-10 px-10 flex flex-col items-center text-center justify-center  h-100">
                <Image className="rounded-md" src={file_security.src} width={110} height={80} alt="" />
                <div className="mt-8">
                  <h3 className="font-bold text-xl text-gray-darkf">{t("BrowseHeading")}</h3>
                  <p className="mt-2 text-[15px] text-gray-darkf">{t("BrowseParagraph")}</p>
                </div>
              </div>
            </div>
            <div className="col border-r">
              <div className="py-10 px-10 flex flex-col items-center text-center justify-center  h-100">
                <Image className="rounded-md" src={internet_key.src} width={110} height={80} alt="" />
                <div className="mt-8">
                  <h3 className="font-bold text-xl text-gray-darkf">{t("SecureHeading")}</h3>
                  <p className="mt-2 text-[15px] text-gray-darkf">{t("SecureParagraph")}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="py-10 px-10 flex flex-col items-center text-center justify-center  h-100">
                <Image className="rounded-md" src={security_lock.src} width={110} height={80} alt="" />
                <div className="mt-8">
                  <h3 className="font-bold text-xl text-gray-darkf">{t("BorderHeading")}</h3>
                  <p className="mt-2 text-[15px] text-gray-darkf">{t("BorderParagraph")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* Title */}
        <SectionTitle
          SectionTitle={<>{t("downloadHeading")} <BrandName /> {t("Downloadparagraph")}</>}
          className=" text-4xl leading-relaxed"
        />
        <DownloadOptions />
      </section>

      <section>

        <div className="container m-auto text-center mt-16">
          {/* Title */}
          <SectionTitle
            SectionTitle={<>{t("UnleashHeading")} <BrandName /></>}
            className=" text-4xl leading-relaxed"
            SectionName="Pricing"
          />
        </div>
          <PricingCards />

      </section>

      <Faq />
    </>
  );
};
export default Home;