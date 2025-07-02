import { PostIt } from "@/shared/components/atoms/postIt/PostIt";
import { useExperience } from "./useExperience";
import { useTranslation } from "@/shared/locales";



export const ExperiencesPostIt = () => {
  const {experiences} = useExperience()
  const {t} = useTranslation()
	

  return (
    <PostIt color="green" className="flex gap-8 w-full flex-wrap items-start justify-center gap-4">
      <h1 className="text-start w-full" style={{fontFamily:"var(--font-nunito)"}}>{t('experiencePostItTitle')}</h1>
      {experiences.map((m, key) => (
        <PostIt className="flex  items-start justify-start flex-col gap-4 !p-8 w-72" color="pink" key={key}>
          <h2 className=" !text-3xl text-center w-full"  style={{fontFamily:"var(--font-nunito)"}}>{m.title}</h2>
          <ul className="list-disc">
						{m.experiences.map((mItem,keyItem)=>(
							<li key={keyItem}>
								<h3 className="!text-2xl"  style={{fontFamily:"var(--font-love-you)"}} >{mItem}</h3>
							</li>
						))}
					</ul>
        </PostIt>
      ))}
    </PostIt>
  );
};
