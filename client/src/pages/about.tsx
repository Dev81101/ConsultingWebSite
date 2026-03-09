"use client";

import { useState, useCallback, memo, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Lightbulb, MapPin, Loader2, Wallet, Globe, FileText, CheckCircle2, Building2, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";
import { useCountry } from "@/lib/country-context";
import { Link, useLocation } from "wouter";

// Image paths from public folder
const direktorImage = "/images/direktor.png";
const aboutHeaderImage = "/images/AboutHeader.jpg";
const mapSvgUrl = "/images/MapCustom.svg";

type TranslatableValues = {
    [key: string]: string;
};

const teamMembers = [
    { name: "Martin Dimitrievski", position: "CEO & Co-Founder", description: "20+ years in finance", image: direktorImage, expertise: [""] },
    { name: "Nikola Nikoloski", position: "Chief Operating Officer", description: "8+ years in consulting", image: "", expertise: [""] },
    { name: "Ana Jovanovska", position: "Head of IPARD Programs", description: "10+ years in EU funds", image: "", expertise: [""] },
];

const companyValues = [
    { icon: Target, titleKey: "Results-Oriented", descriptionKey: "We focus on delivering measurable outcomes and tangible value to our clients" },
    { icon: Users, titleKey: "Client-Centric", descriptionKey: "Your success is our priority. We build long-term partnerships based on trust" },
    { icon: Award, titleKey: "Excellence", descriptionKey: "We maintain the highest standards of professionalism and expertise" },
    { icon: Lightbulb, titleKey: "Innovation", descriptionKey: "We leverage the latest technologies and methodologies to drive success" },
];

const offices: { name: string; shortName: string; coordinates?: [number, number]; countryCode?: string }[] = [
    { name: "Skopje, North Macedonia", shortName: "Skopje", coordinates: [21.4333, 41.9981], countryCode: "North_Macedonia" },
    { name: "Belgrade, Serbia", shortName: "Belgrade", coordinates: [20.4573, 44.8176], countryCode: "Serbia" },
    { name: "Podgorica, Montenegro", shortName: "Podgorica", coordinates: [19.2594, 42.4410], countryCode: "Montenegro" },
    { name: "Sarajevo, Bosnia & Herzegovina", shortName: "Sarajevo", coordinates: [18.4131, 43.8563], countryCode: "Bosnia_and_Herzegovina" },
    { name: "Zagreb, Croatia", shortName: "Zagreb", coordinates: [15.9819, 45.8150], countryCode: "Croatia" },
];

const countryIdToOfficeShort: Record<string, string> = {
    Serbia: "Belgrade",
    Croatia: "Zagreb",
    Bosnia_and_Herzegovina: "Sarajevo",
    Montenegro: "Podgorica",
    North_Macedonia: "Skopje",
    Kosovo: "Kosovo"
};

// Map SVG country IDs to our country codes
const countryIdToCode: Record<string, string> = {
    Serbia: "rs",
    Croatia: "hr",
    Bosnia_and_Herzegovina: "ba",
    Montenegro: "me",
    North_Macedonia: "mk"
};

// Country names for display
const countryNames: Record<string, string> = {
    Serbia: "Serbia",
    Croatia: "Croatia",
    Bosnia_and_Herzegovina: "Bosnia & Herzegovina",
    Montenegro: "Montenegro",
    North_Macedonia: "North Macedonia"
};

// Development timeline data
const developmentTimeline = [
    {
        year: "2019",
        entity: "ВФП ПЛУС КОНСАЛТИНГ ДОО",
        location: "Скопје",
        country: "Република Северна Македонија",
        type: "parent"
    },
    {
        year: "2022",
        entity: "ВФП ПЛУС КОНСАЛТИН ДОО",
        location: "Белград",
        country: "Република Србија",
        type: "subsidiary"
    },
    {
        year: "2023",
        entity: "ВФП АКАУНТИНГ ДОО",
        location: "Скопје",
        country: "Република Северна Македонија",
        type: "subsidiary"
    },
    {
        year: "2024",
        entity: "ВФП ПЛУС КОНСАЛТИН ДОО",
        location: "Брчко",
        country: "Босна и Херцеговина",
        type: "subsidiary"
    },
    {
        year: "2025",
        entity: "ВФП ПЛУС КОНСАЛТИН ДОО",
        location: "Подгорица",
        country: "Република Црна Гора",
        type: "subsidiary"
    },
    {
        year: "2025",
        entity: "ВФП ПЛУС КОНСАЛТИН ДОО",
        location: "Риека",
        country: "Република Хрватска",
        type: "subsidiary"
    }
];

// Popup component for country redirect
interface RedirectPopupProps {
    countryName: string;
    countdown: number;
    onCancel: () => void;
}

const RedirectPopup = memo(function RedirectPopup({ countryName, countdown, onCancel }: RedirectPopupProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
            onClick={onCancel}
        >
            <div 
                className="bg-background rounded-xl shadow-2xl p-6 max-w-sm mx-4 border border-border"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <ArrowRight className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                        Redirecting...
                    </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                    You are being redirected to the <strong className="text-foreground">{countryName}</strong> website.
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                        Redirecting in <strong className="text-primary">{countdown}s</strong>
                    </span>
                    <Button variant="outline" size="sm" onClick={onCancel}>
                        Cancel
                    </Button>
                </div>
                <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-primary"
                        initial={{ width: "100%" }}
                        animate={{ width: "0%" }}
                        transition={{ duration: 3, ease: "linear" }}
                    />
                </div>
            </div>
        </motion.div>
    );
});

