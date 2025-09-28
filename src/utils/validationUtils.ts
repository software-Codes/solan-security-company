// Validation error interface
export interface ValidationError {
    field: string;
    message: string;
  }
  
  // Validation result interface
  export interface ValidationResult {
    isValid: boolean;
    errors: ValidationError[];
  }
  
  // Contact form data interface (re-export for convenience)
  export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    company?: string;
    service?: string;
    message: string;
  }
  
  // Individual field validators
  export const validators = {
    // Name validation
    name: (value: string): string | null => {
      const trimmed = value.trim();
      
      if (!trimmed) {
        return 'Full name is required';
      }
      
      if (trimmed.length < 2) {
        return 'Name must be at least 2 characters long';
      }
      
      if (trimmed.length > 50) {
        return 'Name must be less than 50 characters';
      }
      
      // Check for valid name characters (letters, spaces, hyphens, apostrophes)
      const nameRegex = /^[a-zA-Z\s\-'\.]+$/;
      if (!nameRegex.test(trimmed)) {
        return 'Name can only contain letters, spaces, hyphens, and apostrophes';
      }
      
      return null;
    },
  
    // Email validation
    email: (value: string): string | null => {
      const trimmed = value.trim();
      
      if (!trimmed) {
        return 'Email address is required';
      }
      
      // Enhanced email regex pattern
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      
      if (!emailRegex.test(trimmed)) {
        return 'Please enter a valid email address';
      }
      
      if (trimmed.length > 254) {
        return 'Email address is too long';
      }
      
      return null;
    },
  
    // Phone validation (Kenya format)
    phone: (value: string): string | null => {
      const trimmed = value.trim();
      
      if (!trimmed) {
        return 'Phone number is required';
      }
      
      // Remove any spaces, hyphens, or parentheses
      const cleanPhone = trimmed.replace(/[\s\-\(\)]/g, '');
      
      // Kenya phone number patterns
      const kenyaPatterns = [
        /^0[7][0-9]{8}$/, // 07XXXXXXXX (Safaricom, Airtel)
        /^0[1][0-9]{8}$/, // 01XXXXXXXX (Telkom)
        /^254[7][0-9]{8}$/, // 2547XXXXXXXX (international format)
        /^254[1][0-9]{8}$/, // 2541XXXXXXXX (international format)
        /^\+254[7][0-9]{8}$/, // +2547XXXXXXXX (international with +)
        /^\+254[1][0-9]{8}$/, // +2541XXXXXXXX (international with +)
      ];
      
      const isValid = kenyaPatterns.some(pattern => pattern.test(cleanPhone));
      
      if (!isValid) {
        return 'Please enter a valid Kenyan phone number (e.g., 0712345678)';
      }
      
      return null;
    },
  
    // Company validation (optional field)
    company: (value: string): string | null => {
      const trimmed = value.trim();
      
      // Company is optional, so empty is valid
      if (!trimmed) {
        return null;
      }
      
      if (trimmed.length > 100) {
        return 'Company name must be less than 100 characters';
      }
      
      // Allow letters, numbers, spaces, and common business characters
      const companyRegex = /^[a-zA-Z0-9\s\-\.\,\&\(\)\'\"]+$/;
      if (!companyRegex.test(trimmed)) {
        return 'Company name contains invalid characters';
      }
      
      return null;
    },
  
    // Service validation (optional field)
    service: (value: string): string | null => {
      const trimmed = value.trim();
      
      // Service is optional
      if (!trimmed) {
        return null;
      }
      
      const validServices = [
        'Personal Security',
        'Residential Security',
        'Corporate Security',
        'Event Security',
        'Mobile Patrols',
        'CCTV & Surveillance',
        'Security Consultation',
        'Other'
      ];
      
      if (!validServices.includes(trimmed)) {
        return 'Please select a valid service option';
      }
      
      return null;
    },
  
    // Message validation
    message: (value: string): string | null => {
      const trimmed = value.trim();
      
      if (!trimmed) {
        return 'Message is required';
      }
      
      if (trimmed.length < 10) {
        return 'Message must be at least 10 characters long';
      }
      
      if (trimmed.length > 1000) {
        return 'Message must be less than 1000 characters';
      }
      
      // Check for potential spam patterns
      const spamPatterns = [
        /(.)\1{10,}/, // More than 10 repeated characters
        /https?:\/\/[^\s]+/gi, // URLs (you might want to allow these)
        /<[^>]*>/g, // HTML tags
      ];
      
      const hasSpamPattern = spamPatterns.some(pattern => pattern.test(trimmed));
      if (hasSpamPattern) {
        return 'Message contains invalid content. Please remove any links or special formatting.';
      }
      
      return null;
    }
  };
  
  // Main form validation function
  export const validateContactForm = (formData: ContactFormData): ValidationResult => {
    const errors: ValidationError[] = [];
    
    // Validate each field
    const fieldValidations = [
      { field: 'name', validator: validators.name, value: formData.name },
      { field: 'email', validator: validators.email, value: formData.email },
      { field: 'phone', validator: validators.phone, value: formData.phone },
      { field: 'company', validator: validators.company, value: formData.company || '' },
      { field: 'service', validator: validators.service, value: formData.service || '' },
      { field: 'message', validator: validators.message, value: formData.message },
    ];
    
    fieldValidations.forEach(({ field, validator, value }) => {
      const error = validator(value);
      if (error) {
        errors.push({ field, message: error });
      }
    });
    
    return {
      isValid: errors.length === 0,
      errors
    };
  };
  
  // Real-time field validation (for individual field validation during typing)
  export const validateField = (fieldName: keyof ContactFormData, value: string): string | null => {
    switch (fieldName) {
      case 'name':
        return validators.name(value);
      case 'email':
        return validators.email(value);
      case 'phone':
        return validators.phone(value);
      case 'company':
        return validators.company(value);
      case 'service':
        return validators.service(value);
      case 'message':
        return validators.message(value);
      default:
        return null;
    }
  };
  
  // Sanitize form data (remove potential XSS and format consistently)
  export const sanitizeFormData = (formData: ContactFormData): ContactFormData => {
    return {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      company: formData.company?.trim() || '',
      service: formData.service?.trim() || '',
      message: formData.message.trim(),
    };
  };