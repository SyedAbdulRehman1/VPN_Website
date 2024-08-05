"use client";
import Footer from "@/components/Footer";
import Navigation from "@/components/navigation/Navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <>
      <Navigation />
      <section className="bg-white py-28 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              {t("Digits")}
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              {t("NotFoundText")}
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
             {t("NotFoundParagraph")} {" "}
            </p>
            <Link
              href="/"
              className="inline-flex text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              {t("HomePageText")}
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
