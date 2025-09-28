"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Shield, 
  Users, 
  Building2, 
  Phone,
  CheckCircle,
  Send,
  Star,
  User,
  Mail,
  GraduationCap,
  MapPin,
  Clock,
  Award,
  Briefcase,
  AlertCircle,
  FileText
} from "lucide-react";
import { emailService, type CareerApplicationData } from "@/lib/emailService";

const positions = [
  {
    id: "security-guard",
    title: "Security Guard",
    type: "Full-time",
    location: "Meru County",
    description: "Professional security personnel for various assignments including residential, corporate, and event security.",
    requirements: ["Valid security license", "Physical fitness", "Good communication skills", "Clean background check"]
  },
  {
    id: "security-supervisor",
    title: "Security Supervisor",
    type: "Full-time", 
    location: "Meru County",
    description: "Lead security teams and oversee operations at client locations with management responsibilities.",
    requirements: ["3+ years security experience", "Leadership skills", "Valid security license", "Management experience preferred"]
  },
  {
    id: "mobile-patrol",
    title: "Mobile Patrol Officer",
    type: "Full-time",
    location: "Meru County",
    description: "Conduct mobile security patrols across multiple locations with rapid response capabilities.",
    requirements: ["Valid driving license", "Security experience", "Good navigation skills", "Physical fitness"]
  },
  {
    id: "cctv-operator",
    title: "CCTV Operator",
    type: "Full-time",
    location: "Meru County", 
    description: "Monitor surveillance systems and coordinate security responses from control room.",
    requirements: ["Technical aptitude", "Attention to detail", "Security experience preferred", "Computer literacy"]
  },
  {
    id: "security-consultant",
    title: "Security Consultant",
    type: "Contract",
    location: "Kenya",
    description: "Provide expert security assessments and recommendations to clients across various industries.",
    requirements: ["5+ years security experience", "Risk assessment skills", "Professional certification", "Excellent communication"]
  }
];

const experienceLevels = [
  "No experience", "1-2 years", "3-5 years", "6-10 years", "10+ years"
];

const educationLevels = [
  "Primary School", "Secondary School", "Certificate", "Diploma", "Degree", "Masters", "Other"
];

const availabilityOptions = [
  "Immediately", "Within 1 week", "Within 2 weeks", "Within 1 month", "Other"
];

