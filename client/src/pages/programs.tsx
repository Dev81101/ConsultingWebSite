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
    ReceiptEuroIcon, NetworkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";
import {Treemap} from "recharts";

/* ---------------------------------
    Data (compact & editable)
---------------------------------- */

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

    const fallback = {
        title: "Service",
        subtitle: "",
        description: "",
        items: [],
    };

    // Mock data structure (your provided data)
    return [
        {
            id: "financial-consulting",
            title: p.financialConsulting?.title || fallback.title,
            subtitle: p.financialConsulting?.subtitle || fallback.subtitle,
            imageUrl: "/images/financial.jpg",
            description: p.financialConsulting?.description || fallback.description,
            items: p.financialConsulting?.items || fallback.items,
            icon: HandCoins,
        },
        {
            id: "access-to-finance",
            title: p.accessToFinance?.title || fallback.title,
            subtitle: p.accessToFinance?.subtitle || fallback.subtitle,
            imageUrl: "/images/Accesstofinance.jpg",
            description: p.accessToFinance?.description || fallback.description,
            items: p.accessToFinance?.items || fallback.items,
            icon: Euro,
        },
        {
            id: "grants",
            title: p.grants?.title || fallback.title,
            subtitle: p.grants?.subtitle || fallback.subtitle,
            imageUrl: "/images/Grants.jpg",
            description: p.grants?.description || fallback.description,
            items: p.grants?.items || fallback.items,
            icon: ReceiptEuroIcon,
        },
        {
            id: "business-consulting",
            title: p.businessConsulting?.title || fallback.title,
            subtitle: p.businessConsulting?.subtitle || fallback.subtitle,
            imageUrl: "/images/BusinessConsulting.jpg",
            description: p.businessConsulting?.description || fallback.description,
            items: p.businessConsulting?.items || fallback.items,
            icon: ChartLine,
        },
        {
            id: "marketing",
            title: p.marketing?.title || fallback.title,
            subtitle: p.marketing?.subtitle || fallback.subtitle,
            imageUrl: "/images/Marketing.jpg",
            description: p.marketing?.description || fallback.description,
            items: p.marketing?.items || fallback.items,
            icon: ChartNetwork,
        },
        {
            id: "market-access",
            title: p.marketAccess?.title || fallback.title,
            subtitle: p.marketAccess?.subtitle || fallback.subtitle,
            imageUrl: "/images/acess.jpg",
            description: p.marketAccess?.description || fallback.description,
            items: p.marketAccess?.items || fallback.items,
            icon: Globe,
        },
        {
            id: "esg",
            title: p.esg?.title || fallback.title,
            subtitle: p.esg?.subtitle || fallback.subtitle,
            imageUrl: "/images/ESG.jpg",
            description: p.esg?.description || fallback.description,
            items: p.esg?.items || fallback.items,
            icon: NetworkIcon,
        },
    ];
}


