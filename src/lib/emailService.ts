import emailjs from '@emailjs/browser';

// EmailJS configuration interface
interface EmailConfig {
  serviceId: string;
  contactTemplateId: string;
  bookingTemplateId: string;
  careerTemplateId: string;
  publicKey: string;
}

// Contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message: string;
}

// Career application data interface
export interface CareerApplicationData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  education: string;
  location: string;
  availability: string;
  coverLetter: string;
  hasLicense: boolean;
  hasExperience: boolean;
  willingToRelocate: boolean;
}

// Booking form data interface
export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  date: Date | undefined;
  time: string;
  duration: string;
  location: string;
  description: string;
  urgentNeeds: boolean;
  additionalServices: string[];
}

// Email service response interface
export interface EmailServiceResponse {
  success: boolean;
  message: string;
  error?: string;
}

class EmailService {
  private config: EmailConfig;
  private initialized = false;

  constructor() {
    this.config = {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      contactTemplateId: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || '',
      bookingTemplateId: process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID || '',
      careerTemplateId: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || '',
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
    };
  }

  // Initialize EmailJS
  private initializeEmailJS(): void {
    if (!this.initialized) {
      emailjs.init(this.config.publicKey);
      this.initialized = true;
    }
  }

  // Validate configuration
  private validateConfig(): boolean {
    return Boolean(
      this.config.serviceId && 
      this.config.contactTemplateId && 
      this.config.publicKey
    );
  }

