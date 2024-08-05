import classNames from "classnames";
import TitlePill from "./TitlePill";
import { FC, ReactNode } from "react";
interface SectionTitleProps {
    SectionTitle?: ReactNode | string;
    SectionSubtitle?: ReactNode | string;
    className?: string;
    SectionName?: string;
}
const SectionTitle: FC<SectionTitleProps> = ({ SectionTitle = '', SectionSubtitle = '', className = '', SectionName }) => {
    return (
        <>
            <div className={classNames("w-full mb-2 text-center mt-8 lg:mb-16", className)}>
                {SectionName && <TitlePill className="text-sm" pillText={SectionName} />}
                <h2 className="mb-4  tracking-tight font-extrabold text-gray-darkf dark:text-white canela-regular">
                    {SectionTitle}
                </h2>
                <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                    {SectionSubtitle}
                </p>
            </div>
        </>
    );
};
export default SectionTitle;