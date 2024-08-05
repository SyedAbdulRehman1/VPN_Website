import React from "react";
import Image from "next/image";
import AndroidPhone from "@/img/AndroidPhone.png";
import AppStore from "@/img/AppStore.svg";
import StrongSecurity from "@/img/StrongSecurity.png";
import SelectedLocation from "@/img/SelectedLocation.png";
import Faq from "@/components/main-site/Faq";
import BrandName from "@/components/BrandName";
import DownloadOptions from "@/components/main-site/DownloadOptions";
import Prominent from "@/components/Prominent";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* Hero Section start√ */}
      <section className="main-banner bg-vector">
        <div className="container mx-auto  px-3 sm:px-0 lg:px-4">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div className="">
              <h1 className="block text-3xl font-bold text-gray-darkf sm:text-4xl mt-20 sm:mt-5 lg:mt-0 lg:text-3xl lg:leading-tight dark:text-white canela-regular">
                Get Premium <BrandName /> VPN for <Prominent>Android</Prominent>{" "}
              </h1>
              <p className="mb-6 mt-5 font-light text-gray-500 md:text-lg dark:text-gray-500">
                Browse the web with confidence and protect your online identity
                with Virgo vpn Our comprehensive solution includes VPN, identity
                protection, malware & antivirus protection, fast speeds, and
                anonymity for all-around security and privacy.
              </p>

              <div className="mt-7 grid gap-5 w-full place-items-center sm:inline-flex justify-center">
                <Link
                  className="text-white bg-orange-700 items-center gap-x-3 text-center hover:text-white bg-gray-light text-xs lg:text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:virgo-orange focus:ring-offset-2 focus:orange transition py-3 px-4 dark:focus:orange"
                  href="#"
                >
                  Download .apk
                </Link>
                <div className=" relative flex justify-center items-center">
                  <div className="h-10 border"></div>
                  <div className="bg-white absolute text-[10px] p-[2px] text-gray-200">
                    OR
                  </div>
                </div>
                <Link href="#">
                  <Image
                    className=""
                    src={AppStore.src}
                    width={165}
                    height={165}
                    alt=""
                  />
                </Link>
              </div>
            </div>

            <div className="flex justify-end items-end">
              <Image
                className="w-100 rounded-md"
                src={AndroidPhone.src}
                width={350}
                height={350}
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
                Retrieve content directly from your{" "}
                <Prominent>Android devices</Prominent>
              </h1>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                You will get the best Android VPN service and user-friendly
                mobile VPN for Android Lollipop, Marshmallow, Nougat, Oreo, Pie
                and more. You can stay safe while traveling, easily choosing a
                server and knowing that all your communications are safe — no
                matter where you are in the world at the moment, all thanks to
                free VPN Android by Virgo VPN.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start lg:order-1">
              <Image
                className="w-full"
                src={SelectedLocation.src}
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
                Access content seamlessly on your{" "}
                <Prominent>Android devices, anytime.</Prominent>
              </h1>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                You will get the best Android VPN service and user-friendly
                mobile VPN for Android Lollipop, Marshmallow, Nougat, Oreo, Pie
                and more. You can stay safe while traveling, easily choosing a
                server and knowing that all your communications are safe — no
                matter where you are in the world at the moment, all thanks to
                free VPN Android by Virgo VPN.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                className="w-full"
                src={StrongSecurity.src}
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
