"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Users, 
  Building2, 
  Home, 
  Car, 
  Camera,
  Phone, 
  CheckCircle, 
  Clock,
  Star,
  ArrowRight,
  UserCheck,
  AlertTriangle,
  Eye,
  Lock,
  MessageCircle,
  FileText
} from "lucide-react";
import { heroSecurityImage } from "../../public/images/images";

const services = [
  {
    id: "personal",
    icon: Shield,
    title: "Personal Security",
    subtitle: "VIP & Executive Protection",
    description: "Professional bodyguard services and personal protection for individuals and families with comprehensive threat assessment and risk management.",
    image: heroSecurityImage,
    features: [
      "Personal Bodyguards",
      "VIP Protection",
      "Executive Security",
      "Family Protection",
      "Travel Security",
      "Threat Assessment"
    ],
    popular: true,
    category: "Premium"
  },
  {
    id: "residential",
    icon: Home,
    title: "Residential Security",
    subtitle: "Home & Property Protection",
    description: "Comprehensive security solutions for homes, estates, and residential properties with 24/7 monitoring and rapid response capabilities.",
    image: heroSecurityImage,
    features: [
      "24/7 Security Guards",
      "Access Control",
      "Perimeter Security",
      "CCTV Monitoring",
      "Alarm Response",
      "Property Patrols"
    ],
    category: "Standard"
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Security",
    subtitle: "Business & Office Protection",
    description: "Professional security services for businesses, offices, and commercial properties including risk assessment and security consulting.",
    image: heroSecurityImage,
    features: [
      "Office Security",
      "Asset Protection",
      "Employee Safety",
      "Access Management",
      "Security Consulting",
      "Risk Assessment"
    ],
    category: "Business"
  },
  {
    id: "events",
    icon: Users,
    title: "Event Security",
    subtitle: "Crowd Control & Management",
    description: "Specialized security services for events, conferences, and public gatherings with experienced crowd control and emergency response teams.",
    image: heroSecurityImage,
    features: [
      "Crowd Control",
      "VIP Management",
      "Access Control",
      "Emergency Response",
      "Security Planning",
      "Venue Protection"
    ],
    category: "Event"
  },
  {
    id: "mobile",
    icon: Car,
    title: "Mobile Patrols",
    subtitle: "Area Surveillance & Response",
    description: "Mobile security patrols for multiple locations with rapid response services and comprehensive area surveillance coverage.",
    image: heroSecurityImage,
    features: [
      "Regular Patrols",
      "Rapid Response",
      "Area Surveillance",
      "Incident Reports",
      "Emergency Backup",
      "Multi-site Coverage"
    ],
    category: "Mobile"
  },
  {
    id: "surveillance",
    icon: Camera,
    title: "CCTV & Surveillance",
    subtitle: "Advanced Monitoring Systems",
    description: "Professional CCTV installation, monitoring, and surveillance system management with modern technology and remote access capabilities.",
    image: heroSecurityImage,
    features: [
      "CCTV Installation",
      "24/7 Monitoring",
      "Remote Access",
      "Recording Systems",
      "Maintenance Support",
      "System Upgrades"
    ],
    category: "Technology"
  }
];

const whyChooseUs = [
  {
    icon: UserCheck,
    title: "Licensed Professionals",
    description: "All our security personnel are properly licensed, trained, and background-verified for your peace of mind"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock security services with immediate emergency response and continuous support"
  },
  {
    icon: Eye,
    title: "Advanced Technology",
    description: "State-of-the-art security equipment, modern surveillance systems, and cutting-edge monitoring technology"
  },
  {
    icon: Lock,
    title: "Proven Track Record",
    description: "Over 10 years of successful security service delivery with 500+ satisfied clients across Meru"
  }
];

export default function ServicesContent() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/25 bg-[size:20px_20px] opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 md:mb-8 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-950 dark:to-red-950 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800">
            <Star className="w-3 h-3 mr-1" />
            Professional Security Services
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Security Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
            From personal protection to corporate security, we provide tailored solutions 
            that meet your specific safety and security requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/pages/book" className="flex items-center gap-2">
                Get Quote Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-2 hover:bg-accent"
            >
              <Link href="/contact">
                Consult Expert
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Our Security{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive protection solutions designed to meet your unique security needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-orange-200 dark:hover:border-orange-800 overflow-hidden">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {service.popular && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      Most Popular
                    </Badge>
                  )}
                  
                  <Badge className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
                    {service.category}
                  </Badge>
                  
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl md:text-2xl font-bold text-foreground">{service.title}</CardTitle>
                    <p className="text-orange-600 dark:text-orange-400 font-medium text-sm md:text-base">{service.subtitle}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 md:space-y-6">
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                    <Button 
                      asChild 
                      className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all"
                    >
                      <Link href="/pages/book" className="flex items-center justify-center gap-2">
                        <FileText className="h-4 w-4" />
                        Request Quote
                      </Link>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="flex-1 hover:bg-accent transition-all"
                    >
                      <Link href={`/pages/services/${service.id}`} className="flex items-center justify-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                SOLAN Security
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine experience, technology, and dedication to deliver superior security services that exceed expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center p-4 md:p-6 hover:shadow-xl transition-all group border-2 hover:border-orange-200 dark:hover:border-orange-800">
                <CardContent className="p-0 space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency & CTA */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 md:h-8 md:w-8 text-red-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Need Immediate Security?</h2>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Our emergency response team is available 24/7 to handle urgent security situations. 
                Don't wait when your safety is at risk - contact us immediately.
              </p>

              <div className="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-2xl border-2 border-red-200 dark:border-red-800 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="p-2 md:p-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-medium text-red-900 dark:text-red-100">24/7 Emergency Hotline</p>
                    <Link 
                      href="tel:0789204855" 
                      className="text-2xl md:text-3xl font-bold text-red-600 hover:text-red-700 transition-colors"
                    >
                      0789204855
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Ready to Get Protected?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Contact our security experts for a free consultation and customized security plan tailored to your specific needs and requirements.
              </p>
              
              <div className="space-y-3 md:space-y-4">
                <Button 
                  asChild 
                  size="lg"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/pages/book" className="flex items-center justify-center gap-2">
                    <FileText className="h-5 w-5" />
                    Book Security Service
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="w-full py-6 text-lg font-semibold border-2 hover:bg-accent transition-all"
                >
                  <Link href="/pages/contact" className="flex items-center justify-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Get Free Consultation
                  </Link>
                </Button>
              </div>

              <div className="text-center text-sm text-muted-foreground pt-4 border-t border-border/50">
                <p>Available 24/7 | Licensed & Insured | Serving Meru County</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}