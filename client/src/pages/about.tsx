import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, TrendingUp, CheckCircle, Star, Globe, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";
// --- TYPE FIX START ---
// Define a temporary type for the values object with an index signature
// to suppress the TS7053 error when accessing properties via string variables.
type TranslatableValues = {
    [key: string]: string;
};
// --- TYPE FIX END ---


const teamMembers = [
    {
        name: "Martin Dimitrievski",
        position: "CEO & Co-Founder",
        description: "20+ years in finance",
        image: "../images/direktor.png",
        expertise: [""]
    },
    {
        name: "Nikola Nikoloski",
        position: "Chief Operating Officer",
        description: "8+ years in consulting",
        image: "",
        expertise: [""]
    },
    {
        name: "Ana Jovanovska",
        position: "Head of IPARD Programs",
        description: "10+ years in EU funds",
        image: "",
        expertise: [""]
    }
];

const companyValues = [
    {
        icon: Target,
        titleKey: "Results-Oriented", // Key for the title
        descriptionKey: "We focus on delivering measurable outcomes and tangible value to our clients" // Key for the description
    },
    {
        icon: Users,
        titleKey: "Client-Centric",
        descriptionKey: "Your success is our priority. We build long-term partnerships based on trust"
    },
    {
        icon: Award,
        titleKey: "Excellence",
        descriptionKey: "We maintain the highest standards of professionalism and expertise"
    },
    {
        icon: Globe,
        titleKey: "Innovation",
        descriptionKey: "We leverage the latest technologies and methodologies to drive success"
    }
];

export default function About() {
    const { language } = useLanguage();
    const t = useTranslations()[language];

    // Assert the values object to the defined indexable type
    // This resolves the TS7053 error without needing to modify external files.
    const translatedValues = t.about.values as TranslatableValues;

    return (
        <div className="pt-16 min-h-screen bg-background" data-testid="about-page">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-r from-primary/10 to-chart-2/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            {t.about.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            {t.about.heroSubtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-20 bg-background">
                {/* MAIN CENTERED WRAPPER */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* LEFT CONTENT ONLY */}
                    <div>
                        <h2 className="text-4xl font-bold text-foreground mb-6">{t.about.whoWeAreTitle}</h2>

                        {/* Note: Embedding <strong> tags within the translation string is common practice for styling key terms */}
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

                        <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                            {t.about.regionalDevTitle}
                        </h3>

                        <ul className="space-y-2 text-muted-foreground">
                            <li>• {t.about.serbiaOffice}</li>
                            <li>• {t.about.bosniaOffice}</li>
                            <li>• {t.about.accountingOffice}</li>
                        </ul>
                    </div>
                </div>

                {/* 🔴 FULL-WIDTH RED SECTION */}
                <div className="w-full bg-primary mt-12 py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                        <h3 className="text-2xl font-bold text-white mb-6">{t.about.whatWeOfferTitle}</h3>

                        {/* FINANCE */}
                        <div className="mb-8">
                            <h4 className="font-semibold text-lg text-gray-300 mb-2">
                                {t.about.accessFinanceTitle}
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-100 text-base">
                                {t.about.accessFinanceList.map((item, index) => (
                                    <span key={index}>• {item}</span>
                                ))}
                            </div>
                        </div>

                        {/* MARKET ACCESS */}
                        <div className="mb-8">
                            <h4 className="font-semibold text-lg text-gray-300 mb-2">
                                {t.about.marketAccessTitle}
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-100 text-base">
                                {t.about.marketAccessList.map((item, index) => (
                                    <span key={index}>• {item}</span>
                                ))}
                            </div>
                        </div>

                        {/* REPORTS */}
                        <div>
                            <h4 className="font-semibold text-lg text-gray-300 mb-2">
                                {t.about.specialReportsTitle}
                            </h4>
                            <ul className="space-y-1 text-gray-100">
                                {t.about.specialReportsList.map((item, index) => (
                                    <li key={index}>• {item}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* FINAL PARAGRAPH BELOW RED BLOCK */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                    <p
                        className="text-lg text-muted-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                            __html: t.about.missionStatement.replace('25 experts', `<strong class="text-foreground">25 experts</strong>`)
                        }}
                    />
                </div>

            </section>

            {/* Company Values */}
            <section className="py-24 bg-card relative overflow-hidden">
                {/* Subtle gradient glow */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* HEADER */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
                            {t.about.valuesTitle}
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            {t.about.valuesSubtitle}
                        </p>
                    </div>

                    {/* VALUES GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {companyValues.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card
                                    className="group h-full bg-background/60 backdrop-blur-sm border border-border/50
                       hover:border-primary/40 hover:shadow-xl transition-all duration-300 rounded-2xl"
                                    data-testid={`value-card-${index}`}
                                >
                                    <CardContent className="p-10">

                                        {/* ICON */}
                                        <div className="
                  w-20 h-20 rounded-2xl mx-auto mb-8 flex items-center justify-center
                  bg-gradient-to-br from-primary/10 to-primary/20
                  group-hover:from-primary/20 group-hover:to-primary/30
                  transition-all duration-300
              ">
                                            <value.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                                        </div>

                                        {/* TITLE */}
                                        <h3
                                            className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors"
                                            data-testid="value-title"
                                        >
                                            {/* Access using the type-asserted variable */}
                                            {translatedValues[value.titleKey] || value.titleKey}
                                        </h3>

                                        {/* DESCRIPTION */}
                                        <p className="text-muted-foreground leading-relaxed" data-testid="value-description">
                                            {/* Access using the type-asserted variable */}
                                            {translatedValues[value.descriptionKey] || value.descriptionKey}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-20" id="team" data-testid="team-section">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t.about.teamTitle}</h2>
                        <p className="text-xl text-muted-foreground">
                            {t.about.teamSubtitle}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow duration-300" data-testid={`team-member-${index}`}>
                                <CardContent className="p-6 text-center">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
                                        data-testid="team-member-image"
                                    />
                                    <h3 className="text-xl font-semibold text-foreground mb-2" data-testid="team-member-name">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary font-medium mb-3" data-testid="team-member-position">
                                        {member.position}
                                    </p>
                                    <p className="text-sm text-muted-foreground mb-4" data-testid="team-member-description">
                                        {member.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground" id="careers">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.about.ctaJoinTitle}</h2>
                    <p className="text-xl mb-8 opacity-90">
                        {t.about.ctaJoinSubtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="bg-white text-black hover:bg-gray-300 hover:text-primary"
                            data-testid="careers-button"
                        >
                            {t.about.viewPositions}
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-primary-foreground hover:bg-gray-300 hover:text-primary"
                            data-testid="contact-us-button"
                        >
                            {t.about.contactUsCta}
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}