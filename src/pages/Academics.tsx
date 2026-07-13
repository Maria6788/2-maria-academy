import { useState } from 'react';
import {
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  Award,
  Globe,
  Lightbulb,
  FileText,
  Loader2
} from 'lucide-react';

export default function Academics() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownload = (id: string, name: string) => {
    setDownloadingId(id);
    setDownloadSuccess(null);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadSuccess(name);
      setTimeout(() => setDownloadSuccess(null), 4000);
    }, 1500);
  };

  const methodologies = [
    {
      icon: <Lightbulb className="w-5 h-5 text-blue-600" />,
      bg: 'bg-blue-50',
      title: 'Inquiry-Based Learning',
      desc: 'Instead of memorizing static equations, students engage in scientific hypotheses, hands-on experimentation, and active feedback loops.'
    },
    {
      icon: <Globe className="w-5 h-5 text-emerald-600" />,
      bg: 'bg-emerald-50',
      title: 'Global Pacing Standards',
      desc: 'Our math, science, and reading benchmarks are cross-aligned with world-class international baccalaureate standards and state college boards.'
    },
    {
      icon: <BookOpen className="w-5 h-5 text-purple-600" />,
      bg: 'bg-purple-50',
      title: 'Integrated STEAM Systems',
      desc: 'We merge engineering calculations with architectural design and digital programming to train holistic innovators who solve physical problems.'
    }
  ];

  const classLevels = [
    {
      level: 'Kindergarten (Ages 3-5)',
      desc: 'Establishing initial literacy, physical phonics, social sharing boundaries, and basic numeric shapes.',
      subjects: ['Phonics & Grammar', 'Basic Math Shapes', 'Sensory Play Arts', 'Social Development']
    },
    {
      level: 'Elementary (Grades 1-5)',
      desc: 'Focusing on reading speed, complex math logic, environmental sciences, world history foundations, and swimming.',
      subjects: ['English Literature', 'Decimal Mathematics', 'Physical Sciences', 'Visual Crafts', 'Athletics']
    },
    {
      level: 'Middle School (Grades 6-8)',
      desc: 'Fostering lab investigations, world languages, structural algebraic geometry, and dynamic debate seminars.',
      subjects: ['Pre-Geometry', 'Molecular Chemistry', 'World History', 'French / Spanish', 'Computer Programming']
    },
    {
      level: 'High School (Grades 9-12)',
      desc: 'Challenging college prep cohorts with 18 Advanced Placement tracks, research papers, and administrative projects.',
      subjects: ['AP Calculus BC', 'AP Biology & Physics', 'AP Literature', 'US Government', 'Data Structures & Robotics']
    }
  ];

  const calendarEvents = [
    { date: 'Aug 24, 2026', event: 'First Day of Academic Session 2026-27', type: 'academic' },
    { date: 'Sep 07, 2026', event: 'Labor Day (National Holiday)', type: 'holiday' },
    { date: 'Oct 14, 2026', event: 'Annual Science & Tech Fair', type: 'activity' },
    { date: 'Oct 19 - Oct 23, 2026', event: 'Mid-Term Block Examinations', type: 'exam' },
    { date: 'Nov 06, 2026', event: 'Parent-Teacher Consultations (PTC)', type: 'parent' },
    { date: 'Nov 23 - Nov 27, 2026', event: 'Thanksgiving Break (School Closed)', type: 'holiday' },
    { date: 'Dec 18, 2026', event: 'Winter Gala Concert', type: 'activity' },
    { date: 'Dec 21, 2026 - Jan 04, 2027', event: 'Winter Vacation Block', type: 'holiday' }
  ];

  const syllabusDownloads = [
    { id: 's-knd', name: 'Kindergarten Syllabus Folder 2026', size: '1.4 MB' },
    { id: 's-pri', name: 'Primary Grades 1-5 Curriculum Guide', size: '2.8 MB' },
    { id: 's-mid', name: 'Middle School Pacing Checklist', size: '3.1 MB' },
    { id: 's-hgh', name: 'High School AP Electives Prospectus', size: '4.5 MB' }
  ];

  return (
    <div className="font-sans text-slate-800 bg-white" id="academics-page-container">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-blue-600/15 z-10" />
        <div className="max-w-4xl mx-auto relative z-20">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-widest block mb-2">
            ACADEMIC COHORTS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Curriculum, Calendar & Methodology
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Nurturing young minds to think logically, query scientific paradigms, and execute rigorous academic studies.
          </p>
        </div>
      </section>

      {/* 1. Curriculum Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="academics-curriculum">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-3">
                SCHOLASTIC rigor
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
                A Globally Aligned Academic Framework
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Maria Academy operates on a dual-track cognitive model that respects foundational competencies while pushing boundaries of creative and experimental application. We design courses that challenge students to synthesize mathematical models, analyze global historical narratives, and build physical prototypes in computer sciences.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm sm:text-base">
                    <strong>18 Advanced Placement (AP)</strong> course selections for senior high school tracks.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm sm:text-base">
                    Dual enrollment credit programs partnering with state universities.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm sm:text-base">
                    100% faculty alignment with postgraduate or higher specialized certifications.
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
              <h3 className="font-extrabold text-slate-900 text-xl mb-6 tracking-tight">
                Academic Accreditations
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center font-extrabold shrink-0">
                    S
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-sm mb-1">MSA Accreditation Shield</h4>
                    <p className="text-slate-500 text-xs">Fully accredited by Middle States Association of Colleges and Schools.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold shrink-0">
                    C
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-sm mb-1">College Board Registered</h4>
                    <p className="text-slate-500 text-xs">Official test administering center for SAT, AP, and PSAT examinations.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-xs">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-extrabold shrink-0">
                    N
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-sm mb-1">STEM Center of Excellence</h4>
                    <p className="text-slate-500 text-xs">Designated as a state benchmark for secondary engineering and robotic automation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Teaching Methodology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100" id="academics-methodology">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-3">
              PEDAGOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Our Modern Teaching Methodology
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed text-sm sm:text-base">
              Moving beyond traditional passive learning to spark personal inquiry, global responsibility, and practical critical thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodologies.map((method, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 hover:border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4 hover:shadow-md transition-all"
              >
                <div className={`w-10 h-10 rounded-xl ${method.bg} flex items-center justify-center shrink-0`}>
                  {method.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-950 text-base mb-2">{method.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{method.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Class Levels Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="academics-classes">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-3">
              ACADEMIC SPECTRUM
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Class Levels & Core Subjects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {classLevels.map((lvl, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col gap-5 hover:bg-slate-50/50"
              >
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl mb-2">
                    {lvl.level}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {lvl.desc}
                  </p>
                </div>

                <div>
                  <span className="text-slate-400 font-semibold text-[10px] uppercase tracking-wider block mb-2">
                    Core subjects taught
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {lvl.subjects.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold px-3 py-1 rounded-lg"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Academic Calendar */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100" id="academics-calendar">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 p-6 sm:p-10">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-6 mb-6">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-extrabold text-xl text-slate-900 tracking-tight">
                Academic Session Calendar 2026 - 2027
              </h2>
              <span className="text-slate-400 text-xs">Scheduled timeline dates and school vacation blocks</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 text-xs font-semibold uppercase tracking-wider pb-3">
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Description of Session Event</th>
                  <th className="py-3 px-4 text-right">Tag / Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {calendarEvents.map((ev, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900 whitespace-nowrap">{ev.date}</td>
                    <td className="py-3 px-4 text-slate-600">{ev.event}</td>
                    <td className="py-3 px-4 text-right">
                      <span
                        className={`inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                          ev.type === 'holiday'
                            ? 'bg-amber-50 text-amber-700'
                            : ev.type === 'exam'
                            ? 'bg-red-50 text-red-700'
                            : ev.type === 'activity'
                            ? 'bg-purple-50 text-purple-700'
                            : 'bg-blue-50 text-blue-700'
                        }`}
                      >
                        {ev.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Syllabus Downloads Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="academics-syllabus-downloads">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-3">
              SYLLABUS ARCHIVE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Download Syllabus Folders
            </h2>
            <p className="text-slate-500 mt-2 leading-relaxed text-sm sm:text-base">
              Get detailed, step-by-step PDF study plans, chapter paces, and required text lists for each academic tier.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {syllabusDownloads.map((syl) => {
              const isDownloading = downloadingId === syl.id;
              const isSuccess = downloadSuccess === syl.name;

              return (
                <div
                  key={syl.id}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 bg-blue-100 text-blue-700 rounded-lg shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-slate-900 text-sm truncate">{syl.name}</h4>
                      <span className="text-[11px] text-slate-400 block">{syl.size} &middot; PDF File</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownload(syl.id, syl.name)}
                    disabled={isDownloading}
                    className={`shrink-0 p-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center ${
                      isSuccess
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
                    }`}
                    id={`btn-download-${syl.id}`}
                  >
                    {isDownloading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : isSuccess ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Download className="w-4 h-4" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {downloadSuccess && (
            <div
              className="mt-6 bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs sm:text-sm p-4 rounded-xl text-center font-semibold animate-fade-in"
              id="download-success-toast"
            >
              Successfully initialized and downloaded: {downloadSuccess}! Check your browser downloads folder.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