const RegionalDevelopmentMap = memo(function RegionalDevelopmentMap() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [svgLoaded, setSvgLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [countdown, setCountdown] = useState(3);
    const [, setLocation] = useLocation();
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const countdownRef = useRef<NodeJS.Timeout | null>(null);

    // Colors for interactive display
    const countryColors: Record<string, string> = {
        "North_Macedonia": "#dc2626",
        "Serbia": "#dc2626",
        "Bosnia_and_Herzegovina": "#dc2626",
        "Montenegro": "#dc2626",
        "Croatia": "#dc2626",
        "Kosovo": "#e5e7eb"
    };

    const hoverColors: Record<string, string> = {
        "North_Macedonia": "#b91c1c",
        "Serbia": "#b91c1c",
        "Bosnia_and_Herzegovina": "#b91c1c",
        "Montenegro": "#b91c1c",
        "Croatia": "#b91c1c",
        "Kosovo": "#d1d5db"
    };

    // Handle country click
    const handleCountryClick = useCallback((countryId: string) => {
        const countryCode = countryIdToCode[countryId];
        if (!countryCode) return;

        setSelectedCountry(countryId);
        setCountdown(3);

        // Start countdown
        countdownRef.current = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    if (countdownRef.current) clearInterval(countdownRef.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        // Redirect after 3 seconds
        timerRef.current = setTimeout(() => {
            setLocation(`/${countryCode}`);
        }, 3000);
    }, [setLocation]);

    // Handle cancel
    const handleCancel = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        if (countdownRef.current) {
            clearInterval(countdownRef.current);
            countdownRef.current = null;
        }
        setSelectedCountry(null);
        setCountdown(3);
    }, []);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            if (countdownRef.current) clearInterval(countdownRef.current);
        };
    }, []);

    useEffect(() => {
        let mounted = true;
        const abortController = new AbortController();

        async function loadSvg() {
            try {
                setIsLoading(true);
                const res = await fetch(mapSvgUrl, { signal: abortController.signal });
                if (!res.ok) throw new Error("Failed to load SVG");
                const text = await res.text();
                if (!mounted) return;

                if (containerRef.current) {
                    containerRef.current.innerHTML = text;
                }

                // Apply interactive colors and event listeners
                const ids = ["Serbia", "Croatia", "Bosnia_and_Herzegovina", "Montenegro", "North_Macedonia", "Kosovo"];
                
                ids.forEach((id) => {
                    const el = containerRef.current?.querySelector(`#${id}`);
                    if (!el) return;

                    const svgEl = el as SVGPathElement;
                    const isClickable = !!countryIdToCode[id];

                    // Apply colors
                    const color = countryColors[id] || "#e5e7eb";
                    svgEl.style.fill = color;
                    svgEl.style.transition = "fill 0.2s ease";
                    
                    if (isClickable) {
                        // Make it look clickable
                        svgEl.style.cursor = "pointer";
                        
                        // Add hover effects
                        svgEl.addEventListener("mouseenter", () => {
                            svgEl.style.fill = hoverColors[id];
                        });
                        svgEl.addEventListener("mouseleave", () => {
                            svgEl.style.fill = color;
                        });
                        
                        // Add click handler
                        svgEl.addEventListener("click", () => handleCountryClick(id));
                    } else {
                        svgEl.style.cursor = "default";
                    }
                });

                setSvgLoaded(true);
                setHasError(false);
                setIsLoading(false);
            } catch (err) {
                if ((err as any).name !== "AbortError") {
                    console.error("SVG load error:", err);
                    setHasError(true);
                    setIsLoading(false);
                }
            }
        }

        loadSvg();

        return () => {
            mounted = false;
            abortController.abort();
        };
    }, [handleCountryClick]);

    if (hasError) {
        return (
            <div className="w-full h-[450px] bg-muted/30 rounded-xl flex flex-col items-center justify-center border border-border">
                <MapPin className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-center">
                    Our offices are located across the Western Balkans:<br />
                    <span className="font-medium text-foreground">Skopje • Belgrade • Podgorica • Sarajevo • Zagreb</span>
                </p>
            </div>
        );
    }

    return (
        <>
            <div className="relative w-full">
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted/20 rounded-xl z-10">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                )}
                <div
                    ref={containerRef}
                    aria-hidden={!svgLoaded}
                    className="w-full h-full overflow-auto"
                />
                {!isLoading && (
                    <p className="text-center text-sm text-muted-foreground mt-4">
                        Click on a country to visit its website
                    </p>
                )}
            </div>
            
            {selectedCountry && (
                <RedirectPopup
                    countryName={countryNames[selectedCountry] || selectedCountry}
                    countdown={countdown}
                    onCancel={handleCancel}
                />
            )}
        </>
    );
});

