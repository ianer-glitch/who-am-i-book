
'use client'
import { useTranslation } from "@/shared/locales";
import { ProfilePostIt } from "../components/profilePostIt/ProfilePostIt";
import style from "./home.module.css"
import { ProjectsPostItList } from "../components/projectsPostItList/projectsPostItList";

export default function Home() {

  const {t} = useTranslation()

  return (
   <div className={style['notebook']}>
    <div className="absolute top-0 flex items-center justify-start flex-col w-full h-full">
    <ProfilePostIt/>
    <p>{t("homeAbout")}</p>
    <ProjectsPostItList/>
    </div>
    </div>
  );
}
