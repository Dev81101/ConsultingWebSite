// src/app/services/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    HandCoins,
    Euro,
    Sprout,
    Users,
    Megaphone,
    MapPin,
    Target, Coins, Landmark, ChartNetwork, ChartLine, Globe, ReceiptEuroIcon,
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
    items?: string[]; // RESTORED
    icon: React.ComponentType<any>;
};

function useServicesData(): Service[] {
    const { language } = useLanguage();
    const t = useTranslations()[language];
    const p = t.programs.services;
    return [
        {
            id: "financial-consulting",
            title: p.financialConsulting.title,
            subtitle: p.financialConsulting.subtitle,
            imageUrl: "../images/BusnessConsulting.jpg",
            description: p.financialConsulting.description,
            items: p.financialConsulting.items,
            icon: HandCoins,
        },
        {
            id: "access-to-finance",
            title: p.accessToFinance.title,
            subtitle: p.accessToFinance.subtitle,
            imageUrl: "../images/credits.jpg",
            description: p.accessToFinance.description,
            items: p.accessToFinance.items,
            icon: Euro,
        },
        {
            id: "grants",
            title: p.grants.title,
            subtitle: p.grants.subtitle,
            imageUrl: "../images/Grants.jpg",
            description: p.grants.description,
            items: p.grants.items,
            icon: ReceiptEuroIcon,
        },
        {
            id: "business-consulting",
            title: p.businessConsulting.title,
            subtitle: p.businessConsulting.subtitle,
            imageUrl: "../images/BusnessConsulting.jpg",
            description: p.businessConsulting.description,
            items: p.businessConsulting.items,
            icon: ChartLine,
        },
        {
            id: "marketing",
            title: p.marketing.title,
            subtitle: p.marketing.subtitle,
            imageUrl: "../images/Marketing.jpg",
            description: p.marketing.description,
            items: p.marketing.items,
            icon: ChartNetwork,
        },
        {
            id: "market-access",
            title: p.marketAccess.title,
            subtitle: p.marketAccess.subtitle,
            imageUrl: "../images/markets.jpg",
            description: p.marketAccess.description,
            items: p.marketAccess.items,
            icon: Globe,
        },
        {
            id: "esg",
            title: p.esg.title,
            subtitle: p.esg.subtitle,
            imageUrl: "../images/Esg.jpg",
            description: p.esg.description,
            items: p.esg.items,
            icon: Target,
        },
    ];
}

/* -------------------------
   Alternating Service Block (FULL WIDTH, BOTTOM-CORNER CUT-OFF)
   ------------------------- */
function AlternatingServiceBlock({
                                     service,
                                     reversed,
                                 }: {
    service: Service;
    reversed?: boolean;
}) {
    const Icon = service.icon;

    // Define the column order and sizing based on the 'reversed' prop (Responsive)
    const layoutClasses = reversed
        ? "lg:grid-cols-[1fr_400px] lg:flex-row-reverse"
        : "lg:grid-cols-[400px_1fr]";

    // Custom gradient style for the large background icon: Gold (Primary) to Black (Dark Gray)
    const iconGradientStyle = {
        backgroundImage: `linear-gradient(135deg, var(--primary) 20%, #202020 80%)`,
    };

    // Background Gradient Style (Red from , fading to White)
    const backgroundGradientStyle = {
        background: `radial-gradient(at top ${reversed ? 'right' : 'left'}, rgba(255, 0, 0, 0.1) 20%, white 80%)`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
    };

    const SERVICES = useServicesData();

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            // Apply background gradient style
            className="py-16 overflow-hidden relative shadow-md bg-card mb-1"
            style={{ ...backgroundGradientStyle, backgroundColor: 'white' }}
        >
            {/* Content is wrapped inside a max-width container for readability, centered on the full-width section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 ${layoutClasses} gap-8 items-start`}>

                    {/* 1. Icon container (Fixed width on desktop, hidden on mobile) */}
                    {/*<div
                        // Hidden on mobile, shown on desktop (lg)
                        className={`relative h-full hidden lg:block ${reversed ? "order-2" : "order-1"}`}
                    >

                        <div
                            className={`absolute w-[400px] h-[400px] flex items-center justify-center transition-transform duration-500 ease-out 
                                ${
                                reversed
                                    ? "bottom-[-52] lg:right-[-60]"
                                    : "bottom-[-52] lg:left-[-60]"
                            }
                            `}
                            style={{ bottom: '-10rem'}}
                        >

                            <Icon
                                className="w-full h-full bg-clip-text text-transparent opacity-60 stroke-black"
                                strokeWidth={0.5}
                                fill="none"
                            />
                        </div>
                    </div>*/}


                    {/* 1. Icon container (Fixed width on desktop, hidden on mobile) */}
                    <div
                        // Hidden on mobile, shown on desktop (lg)
                        className={`relative h-full hidden lg:block ${reversed ? "order-2" : "order-1"}`}
                    >

                        <img src={service.imageUrl} className="h-full w-max"/>

                    </div>

                    {/* 2. Text content (Fluid width, wider text area) */}
                    <div
                        // Ensure content is always first on mobile
                        className={`pt-12 md:pt-0 ${reversed ? "lg:order-1" : "lg:order-2"}`}
                    >
                        <h3 className="text-4xl font-bold text-foreground">{service.title}</h3>
                        <div className="flex items-center space-x-3 mt-2 mb-6">
                            <Icon className="w-6 h-6 text-primary" />
                            {service.subtitle && <p className="text-md text-primary font-medium">{service.subtitle}</p>}
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">{service.description}</p>

                        {/* Items list (RESTORED) */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-base">
                            {service.items?.map((it, i) => (
                                <div key={i} className="flex items-start gap-3 text-muted-foreground font-medium">
                                    <div className="w-2 h-2 rounded-full mt-2 bg-primary/80 flex-shrink-0" />
                                    <div>{it}</div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <Button
                                size="lg"
                                onClick={() => (window.location.href = "/mk/contact")}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                            >
                                Schedule Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

/* -------------------------
   Services Page
   ------------------------- */
export default function ServicesPage() {
    // Initialize services data (localized with English fallback)
    const SERVICES = useServicesData();

    return (
        <main className="bg-background min-h-screen text-foreground">
            {/* HERO (Kept centered max-w-7xl) */}
            <section className="py-20 border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Services & Programs</h1>
                    <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                        We offer custom-made solutions tailored to the specific needs of our clients. Our approach
                        is based on a comprehensive understanding of your business model, development objectives and
                        investment strategy — aligned to deliver measurable growth and long-term value.
                    </p>

                    <div className="mt-10 flex justify-center gap-6">
                        <Button  className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => (window.location.href = "/mk/contact")}>
                            Schedule a Consultation
                        </Button>
                        <Button variant="outline" className="h-12 px-8 text-base" onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}>
                            Our Services
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services list (REMOVED max-w-7xl so blocks span full browser width) */}
            <section className="py-20">
                <div className="px-0"> {/* Removed max-width and padding here */}
                    {SERVICES.map((s, idx) => (
                        <AlternatingServiceBlock key={s.id} service={s} reversed={idx % 2 === 1} />
                    ))}
                </div>
            </section>

            {/* CTA (Kept centered max-w-4xl) */}
            <section className="py-20 bg-muted/5 border-t">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to take the next step?</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Book a consultation and let our experts design a structured plan for your company.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => (window.location.href = "/mk/contact")}>
                            Book Consultation
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base" onClick={() => (window.location.href = "/contact#contacts")}>
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}