export default function CareersContent() {
  const [formData, setFormData] = useState<CareerApplicationData>({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    education: "",
    location: "",
    availability: "",
    coverLetter: "",
    hasLicense: false,
    hasExperience: false,
    willingToRelocate: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (field: keyof CareerApplicationData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await emailService.sendCareerApplication(formData);
      
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
          position: "",
          experience: "",
          education: "",
          location: "",
          availability: "",
          coverLetter: "",
          hasLicense: false,
          hasExperience: false,
          willingToRelocate: false
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message
        });
      }

    } catch (error) {
      console.error('Application submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again or contact us directly at 0789204855.'
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
      position: "",
      experience: "",
      education: "",
      location: "",
      availability: "",
      coverLetter: "",
      hasLicense: false,
      hasExperience: false,
      willingToRelocate: false
    });
    setSubmitStatus({ type: null, message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/25 bg-[size:20px_20px] opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 md:mb-8 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-950 dark:to-red-950 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800">
            <Briefcase className="w-3 h-3 mr-1" />
            Join Our Team
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Build Your{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Security Career
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Join SOLAN Security and be part of a professional team dedicated to protecting 
            what matters most. We offer competitive benefits and growth opportunities.
          </p>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">10+</div>
              <div className="text-sm text-muted-foreground">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">50+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">24/7</div>
              <div className="text-sm text-muted-foreground">Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Positions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Current{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Openings
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore exciting career opportunities with SOLAN Security
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {positions.map((position) => (
              <Card key={position.id} className="hover:shadow-lg transition-all group border-2 hover:border-orange-200 dark:hover:border-orange-800">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground">{position.title}</CardTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline">{position.type}</Badge>
                        <Badge variant="outline" className="text-orange-600 border-orange-200">
                          <MapPin className="w-3 h-3 mr-1" />
                          {position.location}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{position.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Apply Now</h2>
              <p className="text-xl text-muted-foreground">
                Ready to join our team? Submit your application and we'll get back to you soon.
              </p>
            </div>

            {submitStatus.type === 'success' ? (
              <Card className="p-8 text-center bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <CardContent className="p-0 space-y-6">
                  <CheckCircle className="h-20 w-20 mx-auto text-green-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">Application Submitted!</h3>
                    <p className="text-green-700 dark:text-green-300 mb-6">
                      {submitStatus.message}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={resetForm} variant="outline" size="lg">
                      Submit Another Application
                    </Button>
                    <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      <Link href="/contact">Contact HR</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
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
                        <label className="text-sm font-medium">Preferred Location *</label>
                        <Input
                          value={formData.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                          placeholder="e.g., Meru, Nairobi, etc."
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Position & Experience */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Briefcase className="h-6 w-6 text-orange-600" />
                      Position & Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Position Applied For *</label>
                        <Select value={formData.position} onValueChange={(value) => handleInputChange("position", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select position" />
                          </SelectTrigger>
                          <SelectContent>
                            {positions.map((position) => (
                              <SelectItem key={position.id} value={position.title}>{position.title}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Years of Experience *</label>
                        <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            {experienceLevels.map((level) => (
                              <SelectItem key={level} value={level}>{level}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Education Level *</label>
                        <Select value={formData.education} onValueChange={(value) => handleInputChange("education", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select education" />
                          </SelectTrigger>
                          <SelectContent>
                            {educationLevels.map((level) => (
                              <SelectItem key={level} value={level}>{level}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Availability *</label>
                        <Select value={formData.availability} onValueChange={(value) => handleInputChange("availability", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="When can you start?" />
                          </SelectTrigger>
                          <SelectContent>
                            {availabilityOptions.map((option) => (
                              <SelectItem key={option} value={option}>{option}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Qualifications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Award className="h-6 w-6 text-orange-600" />
                      Qualifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="license"
                          checked={formData.hasLicense}
                          onCheckedChange={(checked) => handleInputChange("hasLicense", checked)}
                        />
                        <label htmlFor="license" className="text-sm font-medium">
                          I have a valid security license
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="experience"
                          checked={formData.hasExperience}
                          onCheckedChange={(checked) => handleInputChange("hasExperience", checked)}
                        />
                        <label htmlFor="experience" className="text-sm font-medium">
                          I have previous security experience
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="relocate"
                          checked={formData.willingToRelocate}
                          onCheckedChange={(checked) => handleInputChange("willingToRelocate", checked)}
                        />
                        <label htmlFor="relocate" className="text-sm font-medium">
                          I am willing to relocate if required
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Cover Letter */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <FileText className="h-6 w-6 text-orange-600" />
                      Cover Letter
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Tell us about yourself *</label>
                      <Textarea
                        value={formData.coverLetter}
                        onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                        placeholder="Why do you want to work with SOLAN Security? What makes you a good fit for this position? Include any relevant experience, skills, or achievements..."
                        rows={6}
                        required
                      />
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
                    disabled={isSubmitting}
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    {isSubmitting ? (
                      "Submitting Application..."
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Submit Application
                      </>
                    )}
                  </Button>
                  
                  <Button asChild variant="outline" size="lg" className="px-12 py-6 text-lg font-semibold">
                    <Link href="/contact">
                      Questions? Contact HR
                    </Link>
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Questions About Careers?</h2>
            <p className="text-xl text-muted-foreground">
              Our HR team is here to help you with any questions about career opportunities at SOLAN Security.
            </p>
            
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border shadow-lg inline-block">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-muted-foreground">HR Department</p>
                  <Link href="tel:0789204855" className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
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