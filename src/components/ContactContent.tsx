"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Star,
  MessageCircle,
  User,
  Building,
  AlertCircle,
  Loader2
} from "lucide-react";

// Import our services
import { emailService, type ContactFormData } from "@/lib/emailService";
import { validateContactForm, validateField, sanitizeFormData, type ValidationError } from "@/utils/validationUtils";

export default function ContactContent() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Handle input changes with real-time validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear submit status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }

    // Real-time validation for the current field
    const fieldError = validateField(name as keyof ContactFormData, value);
    setFieldErrors(prev => ({
      ...prev,
      [name]: fieldError || ''
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Sanitize form data
      const sanitizedData = sanitizeFormData(formData);
      
      // Validate entire form
      const validation = validateContactForm(sanitizedData);
      
      if (!validation.isValid) {
        // Update field errors
        const newFieldErrors: Record<string, string> = {};
        validation.errors.forEach(error => {
          newFieldErrors[error.field] = error.message;
        });
        setFieldErrors(newFieldErrors);
        
        setSubmitStatus({
          type: 'error',
          message: 'Please fix the errors below before submitting.'
        });
        return;
      }

      // Clear any existing field errors
      setFieldErrors({});

      // Send email using EmailJS
      const result = await emailService.sendContactEmail(sanitizedData);
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: ""
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message
        });
      }

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again or contact us directly at 0723128349.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form and status
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
    setFieldErrors({});
    setSubmitStatus({ type: null, message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "0723128349",
      secondary: "24/7 Emergency Hotline",
      href: "tel:0723128349",
      color: "text-red-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@solansecurity.com",
      secondary: "We'll respond within 24 hours",
      href: "mailto:info@solansecurity.com",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "P.O BOX 306, MERU",
      secondary: "Kianjai, Meru County, Kenya",
      href: "#location",
      color: "text-orange-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "24/7 Available",
      secondary: "Emergency services anytime",
      href: null,
      color: "text-green-600"
    }
  ];

  const services = [
    "Personal Security",
    "Residential Security", 
    "Corporate Security",
    "Event Security",
    "Mobile Patrols",
    "CCTV & Surveillance",
    "Security Consultation",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/25 bg-[size:20px_20px] opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 md:mb-8 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-950 dark:to-red-950 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800">
            <MessageCircle className="w-3 h-3 mr-1" />
            Get In Touch
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Contact{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              SOLAN Security
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
            Ready to secure your peace of mind? Get in touch with our security experts 
            for personalized consultation and immediate assistance.
          </p>

          {/* Emergency Contact Highlight */}
          <div className="bg-red-50 dark:bg-red-950/30 p-4 md:p-6 rounded-2xl border-2 border-red-200 dark:border-red-800 inline-block shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 md:p-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500">
                <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs md:text-sm font-medium text-red-900 dark:text-red-100">Emergency? Call Now!</p>
                <Link href="tel:0723128349" className="text-2xl md:text-3xl font-bold text-red-600 hover:text-red-700 transition-colors">
                0723128349
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-4 md:p-6 hover:shadow-lg transition-all group border-2 hover:border-orange-200 dark:hover:border-orange-800">
                <CardContent className="p-0 space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-foreground mb-2">{info.title}</h3>
                    {info.href ? (
                      <Link href={info.href} className={`text-sm md:text-lg font-semibold ${info.color} hover:opacity-80 transition-opacity`}>
                        {info.primary}
                      </Link>
                    ) : (
                      <p className={`text-sm md:text-lg font-semibold ${info.color}`}>{info.primary}</p>
                    )}
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">{info.secondary}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
            
            {/* Contact Form */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-foreground">Send Us a Message</h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  Fill out the form below and we'll get back to you within 24 hours. 
                  For urgent matters, please call our emergency hotline.
                </p>
              </div>

              {/* Status Messages */}
              {submitStatus.type && (
                <Alert className={`border-2 ${
                  submitStatus.type === 'success' 
                    ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20' 
                    : 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20'
                }`}>
                  <div className="flex items-center gap-3">
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    )}
                    <AlertDescription className={`font-medium ${
                      submitStatus.type === 'success' 
                        ? 'text-green-800 dark:text-green-200' 
                        : 'text-red-800 dark:text-red-200'
                    }`}>
                      {submitStatus.message}
                    </AlertDescription>
                  </div>
                  {submitStatus.type === 'success' && (
                    <div className="mt-4">
                      <Button 
                        onClick={resetForm}
                        variant="outline"
                        size="sm"
                        className="border-green-300 text-green-700 hover:bg-green-100 dark:border-green-700 dark:text-green-300"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  )}
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className={`h-12 ${fieldErrors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                    />
                    {fieldErrors.name && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className={`h-12 ${fieldErrors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                    />
                    {fieldErrors.email && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0712345678"
                      required
                      className={`h-12 ${fieldErrors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
                    />
                    {fieldErrors.phone && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Company (Optional)
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className={`h-12 ${fieldErrors.company ? 'border-red-500 focus:border-red-500' : ''}`}
                    />
                    {fieldErrors.company && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {fieldErrors.company}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full h-12 px-3 rounded-md border border-input bg-background text-foreground ${
                      fieldErrors.service ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {fieldErrors.service && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {fieldErrors.service}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your security needs, location, and any specific requirements..."
                    required
                    rows={6}
                    className={`resize-none ${fieldErrors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                  />
                  <div className="flex justify-between items-center">
                    {fieldErrors.message ? (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {fieldErrors.message}
                      </p>
                    ) : (
                      <div />
                    )}
                    <p className="text-xs text-muted-foreground">
                      {formData.message.length}/1000
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                <div className="text-center text-xs text-muted-foreground pt-2">
                  <p>By submitting this form, you agree to be contacted by SOLAN Security regarding your inquiry.</p>
                </div>
              </form>
            </div>

            {/* Map Section */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-foreground flex items-center gap-3">
                  <MapPin className="h-6 w-6 md:h-8 md:w-8 text-orange-600" />
                  Our Location
                </h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  Visit our office in Kianjai, Meru County for in-person consultations 
                  and security assessments.
                </p>
              </div>

              {/* Address Card */}
              <div className="bg-orange-50 dark:bg-orange-950/20 p-4 md:p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-orange-600 mt-1" />
                  <div>
                    <p className="text-base md:text-lg font-semibold text-foreground">SOLAN Security Company</p>
                    <p className="text-sm md:text-base text-muted-foreground">P.O BOX 306, MERU</p>
                    <p className="text-sm md:text-base text-muted-foreground">Kianjai, Meru County, Kenya</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="relative w-full h-64 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-100 dark:border-orange-900">
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
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Need Immediate Assistance?</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Don't wait for security concerns. Our team is ready to help you right now.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="tel:0723128349" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Emergency Line
                </Link>
              </Button>
              
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/book">
                  Book Service Now
                </Link>
              </Button>
            </div>

            <div className="text-sm text-muted-foreground pt-4 border-t border-border/50">
              <p>Available 24/7 | Licensed & Insured | Serving Meru County & Beyond</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}