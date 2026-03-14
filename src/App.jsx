import { useState, useEffect } from 'react'
import JobCard from './components/JobCard'
import FilterBar from './components/FilterBar'
import Header from './components/Header' // 1. Added this import

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
      {/* 2. Replaced the old <header> block with our new component */}
      {/* Passing visibleJobs.length makes the "Open Roles" number dynamic! */}
      <Header jobCount={visibleJobs.length} />

      <main className="max-w-[1200px] mx-auto px-6 lg:px-12 pb-24">
        <FilterBar 
          filters={filters} 
          onRemove={(t) => setFilters(filters.filter(f => f !== t))} 
          onClear={() => setFilters([])} 
        />
        
        {/* Section Meta to show the count above the list */}
        <div className="flex items-center justify-between mt-12 mb-6">
           <h2 className="font-display text-2xl text-brown font-bold">Open Positions</h2>
           <span className="text-sm text-brown-light">
             Showing <strong className="text-terra">{visibleJobs.length}</strong> roles
           </span>
        </div>

        <div className="flex flex-col gap-6">
          {isLoading ? (
            <div className="text-center py-20 font-display text-brown text-2xl animate-pulse">Loading...</div>
          ) : error ? (
            <div className="text-center py-20 text-terra font-bold">{error}</div>
          ) : (
            visibleJobs.map(job => <JobCard key={job.id} job={job} onTagClick={handleTagClick} />)
          )}
        </div>
      </main>
    </div>
  )
}

export default App

