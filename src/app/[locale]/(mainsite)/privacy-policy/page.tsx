"use client";
import SectionTitle from "@/components/SectionTitle";
import { useTranslations } from "next-intl";

const PrivacyPolicy = () => {
  const t = useTranslations("TermsAndService");
  return (
    <>
      <section className="main-banner bg-vector">
        <div className="container mx-auto  px-4 py-32 sm:px-0 lg:px-4">
          <div className="md:w-75 mb-4 text-center lg:mb-16">
            {/* Title */}
            <SectionTitle
              SectionTitle={<> {t("PrivacyHeading")} </>}
              className=" text-4xl leading-relaxed "
              SectionName={t("LEGAL")}
            />
          </div>
        </div>
      </section>
      <section className="px-4 md:px-6 max-w-screen-xl m-auto">
        <h2 className="text-xl font-semibold mb-4"> {t("IntroductionTitle")} </h2>
        <p className="mb-4">
          {t("PrivacyParagraph")}
        </p>

        <h2 className="text-xl font-semibold mb-4">
          {t("InfoHeading")}
        </h2>
        <p className="mb-4">
         {t("CollectParagraph")}
        </p>
        <ul className="list-disc pl-6">
          <li> {t("PersonalHeading")} </li>
          <li>{t("ConnectionHeading")}</li>
          <li>
            {t("NonPersonalHeading")}
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">
          {t("CollectHeading")}
        </h2>
        <p className="mb-4">
          {t("MayTitle")}
        </p>
        <ul className="list-disc pl-6">
          <li> {t("ProvidingTitle")} </li>
          <li> {t("CustomerHeading")} </li>
          <li> {t("NetworkHeading")} </li>
          <li> {t("ComplyingHeading")} </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4"> {t("SharingTitle")} </h2>
        <p className="mb-4">
          {t("CollectedParagraph")}
        </p>
        <ul className="list-disc pl-6">
          <li>
            {t("ThirdPartyHeading")}
          </li>
          <li> {t("LawTitle")} </li>
          <li> {t("BusinessTitle")} </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4"> {t("SecurityHeading")} </h2>
        <p className="mb-4">
         {t("SecurityParagraph")}
        </p>
        <ul className="list-disc pl-6">
          <li> {t("FirstSecurityLi")} </li>
          <li> {t("SecondSecurityLi")} </li>
          <li> {t("ThirdSecurityLi")} </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4"> {t("UserTitle")} </h2>
        <p className="mb-4">
          {t("UserParagraph")}
        </p>
        <ul className="list-disc pl-6">
          <li> {t("UserFirstLi")} </li>
          <li> {t("DataTitle")} </li>
          <li> {t("DeletionTitle")} </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4"> {t("ContactingTitle")} </h2>
        <p className="mb-4">
          {t("PrivacyTitle")}
        </p>
        <address className="not-italic">
          <p> {t("VPNHeading")} </p>
          <p> {t("AdressHeading")} </p>
          <p> {t("EmailTitle")} </p>
        </address>
      </section>
    </>
  );
};

export default PrivacyPolicy;
