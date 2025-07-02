import { LinkedInButton } from "@/shared/components/molecules/linkedInButton/LinkedInButton"
import { PostIt } from "@/shared/components/atoms/postIt/PostIt"
import { useTranslation } from "@/shared/locales"
import { GitHubButton } from "@/shared/components/molecules/gitHubButton/gitHubButton"
import Image from "next/image";

export const ProfilePostIt = () => {
    const {t} = useTranslation()
return (
    <PostIt className="w-full flex items-start gap-4 justify-start h-full" color="yellow">
        <Image src="/images/profile-image.jpeg" className="rounded-xl" alt="profile" width={120} height={120}></Image>
        <div className="flex items-start justify-between  h-full flex-col">
        <h1 className="text-4xl" style={{fontFamily:"var(--font-londrina-shadow)"}}>{t("profilePostItTitle")}</h1>
        <ul className="flex items-center justify-center gap-2">
            <li>
                <LinkedInButton/>
            </li>
            <li>
                <GitHubButton/>
            </li>
        </ul>

        </div>
    </PostIt>
)    
}