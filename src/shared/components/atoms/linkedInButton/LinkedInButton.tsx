export const LinkedInButton = () => {
    const openLinkNewTab = () =>{
        window.open("https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile")
    }
    return(
        <button onClick={openLinkNewTab} className="bg-blue-500 flex items-center justify-center p-4 rounded-[2px]">
            <i className="pi pi-linkedin text-2xl text-white "></i>
        </button>
    )
}