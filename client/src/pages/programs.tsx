import { useCountry } from "@/lib/country-context";
import { useLanguage } from "@/lib/language-context";
import { usePageContent } from "@/hooks/use-page-content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sprout, Factory, MapPin, Users, FileText, Target, CheckCircle, Euro, Clock, Award } from "lucide-react";

const programs = [
  {
    id: "ipard1",
    title: "IPARD I - Agricultural Investment",
    description: "Support for modernization and investment in agricultural holdings to improve performance and sustainability.",
    icon: Sprout,
    maxAmount: "€200,000",
    support: "70%",
    features: [
      "Farm modernization equipment",
      "Irrigation systems",
      "Storage and processing facilities",
      "Animal welfare improvements"
    ],
    eligibility: [
      "Registered agricultural holding",
      "Minimum farm size requirements",
      "Business plan approval",
      "Environmental compliance"
    ]
  },
  {
    id: "ipard2",
    title: "IPARD II - Processing Facilities",
    description: "Investment in processing and marketing of agricultural and food products to add value and improve market access.",
    icon: Factory,
    maxAmount: "€1,300,000",
    support: "50%",
    features: [
      "Food processing equipment",
      "Quality control systems",
      "Packaging and labeling facilities",
      "Cold storage infrastructure"
    ],
    eligibility: [
      "Food processing business",
      "EU standards compliance",
      "Market analysis documentation",
      "Technical project documentation"
    ]
  },
  {
    id: "ipard3",
    title: "IPARD III - Rural Tourism",
    description: "Diversification into non-agricultural activities including rural tourism, crafts, and services.",
    icon: MapPin,
    maxAmount: "€200,000",
    support: "65%",
    features: [
      "Accommodation facilities",
      "Tourism infrastructure",
      "Cultural activity centers",
      "Recreational facilities"
    ],
    eligibility: [
      "Rural area location",
      "Tourism business plan",
      "Environmental impact assessment",
      "Local community integration"
    ]
  }
];

const financialAid = [
  {
    id: "manufacturing",
    title: "Manufacturing Support",
    description: "Comprehensive support for manufacturing businesses through various grant and subsidy programs.",
    icon: Factory,
    programs: [
      "Equipment modernization grants",
      "Export development support",
      "Innovation and R&D funding",
      "Energy efficiency improvements"
    ]
  },
  {
    id: "tourism",
    title: "Tourism Development",
    description: "Funding opportunities for tourism infrastructure development and service enhancement.",
    icon: MapPin,
    programs: [
      "Tourism infrastructure grants",
      "Hotel and accommodation support",
      "Cultural tourism projects",
      "Eco-tourism initiatives"
    ]
  }
];

const consultingServices = [
  {
    id: "micro",
    title: "Micro Business Consulting",
    description: "Specialized support for small businesses and entrepreneurs starting their journey.",
    icon: Users,
    services: [
      "Business registration assistance",
      "Market entry strategies",
      "Financial planning guidance",
      "Regulatory compliance support"
    ]
  },
  {
    id: "business-plans",
    title: "Business Plan Development",
    description: "Professional business plan creation and refinement services for funding applications.",
    icon: FileText,
    services: [
      "Market analysis and research",
      "Financial projections and modeling",
      "Risk assessment and mitigation",
      "Presentation and documentation"
    ]
  }
];

function ProgramCard({ program, type }: { program: any; type: string }) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300" data-testid={`program-card-${program.id}`}>
      <CardHeader>
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
            <program.icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl" data-testid="program-title">{program.title}</CardTitle>
            {type === "ipard" && (
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Euro className="h-4 w-4 mr-1" />
                  Max: {program.maxAmount}
                </span>
                <span className="flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  Support: {program.support}
                </span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6" data-testid="program-description">
          {program.description}
        </p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center">
              <Target className="h-4 w-4 mr-2" />
              {type === "ipard" ? "Key Features" : type === "financial" ? "Programs" : "Services"}
            </h4>
            <ul className="space-y-2">
              {(program.features || program.programs || program.services)?.map((item: string, index: number) => (
                <li key={index} className="flex items-start text-sm" data-testid={`program-feature-${index}`}>
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {program.eligibility && (
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Eligibility Criteria
              </h4>
              <ul className="space-y-2">
                {program.eligibility.map((item: string, index: number) => (
                  <li key={index} className="flex items-start text-sm" data-testid={`program-eligibility-${index}`}>
                    <CheckCircle className="h-4 w-4 text-chart-2 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="mt-6 pt-6 border-t border-border">
          <Button className="w-full bg-primary hover:bg-primary/90" data-testid="program-apply">
            Learn More & Apply
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Programs() {
  const { country } = useCountry();
  const { language } = useLanguage();
  const { data: pageContent, isLoading } = usePageContent(country, 'programs', language);

  // If we have custom content for this country, show it
  if (pageContent) {
    return (
      <div className="pt-16 min-h-screen bg-background" data-testid="programs-page">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="page-title">
              {pageContent.title}
            </h1>
            <div 
              className="prose prose-lg max-w-none mx-auto"
              dangerouslySetInnerHTML={{ __html: pageContent.content }}
              data-testid="page-content"
            />
          </div>
        </div>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen" data-testid="loading-state">
        <div className="text-lg">Loading programs content...</div>
      </div>
    );
  }

  // Default fallback - use the original program listing if no custom content
  return (
    <div className="pt-16 min-h-screen bg-background" data-testid="programs-page">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-chart-2/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Programs & Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive funding solutions and consulting services to help your business grow and succeed
          </p>
        </div>
      </section>

      {/* IPARD Programs */}
      <section className="py-20" id="ipard" data-testid="ipard-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">IPARD Programs</h2>
            <p className="text-xl text-muted-foreground">
              Access EU funding for agricultural development, processing, and rural tourism
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} type="ipard" />
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-20 bg-card" id="financial-aid" data-testid="financial-aid-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Financial Aid Programs</h2>
            <p className="text-xl text-muted-foreground">
              Support for manufacturing and tourism sectors through various funding mechanisms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {financialAid.map((aid) => (
              <ProgramCard key={aid.id} program={aid} type="financial" />
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20" id="consulting" data-testid="consulting-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Consulting Services</h2>
            <p className="text-xl text-muted-foreground">
              Expert guidance for business development and strategic planning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingServices.map((service) => (
              <ProgramCard key={service.id} program={service} type="consulting" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and let's discuss how we can help your business grow
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-gray-100"
            data-testid="programs-cta"
          >
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
