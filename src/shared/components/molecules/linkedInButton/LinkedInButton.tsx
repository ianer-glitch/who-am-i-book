import { IconLinkButton } from "../../atoms/iconLinkButton/IconLinkButton"

export const LinkedInButton = () => {
    return(
        <IconLinkButton 
            icon="pi pi-linkedin"
            iconColor="text-white"
            className="bg-blue-500"
            link="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
        />
        
    )
}