"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    HandCoins,
    Euro,
    Target,
    ChartNetwork,
    ChartLine,
    Globe,
    ReceiptEuroIcon,
    Footprints, // New icon for steps
    CheckCheck, // Another icon option for final step
    Trophy, // Another icon option for final step
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";

/* -------------------------
    Data (compact & editable)
    ------------------------- */
type Service = {
    id: string;
    title: string;
    subtitle?: string;
    imageUrl: string;
    description: string;
    items?: string[];
    icon: React.ComponentType<any>;
};

function useServicesData(): Service[] {
    const { language } = useLanguage();
    const t = useTranslations()[language];
    const p = t?.programs?.services || {};

    // Fallback to English structure if needed
    const fallback = {
        title: "Service",
        subtitle: "",
        description: "",
        items: [],
    };

    return [
        {
            id: "financial-consulting",
            title: p.financialConsulting?.title || fallback.title,
            subtitle: p.financialConsulting?.subtitle || fallback.subtitle,
            imageUrl: "../images/financial.jpg",
            description: p.financialConsulting?.description || fallback.description,
            items: p.financialConsulting?.items || fallback.items,
            icon: HandCoins,
        },
        {
            id: "access-to-finance",
            title: p.accessToFinance?.title || fallback.title,
            subtitle: p.accessToFinance?.subtitle || fallback.subtitle,
            imageUrl: "../images/Accesstofinance.jpg",
            description: p.accessToFinance?.description || fallback.description,
            items: p.accessToFinance?.items || fallback.items,
            icon: Euro,
        },
        {
            id: "grants",
            title: p.grants?.title || fallback.title,
            subtitle: p.grants?.subtitle || fallback.subtitle,
            imageUrl: "../images/Grants.jpg",
            description: p.grants?.description || fallback.description,
            items: p.grants?.items || fallback.items,
            icon: ReceiptEuroIcon,
        },
        {
            id: "business-consulting",
            title: p.businessConsulting?.title || fallback.title,
            subtitle: p.businessConsulting?.subtitle || fallback.subtitle,
            imageUrl: "../images/BusinessConsulting.jpg",
            description: p.businessConsulting?.description || fallback.description,
            items: p.businessConsulting?.items || fallback.items,
            icon: ChartLine,
        },
        {
            id: "marketing",
            title: p.marketing?.title || fallback.title,
            subtitle: p.marketing?.subtitle || fallback.subtitle,
            imageUrl: "../images/Marketing.jpg",
            description: p.marketing?.description || fallback.description,
            items: p.marketing?.items || fallback.items,
            icon: ChartNetwork,
        },
        {
            id: "market-access",
            title: p.marketAccess?.title || fallback.title,
            subtitle: p.marketAccess?.subtitle || fallback.subtitle,
            imageUrl: "../images/acess.jpg",
            description: p.marketAccess?.description || fallback.description,
            items: p.marketAccess?.items || fallback.items,
            icon: Globe,
        },
        {
            id: "esg",
            title: p.esg?.title || fallback.title,
            subtitle: p.esg?.subtitle || fallback.subtitle,
            imageUrl: "../images/ESG.jpg",
            description: p.esg?.description || fallback.description,
            items: p.esg?.items || fallback.items,
            icon: Target,
        },
    ];
}

/* -------------------------
    Alternating Service Block
    ------------------------- */
