"use client";
import Alert from "@/components/Alert";
import { APIResponse } from "@/models/login.model";
import { User } from "@/models/user.model";
import { del, get, patch } from "@/services/http";
import {
  DELETE_ACCOUNT,
  UPDATE_PASSWORD,
  UPDATE_PROFILE,
  USER_PROFILE,
} from "@/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { removeUser } from "@/services/local-storage";
import ModalAlert from "@/components/ModalAlert";

export default function Settings() {
  const t = useTranslations("Settings");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");
  const [inActive, setinActive] = useState(true);
  const [hide, setHide] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [passwordData, setPasswordData] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    setSuccessMessage("");
  }, [passwordData, formData]);

  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    try {
      const userData: User | null = await get(USER_PROFILE);
      if (userData) {
        setFormData((prevData) => ({
          ...prevData,
          firstName: userData.first_name || "",
          lastName: userData.last_name || "",
          email: userData.email || "",
        }));
      } else {
        console.error("User data is null.");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const updateUserData = async () => {
    if (validateProfileForm()) {
      setLoading(true);
      const jsonData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
      };
      try {
        const response: APIResponse = await patch(UPDATE_PROFILE, jsonData);
        if (response.message === "Profile updated successfully") {
          console.log("Setting success message");
          setSuccessMessage("Profile updated successfully");
          setLoading(false);
          setinActive(true);
        } else {
          setLoading(false);
          setError("Profile update failed. Please try again.");
        }
      } catch (error) {
        setLoading(false);
        setError("An error occurred while updating the profile.");
        console.error("Error updating profile:", error);
      }
    }
  };

  const validateProfileForm = (): boolean => {
    let errorMsg = "";

    // Validate First Name
    if (!formData.firstName) {
      errorMsg = "First name is required.";
    }

    // Validate Last Name
    if (!formData.lastName) {
      errorMsg = "Last name is required.";
    }

    // Validate Email
    if (!formData.email) {
      errorMsg = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errorMsg = "Invalid email format.";
    }

    if (errorMsg) {
      setError(errorMsg);
      return false;
    }

    setError("");
    return true;
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setPasswordData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleTabClick = (tabName: any) => {
    setActiveTab(tabName);
  };
  const handleSavePassword = async () => {
    if (validatePasswordForm()) {
      setLoading(true);
      const jsonData = {
        current_password: passwordData.current_password,
        new_password: passwordData.new_password,
      };
      try {
        const response: APIResponse = await patch(UPDATE_PASSWORD, jsonData);
        console.log(response);

        if (response) {
          if (response.message === "Password updated successfully") {
            setSuccessMessage("Password updated successfully.");
            setFormData((prevData) => ({
              ...prevData,
              current_password: "",
              new_password: "",
              confirm_password: "",
            }));
          } else {
            setLoading(false);
            setError(response.message);
          }
        } else {
          setLoading(false);
          setError("An error occurred while updating the password.");
        }
      } catch (error: any) {
        setLoading(false);
        setError(error.response?.data?.message);
        console.error("Error updating password:", error);
      }
    }
  };

  const validatePasswordForm = () => {
    let errorMsg = "";

    if (!passwordData.current_password) {
      errorMsg = "Current Password is required.";
      setError(errorMsg);
      return false;
    } else if (passwordData.current_password.length < 6) {
      errorMsg = "Current Password must be at least 6 characters.";
      setError(errorMsg);
      return false;
    }

    if (!passwordData.new_password) {
      errorMsg = "New Password is required.";
      setError(errorMsg);
      return false;
    } else if (passwordData.new_password.length < 6) {
      errorMsg = "New Password must be at least 6 characters.";
      setError(errorMsg);
      return false;
    }

    if (!passwordData.confirm_password) {
      errorMsg = "Confirm New Password is required.";
      setError(errorMsg);
      return false;
    } else if (passwordData.confirm_password.length < 6) {
      errorMsg = "Confirm New Password must be at least 6 characters.";
      setError(errorMsg);
      return false;
    }

    if (passwordData.new_password !== passwordData.confirm_password) {
      errorMsg =
        "Confirm Passwords do not match with new password. Please enter the same password.";
      setError(errorMsg);
      return false;
    }

    setError("");
    return true;
  };

  const deleteUser = () => {
    setShowDeleteConfirmation(true);
  };

  const delAccount = async () => {
    try {
      setLoading(true);
      const response: APIResponse = await del(DELETE_ACCOUNT, null);
      if (response.message === "Account deleted successfully") {
        setSuccessMessage("Account deleted successfully");
        removeUser();
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      }
    } catch (error) {
      setLoading(false);
      console.log("error in deleting account", error);
    }
  };

  const closeModal = () => {
    setShowDeleteConfirmation(false);
  };

  const editForm = () => {
    if (inActive) {
      setinActive(false);
      setSuccessMessage("You can update your profile now");
    } else {
      setinActive(true);
      setSuccessMessage("");
    }
  };

  return (
    <>
      <div className="flex justify-center">
        {successMessage && <Alert type="success" message={successMessage} />}
        {error && <Alert type="error" message={error} />}
      </div>

      {/* Tab Buttons */}
      <div>
        <div className="flex justify-between border-b-2 border-b-gray-200 dark:border-b-gray-700 ">
          <div>
            <button
              className={`text-bold p-3 rounded-tl-lg rounded-tr-lg ${
                activeTab === "profile"
                  ? "dark:hover:bg-gray-600 hover:bg-gray-100 text-orange-600 border-t-2 border-t-orange-600"
                  : "dark:text-gray-400 text-gray-400"
              }`}
              onClick={() => handleTabClick("profile")}
            >
              {t("DetailsHeading")}
            </button>
            <button
              className={`text-bold p-3 rounded-tl-lg rounded-tr-lg ${
                activeTab === "password"
                  ? "dark:hover:bg-gray-600 hover:bg-gray-100 text-orange-600 border-t-2 border-t-orange-600"
                  : "dark:text-gray-400 text-gray-400"
              }`}
              onClick={() => handleTabClick("password")}
            >
              {t("PasswordHeading")}
            </button>
          </div>
          <div>
            {activeTab === "profile" && (
              <button
                onClick={editForm}
                className="bg-orange-200 m-2 font-medium text-orange-600 hover:text-white px-5 py-1 rounded-md text-sm hover:bg-orange-600"
              >
                {inActive ? "Edit" : "Cancel"}
              </button>
            )}
            {!inActive && activeTab === "profile" && (
              <button
                onClick={() => {
                  updateUserData();
                }}
                className={`bg-orange-200 m-2 font-medium text-orange-600 hover:text-white px-5 py-1 rounded-md text-sm hover:bg-orange-600  spinner ${
                  loading ? "loading" : ""
                }`}
              >
                Save
                {loading ? <div className="loader"></div> : ""}
              </button>
            )}
          </div>
        </div>
      </div>
      {activeTab === "profile" && (
        <div className="px-3  md:px-10">
          <div className="flex border-b-2 border-b-gray-200 dark:border-b-gray-700">
            <div className="py-8">
              <div className="text-2xl text-bold mb-2">
                {" "}
                {t("infoHeading")}{" "}
              </div>
              <div className="text-lg">{t("UpdateParagraph")}</div>
            </div>
          </div>
          <div className=" py-2 px-0 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Column 1: Label */}
            <div className=" p-4"> {t("NameText")} </div>

            {/* Column 2: First Name Field */}
            <div className=" p-4">
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Enter your first name"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                disabled={inActive}
              />
            </div>

            {/* Column 3: Last Name Field */}
            <div className=" p-4">
              <input
                type="text"
                placeholder="Enter your last name"
                id="last_name"
                name="last_name"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                disabled={inActive}
              />
            </div>
          </div>
          <hr />
          <div className="py-2 px-0  lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Column 1: Email Field */}
            <div className=" p-4">
              <label htmlFor="email" className="block mb-2">
                {t("EmailText")}
              </label>
            </div>

            {/* Column 2: Email Field */}
            <div className="p-4 col-span-2">
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                disabled={inActive}
              />
            </div>
          </div>

          <div className="py-2 px-0  lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className=" p-4"></div>
            <div className="p-4 col-span-2">
              <button
                onClick={deleteUser}
                className={`h-10 bg-orange-600 font-medium text-white hover:text-orange-600 px-5 py-1 rounded-md text-sm hover:bg-white hover:border border-orange-600 spinner ${
                  loading ? "loading" : ""
                }`}
              >
                Delete Profile
                {loading ? <div className="loader"></div> : ""}
              </button>
            </div>
            {showDeleteConfirmation && (
              <ModalAlert
                onDelete={() => delAccount()}
                mode="delete"
                title="Delete Account?"
                closeModal={closeModal}
              />
            )}
          </div>
        </div>
      )}
      {activeTab === "password" && (
        <div className="px-3 md:px-10">
          <div className="flex items-center justify-between border-b-2 border-b-gray-200 dark:border-b-gray-700">
            <div className="py-8">
              <div className="text-2xl text-bold mb-2">
                {" "}
                {t("PasswordText")}{" "}
              </div>
              <div className="text-lg"> {t("PasswordPara")} </div>
            </div>
          </div>
          <div className="py-2 px-0 lg:px-20">
            {/* Block 1: Current Password */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Column 1: Label */}
              <div className="p-4"> {t("CurrentPasswordText")} </div>

              {/* Column 2: Input Field */}
              <div className="p-4">
                <input
                  type="password"
                  id="current_password"
                  name="current_password"
                  placeholder="Enter your current password"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={passwordData.current_password}
                  onChange={(e) =>
                    handleInputChange("current_password", e.target.value)
                  }
                />
              </div>
            </div>
            <hr />

            {/* Block 2: New Password */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Column 1: Label */}
              <div className="p-4"> {t("NewPasswordText")} </div>

              {/* Column 2: Input Field */}
              <div className="p-4">
                <input
                  type="password"
                  id="new_password"
                  name="new_password"
                  placeholder="Enter your new password"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={passwordData.new_password}
                  onChange={(e) =>
                    handleInputChange("new_password", e.target.value)
                  }
                />
              </div>
            </div>
            <hr />

            {/* Block 3: Confirm New Password */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Column 1: Label */}
              <div className="p-4"> {t("ConfirmText")} </div>

              {/* Column 2: Input Field */}
              <div className="p-4">
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  placeholder={t("ConfirmPara")}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={passwordData.confirm_password}
                  onChange={(e) =>
                    handleInputChange("confirm_password", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Column 1: Label */}
              <div className="p-4"> </div>

              {/* Column 2: Input Field */}
              <div className="px-2">
                <button
                  onClick={() => {
                    handleSavePassword();
                  }}
                  className={`bg-orange-200 m-2 font-medium text-orange-600 hover:text-white px-5 py-1 rounded-md text-sm hover:bg-orange-600  spinner ${
                    loading ? "loading" : ""
                  }`}
                >
                  Save
                  {loading ? <div className="loader"></div> : ""}
                </button>
              </div>
            </div>
            <hr />
          </div>
        </div>
      )}
    </>
  );
}
