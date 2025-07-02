import { useTranslation } from "@/shared/locales"
import { IProjectPostIt } from "../projectPostIt/ProjectPostIt"
import { useEffect, useState } from "react"


export const useProjectList= () =>{
    const {currentLanguage} = useTranslation()

    const [projects, setProjects] = useState([] as IProjectPostIt[])

    const [currentProject , setCurrentProject] = useState({
      description: "",
      title: "",
      desingLink: "",
      publishedLink: "",
      repoBackEndLink: "",
      repoFrontEndLink: "",
      color:"yellow"
    } as IProjectPostIt)

    const portugueseProjects: IProjectPostIt[] = [
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

  const englishProjects: IProjectPostIt[] = [
    {
      description: "english",
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

    useEffect(()=>{
        if(currentLanguage == "ptBr"){
            setProjects(portugueseProjects)
            setCurrentProject(portugueseProjects[0])
        }else{
            setProjects(englishProjects)
            setCurrentProject(englishProjects[0])
        }
    },[currentLanguage])


  return {projects,currentProject,setCurrentProject}
    
}