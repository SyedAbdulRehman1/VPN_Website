"use client";

import Link from "next/link";
import { ClientareaRoutes } from "@/utils/routes";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import SidebarItem from "./SidebarItem";
import { useEffect, useState } from "react";
import { getUser } from "@/services/local-storage";

interface SideNavProps {
  onLogoutSuccess: (status: boolean) => void;
}

const SideNav: React.FC<SideNavProps> = ({ onLogoutSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string>("");
  const [firstLetter, setfirstLetter] = useState<string>("");
  const [secondLetter, setSecondLetter] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const pathname = usePathname();
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    try {
      const response: any = await getUser();
      setEmail(response.email);
      setName(response.name);
      const nameParts = response.name.split(" ");
      if (nameParts.length > 0) {
        const firstLetterOfFirstName = nameParts[0].charAt(0);
        const secondLetterOfSecondName = nameParts[1].charAt(0);
        setfirstLetter(firstLetterOfFirstName);
        setSecondLetter(secondLetterOfSecondName);
      }
    } catch (error) {
      console.error("Error fetching user email:", error);
    }
  };

  const logOut = async () => {
    onLogoutSuccess(true);
  };

  const handleLogout = () => {
    logOut();
  };
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <ul>
            <li className="p-2 mb-5 text-self-center">
              <Link href="/" passHref>
                <Logo />
              </Link>
            </li>
          </ul>
          <ul className="space-y-2">
            {[
              ClientareaRoutes.clientarea,
              ClientareaRoutes.devices,
              ClientareaRoutes.billing,
              ClientareaRoutes.downloads,
            ].map((path) => (
              <SidebarItem key={path} pathName={path} />
            ))}
          </ul>
        </div>
        <div className=" absolute bottom-0  left-0 right-0 ">
          <ul className="pt-5 my-5 space-y-2 px-3   border-gray-200 dark:border-gray-700">
            {[ClientareaRoutes.tickets, ClientareaRoutes.settings].map(
              (path) => (
                <SidebarItem key={path} pathName={path} />
              )
            )}
          </ul>
          <div
            className="p-4 border-t w-full bg-white dark:bg-gray-800 z-20  border-gray-200 b
                    order-r dark:border-gray-700"
          >
            <div className="flex items-center">
              <div>
                <span className="flex justify-center items-center mr-1 p-5 bg-[#FEEDE3] text-orange-500 font-medium text-lg rounded-full w-7 h-7">
                  {firstLetter ? firstLetter : ""}
                  {secondLetter ? secondLetter : ""}
                </span>
              </div>
              <div className="ms-2">
                <p className="text-base light:text-dark-900 text-bold dark:text-gray-100">
                  {name}
                </p>
                <p className="text-sm light:text-dark-900 dark:text-gray-300">
                  {email}
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={handleLogout}
                type="button"
                className={`px-3 mt-4 flex py-2 text-sm font-large text-center text-white bg-red-500 rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  spinner ${
                  loading ? "loading" : ""
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.875 2.5C1.875 2.15482 2.15482 1.875 2.5 1.875H9.99654C10.3417 1.875 10.6215 2.15482 10.6215 2.5C10.6215 2.84518 10.3417 3.125 9.99654 3.125H3.125V16.875H10C10.3452 16.875 10.625 17.1548 10.625 17.5C10.625 17.8452 10.3452 18.125 10 18.125H2.5C2.15482 18.125 1.875 17.8452 1.875 17.5V2.5Z"
                    fill="white"
                  />
                  <path
                    d="M13.3081 5.80806C13.5521 5.56398 13.9479 5.56398 14.1919 5.80806L17.9419 9.55806C18.186 9.80214 18.186 10.1979 17.9419 10.4419L14.1919 14.1919C13.9479 14.436 13.5521 14.436 13.3081 14.1919C13.064 13.9479 13.064 13.5521 13.3081 13.3081L16.6161 10L13.3081 6.69194C13.064 6.44786 13.064 6.05214 13.3081 5.80806Z"
                    fill="white"
                  />
                  <path
                    d="M6.04167 9.99654C6.04167 9.65136 6.32149 9.37154 6.66667 9.37154H17.5C17.8452 9.37154 18.125 9.65136 18.125 9.99654C18.125 10.3417 17.8452 10.6215 17.5 10.6215H6.66667C6.32149 10.6215 6.04167 10.3417 6.04167 9.99654Z"
                    fill="white"
                  />
                </svg>
                <span>Logout</span>
                {loading ? <div className="loader"></div> : ""}
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
export default SideNav;
