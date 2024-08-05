// components/MainContent.tsx
import React from "react";
import bannerimg from "@/img/Section.png";
import { LogoNav } from "@/components/Logo";
import Link from "next/link";
import { getCurrentYear } from "@/utils/CurrentYear";

import Image from "next/image";

interface MainContentProps {
  children: React.ReactNode;
}

const IndexLayout: React.FC<MainContentProps> = ({ children }) => {
  const currentYear = getCurrentYear();
  return (
    <>
      <main className="h-screen  lg:grid md:grid-cols-2 dark:bg-gray-900  gap-4">
        <div className="bg-vector">
          <div className="flex justify-between flex-col items-start md:px-10 px-6 mx-auto h-screen lg:py-0">
            <a href="/" className="flex items-center pt-4  font-semibold">
              <LogoNav/>
            </a>
            <div className=" md:mt-0 sm:max-w-md mx-auto w-96 xl:p-0">
              <div className="p-6 lg:scale-125 space-y-4 w-full md:space-y-6 sm:p-8">
                {children}
              </div>
            </div>
            <div>
              <div className="flex pb-4 items-center justify-between">
                <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400">
                  © {currentYear}{" "}
                  <a href="/" className="hover:underline">
                    Virgo VPN™
                  </a>
                </span>
                <div className="flex mt-4 space-x-6  sm:mt-0">
                  {/* Social media icons */}
                  <Link
                    href="#"
                    className="text-gray-500 text-xs hover:text-gray-900 dark:hover:text-white"
                  >
                    Terms of Service
                  </Link>
                  {/* Repeat for other social media icons */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" sm:hidden lg:block h-screen">
          <Image
            className="w-full rounded-md h-full"
            width={500}
            height={500}
            src={bannerimg.src}
            alt="Image Description"
          />
        </div>
      </main>
    </>
  );
};

export default IndexLayout;
