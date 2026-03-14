import React from 'react';

const Header = ({ jobCount }) => {
  return (
    <header className="relative bg-espresso text-cream pt-20 pb-16 px-6 overflow-hidden">
      {/* Decorative Blobs to match the design */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-terra/20 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-0.5 h-4 bg-terra rounded-full"></span>
              <span className="text-[11px] font-bold tracking-[2px] text-amber-light uppercase">
                247 new roles this week
              </span>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter mb-6">
              Find your next <br />
              <span className="italic text-terra-light">great role.</span>
            </h1>
            
            <p className="text-sand-light/50 text-sm md:text-base leading-relaxed max-w-md">
              Curated listings for developers. Filter by stack, seniority and location.
            </p>
          </div>

          {/* Stats Section */}
          <div className="flex gap-10 border-l border-white/10 pl-8 h-fit">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Open roles</span>
              <span className="font-playfair text-3xl font-bold">{jobCount}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Companies</span>
              <span className="font-playfair text-3xl font-bold text-amber-light">8</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Remote</span>
              <span className="font-playfair text-3xl font-bold text-terra-light">60%</span>
            </div>
          </div>

        </div>
      </div>
      
      {/* The Curve at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-10">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full fill-cream">
          <path d="M0 40 Q720 0 1440 40 L1440 40 L0 40 Z" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
