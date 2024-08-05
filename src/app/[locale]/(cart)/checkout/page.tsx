"use client";

import React, { useEffect, useState } from "react";
import { LogoNav } from "@/components/Logo";
import Link from "next/link";
import CheckoutPricingCard from "@/components/main-site/CheckoutPricingCard";
import { getCurrentYear } from "@/utils/CurrentYear";
import { CHECKOUT, PLANS } from "@/utils";
import { get, post } from "@/services/http";
import { PlanData } from "@/models/pricing-cards.model";
import BrandName from "@/components/BrandName";
import PaymentForm from "@/components/main-site/PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import { getUser } from "@/services/local-storage";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

const Checkout = () => {
  const idFromSearchParams = useSearchParams().get("id");
  const currentYear = getCurrentYear();
  const [selectedPlan, setSelectedPlan] = useState<PlanData>();
  const [plans, setPlans] = useState<PlanData[]>([]);
  const [secret, setSecret] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>();
  const [formData, setFormData] = useState<any>({
    email: "",
  });

  useEffect(() => {
    fetchPlan();
    fetchClientSecret();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        setEmail(user.email);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  const fetchClientSecret = async () => {
    try {
      const { clientSecret }: any = await post(CHECKOUT, null);
      setSecret(clientSecret);
    } catch (error) {
      console.error("Error fetching client secret:", error);
    }
  };

  const fetchPlan = async () => {
    try {
      const response: PlanData[] = await get(PLANS);
      setPlans(response);
      const popular = response.filter((plan) => plan.is_popular);
      if (popular.length > 0) {
        setSelectedPlan(popular[0]);
      }
    } catch (error) {
      console.error("Error fetching plans data:", error);
    }
  };

  const planSelectionChange = (id: number) => {
    // console.log("id changed: ", id);
    if (id && plans.length > 0) {
      // Check if plans array is not empty
      const plan = plans.find((item) => item.id === id);
      setSelectedPlan(plan);
    }
  };

  useEffect(() => {
    if (idFromSearchParams) {
      planSelectionChange(Number(idFromSearchParams));
    } else if (plans.length > 0) {
      planSelectionChange(plans[0].id);
    }
  }, [idFromSearchParams, plans]);

  const handleInputChange = (field: string, value: any) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [field]: value,
    }));
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
              {plans.map((plan) => (
                <CheckoutPricingCard
                  key={plan.id}
                  plan={plan}
                  selected={plan.id === selectedPlan?.id}
                  onSelectionChange={planSelectionChange}
                />
              ))}
            </div>
          </div>

          {email ? null : (
            <div className=" my-8 md:my-2 sm:max-w-md mx-auto w-full xl:p-0">
              <div className="text-2xl canela-regular  mb-2 ">
                2.Enter Details to continue
              </div>
              <div>
                <p className="mb-3 text-sm text-gray-400">
                  With the provided email you will be able to access{" "}
                  <BrandName text /> Premium services.
                </p>
                <label className="text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-orange-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  value={email || formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  disabled={!!email}
                />
              </div>
              <p className="mb-3 text-sm text-gray-400">
                We keep your information private and contact you only due to our
                services.
              </p>
            </div>
          )}

          <div className="hidden md:block w-full">
            <div className="flex pb-4 items-center justify-between">
              <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400">
                © {currentYear}{" "}
                <a href="/" className="hover:underline">
                  Virgo VPN™
                </a>
              </span>
              <div className="flex mt-4 space-x-6  sm:mt-0">
                <Link
                  href="#"
                  className="text-gray-500 text-xs hover:text-gray-900 dark:hover:text-white"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className=" bg-vector  bg-no-repeat  h-full ">
          <div className="md:flex justify-between flex-col items-start md:px-10 px-6 mx-auto md:h-screen lg:py-0">
            <div className="md:mt-0  sm:mb-8 sm:max-w-md hidden md:block mx-auto w-full xl:p-0">
              <div className="flex p-4 w-full items-center  h-auto justify-end">
                {email ? (
                  <span className="mx-2"> {email}</span>
                ) : (
                  <span className="mr-2 text-xs text-gray-400">
                    Already have an account?
                  </span>
                )}

                {email ? (
                  <Link href="/clientarea">
                    <span className="sm-hidden text-white h-9 bg-gray-darkf focus:ring-4 font-medium rounded-md text-sm px-3 py-2 text-center  md:mr-0">
                      Home
                    </span>
                  </Link>
                ) : (
                  <Link href="/login">
                    <span className="sm-hidden text-white h-9 bg-gray-darkf focus:ring-4 font-medium rounded-md text-sm px-3 py-2 text-center  md:mr-0">
                      Login
                    </span>
                  </Link>
                )}
                {/* <Link
                  href={"/login"}
                  className="sm-hidden text-white h-9 bg-gray-darkf focus:ring-4 font-medium rounded-md text-sm px-3 py-2 text-center  md:mr-0"
                >
                  Login
                </Link> */}
              </div>
            </div>
            <div className="md:mt-0 py-8 md:py-2 sm:max-w-md md:block mx-auto w-full xl:p-0">
              <div className="text-2xl canela-regular  mb-3 ">
                {email ? <span>2</span> : <span>3</span>}.Choose Payment Method
              </div>
              {secret && (
                <Elements
                  options={{
                    clientSecret: secret,
                    appearance: {
                      labels: "floating",
                      theme: "stripe",
                    },
                  }}
                  stripe={stripePromise}
                >
                  <PaymentForm
                    clientSecret={secret}
                    plan={selectedPlan}
                    email={formData.email || email}
                  />
                </Elements>
              )}

              <div className="sm:hidden md:block w-full">
                <div className="flex pb-4 items-center justify-between">
                  <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400">
                    © {currentYear}{" "}
                    <a href="/" className="hover:underline">
                      Virgo VPN™
                    </a>
                  </span>
                  <div className="flex mt-4 space-x-6  sm:mt-0">
                    <Link
                      href="#"
                      className="text-gray-500 text-xs hover:text-gray-900 dark:hover:text-white"
                    >
                      Terms of Service
                    </Link>
                  </div>
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
