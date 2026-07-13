import { useState } from 'react';
import { Award, Compass, Heart, Shield, Music, Camera, Users, CheckCircle, Sparkles } from 'lucide-react';

export default function StudentLife() {
  const [activeTab, setActiveTab] = useState<'sports' | 'arts' | 'clubs'>('sports');

  const sportsHighlights = [
    { title: 'Varsity Soccer Panthers', desc: 'District League Shield champions three seasons in a row. Fostering teamwork and fitness.' },
    { title: 'Championship Track Squad', desc: 'Over 12 district gold medals in 100m sprint, cross-country runs, and hurdle relays.' },
    { title: 'Swimming & Water Polo', desc: 'Olympic-standard 8-lane heated swimming pools training regional champion swimmers.' }
  ];

  const artsHighlights = [
    { title: 'Maria Chamber Symphony', desc: 'A 60-student symphonic orchestra performing classical Beethoven and modern theatrical scores.' },
    { title: 'Fine Arts & Ceramics Studio', desc: 'Fully stocked spaces for oil paintings, canvas models, and clay wheels showcasing student works.' },
    { title: 'Theater & Drama Troupe', desc: 'Staging two grand theatrical productions annually, training actors, set designers, and sound technicians.' }
  ];

  const clubsHighlights = [
    { title: 'Robotics & AI Lab Cohort', desc: 'Designing automated AI maze navigation robots, winning 3rd place in state level leagues.' },
    { title: 'Speech & Debate Society', desc: 'Fostering stellar public speaking, geopolitical analysis, and rhetoric skills inside Model UN.' },
    { title: 'Eco-Greenhouse Collective', desc: 'Working with Dr. Martinez to maintain biological hydroponic crop pacing and campus planting.' }
  ];

  const successStories = [
    {
      student: 'Liam Vance',
      classYear: 'Class of 2024',
      achievement: 'MIT Robotics Full Scholarship',
      text: 'Liam designed an automated agricultural irrigation moisture monitor inside Maria STEAM labs. His research paper won the national scholarship, covering his full engineering BS degrees at MIT.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200'
    },
    {
      student: 'Sophia Rostova',
      classYear: 'Class of 2025',
      achievement: 'Yale Political Sciences Inductee',
      text: 'Sophia served as the President of Maria Debating Society and Model UN. She led our delegation to win the Ivy League Debate Shield and was subsequently admitted into Yale.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200'
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-white" id="student-life-page">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-blue-600/15 z-10" />
        <div className="max-w-4xl mx-auto relative z-20">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-widest block mb-2">
            CAMPUS CULTURE
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Vibrant Student Life
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Nurturing athletic resilience, creative artistic souls, deep-tech clubs, and ethical leadership structures.
          </p>
        </div>
      </section>

      {/* 1. Interactive Tabs Section (Sports, Arts, Clubs) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="student-life-activities">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-3">
              EXTRACURRICULARS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Discover Your Life Long Passion
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center border-b border-slate-100 mb-12 max-w-md mx-auto" id="student-life-tabs">
            {(['sports', 'arts', 'clubs'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-1/3 py-3 text-sm font-bold capitalize border-b-2 transition-all ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="student-life-tab-content">
            {activeTab === 'sports' &&
              sportsHighlights.map((sport, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all flex flex-col gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-950 text-base mb-2">{sport.title}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{sport.desc}</p>
                  </div>
                </div>
              ))}

            {activeTab === 'arts' &&
              artsHighlights.map((art, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all flex flex-col gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <Music className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-950 text-base mb-2">{art.title}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{art.desc}</p>
                  </div>
                </div>
              ))}

            {activeTab === 'clubs' &&
              clubsHighlights.map((club, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all flex flex-col gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-950 text-base mb-2">{club.title}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{club.desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* 2. Campus Tours Details Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100" id="student-life-tours">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop"
                alt="Maria Courtyard"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/5 z-10" />
            </div>

            {/* Content info */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-3">
                  VISIT CAMPUS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
                  Schedule an Interactive Live Campus Tour
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-4">
                  We invite prospective parents and candidate scholars to join our student-led Friday afternoon campus walks. Tour our biotechnology labs, sports stadium courts, acoustical music spaces, and homeroom desks.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Orientation groups assemble at the South Administration Archway at exactly 02:00 PM every Friday. Security parking passes are provided free of charge.
                </p>
              </div>

              {/* Tour Checks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-2 items-center text-slate-700 text-xs sm:text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Meet homeroom advisors</span>
                </div>
                <div className="flex gap-2 items-center text-slate-700 text-xs sm:text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Tour STEAM robotic cells</span>
                </div>
                <div className="flex gap-2 items-center text-slate-700 text-xs sm:text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Collect syllabus flyers</span>
                </div>
                <div className="flex gap-2 items-center text-slate-700 text-xs sm:text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Complementary high tea</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Student Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="student-life-success">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest block mb-3">
              ALUMNI SPOTLIGHT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Inspiring Student Success Stories
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed text-sm sm:text-base">
              See how our academic commitment, leadership models, and project counselors empower children to achieve outstanding honors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col gap-6 relative"
              >
                <div className="absolute top-6 right-6 p-1 text-blue-100">
                  <Sparkles className="w-10 h-10 animate-pulse" />
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={story.avatar}
                    alt={story.student}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-full object-cover shadow border border-slate-200"
                  />
                  <div>
                    <h3 className="font-extrabold text-slate-950 text-base sm:text-lg mb-0.5">
                      {story.student}
                    </h3>
                    <span className="text-xs font-semibold text-slate-400 block mb-1">
                      {story.classYear}
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-0.5 rounded uppercase">
                      {story.achievement}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                  "{story.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
