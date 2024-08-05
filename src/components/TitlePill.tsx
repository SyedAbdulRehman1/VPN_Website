import classNames from "classnames";
import { FC } from "react";
interface DownloadButtonProps {
    pillText: string;
    className: string;
}

const TitlePill: FC<DownloadButtonProps> = ({ pillText, className }) => {
    return (
        <>
            <h1 className={classNames("bg-orange-light uppercase w-max m-auto my-6 font-regular py-1 px-4 flex items-center  rounded-full text-[10px] text-orange-600 inter", className)} >
                <svg width="13" className=" ml" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1L2 7H6.5L6 11L11 5H6.5L7 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {pillText}
            </h1>
        </>
    );
};
export default TitlePill;