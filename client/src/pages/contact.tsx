import ContactSection from "@/components/contact-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Globe, Users } from "lucide-react";

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

const businessHours = [
  { day: "Monday - Friday", hours: "08:00 - 17:00" },
  { day: "Saturday", hours: "09:00 - 13:00" },
  { day: "Sunday", hours: "Closed" }
];

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our consultants",
    details: "+381 11 123 4567",
    availability: "Mon-Fri 8:00-17:00"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed responses to your questions",
    details: "info@wvpplus.rs",
    availability: "24/7 response within 24 hours"
  },
  {
    icon: Users,
    title: "In-Person Consultation",
    description: "Schedule a face-to-face meeting",
    details: "Available in all offices",
    availability: "By appointment only"
  },
  {
    icon: Globe,
    title: "Online Consultation",
    description: "Video calls for remote clients",
    details: "Zoom, Teams, or preferred platform",
    availability: "Flexible scheduling"
  }
];

const faqs = [
  {
    question: "How long does the IPARD application process take?",
    answer: "The typical IPARD application process takes 3-6 months from initial consultation to funding approval, depending on the complexity of your project and completeness of documentation."
  },
  {
    question: "What documents do I need to prepare for funding applications?",
    answer: "Required documents typically include business registration, financial statements, project documentation, environmental permits, and a detailed business plan. We provide a complete checklist during consultation."
  },
  {
    question: "Do you provide support for businesses outside Serbia?",
    answer: "While our primary focus is on Serbian businesses, we do provide consulting services for international companies looking to invest in Serbia or access EU funding programs."
  },
  {
    question: "What are your consultation fees?",
    answer: "We offer free initial consultations to assess your project. Our service fees are transparent and discussed upfront, typically structured as a percentage of successfully secured funding."
  }
];

function OfficeCard({ office }: { office: typeof offices[0] }) {
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
                  Headquarters
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
          Get Directions
        </Button>
      </CardContent>
    </Card>
  );
}

function ContactMethodCard({ method }: { method: typeof contactMethods[0] }) {
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
  return (
    <div className="pt-16 min-h-screen bg-background" data-testid="contact-page">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-chart-2/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to take your business to the next level? Get in touch with our expert consultants today
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the most convenient way to reach our team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <ContactMethodCard key={index} method={method} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Office Locations */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-muted-foreground">
              Visit us at any of our convenient locations across Serbia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {offices.map((office, index) => (
              <OfficeCard key={index} office={office} />
            ))}
          </div>
          
          {/* Map Placeholder */}
          <Card className="overflow-hidden">
            <div className="h-64 bg-muted flex items-center justify-center" data-testid="map-placeholder">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map showing all office locations</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Click on any office card above to get directions
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
                <Clock className="h-8 w-8 text-primary mr-3" />
                Business Hours
              </h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0" data-testid={`business-hours-${index}`}>
                        <span className="font-medium text-foreground">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-foreground">
                      <strong>Emergency Support:</strong> For urgent matters outside business hours, 
                      please email us and we'll respond as soon as possible.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} data-testid={`faq-${index}`}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-3" data-testid="faq-question">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground" data-testid="faq-answer">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
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
      </section>
    </div>
  );
}
