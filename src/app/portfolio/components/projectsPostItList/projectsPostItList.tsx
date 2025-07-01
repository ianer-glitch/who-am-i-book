import { IProjectPostIt, ProjectPostIt } from "../projectPostIt/projectPostIt";

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
  ];

  return (
    <ul>
      {projects.map((m, index) => (
        <li key={index}>
          <ProjectPostIt 
            title={m.title} 
            description={m.description}
            color={m.color} 
        />
        </li>
      ))}
    </ul>
  );
};
