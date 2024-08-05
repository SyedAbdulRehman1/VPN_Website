"use client";
import React, { useEffect, useState } from "react";
import { LogoNav, LogoSm } from "@/components/Logo";
import Link from "next/link";
import CheckoutPricingCard from "@/components/main-site/CheckoutPricingCard";
import { getCurrentYear } from "@/utils/CurrentYear";
import { PLANS } from "@/utils";
import { get } from "@/services/http";
import { PlanData } from "@/models/pricing-cards.model";
import BrandName from "@/components/BrandName";
import { SecureIcons } from "@/components/PaymentIcons";

const Checkout = () => {
  const currentYear = getCurrentYear();
  const [selectedPlanId, setSelectedPlanId] = useState<number>();
  const [plansData, setPlan] = useState<PlanData[]>([]);
  useEffect(() => {
    fetchPlan();
  }, []);

  const fetchPlan = async () => {
    try {
      const response: PlanData[] = await get(PLANS);
      setPlan(response);
      const popular = response.filter((plan) => plan.is_popular);
      if (popular.length > 0) {
        setSelectedPlanId(popular[0].id);
      }
    } catch (error) {
      console.error("Error fetching plans data:", error);
    }
  };

  const planSelectionChange = (id: number) => {
    console.log("id changed: ", id);
    setSelectedPlanId(id);
  };
  return (
    <>
      <main className="md:h-screen  md:grid sm:grid-cols-2 dark:bg-gray-900  gap-4">
        <div className="md:flex justify-between flex-col items-start md:px-10 px-6 mx-auto md:h-screen lg:py-0">
          <div className="md:mt-0 sm:fixed md:relative top-0 left-0 right-0 dark:bg-gray-900 sm:bg-white md:bg-transparent sm:mb-8 sm:max-w-md mx-auto w-full xl:p-0">
            <div className="flex w-full items-center  h-auto justify-between">
              <a href="/" className="flex items-center py-4  font-semibold">
                <LogoNav /> &nbsp;
                <span className="font-normal leading-3 dark:text-white ">
                  Checkout
                </span>
              </a>
              <Link
                href={"/login"}
                className="md:hidden  text-white h-9 bg-gray-darkf focus:ring-4 font-medium rounded-md text-sm px-3 py-2 text-center  md:mr-0"
              >
                Login
              </Link>
            </div>
          </div>

          <div className=" my-8 md:my-2 sm:mt-10 sm:mb-10 sm:max-w-md mx-auto w-full xl:p-0">
            <div className="text-2xl canela-regular  mb-3 ">
              1.Choose Pricing
            </div>
            <div className=" space-y-4 w-full md:space-y-6">
              {plansData.map((plan) => (
                <CheckoutPricingCard
                  key={plan.id}
                  plan={plan}
                  selected={plan.id === selectedPlanId}
                  onSelectionChange={planSelectionChange}
                />
              ))}
            </div>
          </div>

          <div className=" my-8 md:my-2 sm:max-w-md mx-auto w-full xl:p-0">
            <div className="text-2xl canela-regular  mb-2 ">
              2.Enter Details to continue
            </div>
            <div>
              <p className="mb-3 text-sm text-gray-400">
                With the provided email you will be able to access{" "}
                <BrandName text /> Premium services.
              </p>
              <label className="text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-orange-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              />
            </div>
            <p className="mb-3 text-sm text-gray-400">
              We keep your information private and contact you only due to our
              services.
            </p>
          </div>

          <div className="hidden md:block w-full">
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
        <section className=" bg-vector  bg-no-repeat  h-full ">
          <div className="md:flex justify-between flex-col items-start md:px-10 px-6 mx-auto md:h-screen lg:py-0">
            <div className="md:mt-0  sm:mb-8 sm:max-w-md hidden md:block mx-auto w-full xl:p-0">
              <div className="flex p-4 w-full items-center  h-auto justify-end">
                <span className="mr-2 text-xs text-gray-400">
                  Already have account?
                </span>
                <Link
                  href={"/login"}
                  className="sm-hidden text-white h-9 bg-gray-darkf focus:ring-4 font-medium rounded-md text-sm px-3 py-2 text-center  md:mr-0"
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="md:mt-0 py-8 md:py-2 sm:max-w-md md:block mx-auto w-full xl:p-0">
              <div className="text-2xl canela-regular  mb-3 ">
                3.Choose Payment Method
              </div>
              <div className=""></div>
            </div>
            <div className="md:mt-0 sm:mb-8 sm:max-w-md md:block mx-auto w-full xl:p-0">
              <div className="flex py-1 justify-between text-lg">
                <span>Discount</span>
                <span className="text-red-500">-$2.8</span>
              </div>
              <div className="flex py-1 justify-between  text-lg">
                <span>Subtotal</span>
                <span>-$2.8</span>
              </div>
              <hr />
              <div className="flex py-3 justify-between font-semibold text-xl">
                <span>Discount</span>
                <span className="text-red-500">-$2.8</span>
              </div>
              <div className="flex py-3 items-center justify-between font-semibold text-2xl">
                <span>
                  <SecureIcons />
                </span>
                <span className="">
                  <button className="border flex text-white bg-gray-950 items-center gap-x-3 text-center hover:bg-orange-600 hover:text-white bg-gray-light text-sm lg:text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:virgo-orange focus:ring-offset-2 focus:orange transition py-3 pr-10 pl-6 dark:focus:orange">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11M5 11H19C20.1046 11 21 11.8954 21 13V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V13C3 11.8954 3.89543 11 5 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Pay Now
                  </button>
                </span>
              </div>
            </div>
            <div className="sm:hidden md:block w-full">
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
        </section>
      </main>
    </>
  );
};

export default Checkout;
