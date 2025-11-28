import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Check } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";

const emailSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
});

interface NewsletterSubscriptionProps {
    variant?: "compact" | "full";
    className?: string;
}

export default function NewsletterSubscription({
                                                   variant = "full",
                                                   className = ""
                                               }: NewsletterSubscriptionProps) {
    const { language } = useLanguage();
    const translations = useTranslations();
    const t = translations[language];

    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const { toast } = useToast();
    const queryClient = useQueryClient();

    const subscribeMutation = useMutation({
        mutationFn: async (email: string) => {
            const validatedEmail = emailSchema.parse({ email });
            return apiRequest("POST", "/api/newsletter/subscribe", validatedEmail);
        },
        onSuccess: () => {
            setIsSubscribed(true);
            setEmail("");
            toast({
                title: t?.newsletter?.successTitle || "Successfully subscribed!",
                description: t?.newsletter?.successDesc || "Thank you for subscribing to our newsletter.",
            });
            queryClient.invalidateQueries({ queryKey: ["/api/newsletter"] });
        },
        onError: (error: any) => {
            toast({
                title: t?.newsletter?.errorTitle || "Subscription failed",
                description: error.message || t?.newsletter?.errorDesc || "Please try again later.",
                variant: "destructive",
            });
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;

        try {
            emailSchema.parse({ email });
            subscribeMutation.mutate(email);
        } catch (error) {
            if (error instanceof z.ZodError) {
                toast({
                    title: t?.contact?.errorTitle || "Error sending message", // Reuse generic error title
                    description: error.errors[0].message,
                    variant: "destructive",
                });
            }
        }
    };

    // Success state
    if (isSubscribed) {
        return (
            <div className={`flex items-center justify-center text-green-600 dark:text-green-400 ${className}`}>
                <Check className="h-5 w-5 mr-2" />
                <span className="font-medium">
          {t?.newsletter?.successTitle || "Successfully subscribed!"}
        </span>
            </div>
        );
    }

    // Compact variant
    if (variant === "compact") {
        return (
            <form onSubmit={handleSubmit} className={`flex items-center space-x-2 ${className}`} noValidate>
                <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    <Input
                        type="email"
                        placeholder={t?.newsletter?.placeholder || "Enter your email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 pr-4 py-2 text-sm"
                        disabled={subscribeMutation.isPending}
                        data-testid="newsletter-email-input"
                        aria-label={t?.newsletter?.placeholder || "Email address"}
                    />
                </div>
                <Button
                    type="submit"
                    size="sm"
                    disabled={subscribeMutation.isPending || !email.trim()}
                    data-testid="newsletter-subscribe-button"
                >
                    {subscribeMutation.isPending
                        ? t?.newsletter?.subscribing || "Subscribing..."
                        : t?.newsletter?.subscribe || "Subscribe"}
                </Button>
            </form>
        );
    }

    // Full variant
    return (
        <div className={`bg-muted/30 rounded-lg p-6 ${className}`}>
            <div className="text-center mb-4">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t?.newsletter?.title || "Stay Updated"}
                </h3>
                <p className="text-sm text-muted-foreground">
                    {t?.blog?.newsletterDesc ||
                        "Get our latest insights on IPARD funding, business opportunities, and success stories delivered directly to your inbox."}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    <Input
                        type="email"
                        placeholder={t?.newsletter?.placeholder || "Enter your email address"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 pr-4 py-3"
                        disabled={subscribeMutation.isPending}
                        data-testid="newsletter-email-input-full"
                        aria-label={t?.newsletter?.placeholder || "Email address"}
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full py-3"
                    disabled={subscribeMutation.isPending || !email.trim()}
                    data-testid="newsletter-subscribe-button-full"
                >
                    {subscribeMutation.isPending
                        ? t?.newsletter?.subscribing || "Subscribing..."
                        : t?.newsletter?.subscribe || "Subscribe to Newsletterr"}
                </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-3">
                We respect your privacy. Unsubscribe at any time.
                {/* Optional: translate this later via t?.newsletter?.privacyNote */}
            </p>
        </div>
    );
}