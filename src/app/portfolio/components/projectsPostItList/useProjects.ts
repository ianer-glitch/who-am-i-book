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
      },
      {
        description: "a",
        title: "b",
        desingLink: ".",
        publishedLink: ".",
        repoBackEndLink: ".",
        repoFrontEndLink: ".",
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
      },
      {
        description: "a",
        title: "b",
        desingLink: ".",
        publishedLink: ".",
        repoBackEndLink: ".",
        repoFrontEndLink: ".",
      },
    ],
  };

  useEffect(() => {
    setProjects(projectsByLanguage[currentLanguage]);
  }, [currentLanguage]);

  return { projects };
};
