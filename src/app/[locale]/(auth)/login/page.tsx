"use client";

import { post } from "@/services/http";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Alert from "@/components/Alert"; // Import the Alert component
import { VERIFY_EMAIL, LOGIN } from "@/utils";
import {
  setToken,
  setEmail,
  setTempToken,
  setUser,
  getEmail,
} from "@/services/local-storage";
import { APIResponse, FormData } from "@/models/login.model";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("ConfirmPassward");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");
  const cameFromVerification = searchParams.get("from") === "verification";
  const userEmail = cameFromVerification ? getEmail() : "";

  useEffect(() => {
    setError("");
  }, [formData]);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      email: userEmail || "",
    }));
  }, [userEmail]);

  const handleSubmit = async () => {
    try {
      if (validateForm()) {
        setLoading(true);
        const { email, password } = formData;

        if (showPasswordField) {
          const { token, user, message }: APIResponse = await post(LOGIN, {
            email,
            password,
          });
          setSuccessMessage(message);
          setToken(token);
          setUser(user);
          router.push("/clientarea");
        } else {
          const { token, message }: APIResponse = await post(VERIFY_EMAIL, {
            email,
          });
          if (message === "Registration Process Successfully") {
            setSuccessMessage("Please enter your password");
            setShowPasswordField(true);
            setLoading(false);
          } else if (message === "Please Set Password.") {
            setSuccessMessage("Please set your password");
            setLoading(false);
            setTimeout(() => {
              router.push("/confirm-password");
            }, 1000);
          } else {
            setLoading(false);
            setTempToken(token);
            setSuccessMessage("Please verify your account");
            setEmail(email);
            setTimeout(() => {
              router.push("/verification");
            }, 1000);
          }
        }
      }
    } catch (error: any) {
      setError(
        error?.response?.data?.message || "An error occurred. Please try again."
      );
      setLoading(false);
    }
  };

  const validateForm = (a?: boolean): boolean => {
    let errorMsg = "";

    // Validate Email
    if (!formData.email) {
      errorMsg = "Email is required.";
      setError(errorMsg);
      console.log(errorMsg);
      return false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errorMsg = "Invalid email format.";
      setError(errorMsg);
      console.log(errorMsg);
      return false;
    }
    if (a) {
      return true;
    }

    if (showPasswordField) {
      // Validate Password
      if (!formData.password) {
        errorMsg = "Password is required.";
        setError(errorMsg);
        console.log(errorMsg);
        return false;
      } else if (formData.password.length < 6) {
        errorMsg = "Password must be at least 6 characters.";
        setError(errorMsg);
        console.log(errorMsg);
        return false;
      }
    }
    return true;
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
      <div>
        <label className="text-gray-700 dark:text-gray-300">Email</label>
        <input
          type="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-orange-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
      </div>
      {showPasswordField && (
        <div>
          <input
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-orange-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            placeholder={t("PlaceHolderText")}
          />
        </div>
      )}
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
