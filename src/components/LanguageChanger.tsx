// language-changer.tsx

import { usePathname, useRouter } from "next-intl/client";
import { useEffect, useState } from "react";

const LanguageChanger: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [toggle, setToggle] = useState("");

  useEffect(() => {
    const x = getLang();
    setToggle(x);
  }, []);

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setToggle(value);
    setLang(value);
    router.push(pathname, { locale: value });
  };

  const setLang = (value: string) =>
    localStorage.setItem("selectedLanguage", value);
  const getLang = (): string =>
    localStorage.getItem("selectedLanguage") || "en";

  return (
    <select value={toggle} className="text-sm focus:ring-orange-200 ring-3 focus:border-orange-600 border-gray-600 rounded-md" onChange={handleChange}>
      <option value="en">English</option>
      <option value="fr">French</option>
    </select>
  );
};

export default LanguageChanger;
