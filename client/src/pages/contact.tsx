import ContactSection from "@/components/contact-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {MapPin, Phone, Mail, Clock, Globe, Users, CalendarDays} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";

// ... (offices array remains unchanged) ...

const offices = [
    {
        city: "Belgrade",
        address: "Knez Mihailova 42",
        postalCode: "11000 Belgrade, Serbia",
        phone: "+381 11 123 4567",
        email: "belgrade@wvpplus.rs",
        isPrimary: true
    },
    {
        city: "Novi Sad",
        address: "Zmaj Jovina 15",
        postalCode: "21000 Novi Sad, Serbia",
        phone: "+381 21 987 6543",
        email: "novisad@wvpplus.rs",
        isPrimary: false
    },
    {
        city: "Niš",
        address: "Obrenovićeva 23",
        postalCode: "18000 Niš, Serbia",
        phone: "+381 18 555 0123",
        email: "nis@wvpplus.rs",
        isPrimary: false
    }
];

type ContactMethod = {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    details: string;
    availability: string;
};

// ... (OfficeCard and ContactMethodCard functions remain unchanged) ...

function OfficeCard({ office, headquartersLabel, getDirections }: { office: typeof offices[0]; headquartersLabel: string; getDirections: string; }) {
    return (
        <Card className="hover:shadow-lg transition-shadow duration-300" data-testid={`office-card-${office.city.toLowerCase()}`}>
            <CardContent className="p-6">
                <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-primary mr-3" />
                    <div>
                        <h3 className="text-xl font-semibold text-foreground" data-testid="office-city">
                            {office.city}
                            {office.isPrimary && (
                                <span className="ml-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs">
                  {headquartersLabel}
                </span>
                            )}
                        </h3>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex items-start">
                        <MapPin className="h-4 w-4 text-muted-foreground mr-2 mt-1 flex-shrink-0" />
                        <div className="text-sm">
                            <div className="text-foreground" data-testid="office-address">{office.address}</div>
                            <div className="text-muted-foreground" data-testid="office-postal">{office.postalCode}</div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm text-foreground" data-testid="office-phone">{office.phone}</span>
                    </div>

                    <div className="flex items-center">
                        <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm text-foreground" data-testid="office-email">{office.email}</span>
                    </div>
                </div>

                <Button className="w-full mt-6 bg-primary hover:bg-primary/90" data-testid="office-directions">
                    {getDirections}
                </Button>
            </CardContent>
        </Card>
    );
}

function ContactMethodCard({ method }: { method: ContactMethod }) {
    return (
        <Card className="hover:shadow-lg transition-shadow duration-300" data-testid={`contact-method-${method.title.toLowerCase().replace(/\s+/g, '-')}`}>
            <CardContent className="p-6">
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground" data-testid="contact-method-title">
                        {method.title}
                    </h3>
                </div>
                <p className="text-muted-foreground mb-3" data-testid="contact-method-description">
                    {method.description}
                </p>
                <div className="space-y-2">
                    <div className="text-foreground font-medium" data-testid="contact-method-details">
                        {method.details}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid="contact-method-availability">
                        {method.availability}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default function Contact() {
    const { language } = useLanguage();
    const t = useTranslations()[language];

    const methods: ContactMethod[] = [
        { icon: Phone, title: t.contactPage.methods.phone.title, description: t.contactPage.methods.phone.description, details: t.contactPage.methods.phone.details, availability: t.contactPage.methods.phone.availability },
        { icon: Mail, title: t.contactPage.methods.email.title, description: t.contactPage.methods.email.description, details: t.contactPage.methods.email.details, availability: t.contactPage.methods.email.availability },
        { icon: Users, title: t.contactPage.methods.inPerson.title, description: t.contactPage.methods.inPerson.description, details: t.contactPage.methods.inPerson.details, availability: t.contactPage.methods.inPerson.availability },
        { icon: CalendarDays, title: t.contactPage.methods.online.title, description: t.contactPage.methods.online.description, details: t.contactPage.methods.online.details, availability: t.contactPage.methods.online.availability },
    ];

    const businessHours = [
        { day: t.contactPage.dayMonFri, hours: t.contactPage.monFriHours },
        { day: t.contactPage.daySaturday, hours: t.contactPage.saturdayHours },
        { day: t.contactPage.daySunday, hours: t.contactPage.closed },
    ];
    return (


        // 💡 FIX: Removed pt-16 from the parent div
        <div className="min-h-screen bg-background" data-testid="contact-page">



            {/* 💡 MODIFIED HERO SECTION: Image Background with Text Overlay */}
            {/* 💡 FIX: Added pt-16 to the section to push it below the fixed navigation bar */}
            <section className="relative w-full h-[25rem] md:h-[35rem] overflow-hidden border-b **pt-16**">

                {/* 1. Image (Background) - Using a placeholder image source */}
                <img
                    src="../images/Contact.jpg" // Assume you use a unique image for the Contact page
                    alt="Contact us background image"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* 2. Dark Overlay for Contrast */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* 3. Text Content (Overlay) - Centered */}
                <div className="absolute inset-0 flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
                        {t.contactPage.heroTitle}
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto drop-shadow">
                        {t.contactPage.heroSubtitle}
                    </p>
                </div>
            </section>
            {/* END MODIFIED HERO SECTION */}
            <ContactSection />
            {/* Contact Methods */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t.contactPage.methodsTitle}</h2>
                        <p className="text-xl text-muted-foreground">{t.contactPage.methodsSubtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {methods.map((method, index) => (
                            <ContactMethodCard key={index} method={method} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}


            {/* Office Locations (commented out in original) */}
            {/* <section className="py-20 bg-card"> ... </section> */}

            {/* Business Hours & FAQ (commented out in original) */}
            {/* <section className="py-20"> ... </section> */}

            {/* Emergency Contact
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Immediate Assistance?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Our emergency support team is available for urgent funding deadline issues
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="bg-white text-primary hover:bg-gray-100"
                            data-testid="emergency-call"
                        >
                            <Phone className="mr-2 h-5 w-5" />
                            Emergency Hotline
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-primary"
                            data-testid="emergency-email"
                        >
                            <Mail className="mr-2 h-5 w-5" />
                            Priority Email
                        </Button>
                    </div>
                </div>
            </section>*/}
        </div>
    );
}