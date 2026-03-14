import React from 'react';

// Notice "jobCount" inside the curly braces here
const Header = ({ jobCount }) => {
  return (
    <header className="relative bg-espresso text-cream pt-20 pb-16 px-6 overflow-hidden">
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        
        {/* Left Side: Text */}
        <div className="flex-1">
          <p className="text-[11px] font-bold tracking-[2px] text-amber-light uppercase mb-6">
            247 new roles this week
          </p>
          <h1 className="font-playfair text-5xl lg:text-7xl font-black leading-none mb-6">
            Find your next <br />
            <span className="italic text-terra-light">great role.</span>
          </h1>
          <p className="text-sand-light/50 text-sm max-w-md">
            Curated listings for developers. Filter by stack, seniority and location.
          </p>
        </div>

        {/* Right Side: The Stats (The part you are missing!) */}
        <div className="flex gap-10 border-l border-white/10 pl-8">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Open roles</span>
            <span className="font-playfair text-3xl font-bold">{jobCount}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Companies</span>
            <span className="font-playfair text-3xl font-bold text-amber-light">8</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Remote</span>
            <span className="font-playfair text-3xl font-bold text-terra-light">60%</span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
