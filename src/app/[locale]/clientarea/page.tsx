"use client";
import { getPageMetadata } from "@/utils/Metadata";
import { Metadata } from "next";
import Link from "next/link";
import multiple_screens from "@/img/multiple-screens-sm.webp";
import Image from "next/image";
import { useState, useEffect } from "react";
import { DASHBOARD, TRANSACTION_HISTORY } from "@/utils";
import { get } from "@/services/http";
import { Transaction } from "@/models/TransactionHistory.model";
import { DashboardDetails } from "@/models/dashboard.model";
import { getUser } from "@/services/local-storage";

// export const metadata: Metadata = getPageMetadata("dashboard")
const Home = () => {
  const [dashboardData, setDashboardData] = useState<DashboardDetails | null>(
    null
  );

  const [TransactionHistory, setTransactionHistory] =
    useState<Transaction | null>(null);
  const [email, setEmail] = useState<any>("");

  useEffect(() => {
    TransHistory();
    dashboardDetails();
  }, []);

  const TransHistory = async () => {
    try {
      const response = await get<Transaction>(TRANSACTION_HISTORY);
      // setTransitionHistory(response);
      console.log(response);
    } catch (error) {
      console.error("Error fetching Transaction History:", error);
    }
  };

  const dashboardDetails = async () => {
    try {
      const response: DashboardDetails = await get(DASHBOARD);
      setDashboardData(response);
      let UserData = getUser();
      setEmail(UserData.email);
    } catch (error) {
      console.error("Error fetching dashboard details:", error);
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="border-2 f col-span-3 lex items-center bg-white border-gray-100 py-5 px-10 rounded-lg dark:border-gray-600 ">
          <div className="grid md:grid-cols-3 sm:grid-cols-1 items-center   md:divide-x gap-4">
            <div className="flex  items-center">
              <div className="mr-4">
                <Image
                  src={
                    "https://ui-avatars.com/api/?rounded=true&background=FDEDE1&color=F89F5E&name=Nabeel+Shafeeq&bold=true&size=256"
                  }
                  height={40}
                  width={40}
                  alt={"Name"}
                />
              </div>
              <div>
                <span className="text-bold">Welcome!</span>
                <br />
                <span>{email}</span>
                <br />
                <span className="text-xs">Nice to see you again.</span>
              </div>
            </div>
            <div className="md:pl-5">
              <div>
                <span>Current Plan</span>
                <br />
                <span className="text-bold">Plan Name</span>
                <br />
                <span className="text-xs">Renews on Sep 23, 2023</span>
              </div>
            </div>
            <div className="md:pl-5">
              <span className="text-sm">
                Unlock more features & tools by going premium
              </span>
              <br />
              <span className="inline-flex justify-center items-center gap-x-3.5 text-xs text-center bg-orange-600 text-white hover:border-gray-300 shadow-sm font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-2 px-3 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
                <Link href="/clientarea/downloads">Get Premimum</Link>
                <i className="fa-solid fa-arrow-right-long"></i>
              </span>
            </div>
          </div>
        </div>
        {/* Devices card start */}
        <div className="border-2 flex items-center bg-white border-gray-100 py-5 px-10 rounded-lg dark:border-gray-600  ">
          <div className="mr-3">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.417 4.1665C10.417 3.47615 10.9766 2.9165 11.667 2.9165H35.8337C36.524 2.9165 37.0837 3.47615 37.0837 4.1665V35.8332C37.0837 36.5235 36.524 37.0832 35.8337 37.0832H19.167V34.5832H34.5837V5.4165H12.917V12.4998H10.417V4.1665Z"
                fill="#F78633"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.91699 12.4998C2.91699 11.8095 3.47664 11.2498 4.16699 11.2498H19.167C19.8573 11.2498 20.417 11.8095 20.417 12.4998V35.8332C20.417 36.5235 19.8573 37.0832 19.167 37.0832H4.16699C3.47664 37.0832 2.91699 36.5235 2.91699 35.8332V12.4998ZM5.41699 13.7498V34.5832H17.917V13.7498H5.41699Z"
                fill="#F78633"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.58366 30.8332C9.58366 30.1428 10.1433 29.5832 10.8337 29.5832H12.5003C13.1907 29.5832 13.7503 30.1428 13.7503 30.8332C13.7503 31.5235 13.1907 32.0832 12.5003 32.0832H10.8337C10.1433 32.0832 9.58366 31.5235 9.58366 30.8332Z"
                fill="#F78633"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.0837 30.8332C22.0837 30.1428 22.6433 29.5832 23.3337 29.5832H25.0003C25.6907 29.5832 26.2503 30.1428 26.2503 30.8332C26.2503 31.5235 25.6907 32.0832 25.0003 32.0832H23.3337C22.6433 32.0832 22.0837 31.5235 22.0837 30.8332Z"
                fill="#F78633"
              />
            </svg>
          </div>
          <div>
            <div>
              <span className="text-2xl font-bold">
                {dashboardData?.login_devices}/{dashboardData?.allowed_devices}
              </span>
              &nbsp;
              <span>Active Devices</span>
            </div>
            <Link
              className="text-orange-600 text-sm font-bold"
              href="/clientarea/devices"
            >
              See Complete list→
            </Link>
          </div>
        </div>
        {/* Devices card ends */}

        {/* used time card start */}
        <div className="border-2 flex items-center bg-white border-gray-100 py-5 px-10 rounded-lg dark:border-gray-600 ">
          <div className="mr-3">
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.75 20.0002C2.75 10.1051 10.7716 2.0835 20.6667 2.0835C30.5618 2.0835 38.5833 10.1051 38.5833 20.0002C38.5833 29.8953 30.5618 37.9168 20.6667 37.9168C10.7716 37.9168 2.75 29.8953 2.75 20.0002ZM20.6667 4.5835C12.1523 4.5835 5.25 11.4858 5.25 20.0002C5.25 28.5146 12.1523 35.4168 20.6667 35.4168C29.1811 35.4168 36.0833 28.5146 36.0833 20.0002C36.0833 11.4858 29.1811 4.5835 20.6667 4.5835Z"
                fill="#F78633"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.6735 8.75016C21.3638 8.75023 21.9234 9.30993 21.9234 10.0003L21.9224 19.4898L28.6224 26.1898C29.1106 26.6779 29.1106 27.4694 28.6224 27.9575C28.1343 28.4457 27.3428 28.4457 26.8546 27.9575L19.7885 20.8914C19.554 20.6569 19.4223 20.3389 19.4224 20.0074L19.4234 10C19.4234 9.30968 19.9831 8.75009 20.6735 8.75016Z"
                fill="#F78633"
              />
            </svg>
          </div>
          <div>
            <div className=" text-xs font-bold">Last 7 days VPN Used Time</div>
            <div>
              <span className="text-2xl font-bold">
                {dashboardData?.last_7_days_used_time}
              </span>
            </div>
          </div>
        </div>
        {/* used time card ends */}

        {/* used trafic card start */}
        <div className="border-2 flex items-center bg-white border-gray-100 py-5 px-10 rounded-lg dark:border-gray-600 ">
          <div className="mr-3">
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.334 23.7502C21.0243 23.7502 21.584 24.3098 21.584 25.0002V30.0002C21.584 30.6905 21.0243 31.2502 20.334 31.2502C19.6436 31.2502 19.084 30.6905 19.084 30.0002V25.0002C19.084 24.3098 19.6436 23.7502 20.334 23.7502Z"
                fill="#F78633"
              />
              <path
                d="M4.08398 33.3335C4.08398 32.6431 4.64363 32.0835 5.33398 32.0835H17.0007C17.691 32.0835 18.2507 32.6431 18.2507 33.3335C18.2507 34.0239 17.691 34.5835 17.0007 34.5835H5.33398C4.64363 34.5835 4.08398 34.0239 4.08398 33.3335Z"
                fill="#F78633"
              />
              <path
                d="M22.4173 33.3335C22.4173 32.6431 22.977 32.0835 23.6673 32.0835H35.334C36.0243 32.0835 36.584 32.6431 36.584 33.3335C36.584 34.0239 36.0243 34.5835 35.334 34.5835H23.6673C22.977 34.5835 22.4173 34.0239 22.4173 33.3335Z"
                fill="#F78633"
              />
              <path
                d="M20.334 31.2502C19.1834 31.2502 18.2507 32.1829 18.2507 33.3335C18.2507 34.4841 19.1834 35.4168 20.334 35.4168C21.4845 35.4168 22.4173 34.4841 22.4173 33.3335C22.4173 32.1829 21.4845 31.2502 20.334 31.2502ZM15.7507 33.3335C15.7507 30.8022 17.8027 28.7502 20.334 28.7502C22.8653 28.7502 24.9173 30.8022 24.9173 33.3335C24.9173 35.8648 22.8653 37.9168 20.334 37.9168C17.8027 37.9168 15.7507 35.8648 15.7507 33.3335Z"
                fill="#F78633"
              />
              <path
                d="M8.25065 14.1668C8.25065 7.49339 13.6605 2.0835 20.334 2.0835C27.0074 2.0835 32.4173 7.49339 32.4173 14.1668C32.4173 20.8403 27.0074 26.2502 20.334 26.2502C13.6605 26.2502 8.25065 20.8403 8.25065 14.1668ZM29.8365 12.9168C29.224 8.21472 25.2031 4.5835 20.334 4.5835C15.4649 4.5835 11.4439 8.21472 10.8314 12.9168H29.8365ZM29.8365 15.4168H10.8314C11.4439 20.1189 15.4649 23.7502 20.334 23.7502C25.2031 23.7502 29.224 20.1189 29.8365 15.4168Z"
                fill="#F78633"
              />
              <path
                d="M18.5544 6.95523C17.8682 8.7393 17.4173 11.2886 17.4173 14.1668C17.4173 17.0451 17.8682 19.5944 18.5544 21.3784C18.8991 22.2746 19.2789 22.9141 19.637 23.3079C19.9947 23.7013 20.232 23.7502 20.334 23.7502C20.4359 23.7502 20.6733 23.7013 21.031 23.3079C21.3891 22.9141 21.7689 22.2746 22.1136 21.3784C22.7998 19.5944 23.2507 17.0451 23.2507 14.1668C23.2507 11.2886 22.7998 8.7393 22.1136 6.95523C21.7689 6.05903 21.3891 5.41955 21.031 5.0258C20.6733 4.6324 20.4359 4.5835 20.334 4.5835C20.232 4.5835 19.9947 4.6324 19.637 5.0258C19.2789 5.41955 18.8991 6.05903 18.5544 6.95523ZM17.7873 3.34387C18.4266 2.64087 19.2853 2.0835 20.334 2.0835C21.3826 2.0835 22.2414 2.64087 22.8806 3.34387C23.5196 4.04652 24.0376 4.99353 24.4469 6.05778C25.2688 8.19461 25.7507 11.062 25.7507 14.1668C25.7507 17.2717 25.2688 20.139 24.4469 22.2759C24.0376 23.3401 23.5196 24.2871 22.8806 24.9898C22.2414 25.6928 21.3826 26.2502 20.334 26.2502C19.2853 26.2502 18.4266 25.6928 17.7873 24.9898C17.1484 24.2871 16.6304 23.3401 16.221 22.2759C15.3992 20.139 14.9173 17.2717 14.9173 14.1668C14.9173 11.062 15.3992 8.19461 16.221 6.05778C16.6304 4.99353 17.1484 4.04652 17.7873 3.34387Z"
                fill="#F78633"
              />
              <path
                d="M8.25065 14.1668C8.25065 13.4765 8.8103 12.9168 9.50065 12.9168H31.1673C31.8577 12.9168 32.4173 13.4765 32.4173 14.1668C32.4173 14.8572 31.8577 15.4168 31.1673 15.4168H9.50065C8.8103 15.4168 8.25065 14.8572 8.25065 14.1668Z"
                fill="#F78633"
              />
            </svg>
          </div>
          <div>
            <div className=" text-xs font-bold">
              Last 7 days VPN Used trafiic
            </div>
            <div>
              <span className="text-2xl font-bold">
                {dashboardData?.last_7_days_used_traffic}
              </span>
            </div>
          </div>
        </div>
        {/* used trafic card ends */}

        <div className="bg-orange-100 col-span-3 align-middle justify-between rounded-lg flex p-5">
          <div className="">
            <div className="canela-regular mb-2 font-extrabold text-2xl">
              Download Center
            </div>
            <div className="mb-5">
              Applications for all major platform to secure your all devices
              over the internet.
            </div>
            <span className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center bg-gray-darkf text-white hover:border-gray-300 shadow-sm font-regular rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-2 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
              <Link href="/clientarea/downloads">Go to downloads</Link>
              <i className="fa-solid fa-arrow-right-long"></i>
            </span>
          </div>
          <Image
            src={multiple_screens}
            alt="Donwload Center"
            className="hidden h-auto lg:block"
          />
        </div>
      </div>
      <section className="bg-gray-50  ">
        <div className="mx-auto">
          <div className="bg-white border-gray-100 dark:border-gray-600 dark:bg-gray-800 relative sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <div className="text-2xl text-bold mb-2">
                  Transaction History
                </div>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"></div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="px-4 py-3">Subscription ID/Plan </th>
                    <th className="px-4 py-3">Order Amount </th>
                    <th className="px-4 py-3"> Billing Date </th>
                    <th className="px-4 py-3">Service Period </th>
                    <th className="px-4 py-3"> Card Details </th>
                    <th className="px-4 py-3"> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700">
                    <td className="px-4 py-3">
                      <span className="font-bold">SUB_JUJF0C3WKKTCDL</span>
                      <br />
                      <span>Plan: 1-month plan</span>
                    </td>
                    <td className="px-4 py-3">$30,021.23</td>
                    <td className="px-4 py-3">Jan 13, 2022</td>
                    <td className="px-4 py-3">Jan 13, 2022 - Jan 13, 2022</td>
                    <td className="px-4 py-3">Visa •••• •••• •••• 4242</td>
                    <td className="px-4 py-3">Invoice</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav
              className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                &nbsp;
                <span className="font-semibold text-gray-900 dark:text-white">
                  1-10
                </span>
                &nbsp; &nbsp;
                <span className="font-semibold text-gray-900 dark:text-white">
                  1000
                </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only"> </span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
