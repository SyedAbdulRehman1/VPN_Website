"use client";
import Link from "next/link";
import GenericDropdown from "../Dropdown";
import { HomeRoutes, LINKS } from "@/utils";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { post } from "@/services/http";
type ApplicationType = { [key: string]: string };
const Applications = () => {
  const [links, setLinks] = useState<any>(undefined);
  const apps: ApplicationType = HomeRoutes.applications;
  const t = useTranslations("Navigation");
  const title = <>{t("applications")}</>;
  const path = usePathname();
  const ApplicationName = ({ app }: { app: string }) => {
    switch (app) {
      case "ios":
        return "iOS";
      case "android":
        return "Android";
      case "windows":
        return "Windows";
      case "mac":
        return "Mac OS";
      default:
        return "Application";
    }
  };

  useEffect(() => {
    fetchDonwloads();
  }, []);

  const fetchDonwloads = async () => {
    const data = {
      query: `{
          appLinks {
            type
            icon
            link
          }
        }`,
      variables: {},
    };
    const config = {
      headers: {
        "Content-Type": "application/json", // Change content type to JSON
      },
    };
    try {
      const {
        data: { appLinks },
      }: any = await post(LINKS, data, config);
      if (appLinks?.length) {
        const obj: any = {};
        appLinks.forEach((link: any) => {
          obj[link.type] = link;
        });
        setLinks(obj);
      }
    } catch (error) {
      console.log("error fetching all payment methods", error);
    }
  };
  return (
    <li>
      <GenericDropdown
        srcClass={classNames(
          /application/i.test(path)
            ? "text-orange-700 dark:text-orange-700"
            : "text-gray-700",
          "flex items-center py-2 pl-3 pr-4 text-sm  md:p-0 dark:text-gray-400"
        )}
        title={title}
        childrenClass="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-300"
          aria-labelledby="dropdownLargeButton"
        >
          {links &&
            Object.keys(apps).map((appKey) => {
              return (
                <li key={appKey}>
                  <Link
                    href={apps[appKey]}
                    className={classNames(
                      path === apps[appKey] ? "text-orange-600" : "",
                      "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    )}
                  >
                    <ApplicationName app={appKey} />
                  </Link>
                </li>
              );
            })}
          {/* {links &&
            Object.keys(apps).map((appKey) => {
              return (
                <li key={appKey}>
                  <Link
                    href={links[apps[appKey]]?.link || ""}
                    target="_blank"
                    className={classNames(
                      path === apps[appKey] ? "text-orange-600" : "",
                      "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    )}
                  >
                    {links[apps[appKey]]?.type}
                  </Link>
                </li>
              );
            })} */}
        </ul>
      </GenericDropdown>
    </li>
  );
};
export default Applications;
