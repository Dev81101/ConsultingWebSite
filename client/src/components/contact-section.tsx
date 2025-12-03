import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";
import { Phone, Mail, MapPin } from "lucide-react";
import { z } from "zod";

type ContactFormData = z.infer<typeof insertContactSubmissionSchema>;

// Placeholder for your Google Maps Embed URL
// 🚨 IMPORTANT: Replace this with the actual embed URL you generate from Google Maps.
// Example: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345!2d21.72123!3d41.6086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ5JzAxLjEiTiAyMcKwNDMnMTkuMCJF!5e0!3m2!1sen!2smk!4v1678888888888!5m2!1sen!2smk"
const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5516086937664!2d21.4312892!3d41.9961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13543d8393e8e195%3A0x1d37443831776595!2sSkopje%2C%20North%20Macedonia!5e0!3m2!1sen!2smk!4v1703276634567!5m2!1sen!2smk";

export default function ContactSection() {
    const { language } = useLanguage();
    const t = useTranslations()[language];
    const { toast } = useToast();
    const queryClient = useQueryClient();

    const form = useForm<ContactFormData>({
        resolver: zodResolver(insertContactSubmissionSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            serviceInterest: "",
            message: "",
        },
    });

    const contactMutation = useMutation({
        mutationFn: async (data: ContactFormData) => {
            return await apiRequest("POST", "/api/contact", data);
        },
        onSuccess: () => {
            toast({
                title: t.contact.successTitle,
                description: t.contact.successDesc,
            });
            form.reset();
        },
        onError: (error) => {
            toast({
                title: t.contact.errorTitle,
                description: t.contact.errorDesc,
                variant: "destructive",
            });
        },
    });

    const onSubmit = (data: ContactFormData) => {
        contactMutation.mutate(data);
    };

    return (
        <section className="py-20 bg-card" id="contact" data-testid="contact-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* MAP SECTION (Left Column) */}
                    <div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">



                            <Card className="overflow-hidden">
                                {/* 💡 REPLACEMENT: Google Maps Iframe */}
                                <div className="h-[32rem]" data-testid="map-container">
                                    <iframe
                                        src={GOOGLE_MAPS_EMBED_URL}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={false}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Office Location Map"
                                    ></iframe>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* CONTACT FORM (Right Column) */}
                    <Card className="bg-background border-border">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-semibold text-foreground mb-6">{t.contact.formTitle}</h3>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="firstName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>{t.contact.firstName}</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Your Firstame" {...field} data-testid="input-firstName" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="lastName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>{t.contact.lastName}</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Your Lastname" {...field} data-testid="input-lastName" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{t.contact.emailLabel}</FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder="email@example.com" {...field} data-testid="input-email" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />



                                    {/* Service Interest Field (commented out) */}
                                    {/* ... */}

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>{t.contact.message}</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        rows={4}
                                                        placeholder={t.contact.messagePlaceholder}
                                                        {...field}
                                                        data-testid="textarea-message"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                                        disabled={contactMutation.isPending}
                                        data-testid="button-submit"
                                    >
                                        {contactMutation.isPending ? t.contact.sending : t.contact.send}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}