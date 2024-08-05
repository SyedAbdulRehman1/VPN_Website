"use client";
import { ClientareaRoutes } from "@/utils/routes"
import classNames from "classnames"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useTranslations } from "next-intl";

type SidebarItemProps = {
    pathName: string
}

export default function SidebarItem(props: { pathName: string }) {
    const path = usePathname()

    const t = useTranslations("SidebarItem");
    
    const Icon = () => {
        switch (props.pathName) {
            case ClientareaRoutes.clientarea:
                return (<svg width="22" height="20" className={classNames(path == props.pathName ? 'text-orange-500 hover:opacity-100  group-hover:text-orange-600 ' : '', "flex-shrink-0 w-6 h-6 text-gray-400  duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white")} viewBox="0 0 22 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.0402 4.82L13.2802 0.789999C11.7102 -0.310001 9.30023 -0.250001 7.79023 0.919999L2.78023 4.83C1.78023 5.61 0.990234 7.21 0.990234 8.47V15.37C0.990234 17.92 3.06023 20 5.61023 20H16.3902C18.9402 20 21.0102 17.93 21.0102 15.38V8.6C21.0102 7.25 20.1402 5.59 19.0402 4.82ZM11.7502 16C11.7502 16.41 11.4102 16.75 11.0002 16.75C10.5902 16.75 10.2502 16.41 10.2502 16V13C10.2502 12.59 10.5902 12.25 11.0002 12.25C11.4102 12.25 11.7502 12.59 11.7502 13V16Z" />
                </svg>)
            case ClientareaRoutes.devices:
                return (<svg width="24" height="24" viewBox="0 0 24 24" className={classNames(path == props.pathName ? 'text-orange-500 hover:opacity-100  group-hover:text-orange-600 ' : '', "flex-shrink-0 w-6 h-6 text-gray-400  duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white")} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6V6.24H14.87C11.9 6.24 10.52 7.62 10.52 10.59V15.7H9.75V19.25H10.52V20.75H4.95C4.54 20.75 4.2 20.41 4.2 20C4.2 19.59 4.54 19.25 4.95 19.25H8.25V15.7H6C2.87 15.7 2.03 14.93 2 11.9V6C2 2.8 2.8 2 6 2H16C19.2 2 20 2.8 20 6Z" />
                    <path d="M19.9995 7.79023C19.7495 7.76023 19.4595 7.74023 19.1495 7.74023H14.8695C12.7295 7.74023 12.0195 8.45023 12.0195 10.5902V19.2502C12.0295 19.8702 12.0995 20.3602 12.2495 20.7502C12.5995 21.6602 13.3895 22.0002 14.8695 22.0002H19.1495C21.2895 22.0002 21.9995 21.2902 21.9995 19.1502V10.5902C21.9995 8.76023 21.4795 7.98023 19.9995 7.79023ZM17.0095 10.0902C17.8795 10.0902 18.5795 10.7902 18.5795 11.6602C18.5795 12.5302 17.8795 13.2302 17.0095 13.2302C16.1395 13.2302 15.4395 12.5302 15.4395 11.6602C15.4395 10.7902 16.1395 10.0902 17.0095 10.0902ZM17.0095 19.1502C15.8295 19.1502 14.8695 18.1902 14.8695 17.0102C14.8695 16.5202 15.0395 16.0602 15.3195 15.7002C15.7095 15.2002 16.3195 14.8702 17.0095 14.8702C17.5495 14.8702 18.0395 15.0702 18.4095 15.3902C18.8595 15.7902 19.1495 16.3702 19.1495 17.0102C19.1495 18.1902 18.1895 19.1502 17.0095 19.1502Z" />
                    <path d="M19.9995 7.79023C19.7495 7.76023 19.4595 7.74023 19.1495 7.74023H14.8695C12.7295 7.74023 12.0195 8.45023 12.0195 10.5902V19.2502C12.0295 19.8702 12.0995 20.3602 12.2495 20.7502C12.5995 21.6602 13.3895 22.0002 14.8695 22.0002H19.1495C21.2895 22.0002 21.9995 21.2902 21.9995 19.1502V10.5902C21.9995 8.76023 21.4795 7.98023 19.9995 7.79023ZM17.0095 10.0902C17.8795 10.0902 18.5795 10.7902 18.5795 11.6602C18.5795 12.5302 17.8795 13.2302 17.0095 13.2302C16.1395 13.2302 15.4395 12.5302 15.4395 11.6602C15.4395 10.7902 16.1395 10.0902 17.0095 10.0902ZM17.0095 19.1502C15.8295 19.1502 14.8695 18.1902 14.8695 17.0102C14.8695 16.5202 15.0395 16.0602 15.3195 15.7002C15.7095 15.2002 16.3195 14.8702 17.0095 14.8702C17.5495 14.8702 18.0395 15.0702 18.4095 15.3902C18.8595 15.7902 19.1495 16.3702 19.1495 17.0102C19.1495 18.1902 18.1895 19.1502 17.0095 19.1502Z" />
                </svg>);
            case ClientareaRoutes.billing:
                return (<svg width="24" height="24" viewBox="0 0 24 24" className={classNames(path == props.pathName ? 'text-orange-500 hover:opacity-100  group-hover:text-orange-600 ' : '', "flex-shrink-0 w-6 h-6 text-gray-400  duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white")} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 7.5499C22 8.2099 21.46 8.7499 20.8 8.7499H3.2C2.54 8.7499 2 8.2099 2 7.5499V7.5399C2 5.2499 3.85 3.3999 6.14 3.3999H17.85C20.14 3.3999 22 5.2599 22 7.5499Z" />
                    <path d="M2 11.45V16.46C2 18.75 3.85 20.6 6.14 20.6H17.85C20.14 20.6 22 18.74 22 16.45V11.45C22 10.79 21.46 10.25 20.8 10.25H3.2C2.54 10.25 2 10.79 2 11.45ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z" />
                </svg>);
            case ClientareaRoutes.downloads:
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" className={classNames(path == props.pathName ? 'text-orange-500 hover:opacity-100  group-hover:text-orange-600 ' : '', "flex-shrink-0 w-6 h-6 text-gray-400  duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white")} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5 8.52V3.98C22.5 2.57 21.86 2 20.27 2H16.23C14.64 2 14 2.57 14 3.98V8.51C14 9.93 14.64 10.49 16.23 10.49H20.27C21.86 10.5 22.5 9.93 22.5 8.52Z" />
                        <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" />
                        <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.7175 13V18.9404L15.2775 16.5004C14.9875 16.2104 14.5075 16.2104 14.2175 16.5004C13.9275 16.7904 13.9275 17.2704 14.2175 17.5604L17.9275 21.2704C17.9975 21.3404 18.0875 21.4004 18.1875 21.4404C18.1975 21.4404 18.2075 21.4404 18.2175 21.4504C18.2975 21.4804 18.3875 21.5004 18.4775 21.5004C18.6775 21.5004 18.8675 21.4204 19.0075 21.2804L22.7275 17.5604C23.0175 17.2604 23.0175 16.7904 22.7275 16.5004C22.4375 16.2104 21.9575 16.2104 21.6675 16.5004L19.2175 18.9504V13H17.7175Z" />
                    </svg>
                );
            case ClientareaRoutes.settings:
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" className={classNames(path == props.pathName ? 'text-orange-500 hover:opacity-100  group-hover:text-orange-600 ' : '', "flex-shrink-0 w-6 h-6 text-gray-400  duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white")} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.1 9.21994C18.29 9.21994 17.55 7.93994 18.45 6.36994C18.97 5.45994 18.66 4.29994 17.75 3.77994L16.02 2.78994C15.23 2.31994 14.21 2.59994 13.74 3.38994L13.63 3.57994C12.73 5.14994 11.25 5.14994 10.34 3.57994L10.23 3.38994C9.78 2.59994 8.76 2.31994 7.97 2.78994L6.24 3.77994C5.33 4.29994 5.02 5.46994 5.54 6.37994C6.45 7.93994 5.71 9.21994 3.9 9.21994C2.86 9.21994 2 10.0699 2 11.1199V12.8799C2 13.9199 2.85 14.7799 3.9 14.7799C5.71 14.7799 6.45 16.0599 5.54 17.6299C5.02 18.5399 5.33 19.6999 6.24 20.2199L7.97 21.2099C8.76 21.6799 9.78 21.3999 10.25 20.6099L10.36 20.4199C11.26 18.8499 12.74 18.8499 13.65 20.4199L13.76 20.6099C14.23 21.3999 15.25 21.6799 16.04 21.2099L17.77 20.2199C18.68 19.6999 18.99 18.5299 18.47 17.6299C17.56 16.0599 18.3 14.7799 20.11 14.7799C21.15 14.7799 22.01 13.9299 22.01 12.8799V11.1199C22 10.0799 21.15 9.21994 20.1 9.21994ZM12 15.2499C10.21 15.2499 8.75 13.7899 8.75 11.9999C8.75 10.2099 10.21 8.74994 12 8.74994C13.79 8.74994 15.25 10.2099 15.25 11.9999C15.25 13.7899 13.79 15.2499 12 15.2499Z"  />
                    </svg>
                );
            case ClientareaRoutes.tickets:
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" className={classNames(path == props.pathName ? 'light:text-orange-500 light:hover:opacity-100  group-hover:text-orange-600 dark:text-gray-100' : '', "flex-shrink-0 w-6 h-6 text-gray-400  duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white")} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM10.38 13.01C10.79 13.01 11.13 13.35 11.13 13.76C11.13 14.17 10.79 14.51 10.38 14.51H7.7C7.26 14.51 6.85 14.3 6.59 13.94C6.34 13.6 6.28 13.18 6.4 12.78C6.75 11.71 7.61 11.13 8.37 10.61C9.17 10.07 9.62 9.73 9.62 9.15C9.62 8.63 9.2 8.21 8.68 8.21C8.16 8.21 7.75 8.64 7.75 9.16C7.75 9.57 7.41 9.91 7 9.91C6.59 9.91 6.25 9.57 6.25 9.16C6.25 7.82 7.34 6.72 8.69 6.72C10.04 6.72 11.13 7.81 11.13 9.16C11.13 10.57 10.07 11.29 9.22 11.87C8.69 12.23 8.19 12.57 7.94 13.02H10.38V13.01ZM17 13.08H16.79V13.77C16.79 14.18 16.45 14.52 16.04 14.52C15.63 14.52 15.29 14.18 15.29 13.77V13.08H13.33C13.33 13.08 13.33 13.08 13.32 13.08C12.83 13.08 12.38 12.82 12.13 12.4C11.88 11.97 11.88 11.44 12.13 11.02C12.81 9.85 13.6 8.52 14.32 7.36C14.64 6.85 15.25 6.62 15.82 6.78C16.39 6.95 16.79 7.47 16.78 8.07V11.59H17C17.41 11.59 17.75 11.93 17.75 12.34C17.75 12.75 17.41 13.08 17 13.08Z" />
                        <path d="M15.2891 11.5799V8.63989C14.6991 9.59989 14.0891 10.6299 13.5391 11.5699H15.2891V11.5799Z"  />
                    </svg>

                )
            default:
                break;
        }
    }
    const Text = () => {
        switch (props.pathName) {
            case ClientareaRoutes.clientarea:
                return t("DashboardHeading");
                break;

            case ClientareaRoutes.devices:
                return t("DevicesHeading");
                break;

            case ClientareaRoutes.billing:
                return t("BillingHeading");
                break;

            case ClientareaRoutes.downloads:
                return t("DownloadsHeading");
                break;

            case ClientareaRoutes.settings:
                return t("SettingsHeading");
                break;

            case ClientareaRoutes.tickets:
                return t("TicketsHeading");
                break;

            default:
                break;
        }
    }
    return (
        <li>
            <Link href={props.pathName} className={classNames(path == props.pathName ? 'text-orange-600 hover:opacity-75 dark:text-gray-200 dark:bg-gray-500 bg-orange-100 hover:bg-orange-100 opacity-100 dark:hover:text-gray-100' : 'text-gray-900', "flex items-center px-4 py-3  text-gray-400 transition duration-75 group-hover:text-gray-900  dark:group-hover:text-whitetext-base font-medium opacity-75 rounded-lg hover:opacity-100 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group")}>
                <Icon />
                <span className="ml-3 "><Text /></span>
            </Link>
        </li>
    )
}