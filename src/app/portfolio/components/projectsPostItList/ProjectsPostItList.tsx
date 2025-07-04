"use client";
import { PostIt } from "@/shared/components/atoms/postIt/PostIt";
import { IProjectPostIt, ProjectPostIt } from "../projectPostIt/ProjectPostIt";
import { useProjects } from "./useProjects";
import { useEffect, useRef, useState } from "react";
import styles from "./projects-post-it-list.module.css";
import { AnimatePresence, motion } from "framer-motion";

export const ProjectsPostItList = () => {
  const { projects } = useProjects();
  const [index, setIndex] = useState(0);
  const [autoProjectChange, setAutoProjectChange] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  type ProjectColor = IProjectPostIt["color"];

  const handleProjectColor = (projectIndex: number): ProjectColor => {
    if (projectIndex === 0 || projectIndex % 4 === 0) return "blue";

    if (projectIndex % 2 === 0) return "green";

    if (projectIndex % 3 === 0) return "pink";

    return "yellow";
  };

  const handleProjectChange = (projectIndex: number) => {
    setIndex(projectIndex);
    setAutoProjectChange(false);
  };

  const projectsToShow: IProjectPostIt[] = projects.map((m, index) => {
    const pro: IProjectPostIt = {
      color: handleProjectColor(index),
      ...m,
    };
    return pro;
  });

  useEffect(() => {
    if (autoProjectChange) {
      intervalRef.current = setInterval(() => {
        if(index < projectsToShow.length -1){
          setIndex(index + 1)
        }else{
          setIndex(0)
        }
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoProjectChange, projectsToShow.length]);

  return (
    <div onClick={() => setAutoProjectChange(false)} className="flex items-start justify-center w-full">
      
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          
        >
          <ProjectPostIt
            {...projectsToShow[index]}
          />
        </motion.div>
      </AnimatePresence>
      <ul>
        {projectsToShow.map((m, pIndex) => (
          <li
            className={`${styles["sm-project-item"]}  ${
              pIndex === index && styles["sm-project-item-active"]
            }`}
            onClick={() => handleProjectChange(pIndex)}
            key={pIndex}
          >
            <PostIt color={m.color} />
          </li>
        ))}
      </ul>
    </div>
  );
};
