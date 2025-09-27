"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Clock
} from "lucide-react";
import { solanSecurityLogo } from "../../public/images/images";

const navigation = {
  services: [
    { name: "Personal Security", href: "/services/personal" },
    { name: "Event Security", href: "/services/events" },
    { name: "Corporate Security", href: "/services/corporate" },
    { name: "Consultation", href: "/services/consultation" }
  ],
  company: [
    { name: "About Us", href: "/pages/about-us" },
    { name: "Our Team", href: "/pages/team" },
    { name: "Careers", href: "/pages/careers" },
    { name: "Contact", href: "/pages/contact" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "License Info", href: "/legal/license" }
  ]
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-red-500">
                <Image
                  src={solanSecurityLogo}
                  alt="Solan Security Logo"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">SOLAN</span>
                <span className="text-sm font-semibold text-muted-foreground tracking-wider">SECURITY</span>
              </div>
            </Link>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional security services providing peace of mind through reliable protection solutions for individuals and businesses.
            </p>
            
            {/* Emergency Contact */}
            <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-600" />
                <div>
                  <p className="text-xs text-red-900 dark:text-red-100 font-medium">24/7 Emergency</p>
                  <Link href="tel:0789204855" className="text-lg font-bold text-red-600 hover:text-red-700">
                    0789204855
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Get in Touch</h3>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>P.O BOX 306</p>
                  <p>Meru, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <Link href="mailto:info@solansecurity.com" className="text-sm text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400">
                  info@solansecurity.com
                </Link>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Available 24/7</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-medium text-foreground mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-lg bg-muted hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 text-muted-foreground hover:text-white transition-all group"
                  >
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SOLAN Security. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}