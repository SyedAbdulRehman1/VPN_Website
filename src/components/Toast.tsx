'use client';
import { Toast } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { useTranslations } from "next-intl";

export default function ToastComp() {
  const t = useTranslations("Toasts");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Hide the div after 3 seconds
    return () => {
      clearTimeout(dismissTimeout);
    };
  }, []);
  return (<>
    {isVisible && (
      <div className="space-x-4 fixed transition ease-in-out delay-150  z-50 right-5 divide-x top-5 divide-gray-200 dark:divide-gray-700">
        <Toast>
          <div className="pl-4 text-sm font-normal">
            {t("ToastHeading")}
          </div>
        </Toast>
      </div>
    )}
  </>
  )
}
