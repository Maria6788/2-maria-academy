import { useState } from 'react';
import { TEACHERS } from '../data/schoolData';
import { Mail, GraduationCap, BookOpen, Search, ArrowRight } from 'lucide-react';

export default function Faculty() {
  const [filter, setFilter] = useState<'all' | 'steam' | 'humanities' | 'arts'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTeachers = TEACHERS.filter((teacher) => {
    // Subject filter classification
    const isSteam = teacher.subjects.some(s =>
      s.includes('Calculus') || s.includes('Physics') || s.includes('Robotics') || s.includes('Computer') || s.includes('Math') || s.includes('Biology') || s.includes('Chemistry') || s.includes('Science')
    );
    const isHumanities = teacher.subjects.some(s =>
      s.includes('Literature') || s.includes('Writing') || s.includes('History') || s.includes('Government') || s.includes('Ethics')
    );
    const isArts = teacher.subjects.some(s =>
      s.includes('Symphonic') || s.includes('Orchestra') || s.includes('Music') || s.includes('Visual') || s.includes('Arts')
    );

    const matchesFilter =
      filter === 'all' ||
      (filter === 'steam' && isSteam) ||
      (filter === 'humanities' && isHumanities) ||
      (filter === 'arts' && isArts);

    const matchesSearch =
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.subjects.some(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="font-sans text-slate-800 bg-white" id="faculty-page-container">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-blue-600/15 z-10" />
        <div className="max-w-4xl mx-auto relative z-20">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-widest block mb-2">
            MEET OUR STAFF
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Our Elite Board of Educators
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Nurturing student potential through world-class PhD counselors, engineering professionals, and orchestral artists.
          </p>
        </div>
      </section>

      {/* Interactive Filter & Search Controls */}
      <section className="py-8 bg-slate-50 border-b border-slate-100 px-4 sm:px-6 lg:px-8" id="faculty-filters">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-2" id="faculty-filter-tabs">
            {(['all', 'steam', 'humanities', 'arts'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat === 'all' ? 'All Staff' : cat === 'steam' ? 'STEAM Faculty' : cat === 'arts' ? 'Arts & Music' : cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name or subject"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Teachers Grid Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="faculty-grid">
        <div className="max-w-7xl mx-auto">
          {filteredTeachers.length === 0 ? (
            <div className="text-center py-16" id="faculty-no-results">
              <span className="text-slate-400 font-bold block mb-2">No Educators Found</span>
              <p className="text-slate-500 text-sm">Try adjusting your category selection or spelling search terms.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTeachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col group"
                  id={`faculty-card-${teacher.id}`}
                >
                  {/* Photo Container */}
                  <div className="h-72 overflow-hidden bg-slate-100 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-4">
                      <span className="text-white text-xs font-semibold">Maria Educator Since 2018</span>
                    </div>
                    <img
                      src={teacher.photo}
                      alt={teacher.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-extrabold text-slate-950 text-lg mb-1">{teacher.name}</h3>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
                      {teacher.designation}
                    </span>

                    {/* Qualifications */}
                    <div className="flex gap-2 items-start mb-4 bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                        {teacher.qualification}
                      </span>
                    </div>

                    {/* Subjects Taught */}
                    <div className="mb-6">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-2">
                        Teaching focus
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {teacher.subjects.map((sub, sIdx) => (
                          <span
                            key={sIdx}
                            className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Biography */}
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                      {teacher.bio}
                    </p>

                    {/* Contact Action */}
                    <a
                      href={`mailto:${teacher.email}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold text-xs sm:text-sm mt-auto inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-4 h-4 text-blue-500" />
                      {teacher.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
