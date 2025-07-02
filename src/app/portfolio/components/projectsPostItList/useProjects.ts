import { useTranslation } from "@/shared/locales";
import { useEffect, useState } from "react";
import { resources } from "@/shared/locales/languages";
import { IProject } from "../../domain/IProject";

export const useProjects = () => {
  const { currentLanguage } = useTranslation();

  const [projects, setProjects] = useState([] as IProject[]);

  const projectsByLanguage: Record<keyof typeof resources, IProject[]> = {
    ptBr: [
      {
        title: "My Geladeira",
        description: "Uma inciativa sustententávle que ajuda pessoas a gerenciarem a comida da geladeira com inteligência artifical. Foi realizado como TCC do meu MBA em Engenharia de Software",
        desingLink: "a",
        publishedLink: "a",
        repoBackEndLink: "a",
        repoFrontEndLink: "a",
        tecnologies:["Angular",".Net","Docker","Mobile First","Atomic Desing","Hexagonal","Microsserviços","Comand Pattern"],
        imageSrc:"/images/my-geladeira-remix-logo.svg"
      },
      {
        description: "a",
        title: "b",
        desingLink: ".",
        publishedLink: ".",
        repoBackEndLink: ".",
        repoFrontEndLink: ".",
        tecnologies:[""]
      },
    ],
    enUs: [
      {
        description: "english",
        title: "b",
        desingLink: ".",
        publishedLink: ".",
        repoBackEndLink: ".",
        repoFrontEndLink: ".",
        tecnologies:[]
      },
      {
        description: "a",
        title: "b",
        desingLink: ".",
        publishedLink: ".",
        repoBackEndLink: ".",
        repoFrontEndLink: ".",
        tecnologies:[]
      },
    ],
  };

  useEffect(() => {
    setProjects(projectsByLanguage[currentLanguage]);
  }, [currentLanguage]);

  return { projects };
};
