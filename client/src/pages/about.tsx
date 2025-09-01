import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, TrendingUp, CheckCircle, Star, Globe, Calendar } from "lucide-react";

const teamMembers = [
  {
    name: "Marija Stojanović",
    position: "CEO & Founder",
    description: "20+ years in financial consulting and EU funding programs",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    expertise: ["IPARD Programs", "Strategic Planning", "Business Development"]
  },
  {
    name: "Nikola Petrović",
    position: "Senior Financial Advisor",
    description: "Expert in manufacturing and tourism sector funding",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    expertise: ["Manufacturing Grants", "Financial Analysis", "Risk Assessment"]
  },
  {
    name: "Ana Jovanović",
    position: "Agricultural Consultant",
    description: "Specialist in rural development and agricultural modernization",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    expertise: ["Rural Development", "Agricultural Policy", "Sustainability"]
  },
  {
    name: "Stefan Milosavljević",
    position: "Business Plan Specialist",
    description: "Expert in business plan development and market analysis",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    expertise: ["Business Planning", "Market Research", "Financial Modeling"]
  }
];

const companyValues = [
  {
    icon: Target,
    title: "Results-Oriented",
    description: "We focus on delivering measurable outcomes and tangible value to our clients"
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We build long-term partnerships based on trust"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards of professionalism and expertise"
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "We leverage the latest technologies and methodologies to drive success"
  }
];

const milestones = [
  {
    year: "2015",
    title: "Company Founded",
    description: "WVP Plus Consulting established with focus on EU funding programs"
  },
  {
    year: "2017",
    title: "First €1M Secured",
    description: "Reached milestone of €1 million in secured funding for clients"
  },
  {
    year: "2020",
    title: "100+ Projects",
    description: "Successfully completed over 100 funding projects across various sectors"
  },
  {
    year: "2023",
    title: "Regional Expansion",
    description: "Expanded services across the Balkans region"
  },
  {
    year: "2024",
    title: "€86M+ Secured",
    description: "Achieved record year with over €86 million secured for clients"
  }
];

const certifications = [
  "EU IPARD Certified Consultant",
  "ISO 9001:2015 Quality Management",
  "Serbian Chamber of Commerce Member",
  "Financial Advisory License",
  "Rural Development Specialist Certification"
];

export default function About() {
  return (
    <div className="pt-16 min-h-screen bg-background" data-testid="about-page">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-chart-2/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About WVP Plus Consulting
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the way in financial consulting and EU funding solutions for agriculture, 
              tourism, and manufacturing sectors since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Founded in 2015 with a vision to bridge the gap between ambitious businesses and 
                  available funding opportunities, WVP Plus Consulting has grown to become one of 
                  Serbia's most trusted financial advisory firms.
                </p>
                <p className="text-lg leading-relaxed">
                  Our expertise spans across IPARD programs, manufacturing grants, tourism development 
                  funding, and comprehensive business consulting. We've successfully helped over 350 
                  businesses secure more than €86 million in funding, transforming ideas into thriving enterprises.
                </p>
                <p className="text-lg leading-relaxed">
                  What sets us apart is our deep understanding of both local market dynamics and 
                  international funding mechanisms. Our team combines decades of experience in 
                  financial consulting, agricultural development, and business strategy.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Professional team meeting"
                className="rounded-lg shadow-lg w-full"
                data-testid="about-hero-image"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">9</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300" data-testid={`value-card-${index}`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="value-title">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid="value-description">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20" id="team" data-testid="team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300" data-testid={`team-member-${index}`}>
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
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
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs" data-testid={`team-skill-${skillIndex}`}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our company's growth and success
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20 hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-12`}
                  data-testid={`milestone-${index}`}
                >
                  <div className="flex-1 text-center lg:text-left">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Calendar className="h-5 w-5 text-primary mr-2" />
                          <span className="text-primary font-bold text-lg" data-testid="milestone-year">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3" data-testid="milestone-title">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground" data-testid="milestone-description">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Accreditations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Certifications & Accreditations
            </h2>
            <p className="text-xl text-muted-foreground">
              Recognized expertise and professional qualifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300" data-testid={`certification-${index}`}>
                <CardContent className="p-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-chart-2 mr-4 flex-shrink-0" />
                  <span className="text-foreground font-medium">{cert}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground" id="careers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for talented professionals to join our growing team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-gray-100"
              data-testid="careers-button"
            >
              View Open Positions
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              data-testid="contact-us-button"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
