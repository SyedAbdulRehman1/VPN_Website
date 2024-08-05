"use client";
import Image from "next/image";
import zap_img from "@/img/zap.svg";
import ux_review from "@/img/ux_review.png";
import avatar from "@/img/avatar.svg";
import { useEffect, useState } from "react";
import { get } from "@/services/http";
import { BLOGS } from "@/utils/api-routes";
import { useTranslations } from "next-intl";
const Home = () => {
  const t = useTranslations("Blogs");
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response: any = await get(BLOGS);
      setBlogs(response.articles);
    } catch (error) {
      console.error("Error fetching Tickers:", error);
    }
  };

  const extractDate = (dateTimeString?: string) => {
    if (!dateTimeString) {
      return "N/A"; // Or any other default value
    }

    const datePart = dateTimeString.split("T")[0];
    return datePart;
  };

  return (
    <>
      <section className="main-banner">
        <div className="background-image">
          <div className="container mx-auto  px-4 py-32 sm:px-0 lg:px-4">
            <div className="w-full mb-4 text-center lg:mb-16">
              <div className="flex items-center gap-2 bg-orange-light w-max m-auto py-1 px-4 rounded-full text-[10px] text-orange-600 inter my-2">
                <Image src={zap_img.src} width={15} height={20} alt="" />
                {t("BLOGSTitle")}
              </div>
              <h2 className="mb-4 text-3xl lg:text-4xl leading-loose font-normal text-gray-darkf dark:text-white canela-regular">
                Our Ultimate VPN Resource for Online Privacy and{" "}
                <span className="text-orange-600">Anonymity</span>
              </h2>
            </div>
            <div className="m-auto">
              <form className="flex items-center">
                <label htmlFor="voice-search" className="sr-only">
                  {t("SearchHeading")}
                </label>
                <div className="relative m-auto">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                  </div>
                  <input
                    type="text"
                    id="voice-search"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-700 focus:border-orange-600 block w-full pl-10 py-2 px-16 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container max-w-screen-xl m-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
            {blogs.map((blog: any) => (
              <div className="col border-0 p-6" key={blog.id}>
                <div className="max-w-sm p-5 bg-white border-0 box-shadow border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <Image
                    className="w-100"
                    src={ux_review.src}
                    width={500}
                    height={500}
                    alt=""
                  />
                  <h6 className="text-[14px] mt-7 font-bold text-orange-600 inter">
                    {blog.category?.name}
                  </h6>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-5">
                    {blog.title}
                  </h5>
                  <p className="mb-3 text-sm font-normal text-gray-500 dark:text-gray-400">
                    {blog.short_text}
                  </p>
                  <div className="flex mt-14 font-medium">
                    <Image src={avatar.src} width={40} height={40} alt="" />
                    <div className="flex flex-col mx-4">
                      <span className="text-gray-800 text-[15px]">
                        Olivia Rhye
                      </span>
                      <span className="text-sm text-gray-400">
                        {extractDate(blog.category?.created_at)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 my-28 w-full flex justify-center">
          <a
            className="inline-flex justify-center items-center gap-x-3.5 text-base md:text-xl text-center bg-orange-100 text-orange-700 hover:border-gray-300 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-2 px-6 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            href="#"
          >
            Load more
          </a>
        </div>
      </section>
    </>
  );
};
export default Home;
