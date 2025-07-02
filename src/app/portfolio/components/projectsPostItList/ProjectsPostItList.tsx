'use client'
import { PostIt } from "@/shared/components/atoms/postIt/PostIt";
import { IProjectPostIt, ProjectPostIt } from "../projectPostIt/ProjectPostIt";
import { useProjectList } from "./useProjectList";

export const ProjectsPostItList = () => {

  const {projects,currentProject,setCurrentProject} = useProjectList()
  
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
