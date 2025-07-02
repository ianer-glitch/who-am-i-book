import { PostIt } from "@/shared/components/atoms/postIt/PostIt";
import { useExperience } from "./useExperience";

export const ExperiencesPostIt = () => {
  const {experiences} = useExperience()
	

  return (
    <PostIt color="green" className="flex flex-wrap items-center justify-start gap-4">
      {experiences.map((m, key) => (
        <PostIt color="pink" key={key}>
          <ul>
						{m.experiences.map((mItem,keyItem)=>(
							<li key={keyItem}>
								<h3>{mItem}</h3>
							</li>
						))}
					</ul>
        </PostIt>
      ))}
    </PostIt>
  );
};
