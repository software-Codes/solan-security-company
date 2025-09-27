"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  ArrowLeft,
  Calendar,
  MessageCircle
} from "lucide-react";
import { heroSecurityImage } from "../../public/images/images";

const servicesData = {
  personal: {
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

    category: "Premium",
    details: {
      overview: "Our personal security service provides elite protection for high-profile individuals, executives, and families. Our trained professionals ensure your safety through comprehensive risk assessment, threat analysis, and proactive security measures.",
      included: [
        "Dedicated security personnel",
        "Risk assessment and planning",
        "24/7 protection coverage",
        "Emergency response protocols",
        "Discreet professional service",
        "Regular security briefings"
      ],
      process: [
        "Initial consultation and threat assessment",
        "Customized security plan development", 
        "Personnel assignment and briefing",
        "Implementation and monitoring",
        "Regular reviews and adjustments"
      ]
    }
  },
  residential: {
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

    category: "Standard",
    details: {
      overview: "Protect your home and family with our comprehensive residential security services. We provide round-the-clock protection, monitoring, and rapid response to ensure your property remains secure.",
      included: [
        "Professional security guards",
        "Perimeter monitoring",
        "Access control systems",
        "CCTV surveillance",
        "Alarm system integration",
        "Regular patrol services"
      ],
      process: [
        "Property security assessment",
        "Security plan customization",
        "System installation and setup",
        "Guard deployment and training",
        "Ongoing monitoring and support"
      ]
    }
  },
  corporate: {
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

    category: "Business",
    details: {
      overview: "Secure your business operations with our comprehensive corporate security solutions. We protect your assets, employees, and business continuity through professional security management.",
      included: [
        "Trained security personnel",
        "Access control systems",
        "Asset protection protocols",
        "Employee safety measures",
        "Security consulting services",
        "Emergency response planning"
      ],
      process: [
        "Business security audit",
        "Risk analysis and planning",
        "Security system implementation",
        "Staff training and deployment",
        "Continuous monitoring and improvement"
      ]
    }
  },
  events: {
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

    category: "Event",
    details: {
      overview: "Ensure your events run smoothly and safely with our professional event security services. From small gatherings to large conferences, we provide comprehensive security management.",
      included: [
        "Event security planning",
        "Crowd control management",
        "VIP protection services",
        "Access point monitoring",
        "Emergency response team",
        "Post-event reporting"
      ],
      process: [
        "Event security consultation",
        "Venue assessment and planning",
        "Security team deployment",
        "Real-time monitoring and management",
        "Post-event analysis and reporting"
      ]
    }
  },
  mobile: {
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

    category: "Mobile",
    details: {
      overview: "Our mobile patrol services provide flexible security coverage for multiple locations with rapid response capabilities and comprehensive area surveillance.",
      included: [
        "Regular patrol schedules",
        "Rapid emergency response",
        "Multi-location coverage",
        "Detailed incident reporting",
        "GPS tracking and monitoring",
        "24/7 dispatch service"
      ],
      process: [
        "Area assessment and route planning",
        "Patrol schedule development",
        "Mobile unit deployment",
        "Real-time monitoring and reporting",
        "Regular service reviews"
      ]
    }
  },
  surveillance: {
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

    category: "Technology",
    details: {
      overview: "Advanced surveillance solutions with professional CCTV installation, monitoring, and management services using cutting-edge technology for maximum security coverage.",
      included: [
        "Professional CCTV installation",
        "24/7 monitoring services",
        "Remote access capabilities",
        "High-quality recording systems",
        "Regular maintenance support",
        "System upgrades and updates"
      ],
      process: [
        "Site survey and system design",
        "Professional installation",
        "System configuration and testing",
        "Monitoring service activation",
        "Ongoing maintenance and support"
      ]
    }
  }
};

interface ServiceDetailContentProps {
  serviceId: string;
}

export default function ServiceDetailContent({ serviceId }: ServiceDetailContentProps) {
  const service = servicesData[serviceId as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Service Not Found</h1>
          <p className="text-muted-foreground">The requested service could not be found.</p>
          <Button asChild>
            <Link href="/pages/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/25 bg-[size:20px_20px] opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <Button asChild variant="outline" size="sm">
                  <Link href="/pages/services" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Services
                  </Link>
                </Button>
                <Badge className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-950 dark:to-red-950 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800">
                  {service.category}
                </Badge>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">{service.title}</h1>
                    <p className="text-xl text-orange-600 dark:text-orange-400 font-medium">{service.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {service.details.overview}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/book" className="flex items-center gap-2">
                    Book This Service
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-6 text-lg font-semibold border-2 hover:bg-accent"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Get Quote
                  </Link>
                </Button>
              </div>


            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* What's Included */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                What's Included
              </h3>
              <div className="space-y-4">
                {service.details.included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Our Process */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Calendar className="h-6 w-6 text-orange-600" />
                Our Process
              </h3>
              <div className="space-y-4">
                {service.details.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-foreground pt-1">{step}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-50 dark:bg-red-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Need This Service Urgently?</h2>
            <p className="text-xl text-muted-foreground">
              Our emergency response team is available 24/7 for immediate security deployment.
            </p>
            
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border-2 border-red-200 dark:border-red-800 shadow-lg inline-block">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-red-900 dark:text-red-100 mb-1">Emergency Hotline</p>
                  <Link href="tel:0789204855" className="text-3xl font-bold text-red-600 hover:text-red-700 transition-colors">
                    0789204855
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}