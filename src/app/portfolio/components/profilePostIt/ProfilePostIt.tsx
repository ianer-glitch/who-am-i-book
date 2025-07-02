import { LinkedInButton } from "@/shared/components/molecules/linkedInButton/LinkedInButton"
import { PostIt } from "@/shared/components/atoms/postIt/PostIt"
import { useTranslation } from "@/shared/locales"
import { GitHubButton } from "@/shared/components/molecules/gitHubButton/gitHubButton"


export const ProfilePostIt = () => {
    const {t} = useTranslation()
return (
    <PostIt className="w-full" color="yellow">
        <h1 style={{fontFamily:"var(--font-londrina-shadow)"}}>{t("profilePostItTitle")}</h1>
        <LinkedInButton/>
        <GitHubButton/>
    </PostIt>
)    
}