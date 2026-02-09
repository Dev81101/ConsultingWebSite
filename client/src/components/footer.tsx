import { Link } from "wouter";
import { useCountry } from "@/lib/country-context";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    const { country } = useCountry();
    const { language } = useLanguage();
    const t = useTranslations()[language];

    // Path to the background image
    const backgroundImage = "/images/zgrada.png";

    return (
        <footer
            className="relative text-white py-16 bg-cover bg-center" // Removed bg-gray-200, added relative, text-white, bg-cover, bg-center
            style={{ backgroundImage: `url(${backgroundImage})` }} // Set background image via style prop
            data-testid="footer"
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            {/* Content wrapper to place text over the background and overlay */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-4">
                            {/* Assuming LogoWhite.png is a white/light version for the dark background */}
                            <img src="/images/LogoWhite.png" className="h-28" alt="Logo" />
                        </div>
                        {/* Changed text-foreground to text-gray-300 for better contrast against the dark overlay */}
                        <p className="text-gray-300 mb-6 max-w-md">
                            {t.footer.tagline}
                        </p>
                        <div className="flex space-x-4">
                            {/*<a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-red-600 transition-colors" // Changed text-foreground to text-white
                            >
                                <Facebook className="w-6 h-6" />
                            </a>

                            <a
                                href="https://www.facebook.com"
                                className="text-white hover:text-red-600 transition-colors" // Changed text-foreground to text-white
                            >
                                <Twitter className="w-6 h-6" />
                            </a>*/}

                            <a
                                href="https://www.linkedin.com/company/wvp-plus-konsalting/?originalSubdomain=mk"
                                className="text-white hover:text-red-600 transition-colors" // Changed text-foreground to text-white
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>

                            {/*<a
                                href="www.instagram.com"
                                className="text-white hover:text-red-600 transition-colors" // Changed text-foreground to text-white
                            >
                                <Instagram className="w-6 h-6" />
                            </a>*/}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-4">{t.footer.servicesTitle}</h2>
                        {/* Changed text-foreground to text-gray-300 for the list items */}
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href={`/${country}/programs#financial-consulting`} className="hover:text-white transition-colors" data-testid="footer-ipard">
                                    {t.footer.ipard}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${country}/programs#access-to-finance`} className="hover:text-white transition-colors" data-testid="footer-financial-aid">
                                    {t.footer.financialAid}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${country}/programs#business-consulting`} className="hover:text-white transition-colors" data-testid="footer-consulting">
                                    {t.footer.consulting}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${country}/programs#marketing`} className="hover:text-white transition-colors" data-testid="footer-business-plans">
                                    {t.footer.businessPlans}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${country}/programs#market-access`} className="hover:text-white transition-colors" data-testid="footer-market-access">
                                    {t.footer.marketAccess}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${country}/programs#grants`} className="hover:text-white transition-colors" data-testid="footer-grants">
                                    {t.footer.GrantsAndFinancing}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-4">{t.footer.companyTitle}</h2>
                        {/* Changed text-foreground to text-gray-300 for the list items */}
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href={`/${country}/about`} className="hover:text-white transition-colors" data-testid="footer-about">
                                    {t.footer.aboutUs}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${country}/about#team`} className="hover:text-white transition-colors" data-testid="footer-team">
                                    {t.footer.ourTeam}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${country}/about#careers`} className="hover:text-white transition-colors" data-testid="footer-careers">
                                    {t.footer.careers}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${country}/contact`} className="hover:text-white transition-colors" data-testid="footer-contact">
                                    {t.footer.contactUs}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Changed border-gray-700 to border-gray-600 for better visibility on dark background */}
                <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    {/* text-gray-300 is kept */}
                    <p className="text-gray-300" data-testid="footer-copyright">
                        {t.footer.copyright}
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {/* text-gray-300 is kept */}
                        <Link href={`/${country}/privacy`} className="text-gray-300 hover:text-white transition-colors" data-testid="footer-privacy">
                            {t.footer.privacy}
                        </Link>
                        {/* text-gray-300 is kept */}
                        <Link href={`/${country}/terms`} className="text-gray-300 hover:text-white transition-colors" data-testid="footer-terms">
                            {t.footer.terms}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}