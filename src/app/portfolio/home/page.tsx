
'use client'
import { useTranslation } from "@/shared/locales";
import { ProfilePostIt } from "../components/profilePostIt/ProfilePostIt";
import style from "./home.module.css"
import { ProjectsPostItList } from "../components/projectsPostItList/ProjectsPostItList";

export default function Home() {

  const {t} = useTranslation()

  return (
  <div className={style['notebook']}>
    <section className="absolute right-0 p-4 top-0 gap-5 flex items-center justify-start flex-col w-full h-full">
      <ProfilePostIt/>
      <p style={{fontFamily:"var(--font-nunito)"}}>{t("homeAbout")}</p>
      <ProjectsPostItList/>
    </section>
  </div>
  );
}