  // Format template parameters for contact form
  private formatContactTemplateParams(formData: ContactFormData): Record<string, unknown> {
    const currentDate = new Date().toLocaleString('en-KE', {
      timeZone: 'Africa/Nairobi',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    return {
      // Client information
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      company_name: formData.company || 'Not specified',
      service_interest: formData.service || 'General Inquiry',
      message: formData.message,
      
      // Additional context
      inquiry_type: 'Contact Form Submission',
      submission_date: currentDate,
      
      // Company details for template
      to_name: 'SOLAN Security Team',
      to_email: 'info@solansecurity.com', // Your company email
      
      // Auto-reply information
      reply_to: formData.email,
      company_phone: '0789204855',
      company_address: 'P.O BOX 306, MERU, Kianjai, Meru County, Kenya',
    };
  }

  // Send contact form email
  async sendContactEmail(formData: ContactFormData): Promise<EmailServiceResponse> {
    try {
      // Validate configuration
      if (!this.validateConfig()) {
        return {
          success: false,
          message: 'Email service is not properly configured',
          error: 'Missing EmailJS configuration'
        };
      }

      // Initialize EmailJS
      this.initializeEmailJS();

      // Format template parameters
      const templateParams = this.formatContactTemplateParams(formData);

      // Send email
      const response = await emailjs.send(
        this.config.serviceId,
        this.config.contactTemplateId,
        templateParams
      );

      // Check response status
      if (response.status === 200) {
        return {
          success: true,
          message: 'Your message has been sent successfully! We\'ll respond within 24 hours.'
        };
      } else {
        return {
          success: false,
          message: 'Failed to send message. Please try again or call us directly.',
          error: `EmailJS returned status: ${response.status}`
        };
      }

    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Handle specific EmailJS errors
      if (error instanceof Error) {
        let errorMessage = 'An unexpected error occurred. Please try again.';
        
        if (error.message.includes('network')) {
          errorMessage = 'Network error. Please check your connection and try again.';
        } else if (error.message.includes('template')) {
          errorMessage = 'Email template error. Please contact us directly.';
        } else if (error.message.includes('service')) {
          errorMessage = 'Email service error. Please contact us directly.';
        }

        return {
          success: false,
          message: errorMessage,
          error: error.message
        };
      }

      return {
        success: false,
        message: 'An unexpected error occurred. Please contact us directly.',
        error: 'Unknown error'
      };
    }
  }

  // Format template parameters for career application
  private formatCareerTemplateParams(formData: CareerApplicationData): Record<string, unknown> {
    const currentDate = new Date().toLocaleString('en-KE', {
      timeZone: 'Africa/Nairobi',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    return {
      // Applicant information
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      position_applied: formData.position,
      years_experience: formData.experience,
      education_level: formData.education,
      preferred_location: formData.location,
      availability: formData.availability,
      cover_letter: formData.coverLetter,
      
      // Qualifications
      has_security_license: formData.hasLicense ? 'Yes' : 'No',
      has_security_experience: formData.hasExperience ? 'Yes' : 'No',
      willing_to_relocate: formData.willingToRelocate ? 'Yes' : 'No',
      
      // Additional context
      inquiry_type: 'Career Application',
      submission_date: currentDate,
      
      // Company details
      to_name: 'SOLAN Security HR Team',
      to_email: 'careers@solansecurity.com',
      
      // Auto-reply information
      reply_to: formData.email,
      company_phone: '0789204855',
      company_address: 'P.O BOX 306, MERU, Kianjai, Meru County, Kenya',
    };
  }

  // Format template parameters for booking
  private formatBookingTemplateParams(formData: BookingFormData): Record<string, unknown> {
    const currentDate = new Date().toLocaleString('en-KE', {
      timeZone: 'Africa/Nairobi',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const serviceDate = formData.date ? formData.date.toLocaleDateString('en-KE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : 'Not specified';

    return {
      // Client information
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      company_name: formData.company || 'Not specified',
      
      // Service details
      service_type: formData.service,
      service_date: serviceDate,
      service_time: formData.time || 'Flexible',
      service_duration: formData.duration,
      service_location: formData.location,
      event_description: formData.description,
      
      // Additional information
      urgent_request: formData.urgentNeeds ? 'Yes - Priority Handling Required' : 'No',
      additional_services: formData.additionalServices.length > 0 ? formData.additionalServices.join(', ') : 'None',
      
      // Context
      inquiry_type: 'Security Service Booking',
      submission_date: currentDate,
      
      // Company details
      to_name: 'SOLAN Security Operations Team',
      to_email: 'bookings@solansecurity.com',
      
      // Auto-reply information
      reply_to: formData.email,
      company_phone: '0789204855',
      company_address: 'P.O BOX 306, MERU, Kianjai, Meru County, Kenya',
    };
  }

  // Send booking request email
  async sendBookingRequest(formData: BookingFormData): Promise<EmailServiceResponse> {
    try {
      // Validate configuration
      if (!this.validateConfig()) {
        return {
          success: false,
          message: 'Email service is not properly configured',
          error: 'Missing EmailJS configuration'
        };
      }

      // Initialize EmailJS
      this.initializeEmailJS();

      // Format template parameters
      const templateParams = this.formatBookingTemplateParams(formData);

      // Send email
      const response = await emailjs.send(
        this.config.serviceId,
        this.config.bookingTemplateId,
        templateParams
      );

      // Check response status
      if (response.status === 200) {
        return {
          success: true,
          message: 'Your booking request has been submitted successfully! Our team will contact you within 2 hours to confirm details.'
        };
      } else {
        return {
          success: false,
          message: 'Failed to submit booking request. Please try again or call us directly.',
          error: `EmailJS returned status: ${response.status}`
        };
      }

    } catch (error) {
      console.error('Booking EmailJS Error:', error);
      
      if (error instanceof Error) {
        return {
          success: false,
          message: 'An error occurred while submitting your booking. Please try again or contact us directly.',
          error: error.message
        };
      }

      return {
        success: false,
        message: 'An unexpected error occurred. Please contact us directly.',
        error: 'Unknown error'
      };
    }
  }

  // Send career application email
  async sendCareerApplication(formData: CareerApplicationData): Promise<EmailServiceResponse> {
    try {
      // Validate configuration
      if (!this.validateConfig()) {
        return {
          success: false,
          message: 'Email service is not properly configured',
          error: 'Missing EmailJS configuration'
        };
      }

      // Initialize EmailJS
      this.initializeEmailJS();

      // Format template parameters
      const templateParams = this.formatCareerTemplateParams(formData);

      // Send email
      const response = await emailjs.send(
        this.config.serviceId,
        this.config.careerTemplateId,
        templateParams
      );

      // Check response status
      if (response.status === 200) {
        return {
          success: true,
          message: 'Your application has been submitted successfully! We\'ll review it and contact you within 5 business days.'
        };
      } else {
        return {
          success: false,
          message: 'Failed to submit application. Please try again or call us directly.',
          error: `EmailJS returned status: ${response.status}`
        };
      }

    } catch (error) {
      console.error('Career Application EmailJS Error:', error);
      
      if (error instanceof Error) {
        return {
          success: false,
          message: 'An error occurred while submitting your application. Please try again or contact us directly.',
          error: error.message
        };
      }

      return {
        success: false,
        message: 'An unexpected error occurred. Please contact us directly.',
        error: 'Unknown error'
      };
    }
  }

  // Send auto-reply email (optional - requires separate template)
  async sendAutoReply(formData: ContactFormData): Promise<EmailServiceResponse> {
    try {
      const autoReplyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
      
      if (!autoReplyTemplateId) {
        // Auto-reply not configured, but main email was sent
        return {
          success: true,
          message: 'Message sent successfully'
        };
      }

      const autoReplyParams = {
        to_name: formData.name,
        to_email: formData.email,
        company_name: 'SOLAN Security Company',
        company_phone: '0789204855',
        company_address: 'P.O BOX 306, MERU, Kianjai, Meru County, Kenya',
        service_interest: formData.service || 'General Inquiry',
        submission_date: new Date().toLocaleDateString('en-KE')
      };

      await emailjs.send(
        this.config.serviceId,
        autoReplyTemplateId,
        autoReplyParams
      );

      return {
        success: true,
        message: 'Message sent with confirmation email'
      };

    } catch (error) {
      console.error('Auto-reply error:', error);
      // Don't fail the main process if auto-reply fails
      return {
        success: true,
        message: 'Message sent successfully'
      };
    }
  }
}

// Export singleton instance
export const emailService = new EmailService();