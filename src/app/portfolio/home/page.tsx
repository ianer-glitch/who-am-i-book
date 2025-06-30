
import { ProfilePostIt } from "../components/profilePostIt/profilePostIt";
import style from "./home.module.css"
import { LanguageButtons } from "@/shared/components/molecules/languageButtons/LanguageButtons";
import { ThemeButtons } from "@/shared/components/molecules/themeButtons/ThemeButtons";

export default function Home() {
  return (
   <div className={style['notebook']}>
    <div className="absolute top-0 flex items-center justify-start flex-col w-full h-full">
    <ProfilePostIt/>
    <LanguageButtons/>
    <ThemeButtons/>
    </div>
    </div>
  );
}
