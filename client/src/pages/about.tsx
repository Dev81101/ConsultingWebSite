"use client";

import { useState, useCallback, memo, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Lightbulb, MapPin, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";
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

const countryIdToOfficeShort = {
    Serbia: "Belgrade",
    Croatia: "Zagreb",
    Bosnia_and_Herzegovina: "Sarajevo",
    Montenegro: "Podgorica",
    North_Macedonia: "Skopje",
    Kosovo: "Kosovo"
};

const RegionalDevelopmentMap = memo(function RegionalDevelopmentMap() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [svgLoaded, setSvgLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

    // Colors
    const baseFill = "#e0e1e2"; // default from your svg classes (but we'll respect inline fill if present)
    const highlightFill = "#dc2626";
    const hoverFill = "#b91c1c";
    const inactiveFill = "#f3f4f6";

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

                // attach interactions
                const ids = ["Serbia", "Croatia", "Bosnia_and_Herzegovina", "Montenegro", "North_Macedonia", "Kosovo"];
                const listeners: { el: Element; handlers: { enter: EventListener; leave: EventListener; click: EventListener } }[] = [];

                ids.forEach((id) => {
                    const el = containerRef.current?.querySelector(`#${id}`);
                    if (!el) return;

                    // ensure clickable cursor
                    (el as HTMLElement).style.cursor = "pointer";
                    // preserve original fill
                    const origFill = (el as SVGPathElement).getAttribute("fill") || "";

                    const onEnter = () => {
                        setHoveredCountry(id);
                        try {
                            // highlight visually
                            (el as SVGPathElement).style.transition = "fill 0.12s ease";
                            (el as SVGPathElement).style.fill = hoverFill;
                        } catch {}
                    };
                    const onLeave = () => {
                        setHoveredCountry((prev) => (prev === id ? null : prev));
                        try {
                            // restore original fill or default
                            (el as SVGPathElement).style.fill = origFill || baseFill;
                        } catch {}
                    };
                    const onClick = () => {
                        setSelectedCountry((prev) => (prev === id ? null : id));
                        // small pulse animation
                        try {
                            (el as SVGPathElement).style.transition = "transform 0.15s ease";
                            (el as SVGPathElement).style.transformOrigin = "center";
                            (el as SVGPathElement).style.transform = "scale(1.02)";
                            setTimeout(() => {
                                if (el) (el as SVGPathElement).style.transform = "";
                            }, 150);
                        } catch {}
                    };

                    el.addEventListener("mouseenter", onEnter);
                    el.addEventListener("mouseleave", onLeave);
                    el.addEventListener("click", onClick);

                    listeners.push({ el, handlers: { enter: onEnter, leave: onLeave, click: onClick } });
                });

                // mark loaded
                setSvgLoaded(true);
                setHasError(false);
                setIsLoading(false);

                // cleanup on unmount
                return () => {
                    listeners.forEach(({ el, handlers }) => {
                        el.removeEventListener("mouseenter", handlers.enter);
                        el.removeEventListener("mouseleave", handlers.leave);
                        el.removeEventListener("click", handlers.click);
                    });
                };
            } catch (err) {
                if ((err as any).name !== "AbortError") {
                    console.error("SVG load error:", err);
                    setHasError(true);
                    setIsLoading(false);
                }
            }
        }

        const cleanupPromise = loadSvg();

        return () => {
            mounted = false;
            abortController.abort();
            // if loadSvg returned cleanup function (it does), try to call it
            if (typeof cleanupPromise === "function") (cleanupPromise as any)();
        };
    }, []);

    // simple loading fallback overlay
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

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
                        // svg will be injected here
                    />


                {/* Info panel */}



            {/* legend / quick offices */}

        </div>
    );
});

export default function About() {
    const { language } = useLanguage();
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
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">{t.about.heroTitle}</h1>
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
                </div>

                {/* WHAT WE OFFER */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="text-2xl font-bold text-foreground mb-6">{t.about.whatWeOfferTitle}</h3>
                        <div className="grid gap-10 sm:grid-cols-2">
                            <div>
                                <h4 className="font-semibold text-lg text-foreground mb-2">{t.about.accessFinanceTitle}</h4>
                                <ul className="list-disc list-inside text-muted-foreground">
                                    {t.about.accessFinanceList.map((item: string, index: number) => <li key={index}>{item}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-foreground mb-2">{t.about.marketAccessTitle}</h4>
                                <ul className="list-disc list-inside text-muted-foreground">
                                    {t.about.marketAccessList.map((item: string, index: number) => <li key={index}>{item}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-foreground mb-2">{t.about.specialReportsTitle}</h4>
                                <ul className="list-disc list-inside text-muted-foreground">
                                    {t.about.specialReportsList.map((item: string, index: number) => <li key={index}>{item}</li>)}
                                </ul>
                            </div>
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

            {/* TEAM
            <section className="py-20" id="team" data-testid="team-section">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t.about.teamTitle}</h2>
                        <p className="text-xl text-muted-foreground">{t.about.teamSubtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow duration-300" data-testid={`team-member-${index}`}>
                                <CardContent className="p-6 text-center">
                                    <img src={member.image} alt={member.name} className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                                    <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                                    <p className="text-primary font-medium mb-3">{member.position}</p>
                                    <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>*/}

            {/* CTA */}
            <section className="py-20 bg-primary text-primary-foreground" id="careers">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.about.ctaJoinTitle}</h2>
                    <p className="text-xl mb-8 opacity-90">{t.about.ctaJoinSubtitle}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="outline" className="border-white text-foreground hover:bg-gray-300 hover:text-primary" data-testid="contact-us-button">{t.about.contactUsCta}</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
