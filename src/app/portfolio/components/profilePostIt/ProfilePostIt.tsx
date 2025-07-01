import { PostIt } from "@/shared/components/atoms/postIt/PostIt"
import { useTranslation } from "@/shared/locales"


export const ProfilePostIt = () => {
    const {t} = useTranslation()
return (
    <PostIt className="w-full" color="yellow">
        <h1>{t("profilePostItTitle")}</h1>
    </PostIt>
)    
}