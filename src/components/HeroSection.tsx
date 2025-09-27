"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Phone, Star } from "lucide-react";
import { heroSecurityImage } from "../../public/images/images";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/25 bg-[size:20px_20px] opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Hero Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Trust Badge */}
            <Badge className="w-fit bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-950 dark:to-red-950 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800 hover:bg-gradient-to-r hover:from-orange-200 hover:to-red-200 dark:hover:from-orange-900 dark:hover:to-red-900">
              <Star className="w-3 h-3 mr-1" />
              Professional Security Services
            </Badge>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="block text-foreground">Protect Your</span>
                <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                  World
                </span>
                <span className="block text-foreground text-3xl sm:text-4xl lg:text-5xl font-medium mt-2">
                  with SOLAN Security
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Premium security solutions that give you peace of mind. 
                <span className="block mt-2 font-medium text-foreground">
                  Professional • Reliable • Available 24/7
                </span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-7 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 rounded-xl"
              >
                <Link href="/book">
                  Book Security Now
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="px-10 py-7 text-lg font-semibold border-2 hover:bg-accent rounded-xl border-orange-200 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-700"
              >
                <Link href="/services">
                  Our Services
                </Link>
              </Button>
            </div>

            {/* Emergency Contact - Prominent */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 p-6 rounded-2xl border-2 border-red-200 dark:border-red-800/50 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 shadow-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-red-900 dark:text-red-100 mb-1">
                    Emergency Hotline - Available 24/7
                  </p>
                  <Link 
                    href="tel:0789204855"
                    className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent hover:from-red-700 hover:to-orange-700 transition-all"
                  >
                    0789204855
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[600px]">
            {/* Main Image */}
            <div className="relative h-full aspect-[3/4] lg:aspect-auto rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={heroSecurityImage}
                alt="Professional SOLAN Security officer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating Professional Badge */}
            <div className="absolute -top-6 -left-6 bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-xl border-2 border-orange-100 dark:border-orange-900">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">Licensed</p>
                  <p className="text-xs text-muted-foreground">Professional Team</p>
                </div>
              </div>
            </div>

            {/* 24/7 Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-xl border-2 border-red-100 dark:border-red-900">
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  24/7
                </p>
                <p className="text-xs text-muted-foreground font-medium">Always Ready</p>
              </div>
            </div>

            {/* Background Glow Effects */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}