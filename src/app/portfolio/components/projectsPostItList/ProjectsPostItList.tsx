'use client'
import { PostIt } from "@/shared/components/atoms/postIt/PostIt";
import { IProjectPostIt, ProjectPostIt } from "../projectPostIt/ProjectPostIt";
import { useProjects } from "./useProjects";
import { useState } from "react";
import styles from "./projects-post-it-list.module.css"


export const ProjectsPostItList = () => {

  const {projects} = useProjects()
  const [index,setIndex] = useState(0)

  type ProjectColor = IProjectPostIt["color"]

  const handleProjectColor = (projectIndex : number) : ProjectColor => {
    if(projectIndex === 0 || projectIndex %4 === 0)
      return "blue"

    if(projectIndex %2 === 0)
      return "green"
    
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
        {projectsToShow.map((m, pIndex) => (
          <li className={`${styles["sm-project-item"]}  ${pIndex === index &&  styles["sm-project-item-active"]}`} onClick={() => handleProjectChange(pIndex)} key={pIndex}>
            <PostIt color={m.color} />
          </li>
        ))}
      </ul>
    </div>
  );
};
