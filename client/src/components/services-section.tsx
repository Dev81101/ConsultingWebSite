import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    CheckCircle,
    Landmark,
    DollarSign,
    Briefcase,
    Ruler,
    Globe,
    PiggyBank,
    ChartLine,
    HandshakeIcon, ChartNetwork, ReceiptEuroIcon, HandCoins, EuroIcon
} from "lucide-react";
// Assuming these imports are correctly set up for your project
// import { useLanguage } from "@/lib/language-context";
// import { useTranslations } from "@/lib/translations";
import { BorderBeam } from "@/components/ui/border-beam";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";

// Use global translations instead of local hardcoded strings

interface Service {
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    features: string[];
    color: string;
    gradientFrom: string;
    gradientTo: string;
}

export default function ServicesSection() {
    const { language } = useLanguage();
    const t = useTranslations()[language];
    const p = t.programs.services;

    // Main Services with Detailed Cards - using updated icons and translations
    const mainServices: Service[] = [
        {
            title: p.financialConsulting.title,
            description: p.financialConsulting.description,
            icon: HandCoins,
            features: p.financialConsulting.items,
            color: "text-red-700",
            gradientFrom: "#000000",
            gradientTo: "#000000"
        },
        {
            title: p.accessToFinance.title,
            description: p.accessToFinance.description,
            icon: EuroIcon,
            features: p.accessToFinance.items,
            color: "text-red-700",
            gradientFrom: "#bf0d0d",
            gradientTo: "#bf0d0d"
        },
        {
            title: p.businessConsulting.title,
            description: p.businessConsulting.description,
            icon: ChartLine,
            features: p.businessConsulting.items,
            color: "text-red-700",
            gradientFrom: "#000000",
            gradientTo: "#000000"
        },
        {
            title: p.marketing.title,
            description: p.marketing.description,
            icon: ChartNetwork,
            features: p.marketing.items,
            color: "text-red-700",
            gradientFrom: "#bf0d0d",
            gradientTo: "#bf0d0d"
        },
        {
            title: p.marketAccess.title,
            description: p.marketAccess.description,
            icon: Globe,
            features: p.marketAccess.items,
            color: "text-red-700",
            gradientFrom: "#000000",
            gradientTo: "#000000"
        },
        {
            title: p.grants.title,
            description: p.grants.description,
            icon: ReceiptEuroIcon,
            features: p.grants.items,
            color: "text-red-700",
            gradientFrom: "#bf0d0d",
            gradientTo: "#bf0d0d"
        }
    ];

    return (
        <section className="py-20 bg-gray-50" id="services" data-testid="services-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        {t.services.title}
                    </h2>
                    <p className="text-xl text-gray-600">
                        {t.services.subtitle}
                    </p>
                </div>

                {/* Main Services Grid (Detailed Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {mainServices.map((service, index) => (
                        <div
                            key={`main-${index}`}
                            data-testid={`service-card-${service.title.toUpperCase().replace(/\s+/g, '-')}`}
                        >
                            {/* Card as the positioning context for the animated border */}
                            <Card className="relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 h-full group">
                                {/* Border Beam placed inside the card so it renders over the card background but under content */}
                                <BorderBeam
                                    lightWidth={250}
                                    duration={8}
                                    lightColor={service.gradientFrom}
                                    borderWidth={2}
                                    className="pointer-events-none z-0"
                                />

                                {/* Card Content (ensure content appears above BorderBeam) */}
                                <CardContent className="relative z-10 p-8">

                                    {/* ICON CONTAINER: Large, absolute, and partially cut-off */}
                                    <div
                                        className={`absolute -top-14 -left-14 w-40 h-40 flex items-center justify-center`}
                                    >
                                        <service.icon
                                            className={`h-full w-full ${service.color}`}
                                            aria-hidden="true"
                                            strokeWidth={1.0} // Thinner line weight
                                        />
                                    </div>

                                    {/* Title and Content */}
                                    <h3
                                        className="text-2xl font-bold text-gray-900 mb-4 tracking-wide pt-24" // pt-24 ensures text is below the icon
                                        data-testid="service-title"
                                    >
                                        {service.title.toUpperCase()}
                                    </h3>

                                    {/* <p className="text-gray-600 mb-4">{service.description}</p> */}

                                    {/* Features List
                                    <ul className="space-y-2 mb-6 text-gray-600">
                                        {service.features.map((feature, featIndex) => (
                                            <li key={featIndex} className="flex items-start">
                                                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul> */}

                                    {/*}
                                    <Button
                                        variant="link"
                                        className="text-primary hover:text-primary/80 p-0 h-auto font-bold text-lg"
                                        data-testid="service-learn-more"
                                    >
                                        {t.services.learnMore}
                                    </Button>
                                    */}
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}