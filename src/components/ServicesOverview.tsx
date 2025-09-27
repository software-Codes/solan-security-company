"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Users, 
  Building2, 
  CheckCircle,
  Clock,
  Award,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Personal Security",
    description: "Professional bodyguards and personal protection services",
    features: ["VIP Protection", "Residential Security", "Personal Escorts"]
  },
  {
    icon: Users,
    title: "Event Security",
    description: "Comprehensive security management for all event types",
    features: ["Crowd Control", "Access Management", "Emergency Response"]
  },
  {
    icon: Building2,
    title: "Corporate Security",
    description: "Business protection and asset security solutions",
    features: ["Office Security", "Asset Protection", "Security Consulting"]
  }
];

const trustPoints = [
  { icon: CheckCircle, text: "Licensed & Insured", color: "text-green-600" },
  { icon: Clock, text: "24/7 Availability", color: "text-blue-600" },
  { icon: Award, text: "Experienced Professionals", color: "text-purple-600" }
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              SOLAN Security
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive security solutions tailored to your specific needs, 
            backed by years of experience and professional excellence.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3 bg-background p-4 rounded-xl shadow-sm border">
              <point.icon className={`h-6 w-6 ${point.color}`} />
              <span className="font-medium text-foreground">{point.text}</span>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200 dark:hover:border-orange-800 bg-background">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                </div>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 p-12 rounded-3xl border border-orange-200 dark:border-orange-800/50">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Secure Your Peace of Mind?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our security experts to discuss your specific requirements 
            and receive a customized security solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/book" className="flex items-center gap-2">
                Get Started Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-2 hover:bg-accent"
            >
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}