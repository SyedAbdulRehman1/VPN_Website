"use client";
import Alert from "@/components/Alert";
import ModalAlert from "@/components/ModalAlert";
import { PaymentMethod } from "@/models/paymentMethod.model";
import { get, post } from "@/services/http";
import {
  ADD_PAYMENT_METHOD,
  ALL_PAYMENTS_METHODS,
  DEFAULT_PAYMENT_METHOD,
  DELETE_PAYMENT_METHOD,
  INVOICES,
} from "@/utils/api-routes";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Billing = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const t = useTranslations("Billing");

  useEffect(() => {
    fetchAllPaymentMethods();
  }, [successMessage]);

  const fetchAllPaymentMethods = async () => {
    try {
      const response: any = await get(ALL_PAYMENTS_METHODS);
      setPaymentMethods(response);
    } catch (error) {
      console.log("error fetching all payment methods", error);
    }
  };

  const setprimary = async (id: number) => {
    setLoading(true);
    const requestBody = {
      payment_method_id: id,
    };
    try {
      const response: any = await post(DEFAULT_PAYMENT_METHOD, requestBody);
      if (response.message) {
        setSuccessMessage("Payment method marked as default");
      }
      setLoading(false);
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
    } catch (error) {
      setLoading(false);
      console.log("error fetching all payment methods", error);
    }
  };

  const deleteMethod = () => {
    setShowDeleteConfirmation(true);
  };
  const deletePaymentMethod = async (id: any) => {
    const requestBody = {
      payment_method_id: id,
    };
    try {
      const response: any = await post(DELETE_PAYMENT_METHOD, requestBody);
      if (response.message === "Payment method removed successfully") {
        setShowDeleteConfirmation(false);
        setSuccessMessage("Payment method removed successfully");
        closeModal();
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);
      }
    } catch (error) {
      console.log("error fetching all payment methods", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowDeleteConfirmation(false);
  };

  const saveData = async (data: any) => {
    const requestBody = {
      type: "card",
      method_details: data,
    };
    try {
      const response: any = await post(ADD_PAYMENT_METHOD, requestBody);
      console.log(response);
      if (response.message === "Payment method added successfully") {
        setSuccessMessage("Payment method added successfully");
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);
      }
    } catch (error) {
      console.log("error fetching all payment methods", error);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        {successMessage && <Alert type="success" message={successMessage} />}
      </div>
      <h1 className="mb-3 font-bold"> {t("PaymentHeadings")} </h1>
      <div className="grid items-stretch  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {/* <div className="border-2 p-4 bg-white border-dashed flex flex-col items-between rounded-lg border-gray-100 dark:border-gray-600">
          <div className="h-[140px] rounded-[12px] bg-gradient-to-r from-slate-900 to-slate-700 w-full  ">
            <div className="bg-credit-card bg-center flex flex-col justify-between  p-3 h-[140px] bg-cover  bg-center-bottom rounded-[12px]">
              <div className="flex justify-between">
                <p className="text-white text-sm font-semibold">
                  {" "}
                  {t("CarHeading")}
                </p>
                <svg
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.142 1.28564C17.0228 4.5432 18.0129 8.23843 18.0129 11.9999C18.0129 15.7614 17.0228 19.4567 15.142 22.7142M10.4277 3.64279C11.8947 6.18368 12.667 9.06596 12.667 11.9999C12.667 14.9339 11.8947 17.8162 10.4277 20.3571M5.92773 5.80707C6.98848 7.66388 7.54691 9.77016 7.54691 11.9142C7.54691 14.0583 6.98848 16.1646 5.92773 18.0214M1.42773 8.14279C2.1922 9.29976 2.59749 10.6362 2.59749 11.9999C2.59749 13.3637 2.1922 14.7001 1.42773 15.8571"
                    stroke="white"
                    strokeWidth="2.57143"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex justify-between items-end ">
                <div>
                  <div className="flex justify-between mb-3">
                    <p className="text-white text-xs font-regular font-mono">
                      Nabeel Shafeeq
                    </p>
                    <p className="text-white text-xs font-regular ml-4 font-mono">
                      {t("value")}
                    </p>
                  </div>
                  <div className="text-white text-xs font-regular font-mono">
                    •••• •••• •••• 4167
                  </div>
                </div>
                <div>
                  <svg
                    width="46"
                    height="32"
                    viewBox="0 0 46 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="45.3333"
                      height="32"
                      rx="4"
                      fill="white"
                      fillOpacity="0.1"
                    />
                    <path
                      fillRule="evenodd"
                      clipPath="evenodd"
                      d="M22.9053 22.4391C21.3266 23.7699 19.2787 24.5732 17.0409 24.5732C12.0478 24.5732 8 20.5736 8 15.6399C8 10.7061 12.0478 6.70654 17.0409 6.70654C19.2787 6.70654 21.3266 7.50988 22.9053 8.84061C24.484 7.50988 26.5319 6.70654 28.7697 6.70654C33.7629 6.70654 37.8106 10.7061 37.8106 15.6399C37.8106 20.5736 33.7629 24.5732 28.7697 24.5732C26.5319 24.5732 24.484 23.7699 22.9053 22.4391Z"
                      fill="#ED0006"
                    />
                    <path
                      fillRule="evenodd"
                      clipPath="evenodd"
                      d="M22.9062 22.4391C24.8502 20.8006 26.0828 18.3625 26.0828 15.6399C26.0828 12.9173 24.8502 10.4791 22.9062 8.8406C24.485 7.50988 26.5329 6.70654 28.7706 6.70654C33.7638 6.70654 37.8116 10.7061 37.8116 15.6399C37.8116 20.5736 33.7638 24.5732 28.7706 24.5732C26.5329 24.5732 24.485 23.7699 22.9062 22.4391Z"
                      fill="#F9A000"
                    />
                    <path
                      fillRule="evenodd"
                      clipPath="evenodd"
                      d="M22.905 22.4393C24.8489 20.8008 26.0815 18.3627 26.0815 15.6401C26.0815 12.9175 24.8489 10.4794 22.905 8.84082C20.9611 10.4794 19.7285 12.9175 19.7285 15.6401C19.7285 18.3627 20.9611 20.8008 22.905 22.4393Z"
                      fill="#FF5E00"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="text-xs"> {t("CardTitle")} </div>
            <div className="font-mono">•••• •••• •••• 4167</div>
          </div>
          <div className="mt-5">
            <div className="text-xs"> {t("ExpirationHeading")} </div>
            <div className="font-mono">{t("value")}</div>
          </div>
          <div className="flex justify-center pt-3 items-center text-green-400">
            <span className=" mr-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6673 5L7.50065 14.1667L3.33398 10"
                  stroke="currentColor"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-xs font-medium"> {t("PRIMARYText")}</span>
          </div>
        </div> */}
        {paymentMethods.map((paymentMethod, index) => (
          <div
            key={index}
            className="border p-4 bg-white flex flex-col items-between rounded-lg border-gray-100 dark:border-gray-600"
          >
            <div className="flex  justify-center">
              <svg
                width="150"
                height="150"
                viewBox="0 0 184 184"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M137.348 59.2883C138.946 48.874 137.348 41.9311 131.758 35.5223C125.635 28.3124 114.454 25.375 100.078 25.375H58.8148C55.8864 25.375 53.4905 27.5113 52.9581 30.4486L35.654 139.933C35.3878 142.069 36.9851 143.938 39.1148 143.938H64.6716L62.808 155.154C62.5418 157.023 63.8729 158.625 66.0026 158.625H87.5661C90.2283 158.625 92.358 156.756 92.6242 154.352L97.1499 126.047C97.4161 123.644 99.812 121.774 102.208 121.774H105.403C126.167 121.774 142.673 113.229 147.465 88.6621C149.328 78.5148 148.53 69.7027 143.205 63.8279C141.608 61.9587 139.744 60.6235 137.348 59.2883Z"
                  fill="#009CDE"
                />
                <path
                  d="M137.348 59.2883C138.946 48.874 137.348 41.9311 131.758 35.5223C125.635 28.3124 114.454 25.375 100.078 25.375H58.8148C55.8864 25.375 53.4905 27.5113 52.9581 30.4486L35.654 139.933C35.3878 142.069 36.9851 143.938 39.1148 143.938H64.6716L70.7945 104.417C71.327 101.48 73.7229 99.3434 76.6513 99.3434H88.8972C112.857 99.3434 131.492 89.7302 136.816 61.4246C137.082 60.8905 137.082 60.0894 137.348 59.2883Z"
                  fill="#012169"
                />
                <path
                  d="M77.9823 59.5554C78.2486 57.6861 80.6445 55.2828 83.0404 55.2828H115.519C119.246 55.2828 122.973 55.5498 126.167 56.0839C129.096 56.618 134.42 57.9532 137.082 59.5554C138.68 49.141 137.082 42.1981 131.492 35.7893C125.635 28.3124 114.454 25.375 100.078 25.375H58.8148C55.8864 25.375 53.4905 27.5113 52.9581 30.4486L35.654 139.933C35.3878 142.069 36.9851 143.938 39.1148 143.938H64.6716L77.9823 59.5554Z"
                  fill="#003087"
                />
              </svg>
            </div>
            <div className="mt-5">
              <div className="text-xs"> {t("PaypalText")} </div>
              <div className="font-mono"> {t("DumiEmail")} </div>
              <div>{paymentMethod.id}</div>
            </div>
            <div className="mt-5 flex justify-center">
              <button
                onClick={() => setprimary(paymentMethod.id)}
                className={`text-white bg-gray-darkf  focus:ring-4 font-medium rounded-lg text-xs px-3 py-2 text-center mr-3 md:mr-0 spinner ${
                  loading ? "loading" : ""
                }`}
              >
                {t("PrimaryTitle")}
                {loading ? <div className="loader"></div> : ""}
              </button>
            </div>
            <div
              onClick={() => deleteMethod()}
              className="flex justify-center pt-3 items-center text-red-400 cursor-pointer"
            >
              <span className=" mr-2">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 5V2.60429C14.5 2.27055 14.2295 2 13.8957 2H7.10429C6.77055 2 6.5 2.27055 6.5 2.60429V5M14.5 5H6.5M14.5 5H16.5M18.5 5H16.5M6.5 5H4.5M2.5 5H4.5M4.5 5V17.3957C4.5 17.7295 4.77055 18 5.10429 18H15.8957C16.2295 18 16.5 17.7295 16.5 17.3957V5M8.49206 9V14M12.5 9V14"
                    stroke="#F97066"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-xs font-medium">
                {" "}
                {t("DeleteHeading")}{" "}
              </span>
            </div>
            {showDeleteConfirmation && (
              <ModalAlert
                onDelete={() => deletePaymentMethod(paymentMethod.id)}
                mode="delete"
                title="Delete Payment Method"
                closeModal={closeModal}
              />
            )}
          </div>
        ))}
        <div className="border-2 p-4 flex flex-col items-between justify-center border-dashed border-gray-300 rounded-lg dark:border-gray-600">
          <p className="text-center text-xs">{t("PaymentHeading")}</p>
          <button
            onClick={openModal}
            className="text-white m-4 bg-gray-darkf focus:ring-4 font-medium rounded-lg text-sm px-3 py-2 text-center mr-3 md:mr-0"
          >
            {t("AddPayment")}
          </button>
        </div>
      </div>
      {isModalOpen && (
        <ModalAlert mode="add" onSave={saveData} closeModal={closeModal} />
      )}
    </>
  );
};

export default Billing;
