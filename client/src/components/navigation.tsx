import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCountry } from "@/lib/country-context";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";
import NewsletterSubscription from "./newsletter-subscription";
import LanguageSelector from "./language-selector";

// --- START: Service Data for Navigation ---
type NavService = {
    id: string;
    title: string;
};

function getNavServices(t: ReturnType<typeof useTranslations>[keyof ReturnType<typeof useTranslations>]): NavService[] {
    const p = t.programs.services;
    return [
        { id: "financial-consulting", title: p.financialConsulting.title },
        { id: "access-to-finance", title: p.accessToFinance.title },
        { id: "grants", title: p.grants.title },
        { id: "business-consulting", title: p.businessConsulting.title },
        { id: "marketing", title: p.marketing.title },
        { id: "market-access", title: p.marketAccess.title },
        { id: "esg", title: p.esg.title },
    ];
}
// --- END: Service Data for Navigation ---

export default function Navigation() {
    const { country } = useCountry();
    const { language } = useLanguage();
    const t = useTranslations()[language];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProgramsOpen, setIsProgramsOpen] = useState(false);
    const [isBlogOpen, setIsBlogOpen] = useState(false);
    const [location] = useLocation();

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => {
        const countryPath = `/${country}${path === "/" ? "" : path}`;
        return (
            location === countryPath ||
            (path === "/" && location === `/${country}`)
        );
    };

    return (
        <nav
            className={cn(
                "fixed w-full top-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-gray-50 shadow-md text-foreground "
                    : "bg-transparent backdrop-blur-sm text-white"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* LOGO */}
                    <Link
                        href={`/${country}`}
                        className="flex items-center"
                        data-testid="logo-link"
                    >
                        <div className="w-28 font-bold">
                            <img
                                src="/images/logo.png"
                                className="w-24"
                                alt="Logo"
                            />
                        </div>
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href={`/${country}`}
                            className={cn(
                                scrolled ? "text-foreground" : "text-gray-400",
                                "hover:text-primary",
                                isActive("/") && "text-red-600 font-bold"
                            )}
                        >
                            {t.nav.home.toUpperCase()}
                        </Link>

                        {/* PROGRAMS DROPDOWN */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsProgramsOpen(true)}
                            onMouseLeave={() => setIsProgramsOpen(false)}
                        >
                            <Link
                                href={`/${country}/programs`}
                                className="block px-3 py-2 text-md font-semibold text-foreground hover:text-primary hover:bg-muted rounded-md"
                            >
                            <button
                                className={cn(
                                    scrolled ? "text-foreground" : "text-gray-400",
                                    "flex items-center hover:text-primary",
                                    isActive("/services") && "text-primary"
                                )}
                            >
                                {t.nav.programs.toUpperCase()}{" "}
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            </Link>

                            <div
                                className={cn(
                                    "absolute top-full left-0 w-80 bg-card border border-border rounded-lg shadow-xl mt-2 transition-all duration-300",
                                    isProgramsOpen
                                        ? "opacity-100 visible"
                                        : "opacity-0 invisible -translate-y-2"
                                )}
                            >
                                <div className="p-4 bg-gray-100">
                                    {/*<Link
                                        href={`/${country}/programs`}
                                        className="block px-3 py-2 text-md font-semibold text-foreground hover:text-primary hover:bg-muted rounded-md"
                                    >
                                        {t.programs.viewAllServices.toUpperCase()}
                                    </Link>*/}



                                    {getNavServices(t).map((service) => (
                                        <Link
                                            key={service.id}
                                            href={`/${country}/programs#${service.id}`}
                                            className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-muted rounded-md"
                                        >
                                            {service.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ABOUT */}
                        <Link
                            href={`/${country}/about`}
                            className={cn(
                                scrolled ? "text-foreground" : "text-gray-400",
                                "hover:text-primary",
                                isActive("/about") && "text-primary"
                            )}
                        >
                            {t.nav.about.toUpperCase()}
                        </Link>

                        {/* CONTACT */}
                        <Link
                            href={`/${country}/contact`}
                            className={cn(
                                scrolled ? "text-foreground" : "text-gray-400",
                                "hover:text-primary",
                                isActive("/contact") && "text-primary",
                                "pr-8 border-r border-white"
                            )}
                        >
                            {t.nav.contact.toUpperCase()}
                        </Link>

                        {/* BLOG */}
                        <Link
                            href={`/${country}/blog`}
                            className={cn(
                                scrolled ? "text-foreground" : "text-gray-400",
                                "hover:text-primary",
                                isActive("/blog") && "text-primary"
                            )}
                        >
                            {t.nav.blog.toUpperCase()}
                        </Link>

                        <LanguageSelector />
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </Button>
                    </div>
                </div>

                {/* ------------------------------ */}
                {/*           MOBILE MENU          */}
                {/* ------------------------------ */}

                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-border bg-foreground">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {/* HOME */}
                            <Link
                                href={`/${country}`}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    window.scrollTo(0, 0);
                                }}
                                className="block px-3 py-2 text-white hover:text-primary hover:bg-muted rounded-md"
                            >
                                {t.nav.home}
                            </Link>

                            {/* PROGRAMS DROPDOWN */}
                            <button
                                onClick={() =>
                                    setIsProgramsOpen(!isProgramsOpen)
                                }
                                className="w-full px-3 py-2 flex justify-between items-center text-white hover:text-primary hover:bg-muted rounded-md"
                            >
                                {t.nav.programs}
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform ${
                                        isProgramsOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {isProgramsOpen && (
                                <div className="ml-4 mt-1 space-y-1 border-l border-muted pl-3">
                                    {/* VIEW ALL */}
                                    <Link
                                        href={`/${country}/programs`}
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            window.scrollTo(0, 0);
                                        }}
                                        className="block px-3 py-2 text-white/80 hover:text-primary hover:bg-muted rounded-md"
                                    >
                                        View All Services
                                    </Link>

                                    {/* SERVICES LIST */}
                                    {NAV_SERVICES.map((service) => (
                                        <Link
                                            key={service.id}
                                            href={`/${country}/programs#${service.id}`}
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                window.scrollTo(0, 0);
                                            }}
                                            className="block px-3 py-2 text-white/70 hover:text-primary hover:bg-muted rounded-md"
                                        >
                                            {service.title}
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {/* BLOG */}
                            <Link
                                href={`/${country}/blog`}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    window.scrollTo(0, 0);
                                }}
                                className="block px-3 py-2 text-white hover:text-primary hover:bg-muted rounded-md"
                            >
                                {t.nav.blog}
                            </Link>

                            {/* ABOUT */}
                            <Link
                                href={`/${country}/about`}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    window.scrollTo(0, 0);
                                }}
                                className="block px-3 py-2 text-white hover:text-primary hover:bg-muted rounded-md"
                            >
                                {t.nav.about}
                            </Link>

                            {/* CONTACT */}
                            <Link
                                href={`/${country}/contact`}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    window.scrollTo(0, 0);
                                }}
                                className="block px-3 py-2 text-white hover:text-primary hover:bg-muted rounded-md"
                            >
                                {t.nav.contact}
                            </Link>

                            {/* LANGUAGE SELECTOR */}
                            <div className="px-3 py-2">
                                <LanguageSelector />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
