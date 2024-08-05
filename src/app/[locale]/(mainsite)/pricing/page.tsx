"use client";
import Faq from "@/components/main-site/Faq";
import Image from "next/image";
import ImgOne from "@/img/pricing-page-img-1.webp";
import ImgTwo from "@/img/pricing-page-img-2.webp";
import DownloadOptions from "@/components/main-site/DownloadOptions";
import PricingCards from "@/components/main-site/PricingCards";
import SectionTitle from "@/components/SectionTitle";
import BrandName from "@/components/BrandName";
import Prominent from "@/components/Prominent";
import { useTranslations } from "next-intl";

// import feature_icon from "@/img/featured-icon.png";
const Home = () => {
  const t = useTranslations("Pricing");

  return (
    <>
      <section className="main-banner bg-vector">
        <div className="container mx-auto  px-4 py-32 sm:px-0 lg:px-4">
          {/* Title */}
          <SectionTitle
            SectionTitle={
              <>
                {" "}
                {t("PricingHeroSectionTitle")} <BrandName />
              </>
            }
            className=" text-5xl leading-relaxed"
            SectionName="Pricing"
          />
          <PricingCards />
        </div>
      </section>

      <section>
        <div className="container mx-auto  px-4  sm:px-0 lg:px-4">
          {/* Title */}
          <SectionTitle
            SectionTitle={
              <>
                {t("UnleashPricingTitle")}{" "}
                <Prominent>{t("PrimaryText")}</Prominent>
              </>
            }
            className=" text-4xl leading-relaxed"
          />
        </div>

        <DownloadOptions />
      </section>
      <section className="bg-vector">
        <div className="mt-5 py-10">
          <div className="font-regular text-center  text-gray-darkf text-3xl lg:text-4xl canela-regular mx-auto lg:text-center">
            {t("AnText")}{" "}
            <span className="text-orange-600">{t("HonestText")}</span>{" "}
            {t("andText")}{" "}
            <span className="text-orange-600">{t("Reliabletext")} </span>
            {t("SolutionText")}{" "}
          </div>
          <div className="container m-auto gap-8 py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-10 lg:px-6">
            <div>
              <div className="flex flex-col  mt-10 h-max">
                <h1 className="font-bold  text-gray-darkf text-3xl lg:text-4xl canela-regular text-center lg:text-start">
                  {t("ActivityText")}{" "}
                  <span className="text-orange-600"> {t("LogsText")} </span>
                </h1>
                <p className="mt-6 text-regular leading-relaxed text-dark tracking-wide text-center lg:text-start ">
                  {t("ActivityParagraph")}
                </p>
              </div>
              <div className="flex flex-col  mt-10 h-max">
                <h1 className="font-bold  text-gray-darkf text-3xl lg:text-4xl canela-regular text-center lg:text-start">
                  {t("Killtext")}{" "}
                  <span className="text-orange-600">{t("Switchtext")}</span>
                </h1>
                <p className="mt-6 text-regular leading-relaxed text-dark tracking-wide text-center lg:text-start ">
                  {t("ProtectParagraph")}
                </p>
              </div>
              <div className="flex flex-col  mt-10 h-max">
                <h1 className="font-bold  text-gray-darkf text-3xl lg:text-4xl canela-regular text-center lg:text-start">
                  {t("SecurityText")}{" "}
                  <span className="text-orange-600">{t("PrivacyText")}</span>
                </h1>
                <p className="mt-6 text-regular leading-relaxed text-dark tracking-wide text-center lg:text-start ">
                  {t("EmpowerText")}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                className="w-100"
                src={ImgOne.src}
                width={600}
                height={600}
                alt=""
              />
            </div>
          </div>
          <div className="container m-auto gap-8 py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-10 lg:px-6">
            <div className="flex justify-center items-center">
              <Image
                className="w-100"
                src={ImgTwo.src}
                width={600}
                height={500}
                alt=""
              />
            </div>
            <div>
              <div className="flex flex-col  mt-10 h-max">
                <h1 className="font-bold  text-gray-darkf text-3xl lg:text-4xl canela-regular text-center lg:text-start">
                  {t("Splittext")}{" "}
                  <span className="text-orange-600">{t("Tunnelingtext")}</span>
                </h1>
                <p className="mt-6 text-regular leading-relaxed text-dark tracking-wide text-center lg:text-start ">
                  {t("SplitParagraph")}
                </p>
              </div>
              <div className="flex flex-col  mt-10 h-max">
                <h1 className="font-bold  text-gray-darkf text-3xl lg:text-4xl canela-regular text-center lg:text-start">
                  {t("HighLevel")}{" "}
                  <span className="text-orange-600">{t("Streamingtext")}</span>
                </h1>
                <p className="mt-6 text-regular leading-relaxed text-dark tracking-wide text-center lg:text-start ">
                  {t("HighLevelParagraph")}
                </p>
              </div>
              <div className="flex flex-col  mt-10 h-max">
                <h1 className="font-bold  text-gray-darkf text-3xl lg:text-4xl canela-regular text-center lg:text-start">
                  {t("AdsText")}{" "}
                  <span className="text-orange-600">{t("Blockertext")} </span>
                </h1>
                <p className="mt-6 text-regular leading-relaxed text-dark tracking-wide text-center lg:text-start ">
                  {t("AdsParagraph")}
                </p>
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
