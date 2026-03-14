import { useState, useEffect } from 'react'
import JobCard from './components/JobCard'
import FilterBar from './components/FilterBar'

const API_URL = 'https://jobs-api-l3e2.onrender.com/api/jobs'

function App() {
  const [jobs, setJobs] = useState([])
  const [filters, setFilters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(API_URL)
        if (!response.ok) throw new Error('Failed to fetch jobs')
        const data = await response.json()
        setJobs(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchJobs()
  }, [])

  const visibleJobs = jobs.filter(job => {
    if (filters.length === 0) return true
    const jobTags = [job.role, job.level, ...job.languages, ...job.tools]
    return filters.every(f => jobTags.includes(f))
  })

  const handleTagClick = (tag) => {
    if (!filters.includes(tag)) setFilters([...filters, tag])
  }

  return (
    <div className="min-h-screen bg-cream font-body">
      <header className="bg-espresso h-[420px] relative overflow-hidden flex items-end pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 w-full z-10">
          <p className="font-bold text-amber-light uppercase tracking-[2px] text-[11px] mb-6">247 new roles this week</p>
          <h1 className="font-display text-5xl lg:text-7xl font-black text-cream leading-[0.95]">
            Find your next <br /> <span className="italic text-terra-light">great role.</span>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[60px]">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full fill-cream">
            <path d="M0 60 Q720 0 1440 60 L1440 60 L0 60 Z" />
          </svg>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 lg:px-12 pb-24">
        <FilterBar 
          filters={filters} 
          onRemove={(t) => setFilters(filters.filter(f => f !== t))} 
          onClear={() => setFilters([])} 
        />
        <div className="flex flex-col gap-6 mt-12">
          {isLoading ? (
            <div className="text-center py-20 font-display text-brown text-2xl animate-pulse">Loading...</div>
          ) : (
            visibleJobs.map(job => <JobCard key={job.id} job={job} onTagClick={handleTagClick} />)
          )}
        </div>
      </main>
    </div>
  )
}

export default App
