import { LanguageButtons } from "@/shared/components/molecules/languageButtons/LanguageButtons"
import { ThemeButtons } from "@/shared/components/molecules/themeButtons/ThemeButtons"

export const Header = () => {
    return (
        <header className="w-full h-fit p-4">
            <div className="w-full h-fit flex gap-4  flex-col items-end justify-center">
                <LanguageButtons/>
                <ThemeButtons/>
            </div>
        </header>
    )
}