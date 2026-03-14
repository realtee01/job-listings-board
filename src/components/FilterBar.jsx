import React from 'react'

const FilterBar = ({ filters, onRemove, onClear }) => {
  if (filters.length === 0) return null
  return (
    <div className="relative z-20">
      <div className="bg-white p-5 rounded-card shadow-filter -mt-9 flex items-center justify-between">
        <div className="flex flex-wrap gap-3">
          {filters.map(tag => (
            <div key={tag} className="flex items-center rounded overflow-hidden border border-terra/10 bg-terra-pale">
              <span className="px-3 py-1 text-terra font-bold text-sm">{tag}</span>
              <button onClick={() => onRemove(tag)} className="bg-terra hover:bg-brown text-white px-2 py-1 font-bold">✕</button>
            </div>
          ))}
        </div>
        <button onClick={onClear} className="text-brown-light font-bold hover:text-terra underline decoration-sand-light underline-offset-4 text-sm">Clear all</button>
      </div>
    </div>
  )
}
export default FilterBar
