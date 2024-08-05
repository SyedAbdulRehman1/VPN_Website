import { HomeRoutes } from "@/utils/routes"
import classNames from "classnames"
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from 'next/navigation';

type SidebarItemProps = {
    pathName: string
}

export default function NavigationItem(props: { pathName: string }) {
    const t = useTranslations("Navigation");
    const path = usePathname()
    const Text = () => {
        switch (props.pathName) {
            case HomeRoutes.homeLink:
                return <>{t("home")}</>;

            case HomeRoutes.features:
                return <>{t("features")}</>;

            case HomeRoutes.pricing:
                return <>{t("pricing")}</>;
                
            case HomeRoutes.helpSupport:
                return <>{t("helpDesk")}</>;
            default:
                break;
        }
    }
    return (
        <li>
            <Link href={props.pathName} passHref>
                <span className={classNames(path == props.pathName ? 'text-orange-700 dark:text-orange-700' : 'text-gray-700', 'block py-2 pl-3 pr-4 text-sm  md:p-0 dark:text-gray-300')} aria-current="page"><Text /></span>
            </Link>
        </li>
    )
}