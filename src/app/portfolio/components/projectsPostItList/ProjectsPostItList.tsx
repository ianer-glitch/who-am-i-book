'use client'
import { PostIt } from "@/shared/components/atoms/postIt/PostIt";
import { IProjectPostIt, ProjectPostIt } from "../projectPostIt/ProjectPostIt";
import { useProjects } from "./useProjects";
import { useEffect, useState } from "react";
import styles from "./projects-post-it-list.module.css"


export const ProjectsPostItList = () => {

  const {projects} = useProjects()
  const [index,setIndex] = useState(0)
  const [autoProjectChange , setAutoProjectChange] = useState(true) 

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
    setAutoProjectChange(false)
  }

  const projectsToShow : IProjectPostIt[] = projects.map((m,index)=> {
    const pro : IProjectPostIt = {
      color : handleProjectColor(index),
      ...m,
      
    }
    return pro
  })

  useEffect(()=>{
    if(autoProjectChange){
      setTimeout(()=>{
        if(index < projectsToShow.length -1){
          setIndex(index+1)
        }else{
          setIndex(0)
        }
      },3000)
    }
  })


  return (
    <div className="flex items-start justify-center w-full">
      
      <ProjectPostIt onClick={()=>setAutoProjectChange(false)}
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
