"use client";

import { post } from "@/services/http";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Alert from "@/components/Alert"; // Import the Alert component
import { LOGIN, SET_PASSWORD } from "@/utils";
import {
  getEmail,
  getTempToken,
  setToken,
  setUser,
} from "@/services/local-storage";
import { AxiosRequestConfig } from "axios";
import { useTranslations } from "next-intl";
import { APIResponse } from "@/models/login.model";

interface ApiResponse {
  token: string;
  message: string;
}

const Home = () => {
  const t = useTranslations("ConfirmPassward");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // const [showPasswordField, setShowPasswordField] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const validateForm = (a?: boolean): boolean => {
    let errorMsg = "";
    // Validate Password
    if (!formData.password) {
      errorMsg = "Password is required.";
      setError(errorMsg);
      return false;
    } else if (formData.password.length < 6) {
      errorMsg = "Password must be at least 6 characters.";
      setError(errorMsg);
      return false;
    }

    if (!formData.confirm_password) {
      errorMsg = "Confirm Password is required.";
      setError(errorMsg);
      return false;
    } else if (formData.confirm_password.length < 6) {
      errorMsg = "Confirm Password must be at least 6 characters.";
      setError(errorMsg);
      return false;
    }

    // Check if Password and Confirm Password match
    if (formData.password !== formData.confirm_password) {
      errorMsg = "Passwords do not match. Please enter the same password.";
      setError(errorMsg);
      return false;
    }

    setError("");
    return true;
  };

  useEffect(() => {
    setError("");
  }, [formData]);

  const handleSubmit = async () => {
    try {
      if (validateForm()) {
        setLoading(true);
        const { password, confirm_password } = formData;
        const config: AxiosRequestConfig = {
          headers: { Authorization: getTempToken() },
        };
        const requestBody = {
          password,
          confirm_password,
        };
        const response: ApiResponse = await post(
          SET_PASSWORD,
          requestBody,
          config
        );
        if (response.message == "Password set successfully") {
          const email = getEmail();
          const { token, user, message }: APIResponse = await post(LOGIN, {
            email,
            password,
          });
          console.log(user);
          setSuccessMessage("User Created Successfully");
          setToken(token);
          setUser(user);
          router.push("/clientarea");
          // router.push("/login");
        } else {
          setLoading(false);
          console.log("response error:", response);
        }
      }
    } catch (error: any) {
      setLoading(false);
      setError(error?.response?.data?.message || error || "Invalid");
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <>
      {successMessage && <Alert type="success" message={successMessage} />}
      {error && <Alert type="error" message={error} />}
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-100">
        {t("SignIn")}
      </h1>
      <p className="mt-1 text-xs mb-2 text-gray-400 dark:text-gray-400">
        {t("WelcomeHeading")}
      </p>
      {error && <p className="text-s text-red-400 p-2 rounded-md">{error}</p>}

      <div className="flex flex-col gap-4">
        <input
          type="password"
          placeholder={t("PlaceHolderText")}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
          value={formData.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
        />
        <input
          type="password"
          placeholder={t("ConfirmPassward")}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
          value={formData.confirm_password}
          onChange={(e) =>
            handleInputChange("confirm_password", e.target.value)
          }
        />
      </div>

      <div>
        <button
          className={`w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-primary-800 spinner ${
            loading ? "loading" : ""
          }`}
          onClick={handleSubmit}
        >
          {t("ContinueText")}
          {loading ? <div className="loader"></div> : ""}
        </button>
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-400">
        {t("ClickParagraph")}{" "}
        <Link href="/privacy-policy" className="hover:underline">
          {t("PrivacyText")}
        </Link>
      </p>
    </>
  );
};

export default Home;
