"use client"; // Add this line to mark the parent component as a Client Component

import { get, put } from "@/services/http";
import { useEffect, useState } from "react";
import { Devices } from "@/models/devices.model";
import {
  DEVICE_LIST,
  LOGOUT_ALL_DEVICES,
  LOGOUT_DEVICE,
} from "@/utils/api-routes";
import { getTempToken, getTokenn } from "@/services/local-storage";
import { useTranslations } from "next-intl";
import Alert from "@/components/Alert";
import ModalAlert from "@/components/ModalAlert";
import { AxiosRequestConfig } from "axios";

const ActiveDevices = () => {
  const t = useTranslations("Devices");
  const [loading, setLoading] = useState(false);
  const [devices, setDevices] = useState<Device[]>([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteAllDevices, setDeleteAllDevices] = useState(false);

  useEffect(() => {
    fetchDevices();
  }, []);

  const fetchDevices = async () => {
    try {
      const response: any = await get(DEVICE_LIST);

      setDevices(response.devices);
    } catch (error) {
      console.error("Error fetching devices:", error);
    }
  };
  const logoutAllDevices = async () => {
    setShowDeleteConfirmation(true);
    try {
      setLoading(true);
      const config: AxiosRequestConfig = {
        headers: { Token: getTokenn() },
      };
      const response: any = await put(LOGOUT_ALL_DEVICES, null, config);
      setSuccessMessage("Logout All Devices successfully");
      setLoading(false);
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching devices:", error);
    }
  };
  const deleteMethod = () => {
    setShowDeleteConfirmation(true);
  };

  const deleteAll = () => {
    setDeleteAllDevices(true);
  };

  const logoutDevice = async (tokenId: number) => {
    try {
      const response: any = await put(LOGOUT_DEVICE + tokenId, null);
      if (response) {
        setSuccessMessage("Device Logout successfully");
        closeModal();
        await fetchDevices();
      }
    } catch (error) {
      console.error("Error logging out device:", error);
    }
  };

  const closeModal = () => {
    setShowDeleteConfirmation(false);
    setDeleteAllDevices(false);
  };
  return (
    <>
      <div className="flex justify-center">
        {successMessage && <Alert type="success" message={successMessage} />}
      </div>
      <section className="bg-gray-50 rounded-lg dark:bg-gray-900 p-3 sm:p-5">
        <div className="mx-auto max-w-screen-xl ">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <div className="w-full text-lg font-bold	 p-4 border-b">
                {t("DevicesHeading")}
              </div>
              {devices.length === 0 ? (
                <>
                  <div className="p-4 text-gray-500 dark:text-gray-400 text-center">
                    No devices found.
                  </div>
                </>
              ) : (
                // Render the table when devices are found
                <>
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <tbody>
                      {devices.map((device, index) => (
                        <tr
                          key={index}
                          className="border-b dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-4 py-3  whitespace-nowrap  "
                          >
                            <div className="flex items-center">
                              <div className="mr-2">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_6832_443)">
                                    <path
                                      d="M7.23564 20C4.25912 19.9829 1.79688 13.9066 1.79688 10.8121C1.79688 5.75718 5.58883 4.65055 7.05045 4.65055C7.70903 4.65055 8.41226 4.9091 9.03255 5.13838C9.46635 5.29805 9.9144 5.46279 10.1643 5.46279C10.4446 5.40846 10.7172 5.32025 10.9762 5.20011C11.6389 4.93631 12.4633 4.60852 13.4234 4.60852H13.429C14.146 4.60852 16.3198 4.76594 17.6267 6.72871L17.9329 7.18878L17.4923 7.52125C16.8628 7.99614 15.7145 8.86242 15.7145 10.5785C15.7145 12.6108 17.0152 13.3929 17.64 13.7681C17.9158 13.934 18.2014 14.1059 18.2014 14.4794C18.2014 14.7233 16.2513 19.9704 13.4195 19.9704C12.8591 19.9589 12.308 19.8251 11.8048 19.5784C11.3583 19.3548 10.8666 19.2363 10.3673 19.2319C9.97392 19.2729 9.58965 19.3769 9.22919 19.5398C8.6513 19.7553 7.99722 20.0004 7.25516 20.0004L7.23564 20Z"
                                      fill="#101828"
                                    />
                                    <path
                                      d="M13.7242 0C13.798 2.65925 11.8962 4.50401 9.99662 4.38843C9.68366 2.26617 11.896 0 13.7242 0Z"
                                      fill="#101828"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_6832_443">
                                      <rect
                                        width="20"
                                        height="20"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <div>
                                <div className="font-semibold text-gray-900 dark:text-white">
                                  {device.details.name}
                                </div>
                                <div className="font-normal text-xs">
                                  {" "}
                                  {t("ActiveText")}{" "}
                                </div>
                              </div>
                            </div>
                          </th>
                          <td className="px-4 py-3">
                            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                              {t("DottedActive")}
                            </span>
                          </td>
                          <td className="px-4 py-3 flex items-center justify-end">
                            <button
                              onClick={() => deleteMethod()}
                              id="apple-imac-27-dropdown-button"
                              data-dropdown-toggle="apple-imac-27-dropdown"
                              className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                              type="button"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.5 5.00002H4.16667M4.16667 5.00002H17.5M4.16667 5.00002V16.6667C4.16667 17.1087 4.34226 17.5326 4.65482 17.8452C4.96738 18.1578 5.39131 18.3334 5.83333 18.3334H14.1667C14.6087 18.3334 15.0326 18.1578 15.3452 17.8452C15.6577 17.5326 15.8333 17.1087 15.8333 16.6667V5.00002H4.16667ZM6.66667 5.00002V3.33335C6.66667 2.89133 6.84226 2.4674 7.15482 2.15484C7.46738 1.84228 7.89131 1.66669 8.33333 1.66669H11.6667C12.1087 1.66669 12.5326 1.84228 12.8452 2.15484C13.1577 2.4674 13.3333 2.89133 13.3333 3.33335V5.00002M8.33333 9.16669V14.1667M11.6667 9.16669V14.1667"
                                  stroke="#667085"
                                  strokeWidth="1.66667"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </td>
                          {showDeleteConfirmation && (
                            <ModalAlert
                              onDelete={() => logoutDevice(device.tokenId)}
                              mode="delete"
                              title={`Logout Device - ${device.details.name}`}
                              closeModal={closeModal}
                            />
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          </div>
          {devices.length === 0 ? null : (
            <button
              onClick={deleteAll}
              type="button"
              className={`text-white mt-5 bg-red-500 hover-bg-red-800 focus-ring-4 focus-outline-none focus-ring-red-300 dark-focus-ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 spinner ${
                loading ? "loading" : ""
              }`}
            >
              Logout All Devices
              {loading ? <div className="loader"></div> : ""}
            </button>
          )}
        </div>
        {deleteAllDevices && (
          <ModalAlert
            onDelete={() => logoutAllDevices()}
            mode="delete"
            // title={`Logout Device - ${device.details.name}`}
            title="Logout All Devices "
            closeModal={closeModal}
          />
        )}
      </section>
    </>
  );
};

export default ActiveDevices;
