
import { ConfigButton } from "@/shared/components/atoms/configButton/ConfigButton";
import { ProfilePostIt } from "../components/profilePostIt/profilePostIt";
import style from "./home.module.css"

export default function Home() {
  return (
   <div className={style['notebook']}>
    <div className="absolute top-0 flex items-center justify-start flex-col w-full h-full">
    <ProfilePostIt/>
    <ConfigButton>
      <i className="pi pi-pencil"></i>
    </ConfigButton>
    </div>
    </div>
  );
}
