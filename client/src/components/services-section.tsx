// Premium Redesigned Services Section
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    HandCoins,
    EuroIcon,
    ChartLine,
    ChartNetwork,
    Globe,
    ReceiptEuroIcon,
    ArrowRight // Added for the button/link
} from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";
import { useCountry } from "@/lib/country-context";

export default function ServicesSection() {
    const { language } = useLanguage();
    // Assuming t.programs.services, t.services.title, and t.services.learnMore are defined
    const t = useTranslations()[language];
    const p = t.programs.services;
    const { country } = useCountry();

    const mainServices = [
        {
            title: p.financialConsulting.title,
            description: p.financialConsulting.description,
            icon: HandCoins,
            color: "text-red-700",
            gradientFrom: "#bf0d0d", // Used a more visible red for the beam on light background
            gradientTo: "#bf0d0d",
        },
        {
            title: p.accessToFinance.title,
            description: p.accessToFinance.description,
            icon: EuroIcon,
            color: "text-red-700",
            gradientFrom: "#000000",
            gradientTo: "#000000",
        },
        {
            title: p.businessConsulting.title,
            description: p.businessConsulting.description,
            icon: ChartLine,
            color: "text-red-700",
            gradientFrom: "#bf0d0d",
            gradientTo: "#bf0d0d",
        },
        {
            title: p.marketing.title,
            description: p.marketing.description,
            icon: ChartNetwork,
            color: "text-red-700",
            gradientFrom: "#000000",
            gradientTo: "#000000",
        },
        {
            title: p.marketAccess.title,
            description: p.marketAccess.description,
            icon: Globe,
            color: "text-red-700",
            gradientFrom: "#bf0d0d",
            gradientTo: "#bf0d0d",
        },
        {
            title: p.grants.title,
            description: p.grants.description,
            icon: ReceiptEuroIcon,
            color: "text-red-700",
            gradientFrom: "#000000",
            gradientTo: "#000000",
        },
    ];

    return (
        <section className="py-24 bg-neutral-100" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                        {t.services.title}
                    </h2>
                </div>

                {/* 6-column premium layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                    {mainServices.map((service, index) => (
                        <Card
                            key={index}
                            // Increased height and added min-height for robust layout
                            className="relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-lg hover:shadow-red-200/50 transition-all duration-500 w-full h-full min-h-[300px] group"
                        >
                            {/* Border Beam: Light gradient effect on hover or subtle animation */}
                            <BorderBeam
                                lightWidth={280}
                                duration={30}
                                lightColor={service.gradientFrom}
                                borderWidth={1}
                                className="pointer-events-none z-0"
                            />

                            <CardContent
                                // Added flex structure to push the button to the bottom
                                className="relative z-10 p-6 sm:p-8 flex flex-col h-full"
                            >
                                {/* Icon */}
                                <div className="flex items-start mb-6">
                                    <service.icon
                                        className={`w-12 h-12 ${service.color} transition-transform duration-300 group-hover:scale-110`}
                                        strokeWidth={1.2}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mt-6 text-gray-900 tracking-wide leading-snug mb-2">
                                    {service.title.toUpperCase()}
                                </h3>

                                {/* Description (New Addition to fill space)
                                <p className="text-sm text-gray-600 mb-6 flex-grow">
                                    {service.description}
                                </p>*/}

                                {/* Learn More Link at the bottom */}
                                <a href={`/${country}/programs#${[
                                    "financial-consulting",
                                    "access-to-finance",
                                    "business-consulting",
                                    "marketing",
                                    "market-access",
                                    "grants",
                                ][index]}`} className="mt-auto">
                                    <Button
                                        variant="link"
                                        className="text-red-700 hover:text-red-600 p-0 h-auto font-semibold text-sm justify-start"
                                    >
                                        {t.services.learnMore}
                                        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Button>
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}