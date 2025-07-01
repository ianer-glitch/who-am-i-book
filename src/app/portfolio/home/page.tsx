
'use client'
import { useTranslation } from "@/shared/locales";
import { ProfilePostIt } from "../components/profilePostIt/profilePostIt";
import style from "./home.module.css"
import { LanguageButtons } from "@/shared/components/molecules/languageButtons/LanguageButtons";
import { ThemeButtons } from "@/shared/components/molecules/themeButtons/ThemeButtons";

export default function Home() {

  const {t} = useTranslation()

  return (
   <div className={style['notebook']}>
    <div className="absolute top-0 flex items-center justify-start flex-col w-full h-full">
    <ProfilePostIt/>
    {t("title")}
    <LanguageButtons/>
    <ThemeButtons/>
    </div>
    </div>
  );
}
