"use client";
import { PLANS } from "@/utils";
import { get } from "@/services/http";
import { useState, useEffect } from "react";
import { PlanData } from "@/models/pricing-cards.model";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface PricingCardsProps {
  onCheckout: (userObj: any) => void; // Define the type of onCheckout prop
}

const PricingCards = () => {
  const router = useRouter();
  const [plansData, setPlan] = useState<PlanData[]>([]);
  useEffect(() => {
    fetchPlan();
  }, []);

  const fetchPlan = async () => {
    try {
      const response: PlanData[] = await get(PLANS);
      setPlan(response);
    } catch (error) {
      console.error("Error fetching plans data:", error);
    }
  };
  const t = useTranslations("PricingCards");

  const goToCheckout = (id: number) => {
    router.push(`checkout?id=${id}`);
  };

  return (
    <div className="flex gap-8 justify-center flex-wrap">
      {plansData.map((plan) => (
        <div className="single-price" key={plan.id}>
          <div className="flex flex-col items-center justify-between">
            <h5 className="text-[15px] text-semi-bold  md:text-2xl">
              {plan.title}
            </h5>
            <div className="bg-gray-darkf saves-percent text-white text-[9px] lg:text-[16px] flex items-center justify-center rounded-md p-3">
              {t("SaveText")} <br /> {plan.save_percent}%
            </div>
            <div className="mb-3 mt-5">
              <h6 className="text-[12px] md:text-[16px] font-bold text-gray-darkf">
                {t("USDText")}
              </h6>
              <h6 className="text-lg font-semibold flex items-center text-gray-darkf">
                <span className="text-4xl md:text-6xl font-extrabold text-black">
                  {plan.price_per_month.toFixed(2)}
                </span>{" "}
                {t("MonthText")}
              </h6>
            </div>
            <div className="hidden lg:flex flex-col">
              <s className="font-bold text-orange-600 mt-2">
                {t("USDText")} {plan.total_price_of_plan.toFixed(2)}
                {t("MonthText")}
              </s>
              <p className="mt-7 text-sm">
                {t("BilledText")} ${plan.total_price_of_plan} {t("onceText")}{" "}
                {plan.payment_interval} {t("monthHeading")}
              </p>
            </div>
            <button
              onClick={() => goToCheckout(plan.id)}
              className="btn bg-gray-darkf rounded-md py-2 md:py-3 text-white w-full mt-5"
            >
              {t("GetText")}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
