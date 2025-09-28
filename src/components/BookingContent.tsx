"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Shield, 
  Users, 
  Building2, 
  Home, 
  Car, 
  Camera,
  Calendar as CalendarIcon,
  Clock,
  Phone,
  CheckCircle,
  Send,
  Star,
  User,
  Mail,
  MapPin,
  AlertCircle
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { emailService, type BookingFormData } from "@/lib/emailService";

const services = [
  {
    id: "personal",
    icon: Shield,
    title: "Personal Security",
    subtitle: "VIP & Executive Protection",
    description: "Professional bodyguard services and personal protection"
  },
  {
    id: "residential",
    icon: Home,
    title: "Residential Security",
    subtitle: "Home & Property Protection",
    description: "24/7 security guards and property monitoring"
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Security",
    subtitle: "Business & Office Protection",
    description: "Professional security for businesses and offices"
  },
  {
    id: "events",
    icon: Users,
    title: "Event Security",
    subtitle: "Crowd Control & Management",
    description: "Security services for events and gatherings"
  },
  {
    id: "mobile",
    icon: Car,
    title: "Mobile Patrols",
    subtitle: "Area Surveillance & Response",
    description: "Mobile security patrols and rapid response"
  },
  {
    id: "surveillance",
    icon: Camera,
    title: "CCTV & Surveillance",
    subtitle: "Advanced Monitoring Systems",
    description: "Professional CCTV installation and monitoring"
  }
];

const timeSlots = [
  "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
  "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
  "18:00", "19:00", "20:00", "21:00", "22:00", "Any Time"
];

const durations = [
  "1-2 hours", "3-4 hours", "Half day (4-6 hours)", 
  "Full day (8-12 hours)", "24 hours", "Multiple days", "Ongoing"
];

const additionalServices = [
  "Risk Assessment", "Security Consultation", "Emergency Response Plan",
  "CCTV Installation", "Access Control Systems", "Security Training"
];

export default function BookingContent() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    date: undefined,
    time: "",
    duration: "",
    location: "",
    description: "",
    urgentNeeds: false,
    additionalServices: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [selectedService, setSelectedService] = useState<string>("");

  const handleInputChange = (field: keyof BookingFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    handleInputChange("service", serviceId);
  };

  const handleAdditionalServiceToggle = (service: string) => {
    const current = formData.additionalServices;
    const updated = current.includes(service)
      ? current.filter(s => s !== service)
      : [...current, service];
    handleInputChange("additionalServices", updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await emailService.sendBookingRequest(formData);
      
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
          date: undefined,
          time: "",
          duration: "",
          location: "",
          description: "",
          urgentNeeds: false,
          additionalServices: []
        });
        setSelectedService("");
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message
        });
      }

    } catch (error) {
      console.error('Booking submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again or contact us directly at 0723128349.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      date: undefined,
      time: "",
      duration: "",
      location: "",
      description: "",
      urgentNeeds: false,
      additionalServices: []
    });
    setSelectedService("");
    setSubmitStatus({ type: null, message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/25 bg-[size:20px_20px] opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 md:mb-8 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-950 dark:to-red-950 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800">
            <Star className="w-3 h-3 mr-1" />
            Book Security Service
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Secure Your{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Peace of Mind
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Book professional security services tailored to your needs. 
            Our experts will contact you within 2 hours to confirm your booking.
          </p>

          {/* Emergency Contact */}
          <div className="bg-red-50 dark:bg-red-950/30 p-6 rounded-2xl border-2 border-red-200 dark:border-red-800 inline-block shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-red-900 dark:text-red-100">Urgent Security Needed?</p>
                <Link href="tel:0723128349" className="text-3xl font-bold text-red-600 hover:text-red-700 transition-colors">
                0723128349
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {submitStatus.type === 'success' ? (
            <Card className="max-w-2xl mx-auto p-8 text-center bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <CardContent className="p-0 space-y-6">
                <CheckCircle className="h-20 w-20 mx-auto text-green-600" />
                <div>
                  <h2 className="text-3xl font-bold text-green-800 dark:text-green-200 mb-4">Booking Submitted!</h2>
                  <p className="text-green-700 dark:text-green-300 text-lg mb-6">
                    {submitStatus.message}
                  </p>
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-green-200 dark:border-green-800 mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Booking Reference</p>
                    <p className="font-mono text-lg font-bold text-foreground">SOL-{Date.now().toString().slice(-6)}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={resetForm} variant="outline" size="lg">
                    Book Another Service
                  </Button>
                  <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Service Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Shield className="h-6 w-6 text-orange-600" />
                      Select Security Service
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          onClick={() => handleServiceSelect(service.id)}
                          className={cn(
                            "p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md",
                            selectedService === service.id
                              ? "border-orange-500 bg-orange-50 dark:bg-orange-950/20"
                              : "border-border hover:border-orange-200 dark:hover:border-orange-800"
                          )}
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                              <service.icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground">{service.title}</h3>
                              <p className="text-sm text-orange-600 dark:text-orange-400 mb-1">{service.subtitle}</p>
                              <p className="text-xs text-muted-foreground">{service.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <User className="h-6 w-6 text-orange-600" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name *</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number *</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="0700000000"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Company (Optional)</label>
                        <Input
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Service Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <CalendarIcon className="h-6 w-6 text-orange-600" />
                      Service Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Preferred Date *</label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !formData.date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formData.date ? format(formData.date, "PPP") : "Select date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={formData.date}
                              onSelect={(date) => handleInputChange("date", date)}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Preferred Time</label>
                        <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Duration *</label>
                        <Select value={formData.duration} onValueChange={(value) => handleInputChange("duration", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            {durations.map((duration) => (
                              <SelectItem key={duration} value={duration}>{duration}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Location *</label>
                        <Input
                          value={formData.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                          placeholder="Service location address"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Event/Occasion Description *</label>
                      <Textarea
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Describe your event, security needs, number of people, special requirements, etc."
                        rows={4}
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Services */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-orange-600" />
                      Additional Services (Optional)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {additionalServices.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            id={service}
                            checked={formData.additionalServices.includes(service)}
                            onCheckedChange={() => handleAdditionalServiceToggle(service)}
                          />
                          <label htmlFor={service} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center space-x-2">
                      <Checkbox
                        id="urgent"
                        checked={formData.urgentNeeds}
                        onCheckedChange={(checked) => handleInputChange("urgentNeeds", checked)}
                      />
                      <label htmlFor="urgent" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        This is an urgent security requirement
                      </label>
                    </div>
                  </CardContent>
                </Card>

                {/* Error Message */}
                {submitStatus.type === 'error' && (
                  <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <p className="text-red-800 dark:text-red-200">{submitStatus.message}</p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !selectedService}
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    {isSubmitting ? (
                      "Submitting Booking..."
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Submit Booking Request
                      </>
                    )}
                  </Button>
                  
                  <Button asChild variant="outline" size="lg" className="px-12 py-6 text-lg font-semibold">
                    <Link href="/contact">
                      Need Help? Contact Us
                    </Link>
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}