function AlternatingServiceBlock({
                                     service,
                                     reversed,
                                 }: {
    service: Service;
    reversed?: boolean;
}) {
    const Icon = service.icon;

    const layoutClasses = reversed
        ? "lg:grid-cols-[1fr_400px] lg:flex-row-reverse"
        : "lg:grid-cols-[400px_1fr]";

    const backgroundGradientStyle = {
        background: `radial-gradient(at top ${reversed ? "right" : "left"}, rgba(255, 0, 0, 0.1) 20%, white 80%)`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
    };

    const { language } = useLanguage();
    const t = useTranslations()[language];
    const safeT = t || useTranslations().en;

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="py-16 overflow-hidden relative shadow-md bg-card mb-1"
            style={{ ...backgroundGradientStyle, backgroundColor: "white" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 ${layoutClasses} gap-8 items-start`}>
                    <div
                        className={`relative hidden lg:flex ${
                            reversed ? "order-2 justify-end" : "order-1 justify-start"
                        }`}
                    >
                        <div
                            className={`w-[50em] h-[25em] overflow-hidden rounded-3xl shadow-xl bg-white border border-border/30 transition-transform duration-500 ${
                                reversed ? "lg:-translate-x-6" : "lg:translate-x-6"
                            } hover:scale-[1.02]`}
                        >
                            <img
                                src={service.imageUrl}
                                className="w-full h-full object-cover"
                                alt={service.title}
                            />
                        </div>
                    </div>

                    <div className={`pt-12 md:pt-0 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
                        <h3 className="text-4xl font-bold text-foreground">{service.title}</h3>
                        <div className="flex items-center space-x-3 mt-2 mb-6">
                            <Icon className="w-6 h-6 text-primary" />
                            {service.subtitle && (
                                <p className="text-md text-primary font-medium">{service.subtitle}</p>
                            )}
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                            {service.description}
                        </p>

                        {service.items && service.items.length > 0 && (
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-base">
                                {service.items.map((it, i) => (
                                    <div key={i} className="flex items-start gap-3 text-muted-foreground font-medium">
                                        <div className="w-2 h-2 rounded-full mt-2 bg-primary/80 flex-shrink-0" />
                                        <div>{it}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="mt-8">
                            <Button
                                size="lg"
                                onClick={() => (window.location.href = "/mk/contact")}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                            >
                                {t.programs?.buttonText || "Schedule Consultation"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}


/* -------------------------
    Cooperation Steps Component
    ------------------------- */
function CooperationSteps() {
    // Define steps data
    const steps = [
        {
            stepNumber: "01",
            title: "Creating a work and progress plan",
            description: "Tailored to the individual, specific needs of the company on the market.",
            icon: Footprints,
        },
        {
            stepNumber: "02",
            title: "Creating a development plan",
            description: "Ensuring sustainable advantage and added value for your business model.",
            icon: ChartLine,
        },
        {
            stepNumber: "03",
            title: "Achieving your business goals and expectations",
            description: "By creating a successful and recognizable company, branding, and visibility.",
            icon: Trophy,
        },
    ];

    return (
        <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
            {/* Background elements for visual appeal */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-repeat-x" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M25 50L50 75L75 50L50 25Z\' fill=\'%23ffffff\' opacity=\'0.1\'/%3E%3C/svg%3E")',
                backgroundSize: '300px 300px',
            }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl font-extrabold text-center mb-16 uppercase tracking-wider">
                    YOUR SUPPORT EVERY STEP OF THE WAY
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="text-center p-6 bg-white/10 rounded-xl shadow-lg hover:bg-white/20 transition duration-300 backdrop-blur-sm border border-white/20"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="text-5xl font-black text-white opacity-70 leading-none mr-3">
                                    {step.stepNumber}
                                </div>
                                <div className="text-xl font-semibold text-white uppercase tracking-wider border-l-2 border-white/50 pl-3">
                                    STEP
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-white">
                                {step.title}
                            </h3>
                            <p className="text-lg text-white/90">
                                {step.description}
                            </p>

                            {/* Optional: Icon at the bottom */}
                            <div className="mt-4">
                                <step.icon className="w-8 h-8 mx-auto text-white/80" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


/* -------------------------
    Services Page
    ------------------------- */
export default function ServicesPage() {
    const { language } = useLanguage();
    const translations = useTranslations();
    const t = translations[language] || translations.en;

    const SERVICES = useServicesData();

    return (
        <main className="bg-background min-h-screen text-foreground">
            {/* HERO */}
            <section className="py-20 border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                        {t.nav?.programs || "Services & Programs"}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                        {t.services?.subtitle ||
                            "We offer custom-made solutions tailored to the specific needs of our clients. Our approach is based on a comprehensive understanding of your business model, development objectives and investment strategy — aligned to deliver measurable growth and long-term value."}
                    </p>

                    <div className="mt-10 flex justify-center gap-6">
                        <Button
                            className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                            onClick={() => (window.location.href = "/mk/contact")}
                        >
                            {t.programs?.buttonText || "Schedule a Consultation"}
                        </Button>
                    </div>
                </div>
            </section>

            {/* New Cooperation Steps Section */}
            {/*<CooperationSteps />*/}

            {/* Services list */}
            <section className="py-20">
                <div className="px-0">
                    {SERVICES.map((s, idx) => (
                        <AlternatingServiceBlock key={s.id} service={s} reversed={idx % 2 === 1} />
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-muted/5 border-t">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        {t.contact?.title || "Ready to take the next step?"}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        {t.contact?.subtitle ||
                            "Book a consultation and let our experts design a structured plan for your company."}
                    </p>
                    <div className="flex justify-center gap-6">
                        <Button
                            size="lg"
                            className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                            onClick={() => (window.location.href = "/mk/contact")}
                        >
                            {t.programs?.buttonText || "Book Consultation"}
                        </Button>

                    </div>
                </div>
            </section>
        </main>
    );
}