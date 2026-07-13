import { useState, useEffect } from 'react';
import { PageType } from '../types';
import { HEADER_CONTENT } from '../data/schoolData';
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
  GraduationCap,
  LayoutDashboard,
  LogIn,
  LogOut
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

export default function Header({
  currentPage,
  setCurrentPage,
  isLoggedIn,
  onLogout
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = HEADER_CONTENT.navigation;
  const contactCopy = HEADER_CONTENT.contact;
  const socialLinks = HEADER_CONTENT.socialLinks;
  const brandingCopy = HEADER_CONTENT.branding;
  const authCopy = HEADER_CONTENT.auth;
  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    linkedin: Linkedin
  } as const;

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full relative z-50 font-sans">
      {/* Top Bar - Hidden on scroll or small screens */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={contactCopy.phoneHref}
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              id="top-bar-phone"
            >
              <Phone className="w-3.5 h-3.5 text-blue-500" />
              <span>{contactCopy.phone}</span>
            </a>
            <a
              href={contactCopy.emailHref}
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              id="top-bar-email"
            >
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              <span>{contactCopy.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                    aria-label={link.label}
                    id={link.id}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header / Navbar */}
      <nav
        className={`w-full transition-all duration-300 py-3 px-4 sm:px-6 lg:px-8 ${
          isScrolled
            ? 'fixed top-0 left-0 bg-white shadow-md border-b border-slate-100 py-3 dark:bg-white'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
        id="main-navigation-bar"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & School Name */}
          <div
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => handleNavClick('home')}
            id="nav-brand-logo"
          >
            <div className="bg-blue-600 text-white p-2 rounded-xl shadow-md flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="block font-bold text-lg sm:text-xl text-slate-900 tracking-tight leading-tight">
                {brandingCopy.name}
              </span>
              <span className="block font-medium text-[10px] sm:text-xs text-blue-600 tracking-widest uppercase">
                {brandingCopy.tagline}
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1" id="nav-desktop-links">
            {navItems.map((item) => {
              const isActive = currentPage === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/70'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                  id={`nav-link-${item.value}`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* User / Auth CTA Section */}
          <div className="hidden lg:flex items-center gap-3" id="nav-auth-ctas">
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => handleNavClick('dashboard')}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                    currentPage === 'dashboard'
                      ? 'bg-blue-50 border-blue-200 text-blue-700'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                  id="nav-btn-dashboard"
                >
                  <LayoutDashboard className="w-4 h-4 text-blue-600" />
                  {authCopy.dashboardLabel}
                </button>
                <button
                  onClick={onLogout}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-700 transition-all duration-200"
                  id="nav-btn-logout"
                >
                  <LogOut className="w-4 h-4" />
                  {authCopy.logoutLabel}
                </button>
              </>
            ) : (
              <button
                onClick={() => handleNavClick('login')}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg hover:shadow-blue-100 transition-all duration-200"
                id="nav-btn-login"
              >
                <LogIn className="w-4 h-4" />
                {authCopy.loginLabel}
              </button>
            )}
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            {isLoggedIn && (
              <button
                onClick={() => handleNavClick('dashboard')}
                className={`p-2 rounded-xl border ${
                  currentPage === 'dashboard'
                    ? 'bg-blue-50 border-blue-200 text-blue-600'
                    : 'bg-white border-slate-200 text-slate-600'
                }`}
                aria-label="Dashboard"
                id="nav-mobile-dashboard-shortcut"
              >
                <LayoutDashboard className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors"
              aria-label="Toggle Menu"
              id="nav-mobile-toggle"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-b border-slate-100 py-4 px-6 flex flex-col gap-2.5 lg:hidden"
            id="mobile-navigation-menu"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.value;
                return (
                  <button
                    key={item.value}
                    onClick={() => handleNavClick(item.value)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                    id={`nav-mobile-link-${item.value}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
            <hr className="border-slate-100 my-1" />
            <div className="flex flex-col gap-2">
              {isLoggedIn ? (
                <>
                  <button
                    onClick={() => handleNavClick('dashboard')}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-blue-50 border border-blue-200 text-blue-700"
                    id="nav-mobile-btn-dashboard"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Student Dashboard
                  </button>
                  <button
                    onClick={() => {
                      onLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-700"
                    id="nav-mobile-btn-logout"
                  >
                    <LogOut className="w-4 h-4" />
                    {authCopy.mobileLogoutLabel}
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleNavClick('login')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-100"
                  id="nav-mobile-btn-login"
                >
                  <LogIn className="w-4 h-4" />
                  {authCopy.loginLabel}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
