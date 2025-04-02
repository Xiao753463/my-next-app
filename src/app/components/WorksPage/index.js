// src/WorksPage.js
'use client'

import React, { useState } from 'react'
import PortfolioList from '../PortfolioList'
import { portfolioItems } from '@/app/data'
import './WorksPage.css'

export default function WorksPage() {
  // 所有出現過的 tech（自動整理）
  const allTechs = Array.from(
    new Set(portfolioItems.flatMap((item) => item.tech.map((t) => t)))
  )

  const [selectedTechs, setSelectedTechs] = useState([])

  const toggleTech = (tech) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    )
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }} className="techBtnList">
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => toggleTech(tech)}
            className={selectedTechs.includes(tech) ? 'selected' : ''}
          >
            {tech}
          </button>
        ))}
      </div>

      <PortfolioList tech={selectedTechs} />
    </div>
  )
}
