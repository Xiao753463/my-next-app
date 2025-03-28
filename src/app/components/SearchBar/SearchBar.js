'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { portfolioItems } from '@/app/data'
import './SearchBar.css'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const router = useRouter()

  const handleInputChange = (e) => {
    const input = e.target.value
    setQuery(input)

    if (input.trim() === '') {
      setSuggestions([])
      return
    }

    const filtered = portfolioItems.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    )

    setSuggestions(filtered)
  }

  const handleSelect = (item) => {
    router.push(`/works/${item.id}`)
    setQuery('')
    setSuggestions([])
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      handleSelect(suggestions[0])
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="搜尋作品名稱"
        className="search-input"
      />
      {suggestions.length > 0 && (
        <ul className="search-suggestions">
          {suggestions.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSelect(item)}
              className="search-item"
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
      {query !== '' && suggestions.length === 0 && (
        <div className="search-no-result">找不到作品</div>
      )}
    </div>
  )
}
