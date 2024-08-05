"use client";
import Link from "next/link";
import Image from "next/image";
import PinInput from "@/components/auth/PinInput";
import { useRouter } from "next/navigation";
import { PinCompletion } from "@/types";
import Alert from "@/components/Alert";
import { GET_OTP, VERIFY_OTP } from "@/utils";
import { get, post } from "@/services/http";
import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import { getEmail, getTempToken } from "@/services/local-storage";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("Verification");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [pin, setPin] = useState<string>("");
  const [email, setEmail] = useState<any>();
  const [verificationMessage, setVerificationMessage] = useState<string | null>(
    null
  );
  const handlePinComplete: PinCompletion = (pin) => {
    // console.log("Entered PIN:", pin);
    // Perform actions with the entered PIN
  };
  useEffect(() => {
    fetchOtp();
  }, []);

  const fetchOtp = async () => {
    try {
      const config: AxiosRequestConfig = {
        headers: { Authorization: getTempToken() },
      };
      const { otp }: any = await get(GET_OTP, config);
      setPin(otp);
      const data = getEmail();
      setEmail(data);
    } catch (error) {
      console.error("Error fetching OTP:", error);
    }
  };
  const verifyOtp = async () => {
    try {
      setLoading(true);
      const config: AxiosRequestConfig = {
        headers: { Authorization: getTempToken() },
      };
      const requestBody = {
        otp: pin,
      };
      const verify: any = await post(VERIFY_OTP, requestBody, config);
      if (verify.message) {
        setVerificationMessage(verify.message);
        router.push("/confirm-password");
      }
      // Handle the response or perform any actions here
    } catch (error) {
      setLoading(false);
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <>
      {verificationMessage && (
        <Alert type="success" message={verificationMessage} />
      )}
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-100">
        {t("VerificationTitle")}
      </h1>
      <div className="flex items-center mb-10 justify-between">
        <div className="flex items-center  font-medium text-xs text-gray-400 dark:text-gray-500">
          <span className="flex justify-center items-center mr-1 bg-[#4B5765] text-white text-xs rounded-full w-5 h-5">
            {email ? email.charAt(0) : ""}
          </span>
          {email || ""}
        </div>
        <Link
          href={{ pathname: "/login", query: { from: "verification" } }}
          passHref
          className="text-xs hover:underline"
        >
          {t("ChangeText")}
        </Link>
      </div>
      <div>
        <p className="text-xs mb-2 text-gray-400  dark:text-gray-400">
          {t("CheckCode")}
        </p>
        {pin && (
          <PinInput onComplete={(a) => handlePinComplete(a)} initialPin={pin} />
        )}
        <p className="text-xs text-gray-400 mt-2  dark:text-gray-400">
          {t("EnterTitle")}
        </p>
      </div>
      <div>
        <button
          onClick={verifyOtp}
          className={`w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-primary-800 spinner ${
            loading ? "loading" : ""
          }`}
        >
          {t("ContinueText")}
          {loading ? <div className="loader"></div> : ""}
        </button>
      </div>
    </>
  );
};

export default Home;
