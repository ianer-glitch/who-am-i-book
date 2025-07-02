import { useEffect, useState } from "react";
import { IExperience } from "../../domain/IExperience";
import { resources } from "@/shared/locales/languages";
import { useTranslation } from "@/shared/locales";

export const useExperience = () => {
  const [experiences, setExperiences] = useState([] as IExperience[]);
  const {currentLanguage} = useTranslation()

  const experienceByLanguage: Record<keyof typeof resources, IExperience[]> = {
    ptBr: [
      {
        title:"Client-Side",
        experiences:["Vue"]
      },
    ],
    enUs: [
      {
        title:"Client-Side",
        experiences:["VueJS"]
      },
    ],
  };

  useEffect(()=>{
    setExperiences(experienceByLanguage[currentLanguage])

  },[currentLanguage])

  return{ experiences }
};
