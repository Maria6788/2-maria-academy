import { EVENTS } from '../data/schoolData';
import { Calendar, MapPin, Clock, ArrowRight, Rss, HelpCircle, Bell } from 'lucide-react';
import { useState } from 'react';

export default function EventsNews() {
  const [newsList] = useState([
    {
      id: 'n-1',
      date: 'Oct 24, 2026',
      title: 'Maria Panthers Debate Team Secures District Gold',
      summary: 'Our varsity debate team triumphed at the Annual Tri-State Speech & Debate Tournament, securing 1st place in policy debating and 3 outstanding orator shields.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600'
    },
    {
      id: 'n-2',
      date: 'Oct 10, 2026',
      title: 'Inauguration of the Advanced Biotech Greenhouse Labs',
      summary: 'Under the guidance of Dr. Martinez, we completed installation of our computerized biotechnology hydroponics, allowing high-school bio-cohorts to study plant cellular genetics.',
      image: 'https://images.unsplash.com/photo-1562774053-f5a02f68995b?q=80&w=600'
    },
    {
      id: 'n-3',
      date: 'Sep 22, 2026',
      title: 'Alumni Spotlight: Sarah Jenkins Joins NASA Cohorts',
      summary: 'Maria Alumna Sarah Jenkins (Class of 2019) was inducted into the active JPL aerospace engineering research team, pursuing deep-space computational trajectory mapping.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600'
    }
  ]);

  const [registeredEventId, setRegisteredEventId] = useState<string | null>(null);

  const handleRegisterEvent = (id: string) => {
    setRegisteredEventId(id);
    setTimeout(() => {
      setRegisteredEventId(null);
    }, 4000);
  };

  return (
    <div className="font-sans text-slate-800 bg-white" id="events-news-page">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-blue-600/15 z-10" />
        <div className="max-w-4xl mx-auto relative z-20">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-widest block mb-2">
            STAY INFORMED
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Events & Latest Campus News
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Follow our active calendar of regional athletic shields, academic open houses, symphonies, and latest headlines.
          </p>
        </div>
      </section>

      {/* Main Container Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="events-main-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Col - Events & News (Takes 2 columns on large screens) */}
            <div className="lg:col-span-2 flex flex-col gap-16">
              {/* Upcoming Events Section */}
              <div>
                <div className="flex items-center gap-2 mb-8 pb-3 border-b border-slate-100">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h2 className="font-extrabold text-2xl text-slate-900 tracking-tight">
                    Upcoming Campus Events
                  </h2>
                </div>

                <div className="flex flex-col gap-8" id="events-cards-container">
                  {EVENTS.map((event) => {
                    const isRegistered = registeredEventId === event.id;
                    return (
                      <div
                        key={event.id}
                        className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row"
                        id={`event-card-${event.id}`}
                      >
                        {/* Event Card Image */}
                        <div className="w-full sm:w-48 h-48 sm:h-auto shrink-0 bg-slate-100 relative">
                          <img
                            src={event.image}
                            alt={event.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-blue-600 text-white font-bold text-[10px] uppercase px-2.5 py-1 rounded-lg shadow-sm">
                            {event.category}
                          </div>
                        </div>

                        {/* Event Details Content */}
                        <div className="p-6 flex flex-col justify-center flex-grow">
                          <span className="text-blue-600 font-extrabold text-xs block mb-1">
                            {event.date}
                          </span>
                          <h3 className="font-extrabold text-slate-950 text-base sm:text-lg mb-2">
                            {event.title}
                          </h3>
                          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                            {event.description}
                          </p>

                          {/* Meta Coordinates */}
                          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-400 mb-4 font-medium border-t border-slate-50 pt-3">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                              {event.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                              {event.location}
                            </span>
                          </div>

                          {/* CTA Trigger */}
                          <button
                            onClick={() => handleRegisterEvent(event.id)}
                            disabled={isRegistered}
                            className={`w-fit font-bold text-xs px-4 py-2 rounded-xl border transition-all ${
                              isRegistered
                                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                                : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                            }`}
                          >
                            {isRegistered ? 'Seat Successfully Reserved!' : 'RSVP & Register Seat'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Latest News Sub-Section */}
              <div>
                <div className="flex items-center gap-2 mb-8 pb-3 border-b border-slate-100">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                    <Rss className="w-5 h-5" />
                  </div>
                  <h2 className="font-extrabold text-2xl text-slate-900 tracking-tight">
                    Latest School Headlines
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="news-cards-container">
                  {newsList.map((news) => (
                    <div
                      key={news.id}
                      className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 flex flex-col"
                    >
                      <div className="h-44 bg-slate-100 overflow-hidden relative">
                        <img
                          src={news.image}
                          alt={news.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <span className="text-slate-400 font-semibold text-[10px] uppercase block mb-1">
                          {news.date}
                        </span>
                        <h3 className="font-extrabold text-slate-900 text-sm mb-2 line-clamp-2">
                          {news.title}
                        </h3>
                        <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-3">
                          {news.summary}
                        </p>
                        <button className="text-blue-600 hover:text-blue-800 font-bold text-xs flex items-center gap-1 group mt-auto self-start">
                          Read Full Article
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col - Sidebar with highlights (Takes 1 column on large screens) */}
            <div className="flex flex-col gap-8">
              {/* Sidebar Segment 1: Coordinator Registrations */}
              <div className="bg-slate-50 border border-slate-150 rounded-3xl p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-150">
                  <Bell className="w-5 h-5 text-blue-600" />
                  <h3 className="font-extrabold text-base text-slate-950 tracking-tight">
                    Coordinator Bulletin
                  </h3>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                  For inter-school team registrations, corporate sponsorships, or press clearance passes regarding our Science Fair, contact our relations director directly.
                </p>
                <div className="bg-white border border-slate-200 p-3.5 rounded-2xl text-xs flex flex-col gap-2">
                  <span className="block font-bold text-slate-900">General Public Relations Desk</span>
                  <span className="text-slate-500">Phone: +1 (800) 555-0199</span>
                  <span className="text-slate-500">Mail: relations@Maria.edu</span>
                </div>
              </div>

              {/* Sidebar Segment 2: Event FAQs */}
              <div className="bg-slate-50 border border-slate-150 rounded-3xl p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-150">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  <h3 className="font-extrabold text-base text-slate-950 tracking-tight">
                    Frequently Asked Questions
                  </h3>
                </div>
                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <strong className="block text-slate-900 font-bold mb-1">Are campus events open to the public?</strong>
                    <p className="text-slate-500 text-xs">Yes, events tagged as 'cultural' or 'academic open houses' are fully open to local neighbors and families.</p>
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-1">Do we need parking passes?</strong>
                    <p className="text-slate-500 text-xs">Complementary security parking slips are issued at the East Gate entrance upon showing registered RSVP receipts.</p>
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-1">Is video recording permitted?</strong>
                    <p className="text-slate-500 text-xs">For student safety, amateur video recording is allowed only within seating lines. Media rigs must submit clearance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
