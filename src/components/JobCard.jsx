import React from 'react'

const JobCard = ({ job, onTagClick }) => {
  const tags = [job.role, job.level, ...job.languages, ...job.tools]
  return (
    <div className={`bg-white p-8 lg:p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 relative mt-8 lg:mt-0 flex flex-col lg:flex-row lg:items-center justify-between border-l-[5px] ${job.featured ? 'border-terra' : 'border-transparent'}`}>
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="absolute -top-6 left-8 lg:static w-12 h-12 lg:w-20 lg:h-20 bg-espresso rounded-xl flex items-center justify-center shadow-md overflow-hidden">
          <img src={job.logo} alt="" className="w-2/3 h-2/3 object-contain" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-brown-light font-bold text-sm uppercase tracking-wide">{job.company}</span>
            {job.new && <span className="bg-sage-pale text-sage font-bold px-2 py-1 rounded-full text-[10px] uppercase pt-1.5">New!</span>}
            {job.featured && <span className="bg-espresso text-cream px-2 py-1 rounded-full text-[10px] font-bold uppercase pt-1.5">Featured</span>}
          </div>
          <h2 className="font-display font-bold text-espresso text-xl hover:text-terra cursor-pointer mb-2">{job.position}</h2>
          <div className="flex gap-4 text-sand font-body text-sm">
            <span>{job.postedAt} • {job.contract} • {job.location}</span>
          </div>
        </div>
      </div>
      <hr className="lg:hidden my-6 border-parchment" />
      <div className="flex flex-wrap gap-3 lg:justify-end">
        {tags.map((tag, idx) => (
          <button key={idx} onClick={() => onTagClick(tag)} className={`px-3 py-1.5 rounded font-bold text-xs transition-all hover:scale-105 ${job.tools.includes(tag) ? 'bg-amber-pale text-amber hover:bg-amber hover:text-white' : 'bg-terra-pale text-terra hover:bg-terra hover:text-white'}`}>
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
export default JobCard
