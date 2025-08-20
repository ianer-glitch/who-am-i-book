import { useEffect, useState } from "react";
import { IExperience } from "../../domain/IExperience";
import { resources } from "@/shared/locales/languages";
import { useTranslation } from "@/shared/locales";

export const useExperience = () => {
  const [experiences, setExperiences] = useState([] as IExperience[]);
  const { currentLanguage } = useTranslation();

  const experienceByLanguage: Record<keyof typeof resources, IExperience[]> = {
    ptBr: [
      {
        title: "Back-end",
        experiences: [
          ".NET (2.2, 3.1, 5, 6, 8, 9)",
          "SOLID",
          "C#",
          "RabbitMQ",
          "LINQ",
          "Dapper",
          "Entity Framework",
          "SQL",
          "Google Protobuf",
          "XUnit",
          "Docker",
          "Kubernetes",
        ],
      },
      {
        title: "Front-end",
        experiences: [
          "HTML5 (semântico)",
          "CSS",
          "Tailwind CSS",
          "TypeScript",
          "Vue.js",
          "React.js",
          "Angular",
          "Atomic Desing",
          "Mobile First"
        ],
      },
      {
        title: "Cloud & CI/CD",
        experiences: ["GitHub", "GitLab", "Azure", "Azure DevOps"],
      },
      {
        title: "Arquiteturas",
        experiences: [
          "Model-View-Controller (MVC)",
          "Model-View-ViewModel (MVVM)",
          "Arquitetura Hexagonal",
          "Arquitetura Limpa",
          "CQRS",
          "Microsserviços",
          "Arquitetura Baseada em Feature (FBA)"
        ],
      },
      {
        title: "Design Patterns",
        experiences: [
          "Facade",
          "Adapter",
          "Repository",
          "Unit of Work",
          "Command Pattern",
          "Retry Policy",
          "Aggregator",
        ],
      },
      {
        title: "Atualmente Estudando",
        experiences: ["React.js", "Next.js"],
      },
    ],

    enUs: [
      {
        title: "Back-end",
        experiences: [
          ".NET (2.2, 3.1, 5, 6, 8, 9)",
          "SOLID",
          "C#",
          "RabbitMQ",
          "LINQ",
          "Dapper",
          "Entity Framework",
          "SQL",
          "Google Protobuf",
          "XUnit",
          "Docker",
          "Kubernetes",
        ],
      },
      {
        title: "Front-end",
        experiences: [
          "HTML5 (semantic)",
          "CSS",
          "Tailwind CSS",
          "TypeScript",
          "Vue.js",
          "React.js",
          "Angular",
        ],
      },
      {
        title: "Cloud & CI/CD",
        experiences: ["GitHub", "GitLab", "Azure", "Azure DevOps"],
      },
      {
        title: "Architectures",
        experiences: [
          "Model-View-Controller (MVC)",
          "Model-View-ViewModel (MVVM)",
          "Hexagonal Architecture",
          "Clean Architecture",
          "CQRS",
          "Microservices",
        ],
      },
      {
        title: "Design Patterns",
        experiences: [
          "Facade",
          "Adapter",
          "Repository",
          "Unit of Work",
          "Command Pattern",
          "Retry Policy",
          "Aggregator",
        ],
      },
      {
        title: "Currently Learning",
        experiences: ["React.js", "Next.js"],
      },
    ],
  };

  useEffect(() => {
    setExperiences(experienceByLanguage[currentLanguage]);
  }, [currentLanguage]);

  return { experiences };
};
