import { useState, useEffect } from 'react';
import { PageType } from '../types';
import {
  HERO_SLIDES,
  EVENTS,
  NOTICES,
  GALLERY,
  TESTIMONIALS,
  SCHOOL_FACILITIES,
  HOME_PAGE_CONTENT
} from '../data/schoolData';
import {
  ArrowRight,
  BookOpen,
  Award,
  Users,
  Shield,
  Calendar,
  Bell,
  Volume2,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HomeProps {
  setCurrentPage: (page: PageType) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto scroll slider
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleLinkClick = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select first 3 notices
  const recentNotices = NOTICES.slice(0, 3);
  // Select first 3 events
  const upcomingEvents = EVENTS.slice(0, 3);
  // Select first 6 gallery images
  const previewGallery = GALLERY.slice(0, 6);

  return (
    <div className="font-sans text-slate-800 bg-white" id="home-page-container">
      {/* 1. Hero Slider Section */}
      <section className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full overflow-hidden bg-slate-900" id="hero-slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-transparent z-10" />
            <img
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Slide Content */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl text-white">
                  <motion.span
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block bg-blue-600 text-white font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                  >
                    {HERO_SLIDES[currentSlide].subtitle}
                  </motion.span>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight"
                  >
                    {HERO_SLIDES[currentSlide].title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-slate-200 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed max-w-xl"
                  >
                    {HERO_SLIDES[currentSlide].description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-4"
                  >
                    <button
                      onClick={() => handleLinkClick('admissions')}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md shadow-blue-900/30 flex items-center gap-2 group"
                    >
                      {HOME_PAGE_CONTENT.heroButtons.primary}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => handleLinkClick('academics')}
                      className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all border border-white/20 backdrop-blur-sm"
                    >
                      {HOME_PAGE_CONTENT.heroButtons.secondary}
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Previous / Next Triggers */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/25 hover:bg-black/40 text-white flex items-center justify-center border border-white/15 backdrop-blur-sm transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/25 hover:bg-black/40 text-white flex items-center justify-center border border-white/15 backdrop-blur-sm transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-blue-600' : 'w-2.5 bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Urgent / Notice Bar Highlights */}
      <section className="bg-blue-50 border-y border-blue-100 py-3 px-4 sm:px-6 lg:px-8" id="home-alert-bar">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="flex items-center gap-1.5 bg-red-600 text-white font-bold text-xs uppercase px-2.5 py-1 rounded-md shrink-0 animate-pulse">
              <Volume2 className="w-3.5 h-3.5" />
              {HOME_PAGE_CONTENT.noticeBar.eyebrow}
            </span>
            <span className="text-slate-800 font-bold text-xs sm:text-sm truncate">
              {NOTICES[0].title}
            </span>
          </div>
          <button
            onClick={() => handleLinkClick('notice-board')}
            className="text-blue-700 hover:text-blue-900 font-bold text-xs sm:text-sm shrink-0 flex items-center gap-1 group"
          >
            {HOME_PAGE_CONTENT.noticeBar.actionLabel}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* 3. Quick Stats & About Brief */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="home-about-brief">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Col - Briefing */}
            <div>
              <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-widest uppercase block mb-3">
                {HOME_PAGE_CONTENT.about.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
                {HOME_PAGE_CONTENT.about.heading}
              </h2>
              {HOME_PAGE_CONTENT.about.paragraphs.map((paragraph, index) => (
                <p key={index} className={`text-slate-600 leading-relaxed ${index === 0 ? 'mb-6' : 'mb-8'}`}>
                  {paragraph}
                </p>
              ))}

              {/* Stat Boxes */}
              <div className="grid grid-cols-3 gap-6 border-t border-slate-100 pt-8" id="home-about-stats">
                {HOME_PAGE_CONTENT.about.stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-blue-600">{stat.value}</span>
                    <span className="block text-slate-500 text-xs sm:text-sm font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col - Visual Mosaic of School Life */}
            <div className="grid grid-cols-2 gap-4 relative" id="home-about-visuals">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop"
                  alt="Maria Main Building"
                  referrerPolicy="no-referrer"
                  className="rounded-2xl shadow-md w-full object-cover h-56 hover:scale-102 transition-transform duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop"
                  alt="Students in Library"
                  referrerPolicy="no-referrer"
                  className="rounded-2xl shadow-md w-full object-cover h-40 hover:scale-102 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1562774053-f5a02f68995b?q=80&w=600&auto=format&fit=crop"
                  alt="Science Class"
                  referrerPolicy="no-referrer"
                  className="rounded-2xl shadow-md w-full object-cover h-40 hover:scale-102 transition-transform duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop"
                  alt="Graduation celebration"
                  referrerPolicy="no-referrer"
                  className="rounded-2xl shadow-md w-full object-cover h-56 hover:scale-102 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-blue-600/5 rounded-3xl -m-4 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Principal Message Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100" id="home-principal-message">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-blue-50 opacity-10 shrink-0">
            <Quote className="w-36 h-36" />
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center relative z-10">
            <div className="shrink-0 text-center">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop"
                alt="Dr. Arthur Stewart"
                referrerPolicy="no-referrer"
                className="w-36 h-36 rounded-2xl object-cover shadow-lg border-4 border-slate-100 mx-auto"
              />
              <span className="block font-bold text-slate-900 mt-4">{HOME_PAGE_CONTENT.principal.name}</span>
              <span className="block text-xs font-semibold text-blue-600 uppercase tracking-widest">
                {HOME_PAGE_CONTENT.principal.title}
              </span>
            </div>

            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-2">
                {HOME_PAGE_CONTENT.principal.eyebrow}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {HOME_PAGE_CONTENT.principal.heading}
              </h3>
              {HOME_PAGE_CONTENT.principal.paragraphs.map((paragraph, index) => (
                <p key={index} className={`text-slate-600 leading-relaxed ${index === 0 ? 'mb-4' : 'mb-6'} text-sm sm:text-base`}>
                  {paragraph}
                </p>
              ))}
              <button
                onClick={() => handleLinkClick('about')}
                className="text-blue-600 hover:text-blue-800 font-bold text-sm flex items-center gap-1 group"
              >
                {HOME_PAGE_CONTENT.principal.ctaLabel}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Academic Programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="home-academic-programs">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-widest uppercase block mb-3">
              {HOME_PAGE_CONTENT.programs.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
              {HOME_PAGE_CONTENT.programs.heading}
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed text-sm sm:text-base">
              {HOME_PAGE_CONTENT.programs.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOME_PAGE_CONTENT.programs.cards.map((card) => {
              const accentClasses = {
                orange: {
                  card: 'bg-orange-50 text-orange-600',
                  button: 'text-orange-600 hover:text-orange-800'
                },
                emerald: {
                  card: 'bg-emerald-50 text-emerald-600',
                  button: 'text-emerald-600 hover:text-emerald-800'
                },
                purple: {
                  card: 'bg-purple-50 text-purple-600',
                  button: 'text-purple-600 hover:text-purple-800'
                },
                blue: {
                  card: 'bg-blue-50 text-blue-600',
                  button: 'text-blue-600 hover:text-blue-800'
                }
              }[card.accent as keyof typeof accentClasses];

              return (
                <div
                  key={card.title}
                  className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col gap-5"
                >
                  <div className={`w-12 h-12 rounded-xl ${accentClasses.card} flex items-center justify-center font-bold text-lg`}>
                    {card.badge}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{card.title}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{card.description}</p>
                  </div>
                  <button
                    onClick={() => handleLinkClick('classes')}
                    className={`${accentClasses.button} font-bold text-xs sm:text-sm mt-auto flex items-center gap-1.5`}
                  >
                    {card.ctaLabel}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Dynamic Notices & Events Previews */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100" id="home-notices-events">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Notices Panel */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-red-50 text-red-600 shrink-0">
                    <Bell className="w-5 h-5 animate-bounce" />
                  </div>
                  <h3 className="font-extrabold text-xl text-slate-900 tracking-tight">
                    {HOME_PAGE_CONTENT.noticesEvents.noticesTitle}
                  </h3>
                </div>
                <button
                  onClick={() => handleLinkClick('notice-board')}
                  className="text-blue-600 hover:text-blue-800 font-bold text-xs sm:text-sm flex items-center gap-1"
                >
                  {HOME_PAGE_CONTENT.noticesEvents.noticeCta}
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {recentNotices.map((notice) => (
                  <div
                    key={notice.id}
                    className={`p-4 rounded-2xl border transition-colors ${
                      notice.isUrgent
                        ? 'bg-red-50/50 border-red-100 hover:bg-red-50'
                        : 'bg-slate-50 border-slate-100 hover:bg-slate-100/70'
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <span className="text-slate-400 font-semibold text-[10px] uppercase">
                        {notice.date}
                      </span>
                      {notice.isUrgent && (
                        <span className="bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide">
                          Urgent
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{notice.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                      {notice.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Events Panel */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-xl text-slate-900 tracking-tight">
                    {HOME_PAGE_CONTENT.noticesEvents.eventsTitle}
                  </h3>
                </div>
                <button
                  onClick={() => handleLinkClick('events')}
                  className="text-blue-600 hover:text-blue-800 font-bold text-xs sm:text-sm flex items-center gap-1"
                >
                  {HOME_PAGE_CONTENT.noticesEvents.eventCta}
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex gap-4 p-3 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all"
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex flex-col justify-center min-w-0">
                      <span className="text-blue-600 font-bold text-[10px] uppercase tracking-wider mb-0.5">
                        {event.date}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm truncate mb-1">
                        {event.title}
                      </h4>
                      <p className="text-slate-500 text-xs truncate max-w-md">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Achievements Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="home-achievements">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs tracking-widest uppercase block mb-3">
              {HOME_PAGE_CONTENT.achievements.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
              {HOME_PAGE_CONTENT.achievements.heading}
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed text-sm sm:text-base">
              {HOME_PAGE_CONTENT.achievements.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOME_PAGE_CONTENT.achievements.cards.map((card) => {
              const iconMap = {
                award: Award,
                users: Users,
                shield: Shield
              } as const;
              const Icon = iconMap[card.icon as keyof typeof iconMap];
              const iconWrap = {
                award: 'bg-yellow-100 text-yellow-600',
                users: 'bg-blue-100 text-blue-600',
                shield: 'bg-emerald-100 text-emerald-600'
              }[card.icon as keyof typeof iconWrap];

              return (
                <div key={card.title} className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:shadow-md transition-all">
                  <div className={`w-12 h-12 rounded-xl ${iconWrap} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-950 text-base sm:text-lg mb-2">{card.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Gallery Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100" id="home-gallery-preview">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <span className="text-blue-600 font-bold text-xs tracking-widest uppercase block mb-3">
                {HOME_PAGE_CONTENT.galleryPreview.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                {HOME_PAGE_CONTENT.galleryPreview.heading}
              </h2>
            </div>
            <button
              onClick={() => handleLinkClick('gallery')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors shrink-0 flex items-center gap-1.5 shadow-md shadow-blue-100"
            >
              {HOME_PAGE_CONTENT.galleryPreview.ctaLabel}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {previewGallery.map((item) => (
              <div
                key={item.id}
                className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-sm"
                onClick={() => handleLinkClick('gallery')}
              >
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-3">
                  <span className="text-[10px] text-white font-semibold truncate w-full">
                    {item.caption}
                  </span>
                </div>
                <img
                  src={item.url}
                  alt={item.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="home-testimonials">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-blue-600 font-bold text-xs tracking-widest uppercase block mb-3">
            {HOME_PAGE_CONTENT.testimonials.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-12">
            {HOME_PAGE_CONTENT.testimonials.heading}
          </h2>

          <div className="relative bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-sm min-h-[220px] flex items-center justify-center">
            <div className="absolute top-4 left-4 p-2 text-blue-100 shrink-0">
              <Quote className="w-12 h-12" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4 relative z-10"
              >
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic max-w-xl mx-auto">
                  "{TESTIMONIALS[activeTestimonial].content}"
                </p>
                <div>
                  <h4 className="font-extrabold text-slate-950 text-sm sm:text-base mb-0.5">
                    {TESTIMONIALS[activeTestimonial].name}
                  </h4>
                  <span className="text-xs text-blue-600 font-semibold tracking-wider block uppercase">
                    {TESTIMONIALS[activeTestimonial].role}
                  </span>
                </div>
                <div className="flex justify-center gap-0.5">
                  {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-3.5 h-3.5 rounded-full transition-all ${
                  activeTestimonial === idx ? 'bg-blue-600 w-8' : 'bg-slate-200'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 10. Admission Call To Action CTA */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="home-admission-cta">
        <div className="absolute inset-0 bg-blue-600/10 z-10" />
        <div className="max-w-5xl mx-auto text-center relative z-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
            {HOME_PAGE_CONTENT.admissionCta.heading}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            {HOME_PAGE_CONTENT.admissionCta.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleLinkClick('admissions')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md shadow-blue-900/30 flex items-center gap-2 group"
            >
              {HOME_PAGE_CONTENT.admissionCta.primaryCta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className="bg-transparent hover:bg-white/10 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all border border-white/20"
            >
              {HOME_PAGE_CONTENT.admissionCta.secondaryCta}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
