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
        <PostIt color={props.color}>
            <section>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </section>
        </PostIt>
    )
}