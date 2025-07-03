import { LinkedInButton } from "@/shared/components/molecules/linkedInButton/LinkedInButton"
import { PostIt } from "@/shared/components/atoms/postIt/PostIt"
import { useTranslation } from "@/shared/locales"
import { GitHubButton } from "@/shared/components/molecules/gitHubButton/gitHubButton"
import Image from "next/image";
import styles from "./profile-post-it.module.css"

export const ProfilePostIt = () => {
    const {t} = useTranslation()
return (
    <PostIt className="w-full flex items-center gap-2 justify-start h-full" color="yellow">
        <Image src="/images/profile-image.jpeg" className="rounded-xl" alt="profile" width={120} height={120}></Image>
        <div className={styles["text-container"]}>
            <h1 className={styles["title"]}>{t("profilePostItTitle")}</h1>
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