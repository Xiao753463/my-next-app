'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { portfolioItems } from '@/app/data'
import { AnimatePresence, motion } from 'motion/react'
import './SearchBar.css'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const router = useRouter()

  const searchRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setQuery('')
        setSuggestions([])
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

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
    <div className="search-container" ref={searchRef}>
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
          <AnimatePresence>
            {suggestions.map((item) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.2,
                  delay: 0.05 * suggestions.indexOf(item),
                }}
                onClick={() => handleSelect(item)}
                className="search-item"
              >
                {item.title}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
      {query !== '' && suggestions.length === 0 && (
        <ul className="search-no-result">
          <li>找不到作品</li>
        </ul>
      )}
    </div>
  )
}
