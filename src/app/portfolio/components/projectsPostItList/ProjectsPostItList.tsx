import { PostIt } from "@/shared/components/atoms/postIt/PostIt";
import { IProjectPostIt, ProjectPostIt } from "../projectPostIt/ProjectPostIt";
import { useState } from "react";

export const ProjectsPostItList = () => {
  const projects: IProjectPostIt[] = [
    {
      description: "a",
      title: "b",
      desingLink: ".",
      publishedLink: ".",
      repoBackEndLink: ".",
      repoFrontEndLink: ".",
      color:"blue"
    },
     {
      description: "a",
      title: "b",
      desingLink: ".",
      publishedLink: ".",
      repoBackEndLink: ".",
      repoFrontEndLink: ".",
      color:"pink"
    },
  ];

  const [currentProject,setCurrentProject] = useState(projects[0])

  const handleProjectChange = (pro : IProjectPostIt) => {
    setCurrentProject(pro)
  }

  return (
    <div className="flex items-start justify-center w-full">
      
      <ProjectPostIt 
        className="w-full h-72"
        title={currentProject.title} 
        description={currentProject.description}
        color={currentProject.color} 
    />
      <ul>
        {projects.map((m, index) => (
          <li onClick={() => handleProjectChange(m)} key={index}>
            <PostIt color={m.color} />
          </li>
        ))}
      </ul>
    </div>
  );
};