/* ---------------------------------
    Alternating Service Block (clean)
---------------------------------- */

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

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="py-16 overflow-hidden relative bg-white border-b"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 ${layoutClasses} gap-16 items-start`}>
                    <div
                        className={`relative hidden lg:flex ${
                            reversed ? "order-2 justify-end" : "order-1 justify-start"
                        }`}
                    >
                        <div
                            className={`w-[50em] h-[25em] overflow-hidden rounded-2xl shadow-xl bg-white border transition-transform duration-500 ${
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
                                <p className="text-md text-primary font-medium">
                                    {service.subtitle}
                                </p>
                            )}
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
                            {service.description}
                        </p>

                        {/* Bullet Items */}
                        {service.items && service.items.length > 0 && (
                            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                                {service.items.map((it, i) => (
                                    <li key={i} className="font-medium">
                                        {it}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

/* ---------------------------------
    Floating CTA Button (right-center)
---------------------------------- */

function FloatingCTA() {
    const { language } = useLanguage();
    const t = useTranslations()[language] || useTranslations().en;

    // --- 1. Get Text & Number ---
    const buttonTextSource = t.programs?.flaotingButton?.toUpperCase() || "Book Consultation";
   // const floatingNumber = t.programs?.floatingNumber || "+389 7X XXX XXX"; // Fallback for the number

    // --- 2. Process Button Text for Line Breaks (\n) ---
    // Split the text by the newline character (\n) and map to JSX fragments.
    const buttonLines = buttonTextSource.split('\n').map((line, index, array) => (
        <React.Fragment key={`text-${index}`}>
            {line}
            {/* Add <br /> only if it's not the last line of the button text */}
            {index < array.length - 1 && <br />}
        </React.Fragment>
    ));

    // --- 3. Construct the Full Button Content Array ---
    const fullContent = [
        ...buttonLines,

        // 4. INSERT THE SMALL WHITE HORIZONTAL DIVIDER
        <div
            key="divider"
            className="w-1/3 h-px my-1 bg-white mx-auto" // mx-auto centers the line
        />,

        // 5. Add the Floating Number

    ];

    return (

        <Button
            onClick={() => (window.location.href = "/mk/contact")}
            // Ensure the button is tall (h-24), has centered content (flex-col items-center),
            // and the text alignment is centered by default.
            className="fixed right-6 top-1/2 -translate-y-1/2 bg-primary hover:bg-foreground h-[4rem] text-white shadow-xl px-6 py-4 rounded-2xl z-50 flex flex-col items-center justify-center text-center"
        >
            {/* Render the full content array */}
            {fullContent}
        </Button>
    );
}

function FloatingCTAA() {
    const { language } = useLanguage();
    const t = useTranslations()[language] || useTranslations().en;

    // --- 1. Get Text & Number ---
    const buttonTextSource = t.programs?.flaotingButton?.toUpperCase() || "Book Consultation";
    // const floatingNumber = t.programs?.floatingNumber || "+389 7X XXX XXX"; // Fallback for the number

    // --- 2. Process Button Text for Line Breaks (\n) ---
    // Split the text by the newline character (\n) and map to JSX fragments.
    const buttonLines = buttonTextSource.split('\n').map((line, index, array) => (
        <React.Fragment key={`text-${index}`}>
            {line}
            {/* Add <br /> only if it's not the last line of the button text */}
            {index < array.length - 1 && <br />}
        </React.Fragment>
    ));

    // --- 3. Construct the Full Button Content Array ---
    const fullContent = [
        ...buttonLines,

        // 4. INSERT THE SMALL WHITE HORIZONTAL DIVIDER
        <div
            key="divider"
            className="w-1/3 h-px my-1 bg-white mx-auto" // mx-auto centers the line
        />,

        // 5. Add the Floating Number

    ];

    return (
        <Button
            onClick={() => (window.location.href = "/mk/contact")}
            // Ensure the button is tall (h-24), has centered content (flex-col items-center),
            // and the text alignment is centered by default.
            className="fixed right-6 top-1/2 -translate-y-1/2 bg-primary hover:bg-foreground h-[10rem] text-white shadow-xl px-6 py-4 rounded-2xl z-50 flex flex-col items-center justify-center text-left"
        >
            {/* Render the full content array */}
            {fullContent}
        </Button>
    );
}


/* ---------------------------------
    Services Page - TEXT OVERLAY
---------------------------------- */

export default function ServicesPage() {
    const { language } = useLanguage();
    const translations = useTranslations();
    const t = translations[language] || translations.en;

    const SERVICES = useServicesData();

    return (
        <main className="bg-background min-h-screen text-foreground relative">
            {/* 💡 HERO - Image with Text Overlay (Header) */}
            <section className="relative w-full h-[25rem] md:h-[35rem] overflow-hidden border-b">

                {/* 1. Image (Background) */}
                <img
                    src="/images/HeaderPrograms.png"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Background header image for Services & Programs"
                />

                {/* Optional: Darken Overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* 2. Text Content (Overlay) */}
                <div className="absolute inset-0 flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
                        {t.nav?.programs || "Services & Programs"}
                    </h1>
                    <p className="text-xl text-white drop-shadow max-w-4xl mx-auto">
                        {t.services?.subtitle ||
                            "We offer custom-made solutions tailored to the specific needs of our clients."}
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-0.5">
                {SERVICES.map((s, idx) => (
                    <div id={s.id} key={s.id}>
                        <AlternatingServiceBlock service={s} reversed={idx % 2 === 1} />
                    </div>
                ))}
            </section>

            {/* Floating CTA */}
            <FloatingCTA />
        </main>
    );
}