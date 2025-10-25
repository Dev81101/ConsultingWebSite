import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sprout, TrendingUp, HandshakeIcon, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";

export default function ServicesSection() {
  const { language } = useLanguage();
  const t = useTranslations()[language];
  
  const services = [
    {
      title: t.services.ipardTitle,
      description: t.services.ipardDesc,
      icon: Sprout,
      features: [
        t.services.ipardFeature1,
        t.services.ipardFeature2,
        t.services.ipardFeature3
      ],
      color: "text-primary"
    },
    {
      title: t.services.financialTitle,
      description: t.services.financialDesc,
      icon: TrendingUp,
      features: [
        t.services.financialFeature1,
        t.services.financialFeature2,
        t.services.financialFeature3
      ],
      color: "text-chart-2"
    },
    {
      title: t.services.consultingTitle,
      description: t.services.consultingDesc,
      icon: HandshakeIcon,
      features: [
        t.services.consultingFeature1,
        t.services.consultingFeature2,
        t.services.consultingFeature3
      ],
      color: "text-chart-3"
    }
  ];

  return (
    <section className="py-20 bg-background" id="services" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t.services.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-scale group bg-card border-border hover:shadow-lg transition-all duration-300"
              data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="service-title">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid="service-description">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center" data-testid={`service-feature-${featureIndex}`}>
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0 h-auto font-semibold"
                  data-testid="service-learn-more"
                >
                  {t.services.learnMore} <span className="ml-1">→</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
