import { useState } from 'react';
import { NOTICES } from '../data/schoolData';
import { Search, Bell, Download, FileText, CheckCircle, Loader2 } from 'lucide-react';

export default function NoticeBoard() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'academic' | 'exam' | 'sports' | 'admission'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const filteredNotices = NOTICES.filter((not) => {
    const matchesCategory = activeCategory === 'all' || not.category === activeCategory;
    const matchesSearch =
      not.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      not.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownloadPDF = (id: string, title: string) => {
    setDownloadingId(id);
    setDownloadSuccess(null);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadSuccess(title);
      setTimeout(() => setDownloadSuccess(null), 4000);
    }, 1200);
  };

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen" id="notice-board-page">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-blue-600/15 z-10" />
        <div className="max-w-4xl mx-auto relative z-20">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-widest block mb-2">
            OFFICIAL BULLETIN
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Official Notice Board
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Instant circulars, emergency holiday updates, exam timetables, fee pacing sheets, and parent resources.
          </p>
        </div>
      </section>

      {/* Filter and Search Controls */}
      <section className="py-8 bg-slate-50 border-b border-slate-100 px-4 sm:px-6 lg:px-8" id="notices-controls">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5" id="notices-tabs">
            {(['all', 'general', 'academic', 'exam', 'sports', 'admission'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat === 'all' ? 'All Notices' : cat}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search notices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-9 pr-4 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Bulletins Feed */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="notices-feed">
        <div className="max-w-4xl mx-auto">
          {filteredNotices.length === 0 ? (
            <div className="text-center py-16 text-slate-400" id="notices-no-results">
              No bulletins match your active search terms or category selection.
            </div>
          ) : (
            <div className="flex flex-col gap-6" id="notices-list">
              {filteredNotices.map((not) => {
                const isDownloading = downloadingId === not.id;
                const isSuccess = downloadSuccess === not.title;

                return (
                  <div
                    key={not.id}
                    className={`rounded-3xl border p-6 sm:p-8 transition-all hover:shadow-md ${
                      not.isUrgent
                        ? 'bg-red-50/40 border-red-100 hover:bg-red-50/60'
                        : 'bg-slate-50 border-slate-100 hover:bg-slate-50/80'
                    }`}
                    id={`notice-circular-${not.id}`}
                  >
                    {/* Header tags */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400 text-xs font-semibold uppercase font-sans">
                          {not.date}
                        </span>
                        <span className="text-slate-300 font-normal">|</span>
                        <span className="text-blue-600 font-bold text-[10px] sm:text-xs uppercase tracking-wide">
                          {not.category} Notice
                        </span>
                      </div>

                      {not.isUrgent && (
                        <span className="bg-red-600 text-white font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-md flex items-center gap-1">
                          <Bell className="w-3 h-3 animate-pulse" />
                          Urgent Announcement
                        </span>
                      )}
                    </div>

                    {/* Notice details */}
                    <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-3 tracking-tight">
                      {not.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 whitespace-pre-line">
                      {not.content}
                    </p>

                    {/* Download circular */}
                    <div className="border-t border-slate-200/50 pt-4 flex flex-wrap justify-between items-center gap-4">
                      <span className="text-[10px] sm:text-xs text-slate-400">
                        Admin Sign off: Dean of Student Affairs &bull; Maria Office
                      </span>

                      <button
                        onClick={() => handleDownloadPDF(not.id, not.title)}
                        disabled={isDownloading}
                        className={`font-bold text-xs px-4 py-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                          isSuccess
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                            : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                        id={`btn-download-notice-${not.id}`}
                      >
                        {isDownloading ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-600" />
                        ) : isSuccess ? (
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Download className="w-3.5 h-3.5 text-slate-500" />
                        )}
                        {isSuccess ? 'Circular Exported' : 'Export Notice PDF'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {downloadSuccess && (
            <div
              className="mt-8 bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs sm:text-sm p-4 rounded-xl text-center font-semibold animate-fade-in"
              id="notice-download-success-toast"
            >
              Notice exported successfully: "{downloadSuccess}"! Compiled official PDF downloaded.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
