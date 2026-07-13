import { SCHOOL_CLASSES } from '../data/schoolData';
import { CheckCircle, Shield, Sparkles, BookOpen } from 'lucide-react';

export default function Classes() {
  return (
    <div className="font-sans text-slate-800 bg-white" id="classes-page-container">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-blue-600/15 z-10" />
        <div className="max-w-4xl mx-auto relative z-20">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-widest block mb-2">
            ACADEMIC COHORTS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Explore Our Classrooms
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Detailed snapshots of classroom structures, subjects, dedicated facilities, and head homeroom teachers.
          </p>
        </div>
      </section>

      {/* Classes Overview Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="classes-grid-section">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {SCHOOL_CLASSES.map((cls, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={cls.id}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
                id={`class-row-${cls.id}`}
              >
                {/* Visual Image */}
                <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-md relative shrink-0">
                  <div className="absolute inset-0 bg-blue-600/5 z-10" />
                  <img
                    src={cls.image}
                    alt={cls.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  />
                </div>

                {/* Class Details */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  <div>
                    <span className="text-blue-600 font-extrabold text-xs uppercase tracking-widest block mb-2">
                      {cls.grade}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
                      {cls.name}
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {cls.overview}
                    </p>
                  </div>

                  {/* Homeroom Lead */}
                  <div className="flex gap-3 items-center bg-slate-50 border border-slate-100 p-4 rounded-2xl w-fit">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0">
                      {cls.teacherName.charAt(4)}
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Homeroom Teacher
                      </span>
                      <strong className="text-xs sm:text-sm text-slate-950 font-bold">
                        {cls.teacherName}
                      </strong>
                    </div>
                  </div>

                  {/* Facilities & Subjects side-by-side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    {/* Facilities List */}
                    <div>
                      <span className="text-[11px] text-slate-400 font-bold uppercase tracking-widest block mb-3">
                        Targeted Facilities
                      </span>
                      <ul className="space-y-2">
                        {cls.facilities.map((fac, fIdx) => (
                          <li key={fIdx} className="flex gap-2 items-center text-xs text-slate-600">
                            <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                            <span>{fac}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Subjects List */}
                    <div>
                      <span className="text-[11px] text-slate-400 font-bold uppercase tracking-widest block mb-3">
                        Core Subjects
                      </span>
                      <ul className="space-y-2">
                        {cls.subjects.map((sub, sIdx) => (
                          <li key={sIdx} className="flex gap-2 items-center text-xs text-slate-600">
                            <BookOpen className="w-4 h-4 text-blue-500 shrink-0" />
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Classroom Safety & Standards Banner */}
      <section className="bg-slate-50 border-t border-slate-100 py-16 px-4 sm:px-6 lg:px-8" id="classes-standards-brief">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex p-3 rounded-full bg-emerald-50 text-emerald-600 mb-4 shadow-xs">
            <Shield className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-4">
            Safe, High-Security and Sanitized Academic Spaces
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed mb-8">
            Every Maria study room is outfitted with secondary ventilation filtration systems, digital automated attendance registers, dual exit lines, and ergonomic desks adjusting to child height. Our playgrounds support child-safe soft turf systems to avoid trip abrasions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div className="p-4 bg-white border border-slate-150 rounded-2xl shadow-xs">
              <strong className="block text-slate-900 text-sm font-bold mb-1">CCTV Monitoring</strong>
              <p className="text-slate-500 text-xs">24/7 locked-circuit camera logs across all hallways and playground borders.</p>
            </div>
            <div className="p-4 bg-white border border-slate-150 rounded-2xl shadow-xs">
              <strong className="block text-slate-900 text-sm font-bold mb-1">First Aid Rooms</strong>
              <p className="text-slate-500 text-xs">Certified child practitioners stationed full-time inside campus emergency wings.</p>
            </div>
            <div className="p-4 bg-white border border-slate-150 rounded-2xl shadow-xs">
              <strong className="block text-slate-900 text-sm font-bold mb-1">Weekly Audits</strong>
              <p className="text-slate-500 text-xs">Sanitization of robotic centers, clay boxes, and sports lockers every weekend.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
