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
        title:"Server-side",
        experiences:[".NET (2.2, 3.1, 5, 6, 8, 9)","C#","RabbitMq","LinQ","Dapper","Entity Framework","SQL","Google Protobuf","XUnity","Docker"]
      },
      {
        title:"Client-side",
        experiences:["HTML","CSS","Typescript","VueJS","AngularJs","React","Tailwind","HTML semântico"]
      },
      {
        title:"Cloud & CI / CD",
        experiences:["GitHub","Gitlab","Azure","Microsoft Azure DevOps"]
      },
      {
        title:"Arquiteturas",
        experiences:["MVC","MVVM","Hexagonal","Limpa","CQRS","Microsserviços"]
      },
      {
        title:"Design Patterns",
        experiences:["Facade","Adapter","Repository","Unit Of Work","Command Pattern","Política de Re-tentativa","Aggregator"]
      },
      {
        title:"Em Estudo",
        experiences:["ReactJs","NextJs"]
      },
    ],
    enUs: [
      {
        title:"Server-side",
        experiences:[".NET (2.2, 3.1, 5, 6, 8, 9)","C#","RabbitMq","LinQ","Dapper","Entity Framework","SQL","Google Protobuf","XUnity","Docker","Kubernetes"]
      },
    ],
  };

  useEffect(()=>{
    setExperiences(experienceByLanguage[currentLanguage])

  },[currentLanguage])

  return{ experiences }
};
