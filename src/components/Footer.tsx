"use client";
import Link from 'next/link';
import { Logo } from './Logo';
import { getCurrentYear } from "@/utils/CurrentYear"
import LanguageChanger from '@/components/LanguageChanger';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const currentYear = getCurrentYear();
  const t = useTranslations("Footer");
  return (
    <footer className="py-20  mt-10 border-t dark:border-gray-700 bg-white sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 w-80 md:mb-0">
            <Link href="/" className="flex items-center dark:text-gray-400vcxcvc">
              <Logo />
            </Link>
            <p>{t('footerBrandDescription')} </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Resources */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t("fotterApplicationHeading")}
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/applications/android" className="hover:underline">
                    {t("AndroidAppHeading")}
                  </Link>
                </li>
                <li>
                  <Link href="/applications/windows" className="hover:underline">
                    {t("WindowsOSHeading")}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Follow us */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                &nbsp;
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/applications/ios" className="hover:underline ">
                    {t("iOS/iPadHeading")}
                  </Link>
                </li>
                <li>
                  <Link href="/applications/mac" className="hover:underline">
                    {t("MacOSHeading")}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t("LegalText")}
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/privacy-policy" className="hover:underline">
                    {t("PolicyText")}
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:underline">
                    {t("TermsHeading")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {currentYear}{' '}
            <Link href="https://flowbite.com" className="hover:underline">
              Virgo VPN™
            </Link>
            {t("RightsHeading")}
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {/* Social media icons */}
            <LanguageChanger />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
