import emailjs from '@emailjs/browser';

/**
 * EmailJS Service
 * 
 * This service handles form submissions using EmailJS.
 * 
 * SETUP REQUIRED:
 * 1. Create an account at https://www.emailjs.com
 * 2. Create email service (Gmail, Outlook, etc.)
 * 3. Create email templates (see EMAILJS_SETUP.md)
 * 4. Get your Public Key, Service ID, and Template IDs
 * 5. Add them to your .env file
 */

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface EnrollmentFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  course: string;
}

export const emailService = {
  /**
   * Initialize EmailJS with your public key
   */
  init() {
    try {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (publicKey) {
        emailjs.init(publicKey);
      } else {
        console.warn('EmailJS Public Key not found. Please add VITE_EMAILJS_PUBLIC_KEY to your .env file.');
      }
    } catch (error) {
      console.warn('EmailJS initialization error:', error);
    }
  },

  /**
   * Send contact form submission
   */
  async sendContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      return {
        success: false,
        message: 'EmailJS is not configured. Please contact the administrator.'
      };
    }

    try {
      // Initialize EmailJS (safe to call multiple times)
      emailjs.init(publicKey);

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        message: data.message,
        to_email: 'info@reddotit.com', // Your receiving email
      };

      await emailjs.send(serviceId, templateId, templateParams);

      return {
        success: true,
        message: 'Message sent successfully! We will get back to you soon.'
      };
    } catch (error) {
      console.error('EmailJS error:', error);
      return {
        success: false,
        message: 'Failed to send message. Please try again later.'
      };
    }
  },

  /**
   * Send enrollment form submission
   */
  async sendEnrollmentForm(data: EnrollmentFormData): Promise<{ success: boolean; message: string }> {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_ENROLLMENT_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      return {
        success: false,
        message: 'EmailJS is not configured. Please contact the administrator.'
      };
    }

    try {
      // Initialize EmailJS (safe to call multiple times)
      emailjs.init(publicKey);

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        course: data.course,
        message: data.message,
        to_email: 'enrollments@reddotit.com', // Your receiving email
      };

      await emailjs.send(serviceId, templateId, templateParams);

      return {
        success: true,
        message: 'Enrollment request submitted successfully! We will contact you soon.'
      };
    } catch (error) {
      console.error('EmailJS error:', error);
      return {
        success: false,
        message: 'Failed to submit enrollment. Please try again later.'
      };
    }
  }
};

