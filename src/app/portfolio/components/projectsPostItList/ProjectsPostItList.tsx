'use client'
import { PostIt } from "@/shared/components/atoms/postIt/PostIt";
import { IProjectPostIt, ProjectPostIt } from "../projectPostIt/ProjectPostIt";
import { useProjects } from "./useProjects";
import { useState } from "react";


export const ProjectsPostItList = () => {

  const {projects} = useProjects()
  const [index,setIndex] = useState(0)

  type ProjectColor = IProjectPostIt["color"]

  const handleProjectColor = (projectIndex : number) : ProjectColor => {
    if(projectIndex %2 === 0)
      return "blue"

    if(projectIndex %3 === 0)
      return "pink"
    
    return "yellow"
  }

  const handleProjectChange = (projectIndex : number) => {
    setIndex(projectIndex)
  }

  const projectsToShow : IProjectPostIt[] = projects.map((m,index)=> {
    const pro : IProjectPostIt = {
      color : handleProjectColor(index),
      ...m,
      
    }
    return pro
  })

  return (
    <div className="flex items-start justify-center w-full">
      
      <ProjectPostIt 
        {...projectsToShow[index]}
      />
      <ul>
        {projectsToShow.map((m, index) => (
          <li onClick={() => handleProjectChange(index)} key={index}>
            <PostIt color={m.color} />
          </li>
        ))}
      </ul>
    </div>
  );
};
