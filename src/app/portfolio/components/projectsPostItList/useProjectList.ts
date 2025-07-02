import { useTranslation } from "@/shared/locales";
import { IProjectPostIt } from "../projectPostIt/ProjectPostIt";
import { useEffect, useState } from "react";
import { resources } from "@/shared/locales/languages";

export const useProjectList = () => {
  const { currentLanguage } = useTranslation();

  const [projects, setProjects] = useState([] as IProjectPostIt[]);

  const [currentProject, setCurrentProject] = useState({
    description: "",
    title: "",
    desingLink: "",
    publishedLink: "",
    repoBackEndLink: "",
    repoFrontEndLink: "",
    color: "yellow",
  } as IProjectPostIt);

  const projectsByLanguage: Record<keyof typeof resources, IProjectPostIt[]> = {
    ptBr: [
      {
        description: "a",
        title: "b",
        desingLink: ".",
        publishedLink: ".",
        repoBackEndLink: ".",
        repoFrontEndLink: ".",
        color: "blue",
      },
      {
        description: "a",
        title: "b",
        desingLink: ".",
        publishedLink: ".",
        repoBackEndLink: ".",
        repoFrontEndLink: ".",
        color: "pink",
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
        color: "blue",
      },
      {
        description: "a",
        title: "b",
        desingLink: ".",
        publishedLink: ".",
        repoBackEndLink: ".",
        repoFrontEndLink: ".",
        color: "pink",
      },
    ],
  };

  useEffect(() => {
    setProjects(projectsByLanguage[currentLanguage]);
    setCurrentProject(projectsByLanguage[currentLanguage][0]);
  }, [currentLanguage]);

  return { projects, currentProject, setCurrentProject };
};
