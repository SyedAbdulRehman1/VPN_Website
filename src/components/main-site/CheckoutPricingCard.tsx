"use client";
import { useTranslations } from "next-intl";

import { PlanData } from "@/models/pricing-cards.model";

type CheckoutPricingCardProps = {
  plan: PlanData;
  selected: boolean;
  onSelectionChange: (a: number) => void;
};

const CheckoutPricingCard: React.FC<CheckoutPricingCardProps> = ({
  selected,
  plan,
  onSelectionChange,
}) => {
  const t = useTranslations("CheckOut");
  return (
    <div
      className={` rounded-lg border-2	 ${
        selected
          ? " bg-vector border-orange-600"
          : " border-gray-300 dark:border-gray-500 dark:bg-gray-800"
      }`}
    >
      <label className="flex p-4 items-center space-x-2 cursor-pointer">
        <input
          type="radio"
          name="cardSelection"
          checked={selected}
          onChange={() => onSelectionChange(plan.id)}
          className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <div className="flex justify-between w-full items-center">
          <div>
            <div>
              <span className="text-lg dark:text-white canela-regular capitalize font-semibold mb-0">
                {plan.title}
              </span>
              <span className="text-xs py-1 px-2 ml-1 rounded-full bg-gray-100 dark:bg-gray-500 dark:text-white">
                {t("SaveHeading")} {plan.save_percent}%
              </span>
            </div>
            <div className="text-xs text-gray-400">
              {t("BillHeading")} {plan.total_price_of_plan} {t("onceText")}{" "}
              {plan.payment_interval} {t("monthHeading")}
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span>
              <s className="text-sm text-gray-400 mt-2">
                {plan.total_price_of_plan.toFixed(2)}
              </s>
            </span>
            <span>
              <span className="text-2xl dark:text-white font-bold">
                ${plan.price_per_month}
              </span>
              <span className="dark:text-gray-400">{t("PerMonth")} </span>
            </span>
          </div>
        </div>
      </label>
    </div>
  );
};

export default CheckoutPricingCard;
