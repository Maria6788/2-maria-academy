import React, { useState } from 'react';
import { GALLERY } from '../data/schoolData';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'campus' | 'sports' | 'academic' | 'arts' | 'events'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY.filter(
    (item) => filter === 'all' || item.category === filter
  );

  const handleOpenLightbox = (item: GalleryItem) => {
    // Find index in the FILTERED list so sliding is intuitive
    const idx = filteredItems.findIndex((fi) => fi.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
    }
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen" id="gallery-page-container">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-blue-600/15 z-10" />
        <div className="max-w-4xl mx-auto relative z-20">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-widest block mb-2">
            PHOTO ALBUMS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Our Campus Galleries
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            A vibrant glimpse into active classroom experiments, track tournaments, arts concerts, and graduation.
          </p>
        </div>
      </section>

      {/* Categories Toolbar */}
      <section className="py-8 bg-slate-50 border-b border-slate-100 px-4 sm:px-6 lg:px-8" id="gallery-toolbar">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2">
          {(['all', 'campus', 'sports', 'academic', 'arts', 'events'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Interactive Photo Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="gallery-grid-layout">
        <div className="max-w-7xl mx-auto">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              No photos loaded for this section.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => handleOpenLightbox(item)}
                  className="group relative h-64 sm:h-72 bg-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg cursor-pointer transition-all border border-slate-100"
                  id={`gallery-item-${item.id}`}
                >
                  {/* Photo Overlay */}
                  <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-between p-5">
                    <div className="self-end bg-white/20 p-2 rounded-xl backdrop-blur-xs text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-blue-400 font-extrabold uppercase tracking-widest block mb-1">
                        {item.category}
                      </span>
                      <p className="text-xs sm:text-sm text-white font-semibold leading-snug line-clamp-2">
                        {item.caption}
                      </p>
                    </div>
                  </div>

                  <img
                    src={item.url}
                    alt={item.caption}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal Layer */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between py-6 px-4 sm:px-12 text-white"
            id="gallery-lightbox-modal"
          >
            {/* Top Toolbar */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-400 font-sans">
                Maria Gallery &middot; {activeItem.category}
              </span>
              <button
                onClick={handleCloseLightbox}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all focus:outline-none"
                aria-label="Close Lightbox"
                id="lightbox-close-btn"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Middle Main Content */}
            <div className="relative flex items-center justify-center max-w-5xl w-full h-[60vh] sm:h-[70vh] mx-auto">
              {/* Previous Image */}
              <button
                onClick={handlePrevImage}
                className="absolute left-0 sm:-left-12 z-10 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all border border-white/10 focus:outline-none"
                aria-label="Previous Image"
                id="lightbox-prev-btn"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Photo Display */}
              <div className="h-full max-w-full flex items-center justify-center overflow-hidden p-2">
                <img
                  src={activeItem.url}
                  alt={activeItem.caption}
                  referrerPolicy="no-referrer"
                  onClick={(e) => e.stopPropagation()} // Stop closing
                  className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
                />
              </div>

              {/* Next Image */}
              <button
                onClick={handleNextImage}
                className="absolute right-0 sm:-right-12 z-10 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all border border-white/10 focus:outline-none"
                aria-label="Next Image"
                id="lightbox-next-btn"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Details */}
            <div className="w-full max-w-3xl mx-auto text-center font-sans pb-4">
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-2 bg-black/40 p-4 rounded-xl border border-white/5 backdrop-blur-xs">
                {activeItem.caption}
              </p>
              <span className="text-[10px] text-slate-500 block uppercase">
                Image {lightboxIndex! + 1} of {filteredItems.length} inside {filter} category
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
