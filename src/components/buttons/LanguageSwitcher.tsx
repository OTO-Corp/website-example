import flagEn from "@/assets/flag-en.svg";
import flagFr from "@/assets/flag-fr.svg";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const languages = [
    {
        code: "fr",
        name: "Français",
        flag: flagFr,
    },
    {
        code: "en",
        name: "English",
        flag: flagEn,
    },
];

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 p-0">
                    <img
                        src={currentLanguage.flag}
                        alt={currentLanguage.name}
                        className="w-6 h-6 object-cover rounded-sm"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={cn("flex items-center gap-2", i18n.language === lang.code && "bg-accent")}>
                        <img src={lang.flag} alt={lang.name} className="w-6 h-6 object-cover rounded-sm" />
                        <span>{lang.name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
