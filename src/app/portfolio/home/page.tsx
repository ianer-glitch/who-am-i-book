
'use client'
import { useTranslation } from "@/shared/locales";
import { ProfilePostIt } from "../components/profilePostIt/ProfilePostIt";
import style from "./home.module.css"
import { ProjectsPostItList } from "../components/projectsPostItList/ProjectsPostItList";
import { ExperiencesPostIt } from "../components/experiencesPostIt/ExperiencesPostIt";
import { LanguageButtons } from "@/shared/components/molecules/languageButtons/LanguageButtons";
import { ThemeButtons } from "@/shared/components/molecules/themeButtons/ThemeButtons";
import { useDate } from "@/shared/hooks/useDate";

export default function Home() {

  const {t} = useTranslation()
  const {dateToShow} = useDate()

  return (
  <div className={style['notebook']}>
    <p className="text-end text-sty" style={{fontFamily : "var(--font-playwrite)"}}>{dateToShow}</p>
    <div className="absolute right-0 pl-4 pr-4 pt-9 top-0 gap-4 flex items-center justify-start flex-col w-full h-full">
      <div className="w-full flex   items-end justify-end  gap-2">
        <LanguageButtons />
        <ThemeButtons/>
      </div>
      <section className="w-full flex items-center justify-between">
      <ProfilePostIt/>
      </section>
      <p style={{fontFamily:"var(--font-nunito)"}}>{t("homeAbout")}</p>
      <ProjectsPostItList/>
      <ExperiencesPostIt/>
    </div>
  </div>
  );
}
