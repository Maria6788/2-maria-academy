import { PageType } from '../types';
import { SCHOOL_FACILITIES, TEACHERS } from '../data/schoolData';
import {
  History,
  Compass,
  Sparkles,
  Award,
  Heart,
  Globe,
  Users,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  setCurrentPage: (page: PageType) => void;
}

export default function About({ setCurrentPage }: AboutProps) {
  const leadershipTeam = TEACHERS.slice(0, 3); // Stewart, Bell, Yang

  const values = [
    {
      icon: <Award className="w-6 h-6 text-yellow-600" />,
      bg: 'bg-yellow-50',
      title: 'Integrity',
      desc: 'We cultivate deep academic honesty, self-discipline, and personal accountability across all interactions.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-600" />,
      bg: 'bg-purple-50',
      title: 'Curiosity',
      desc: 'We spark scientific inquiries, artistic experimentations, and lifelong commitments to analytical learning.'
    },
    {
      icon: <Heart className="w-6 h-6 text-red-600" />,
      bg: 'bg-red-50',
      title: 'Compassion',
      desc: 'We bridge diverse world cultures through mutual empathy, constructive service, and absolute kindness.'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      bg: 'bg-blue-50',
      title: 'Global Leadership',
      desc: 'We prepare ethical citizens with the dynamic public speaking and decision-making tools to impact society.'
    }
  ];

  const timelineEvents = [
    { year: '1998', title: 'Founding Stone', desc: 'Dr. Stewart laid the foundation of Maria Academy with 45 primary scholars and a single brick study house.' },
    { year: '2005', title: 'Campus Expansion', desc: 'Inauguration of our Performing Auditorium and Middle School block, increasing enrollment to 500+ students.' },
    { year: '2012', title: 'STEAM Integration', desc: 'Introduced high-school AP curriculum and constructed high-end chemistry labs and computer hubs.' },
    { year: '2020', title: 'Athletics Arena', desc: 'Inaugurated the olympic Sports Stadium and our advanced biotechnology greenhouse, securing state accreditation.' },
    { year: 'Today', title: 'Global Legacy', desc: 'Acclaimed as a leading secondary institution, supporting 1,200 scholars globally with unparalleled high-end guidance.' }
  ];

  return (
    <div className="font-sans text-slate-800 bg-white" id="about-page-container">
      {/* Banner / Header */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-blue-600/15 z-10" />
        <div className="max-w-4xl mx-auto relative z-20">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-widest block mb-2">
            WHO WE ARE
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Our Legacy, Vision & Community
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Delivering continuous scholastic excellence, inspiring high character development, and training pioneers for over two decades.
          </p>
        </div>
      </section>

      {/* 1. Vision & Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="about-vision-mission">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* Vision Card */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-3xl p-8 sm:p-10 flex flex-col gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-4">
                  Our Inspiring Vision
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  To be a premier global sanctuary of learning where children from all cultures discover their maximum potentials, excel academically, think critically, and serve as compassionate, visionary leaders of a sustainable world.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-8 sm:p-10 flex flex-col gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-4">
                  Our Mission Directive
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  To provide a customized, academically rigorous curriculum coupled with robust STEAM, athletic, and fine-arts programs. We foster a highly inclusive, safe community that values intellectual risk-taking, independent agency, and global social responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Timeline History Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100" id="about-history">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-3">
              OUR JOURNEY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Chronicle of Maria Academy
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed text-sm sm:text-base">
              A historical look at the monumental events that shaped Maria Academy into a trusted academic pillar.
            </p>
          </div>

          <div className="relative border-l-2 border-blue-100 pl-6 sm:pl-10 space-y-12 ml-4" id="about-history-timeline">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Year Badge */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-blue-600 border-4 border-white text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-md">
                  {index + 1}
                </div>
                <div>
                  <span className="text-blue-600 font-extrabold text-lg sm:text-xl block mb-1">
                    {event.year} &middot; {event.title}
                  </span>
                  <p className="text-slate-600 leading-relaxed max-w-2xl text-sm sm:text-base">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. School Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="about-values">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-3">
              OUR CORE PILLARS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              The Values That Guide Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white hover:bg-slate-50 border border-slate-100 hover:border-slate-200 rounded-2xl p-6 shadow-sm transition-all flex flex-col gap-4"
              >
                <div className={`w-12 h-12 rounded-xl ${val.bg} flex items-center justify-center shrink-0`}>
                  {val.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-950 text-base sm:text-lg mb-2">{val.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100" id="about-leadership">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-3">
              ACADEMIC BOARD
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Our Leadership Team
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed text-sm sm:text-base">
              The experienced educational visionaries and board directors charting Maria Academy’s growth strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader) => (
              <div
                key={leader.id}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="h-64 overflow-hidden bg-slate-100 relative">
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-extrabold text-slate-950 text-lg mb-1">{leader.name}</h3>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
                    {leader.designation}
                  </span>
                  <span className="text-slate-400 font-medium text-[11px] block mb-3">
                    {leader.qualification}
                  </span>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                    {leader.bio}
                  </p>
                  <a
                    href={`mailto:${leader.email}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-xs mt-auto inline-flex items-center gap-1.5"
                  >
                    Contact Director
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. School Facilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="about-facilities">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-3">
              INFRASTRUCTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              State-of-the-Art Facilities
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed text-sm sm:text-base">
              Providing modern resource centers, advanced biotechnology labs, and competitive sports arenas to support diverse student interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SCHOOL_FACILITIES.map((facility) => (
              <div
                key={facility.id}
                className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row"
              >
                <div className="w-full sm:w-1/2 h-56 sm:h-auto bg-slate-100 shrink-0">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
