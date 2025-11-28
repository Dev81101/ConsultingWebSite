import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/language-context";
import { useCountry } from "@/lib/country-context";
import { COUNTRY_LANGUAGES, LANGUAGE_NAMES, type Language } from "@shared/schema";

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguage();
    const { country } = useCountry();

    // Original available languages based on country
    const allAvailableLanguages = COUNTRY_LANGUAGES[country];

    // 1. Filter the available languages to only include 'en' and 'mk'
    const allowedLanguages: Language[] = ['en', 'mk'];
    const filteredLanguages = allAvailableLanguages.filter((lang) =>
        allowedLanguages.includes(lang as Language)
    );

    // Don't show selector if 0 or 1 allowed language is available
    if (filteredLanguages.length <= 1) {
        return null;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2"
                    data-testid="button-language-selector"
                >
                    <Globe className="h-4 w-4" />
                    {/* 2. Show only the two-letter uppercase code for the current language */}
                    <span className="hidden sm:inline">{language.toUpperCase()}</span>
                    <span className="sm:hidden">{language.toUpperCase()}</span>
                </Button>
            </DropdownMenuTrigger>
            {/* Apply black background and light text to the Content container */}
            <DropdownMenuContent
                align="end"
                className="bg-foreground text-white border-gray-700"
            >
                {filteredLanguages.map((lang) => (
                    <DropdownMenuItem
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`
              text-white 
              focus:bg-gray-800 
              focus:text-white 
              ${language === lang ? "bg-primary text-primary-foreground focus:bg-primary/90" : ""}
            `}
                        data-testid={`option-language-${lang}`}
                    >
                        {/* Display only the two-letter uppercase code in the dropdown items */}
                        {lang.toUpperCase()}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}