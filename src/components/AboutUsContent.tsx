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
  Award,
  Clock,
  CheckCircle,
  Phone,
  ArrowRight,
  Target,
  Eye,
  Heart,
  Star,
  MapPin,
} from "lucide-react";
import { heroSecurityImage } from "../../public/images/images";

const stats = [
  { number: "500+", label: "Clients Protected", icon: Users },
  { number: "24/7", label: "Emergency Response", icon: Clock },
  { number: "10+", label: "Years Experience", icon: Award },
  { number: "100%", label: "Licensed Team", icon: Shield },
];

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Your safety is our top priority in every service we provide",
  },
  {
    icon: Heart,
    title: "Trust & Integrity",
    description:
      "Building lasting relationships through honest, reliable service",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Delivering professional security solutions that exceed expectations",
  },
  {
    icon: Users,
    title: "Team Commitment",
    description: "Dedicated professionals working together for your protection",
  },
];

const certifications = [
  "Licensed Security Provider",
  "Certified Security Personnel",
  "Emergency Response Trained",
  "Insurance Coverage",
  "Background Verified Team",
];

export default function AboutUsContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/25 bg-[size:20px_20px] opacity-30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 md:space-y-8">
              <Badge className="w-fit bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-950 dark:to-red-950 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800">
                <Star className="w-3 h-3 mr-1" />
                About SOLAN Security
              </Badge>

              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Protecting What{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Matters Most
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  For over a decade, SOLAN Security has been Meru's trusted
                  partner in professional security services, safeguarding
                  families, businesses, and communities with unwavering
                  dedication.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/book" className="flex items-center gap-2">
                    Get Protected Today
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg font-semibold border-2 hover:bg-accent"
                >
                  <Link href="/pages/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={heroSecurityImage}
                  alt="SOLAN Security professional team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white dark:bg-slate-900 rounded-2xl p-4 md:p-6 shadow-xl border">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    10+
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium">
                    Years Serving Meru
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0 space-y-3 md:space-y-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                    <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-foreground">
                      {stat.number}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 md:h-8 md:w-8 text-orange-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Our Mission
                </h2>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                To provide exceptional security services that protect lives,
                property, and peace of mind. We are committed to delivering
                professional, reliable, and innovative security solutions
                tailored to meet the unique needs of our clients in Meru and
                beyond.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-3">
                <Eye className="h-6 w-6 md:h-8 md:w-8 text-red-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Our Vision
                </h2>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                To be the leading security company in Kenya, recognized for our
                unwavering commitment to excellence, innovation, and customer
                satisfaction. We envision a safer community where everyone can
                live and work with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are
              as a security company
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-4 md:p-6 hover:shadow-xl transition-all group border-2 hover:border-orange-200 dark:hover:border-orange-800"
              >
                <CardContent className="p-0 space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <value.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
              <MapPin className="h-6 w-6 md:h-8 md:w-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Find Us in Meru
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Visit our office or contact us for security services across Meru County and beyond
            </p>
            
            {/* Address Card */}
            <div className="inline-flex items-center gap-4 bg-orange-50 dark:bg-orange-950/20 p-4 md:p-6 rounded-2xl border border-orange-200 dark:border-orange-800 mb-8">
              <MapPin className="h-6 w-6 text-orange-600" />
              <div className="text-left">
                <p className="text-base md:text-lg font-semibold text-foreground">SOLAN Security Company</p>
                <p className="text-sm md:text-base text-muted-foreground">P.O BOX 306, MERU</p>
                <p className="text-sm md:text-base text-muted-foreground">Kianjai, Meru County, Kenya</p>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="max-w-6xl mx-auto">
            <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-100 dark:border-orange-900">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.816602108617!2d37.636287675882215!3d0.05317436436924515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178821c955e1d7eb%3A0xedd9f8fcec72a8a3!2sKianjai!5e0!3m2!1sen!2ske!4v1759005831184!5m2!1sen!2ske"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="SOLAN Security Company Location - Kianjai, Meru"
              />
            </div>
            
            {/* Contact Info Below Map */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-background rounded-xl border shadow-sm">
                <Phone className="h-8 w-8 mx-auto mb-3 text-red-600" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <Link href="tel:0789204855" className="text-red-600 hover:text-red-700 font-medium">
                  0789204855
                </Link>
              </div>
              
              <div className="text-center p-6 bg-background rounded-xl border shadow-sm">
                <MapPin className="h-8 w-8 mx-auto mb-3 text-orange-600" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground text-sm">P.O BOX 306, MERU<br />Kianjai, Meru County</p>
              </div>
              
              <div className="text-center p-6 bg-background rounded-xl border shadow-sm">
                <Clock className="h-8 w-8 mx-auto mb-3 text-green-600" />
                <h3 className="font-semibold mb-2">Available</h3>
                <p className="text-green-600 font-medium">24/7 Emergency<br />Response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-foreground">
              Licensed & Certified
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to professionalism is backed by proper licensing
              and certifications
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-background p-4 md:p-5 rounded-xl border shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="font-medium text-foreground text-sm md:text-base">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Experience Professional Security?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Join hundreds of satisfied clients who trust SOLAN Security with
              their protection needs. Contact us today for a personalized
              security consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/book">Book Security Service</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-semibold border-2 hover:bg-accent"
              >
                <Link href="/pages/services">View Our Services</Link>
              </Button>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 dark:bg-red-950/30 p-4 md:p-6 rounded-2xl border border-red-200 dark:border-red-800 inline-block">
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
                <div>
                  <p className="text-sm text-red-900 dark:text-red-100 font-medium">
                    24/7 Emergency Hotline
                  </p>
                  <Link
                    href="tel:0789204855"
                    className="text-xl md:text-2xl font-bold text-red-600 hover:text-red-700"
                  >
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