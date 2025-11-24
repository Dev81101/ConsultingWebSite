import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, TrendingUp, CheckCircle, Star, Globe, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";

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
    position: "",
    description: "",
    image: "",
    expertise: [""]
  },
  {
    name: "Nikola Nikoloski",
    position: "",
    description: "",
    image: "",
    expertise: [""]
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
  const { language } = useLanguage();
  const t = useTranslations()[language];
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
                    <h2 className="text-4xl font-bold text-foreground mb-6">Who We Are</h2>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        <strong className="text-foreground">WVP PLUS CONSULTING</strong> is part of the
                        Austrian <strong className="text-foreground">WVP GROUP</strong>, whose primary focus is financial
                        consulting. Founded in 1985 in Graz, Austria, the group now operates in 10 Southeastern European countries
                        and has been active in Macedonia since 2005.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Since its establishment in 2019, WVP PLUS CONSULTING has aimed to provide full financial access to Macedonian
                        companies and citizens. Over five years, we have supported more than <strong className="text-foreground">3,000 clients</strong>,
                        facilitated over <strong className="text-foreground">€80M</strong> in loans, and secured more than
                        <strong className="text-foreground"> €25M</strong> in grants.
                    </p>

                    <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">
                        Regional Development
                    </h3>

                    <ul className="space-y-2 text-muted-foreground">
                        <li>• 2022 — WVP PLUS CONSULTING LLC Serbia</li>
                        <li>• 2024 — WFP PLUS CONSULTING LLC Bosnia</li>
                        <li>• 2024 — WVP ACCOUNTING LLC Macedonia (tax, accounting, auditing)</li>
                    </ul>
                </div>
            </div>

            {/* 🔴 FULL-WIDTH RED SECTION */}
            <div className="w-full bg-primary mt-12 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <h3 className="text-2xl font-bold text-white mb-6">What We Offer</h3>

                    {/* FINANCE */}
                    <div className="mb-8">
                        <h4 className="font-semibold text-lg text-gray-300 mb-2">
                            Access to Finance:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-100 text-base">
                            <span>• Banking credit products</span>
                            <span>• Leasing</span>
                            <span>• Factoring</span>
                            <span>• Government support instruments</span>
                            <span>• Non-banking financial support</span>
                            <span>• Mergers & acquisitions</span>
                            <span>• Equity crowdfunding</span>
                            <span>• Business angels</span>
                            <span>• Capital instruments</span>
                            <span>• Grants / co-financing</span>
                        </div>
                    </div>

                    {/* MARKET ACCESS */}
                    <div className="mb-8">
                        <h4 className="font-semibold text-lg text-gray-300 mb-2">
                            Market Access:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-100 text-base">
                            <span>• Company digitalization</span>
                            <span>• Energy efficiency audit (PiNE model)</span>
                            <span>• Circular economy development</span>
                            <span>• Employee protection matrix</span>
                            <span>• Export strategy & planning</span>
                            <span>• Product design & development</span>
                            <span>• Marketing strategy & branding</span>
                            <span>• Financial capacity diagnostics</span>
                        </div>
                    </div>

                    {/* REPORTS */}
                    <div>
                        <h4 className="font-semibold text-lg text-gray-300 mb-2">
                            Specialized Reports:
                        </h4>
                        <ul className="space-y-1 text-gray-100">
                            <li>• Business plans</li>
                            <li>• Investment programs</li>
                            <li>• Due diligence</li>
                            <li>• Cost-benefit analysis</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* FINAL PARAGRAPH BELOW RED BLOCK */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Our mission is to deeply understand each company, identify its financial and market needs, and connect it with
                    the right instruments to achieve real, measurable results. With over
                    <strong className="text-foreground"> 25 experts</strong>, we ensure top-level consulting and long-term partnerships.
                </p>
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
                        Our Values
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        The principles that drive our work and shape our commitment to excellence.
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
                                        {value.title}
                                    </h3>

                                    {/* DESCRIPTION */}
                                    <p className="text-muted-foreground leading-relaxed" data-testid="value-description">
                                        {value.description}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300" data-testid={`team-member-${index}`}>
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-250 h-28 rounded-full mx-auto mb-4 object-cover"
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

      {/* Company Timeline
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our company's growth and success
            </p>
          </div>
          <div className="relative">

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
                  
                   Timeline dot
                  <div className="hidden lg:block">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Certifications & Accreditations
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
      */}

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
              className="bg-white text-black hover:bg-gray-300 hover:text-primary"
              data-testid="careers-button"
            >
              View Open Positions
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-black hover:bg-gray-300 hover:text-primary"
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