// Development Timeline Component
const DevelopmentTimeline = memo(function DevelopmentTimeline() {
    return (
        <div className="mt-12">
            <h4 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Историјат на развој
            </h4>
            
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 md:left-1/2 md:-ml-0.5" />
                
                <div className="space-y-8">
                    {developmentTimeline.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        
                        return (
                            <motion.div
                                key={`${item.year}-${item.location}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center gap-4 md:gap-0 ${
                                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-8 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10 md:left-1/2 md:-ml-2" />
                                
                                {/* Content card */}
                                <div className={`ml-16 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                                    isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                                }`}>
                                    <Card className={`group hover:shadow-lg transition-all duration-300 border-l-4 ${
                                        item.type === 'parent' ? 'border-l-red-600' :
                                        item.type === 'service' ? 'border-l-purple-600' :
                                        'border-l-primary'
                                    }`}>
                                        <CardContent className="p-5">
                                            <div className={`flex items-center gap-3 mb-2 ${
                                                isLeft ? 'md:justify-end' : 'md:justify-start'
                                            }`}>
                                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
                                                    <Calendar className="h-3 w-3" />
                                                    {item.year}
                                                </span>
                                                {item.type === 'parent' && (
                                                    <span className="px-2 py-0.5 rounded text-xs bg-red-100 text-red-700 font-medium">
                                                        Матична
                                                    </span>
                                                )}
                                                {item.type === 'service' && (
                                                    <span className="px-2 py-0.5 rounded text-xs bg-purple-100 text-purple-700 font-medium">
                                                        Услуги
                                                    </span>
                                                )}
                                            </div>
                                            
                                            <h5 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                                                {item.entity}
                                            </h5>
                                            
                                            <div className={`flex items-center gap-2 text-muted-foreground ${
                                                isLeft ? 'md:justify-end' : 'md:justify-start'
                                            }`}>
                                                <MapPin className="h-4 w-4" />
                                                <span>{item.location}, {item.country}</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                                
                                {/* Spacer for opposite side */}
                                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            
            {/* Legend 
            <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-600" />
                    <span>Матична компанија</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span>Подружница</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-600" />
                    <span>Сервисна компанија</span>
                </div>
            </div>*/}
        </div>
    );
});

export default function About() {
    const { language } = useLanguage();
    const { country } = useCountry();
    const t = useTranslations()[language];
    const translatedValues = t.about.values as TranslatableValues;

    return (
        <div className="min-h-screen bg-background" data-testid="about-page">

            {/* HERO */}
            <section className="relative w-full h-[25rem] md:h-[35rem] overflow-hidden border-b pt-16">
                <img
                    src={aboutHeaderImage}
                    alt="WVP PLUS CONSULTING Team"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">{t.about.heroTitle}</h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto drop-shadow">{t.about.heroSubtitle}</p>
                </div>
            </section>

            {/* COMPANY OVERVIEW */}
            <section className="py-20 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-foreground mb-6">{t.about.whoWeAreTitle}</h2>
                    <p
                        className="text-lg text-muted-foreground leading-relaxed mb-6"
                        dangerouslySetInnerHTML={{
                            __html: t.about.overviewP1.replace('WVP PLUS CONSULTING', `<strong class="text-foreground">WVP PLUS CONSULTING</strong>`).replace('WVP GROUP', `<strong class="text-foreground">WVP GROUP</strong>`)
                        }}
                    />
                    <p
                        className="text-lg text-muted-foreground leading-relaxed mb-6"
                        dangerouslySetInnerHTML={{
                            __html: t.about.overviewP2
                                .replace('3,000 clients', `<strong class="text-foreground">3,000 clients</strong>`)
                                .replace('€80M', `<strong class="text-foreground">€80M</strong>`)
                                .replace('€25M', `<strong class="text-foreground">€25M</strong>`)
                        }}
                    />

                    {/* REGIONAL DEVELOPMENT MAP */}
                    <h3 className="text-2xl font-semibold text-foreground mt-10 mb-6">{t.about.regionalDevTitle}</h3>
                    <RegionalDevelopmentMap />
                    
                    {/* DEVELOPMENT TIMELINE */}
                    <DevelopmentTimeline />
                </div>

                {/* WHAT WE OFFER */}
                <section className="mt-20 py-20 bg-gradient-to-b from-background to-muted/30">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t.about.whatWeOfferTitle}</h3>
                            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                        </motion.div>
                        
                        <div className="grid gap-8 md:grid-cols-3">
                            {/* Access to Finance Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <Card className="group h-full bg-background border-2 border-transparent hover:border-primary/30 hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
                                    <CardContent className="p-8">
                                        <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20 group-hover:from-primary group-hover:to-primary/80 transition-all duration-500">
                                            <Wallet className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-500" />
                                        </div>
                                        <h4 className="font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors">{t.about.accessFinanceTitle}</h4>
                                        <ul className="space-y-3">
                                            {t.about.accessFinanceList.map((item: string, index: number) => (
                                                <motion.li 
                                                    key={index}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                                                    className="flex items-start gap-3 text-muted-foreground"
                                                >
                                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Market Access Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Card className="group h-full bg-background border-2 border-transparent hover:border-primary/30 hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
                                    <CardContent className="p-8">
                                        <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20 group-hover:from-primary group-hover:to-primary/80 transition-all duration-500">
                                            <Globe className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-500" />
                                        </div>
                                        <h4 className="font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors">{t.about.marketAccessTitle}</h4>
                                        <ul className="space-y-3">
                                            {t.about.marketAccessList.map((item: string, index: number) => (
                                                <motion.li 
                                                    key={index}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                                    className="flex items-start gap-3 text-muted-foreground"
                                                >
                                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Special Reports Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <Card className="group h-full bg-background border-2 border-transparent hover:border-primary/30 hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
                                    <CardContent className="p-8">
                                        <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20 group-hover:from-primary group-hover:to-primary/80 transition-all duration-500">
                                            <FileText className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-500" />
                                        </div>
                                        <h4 className="font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors">{t.about.specialReportsTitle}</h4>
                                        <ul className="space-y-3">
                                            {t.about.specialReportsList.map((item: string, index: number) => (
                                                <motion.li 
                                                    key={index}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                                                    className="flex items-start gap-3 text-muted-foreground"
                                                >
                                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* MISSION STATEMENT */}
                <section className="py-20 bg-primary text-primary-foreground">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <p className="text-xl leading-relaxed"
                           dangerouslySetInnerHTML={{ __html: t.about.missionStatement.replace('25 experts', `<strong>25 experts</strong>`) }} />
                    </div>
                </section>
            </section>

            {/* COMPANY VALUES */}
            <section className="py-24 bg-card relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">{t.about.valuesTitle}</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.about.valuesSubtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {companyValues.map((value, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                                <Card className="group h-full bg-background/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-300 rounded-2xl" data-testid={`value-card-${index}`}>
                                    <CardContent className="p-10">
                                        <div className="w-20 h-20 rounded-2xl mx-auto mb-8 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20 group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300">
                                            <value.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                                        </div>
                                        <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">{translatedValues[value.titleKey] || value.titleKey}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{translatedValues[value.descriptionKey] || value.descriptionKey}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary text-primary-foreground" id="careers">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.about.ctaJoinTitle}</h2>
                    <p className="text-xl mb-8 opacity-90">{t.about.ctaJoinSubtitle}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <Link href={`/${country}/contact`}>
                        <Button size="lg" variant="outline" className="border-white text-foreground hover:bg-gray-300 hover:text-primary" data-testid="contact-us-button">{t.about.contactUsCta}</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}