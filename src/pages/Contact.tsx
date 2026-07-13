import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  HelpCircle,
  Loader2,
  CheckCircle,
  Map,
  Sparkles
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'parent',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your full name';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!formData.email.includes('@')) {
      errors.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) errors.subject = 'Please declare a contact subject';
    if (!formData.message.trim()) errors.message = 'Please input your support message';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        // Reset
        setFormData({
          name: '',
          email: '',
          phone: '',
          role: 'parent',
          subject: '',
          message: ''
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-white" id="contact-page-container">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-blue-600/15 z-10" />
        <div className="max-w-4xl mx-auto relative z-20">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-widest block mb-2">
            REACH OUT
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Contact Our Admissions Desk
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Have questions about fee structures, age eligibility, or bus routes? Our administrators respond within 12 hours.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="contact-main-grid">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Col: Info & Map (Takes 5 columns) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Contact Details Block */}
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm">
                <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl border-b border-slate-200 pb-3">
                  Campus Directories
                </h3>

                <div className="flex flex-col gap-5 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-950 font-bold mb-1">Postal Address</strong>
                      <span>404 Maria Blvd, Suite 100, Academic Hills, NY 10023</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-950 font-bold mb-1">Telephone Lines</strong>
                      <span className="block">Admissions: +1 (800) 555-0199</span>
                      <span className="block">Front Desk: +1 (800) 555-0190</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-950 font-bold mb-1">Email Inquiries</strong>
                      <a href="mailto:admissions@Maria.edu" className="block text-blue-600 hover:underline">
                        admissions@Maria.edu
                      </a>
                      <a href="mailto:info@Maria.edu" className="block text-blue-600 hover:underline">
                        info@Maria.edu
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-950 font-bold mb-1">Office Hours</strong>
                      <span>Monday to Friday: 08:00 AM - 04:30 PM</span>
                      <span className="block text-slate-400 text-xs">Closed on declared state holidays</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Block */}
              <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col gap-4 shadow-md relative overflow-hidden" id="contact-map-placeholder">
                <div className="absolute inset-0 bg-blue-600/5 z-10" />
                <div className="flex items-center gap-2 relative z-20">
                  <Map className="w-5 h-5 text-blue-400" />
                  <h3 className="font-extrabold text-base tracking-tight">Interactive Campus Map</h3>
                </div>
                {/* Visual Simulation of a Map */}
                <div className="h-44 w-full bg-slate-900 border border-slate-800 rounded-2xl relative z-20 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mb-3 animate-pulse">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="block font-bold text-sm text-slate-200">Maria Archway Central</span>
                  <span className="text-[10px] text-slate-500 max-w-xs mt-1">Latitude: 40.7128° N, Longitude: 74.0060° W</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed relative z-20">
                  Our main lobby entrance is situated directly off Exit 14 of the Academic Parkway. Bus drop zones are situated behind the stadium.
                </p>
              </div>
            </div>

            {/* Right Col: Contact Form (Takes 7 columns) */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-sm" id="contact-form-block">
              {submitSuccess ? (
                <div className="text-center py-16 flex flex-col items-center gap-4" id="contact-success-alert">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-extrabold text-2xl text-slate-950 tracking-tight">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Maria Academy. Our support advisors have received your transcript, and we will reply to your registered email address within 12 working hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl mb-1">
                      Inquire Online
                    </h3>
                    <span className="text-slate-400 text-xs">Fill out your inquiry requirements below. Required fields are starred (*).</span>
                  </div>

                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jonathan Hunt"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-white border rounded-xl py-2.5 px-4 text-xs sm:text-sm focus:outline-none focus:ring-1 ${
                        formErrors.name ? 'border-red-400 focus:ring-red-450' : 'border-slate-200 focus:ring-blue-500'
                      }`}
                    />
                    {formErrors.name && (
                      <span className="text-red-500 text-[10px] mt-1 block font-semibold">{formErrors.name}</span>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="j.hunt@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-white border rounded-xl py-2.5 px-4 text-xs sm:text-sm focus:outline-none focus:ring-1 ${
                          formErrors.email ? 'border-red-400 focus:ring-red-450' : 'border-slate-200 focus:ring-blue-500'
                        }`}
                      />
                      {formErrors.email && (
                        <span className="text-red-500 text-[10px] mt-1 block font-semibold">{formErrors.email}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 focus:ring-1 focus:ring-blue-500 rounded-xl py-2.5 px-4 text-xs sm:text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Role affiliation */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Affiliation / Role
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 focus:ring-1 focus:ring-blue-500 rounded-xl py-2.5 px-4 text-xs sm:text-sm focus:outline-none"
                    >
                      <option value="parent">Prospective Parent / Guardian</option>
                      <option value="student">Current Scholar / Student</option>
                      <option value="alumni">School Alumnus</option>
                      <option value="vendor">Vendor / Press Agent</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Contact Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Inquiry regarding Grade 10 AP Biology credits"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full bg-white border rounded-xl py-2.5 px-4 text-xs sm:text-sm focus:outline-none focus:ring-1 ${
                        formErrors.subject ? 'border-red-400 focus:ring-red-450' : 'border-slate-200 focus:ring-blue-500'
                      }`}
                    />
                    {formErrors.subject && (
                      <span className="text-red-500 text-[10px] mt-1 block font-semibold">{formErrors.subject}</span>
                    )}
                  </div>

                  {/* Message body */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Inquiry Details Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Write your detailed questions here..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full bg-white border rounded-xl p-4 text-xs sm:text-sm focus:outline-none focus:ring-1 ${
                        formErrors.message ? 'border-red-400 focus:ring-red-450' : 'border-slate-200 focus:ring-blue-500'
                      }`}
                    />
                    {formErrors.message && (
                      <span className="text-red-500 text-[10px] mt-1 block font-semibold">{formErrors.message}</span>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 px-6 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Dispatching Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Send Secure Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
