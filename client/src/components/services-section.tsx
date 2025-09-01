import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sprout, TrendingUp, HandshakeIcon, CheckCircle } from "lucide-react";

const services = [
  {
    title: "IPARD Programs",
    description: "Access EU funding up to €1.3M for agricultural investments, processing facilities, and rural development projects.",
    icon: Sprout,
    features: [
      "IPARD I - Agricultural Investment",
      "IPARD II - Processing Modernization", 
      "IPARD III - Rural Tourism"
    ],
    color: "text-primary"
  },
  {
    title: "Financial Aid",
    description: "Comprehensive support for manufacturing and tourism sectors with grants, subsidies, and favorable loans.",
    icon: TrendingUp,
    features: [
      "Manufacturing Support Programs",
      "Tourism Development Grants",
      "Export Promotion Funding"
    ],
    color: "text-chart-2"
  },
  {
    title: "Business Consulting",
    description: "Expert guidance for micro businesses and comprehensive business plan development services.",
    icon: HandshakeIcon,
    features: [
      "Micro Business Consulting",
      "Business Plan Development",
      "Strategic Planning"
    ],
    color: "text-chart-3"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background" id="services" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Comprehensive Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From IPARD funding to business consulting, we provide end-to-end support for your growth journey
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
                  Learn More <span className="ml-1">→</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
