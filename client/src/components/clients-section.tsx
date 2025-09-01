import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const clients = [
  "AgroTech", "TourSerbia", "FoodPro", "ManuTech", "RuralEco", "OrganicFarm"
];

const testimonials = [
  {
    name: "Marko Petrović",
    position: "CEO, AgroTech Solutions",
    content: "WVP Plus helped us secure €800,000 in IPARD funding for our agricultural modernization project. Their expertise was invaluable.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5
  },
  {
    name: "Ana Nikolić",
    position: "Founder, Mountain Retreat",
    content: "Excellent support in developing our rural tourism business. The team guided us through every step of the funding process.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5
  },
  {
    name: "Stefan Jovanović",
    position: "Director, ManuPro Ltd",
    content: "Professional business plan development service. Their financial projections were accurate and helped us secure bank financing.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5
  }
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-card" id="clients" data-testid="clients-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Trusted by Leading Businesses</h2>
          <p className="text-xl text-muted-foreground">
            We've helped hundreds of companies across agriculture, tourism, and manufacturing sectors
          </p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-16">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="client-logo bg-muted/20 rounded-lg p-4 h-20 flex items-center justify-center hover:bg-muted/30 transition-colors duration-300"
              data-testid={`client-logo-${client.toLowerCase()}`}
            >
              <span className="text-muted-foreground font-semibold">{client}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-background border-border hover:shadow-lg transition-shadow duration-300"
              data-testid={`testimonial-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4" data-testid="testimonial-content">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                    data-testid="testimonial-avatar"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground" data-testid="testimonial-name">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-testid="testimonial-position">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
