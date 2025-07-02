import { IconLinkButton } from "@/shared/components/atoms/iconLinkButton/IconLinkButton"
import { PostIt } from "@/shared/components/atoms/postIt/PostIt"

export interface IProjectPostIt {
    title : string,
    description : string,
    repoFrontEndLink ?: string,
    repoBackEndLink?: string,
    publishedLink ?: string
    desingLink?:string,
    color : "yellow" | "red" | "blue" | "green" | "pink",
    
}

export const ProjectPostIt = (props : IProjectPostIt) =>{
    return(
        <PostIt className="w-full h-fit flex items-start flex-col justify-start gap-8" color={props.color}>
            <h1 style={{fontFamily:"var(--font-nunito)"}} >Meus Projetos</h1>
            <section className="w-full flex items-start flex-col justify-start gap-4 ">
                <h2 style={{fontFamily:"var(--font-nunito)"}} >{props.title}</h2>
                <p className="bold" style={{fontFamily:"var(--font-love-you)"}}>{props.description}</p>
                <ul className=" flex flex-wrap items-start justify-start  gap-4 w-full ">
                    {props.repoFrontEndLink && 
                    <li>
                        <IconLinkButton 
                            link={props.repoFrontEndLink ?? ""} 
                            icon="pi pi-github" 
                            className="bg-white"
                            iconColor="!text-black"
                            text="Front end"
                        />
                    </li>}
                    {props.repoBackEndLink && 
                    <li>
                        <IconLinkButton 
                            link={props.repoBackEndLink ?? ""} 
                            icon="pi pi-github" 
                            iconColor="!text-black"
                            className="bg-white"
                            text="Back end"
                        />
                    </li>}
                    {props.desingLink && 
                    <li>
                        <IconLinkButton 
                            link={props.desingLink ?? ""} 
                            icon="pi pi-palette" 
                            iconColor="!text-black"
                            className="bg-white"
                            text="Design"
                        />
                    </li>}
                    {props.publishedLink && 
                    <li>
                        <IconLinkButton 
                            link={props.publishedLink ?? ""} 
                            icon="pi pi-globe" 
                            iconColor="!text-black"
                            className="bg-white"
                            text="Publicado"
                        />
                    </li>}
                </ul>
            </section>
        </PostIt>
    )
}