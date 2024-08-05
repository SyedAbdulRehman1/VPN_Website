"use client";

import { Accordion } from "flowbite-react";
import Image from "next/image";
import chat_email from "@/img/chat-email.svg";
import SectionTitle from "@/components/SectionTitle";
import BrandName from "../BrandName";
import { useState, useEffect } from "react";
import { FAQS } from "@/utils";
import { get } from "@/services/http";
import { FAQItem } from "@/models/faq.model";
import { useTranslations } from "next-intl";
export default function FAQAccordion() {
  const [faqData, setFaqData] = useState<FAQItem[]>([]);
  useEffect(() => {
    fetchFaq();
  }, []);

  const fetchFaq = async () => {
    try {
      const response = await get<FAQItem[]>(FAQS);
      setFaqData(response);
    } catch (error) {
      console.error("Error fetching FAQ data:", error);
    }
  };
  const t = useTranslations("Index");
  return (
    <>
      <div className="container m-auto  text-center mt-16 px-4">
        {/* Title */}
        <SectionTitle
          SectionTitle={<>{t("faqtext")}</>}
          className="lg:text-4xl text-2xl"
          SectionSubtitle={
            <>
              {t("faqparagraph")} <BrandName text />
            </>
          }
          SectionName="FAQ's"
        />
      </div>

      <div className="mt-10">
        <Accordion className="container border-0 lg:w-[50%] max-w-screen-xl m-auto my-10 px-4">
          {/* Map over the faqData array and render FAQ items */}
          {faqData.map((faqItem) => (
            <Accordion.Panel key={faqItem.id}>
              <Accordion.Title className="text-[12px] md:text-[15px]">
              {faqItem?.question || "Question not available"}

              </Accordion.Title>
              <Accordion.Content className="text-[10px] text-dark-gray-color md:text-[14px]">
              {faqItem?.answer || "Answer not available"}

              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>

      {/* Call To action Section Starts */}
      <div className="px-4 m-auto max-w-screen-xl">
        <div className="py-6 px-2 lg:p-8 bg-gray-50 dark:bg-gray-800 rounded-lg flex justify-center items-center flex-col">
          <Image src={chat_email.src} width={70} height={70} alt="" />
          <p className="font-bold inter dark:text-white mt-4">{t("stillheading")}</p>
          <p className="text-dark-gray-color my-4">
            {t("stillparagraph")}
          </p>
          <a
            className="flex justify-center items-center gap-x-3.5 text-sm lg:text-base bg-orange-600 text-white hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            href="#"
          >
            {t("btntext")}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
      {/* Call To action Section endss */}
    </>
  );
}
