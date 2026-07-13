import { PageType } from '../types';
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight
} from 'lucide-react';
import React, { useState } from 'react';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleLinkClick = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm font-sans" id="app-footer">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: School Branding */}
          <div className="flex flex-col gap-5" id="footer-col-brand">
            <div
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={() => handleLinkClick('home')}
            >
              <div className="bg-blue-600 text-white p-2 rounded-xl shadow-md flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="block font-bold text-lg text-white tracking-tight leading-tight">
                  Maria
                </span>
                <span className="block font-medium text-[10px] text-blue-500 tracking-widest uppercase">
                  Academy of Excellence
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
              Empowering global minds, fostering academic excellence, and nurturing ethical leaders since 1998. Join our family today to build a vibrant tomorrow.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-400 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-pink-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-700 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4" id="footer-col-quicklinks">
            <h3 className="text-white font-bold text-base tracking-tight border-b border-slate-900 pb-2">
              Quick Portals
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-blue-400 hover:underline transition-all duration-200 flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  About Maria Academy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('academics')}
                  className="hover:text-blue-400 hover:underline transition-all duration-200 flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  Curriculum & Academics
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('admissions')}
                  className="hover:text-blue-400 hover:underline transition-all duration-200 flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  Admissions Criteria & Fees
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('faculty')}
                  className="hover:text-blue-400 hover:underline transition-all duration-200 flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  Meet Our Educators
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('classes')}
                  className="hover:text-blue-400 hover:underline transition-all duration-200 flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  Explore Our Classrooms
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('gallery')}
                  className="hover:text-blue-400 hover:underline transition-all duration-200 flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  Photo & Event Galleries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Bulletins & Info */}
          <div className="flex flex-col gap-4" id="footer-col-bulletins">
            <h3 className="text-white font-bold text-base tracking-tight border-b border-slate-900 pb-2">
              Bulletins
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('notice-board')}
                  className="hover:text-blue-400 hover:underline transition-all duration-200 flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  Official Notice Board
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('events')}
                  className="hover:text-blue-400 hover:underline transition-all duration-200 flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  Upcoming School Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('student-life')}
                  className="hover:text-blue-400 hover:underline transition-all duration-200 flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  Campus Life & Athletics
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-blue-400 hover:underline transition-all duration-200 flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  Reach Us & Support Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('login')}
                  className="hover:text-blue-400 hover:underline transition-all duration-200 flex items-center gap-1.5 font-semibold text-blue-400"
                >
                  <ArrowRight className="w-3 h-3 text-blue-500 animate-pulse" />
                  Student & Parent Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="flex flex-col gap-5" id="footer-col-contact">
            <h3 className="text-white font-bold text-base tracking-tight border-b border-slate-900 pb-2">
              Contact & Bulletins
            </h3>
            <div className="flex flex-col gap-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>404 Maria Blvd, Suite 100, Academic Hills, NY 10023</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>+1 (800) 555-0199</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>info@Maria.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Mon - Fri, 08:00 AM - 04:30 PM</span>
              </div>
            </div>

            {/* Newsletter form */}
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-2">
              <span className="text-slate-300 font-semibold text-xs uppercase tracking-widest block">
                Stay Updated
              </span>
              <div className="flex items-center bg-slate-900 rounded-xl overflow-hidden p-1 border border-slate-800">
                <input
                  type="email"
                  required
                  placeholder="Your active email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent text-slate-200 placeholder-slate-600 focus:outline-none py-1.5 px-3 w-full text-xs"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1.5 font-semibold text-xs transition-colors shrink-0 flex items-center gap-1"
                >
                  Join
                </button>
              </div>
              {subscribed && (
                <span className="text-emerald-400 text-xs animate-fade-in block" id="footer-newsletter-success">
                  Successfully subscribed to bulletins!
                </span>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <span>
          &copy; {new Date().getFullYear()} Maria Academy of Excellence. All Rights Reserved.
        </span>
        <div className="flex items-center gap-4 text-slate-500">
          <a href="#" className="hover:text-blue-400 transition-colors">
            Privacy Policy
          </a>
          <span>&middot;</span>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Terms of Use
          </a>
          <span>&middot;</span>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Accreditation Info
          </a>
        </div>
      </div>
    </footer>
  );
}
