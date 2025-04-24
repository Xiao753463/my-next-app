// src/PortfolioList.js
'use client'

import React from 'react'
import PortfolioItem from '../PortfolioItem'
import { portfolioItems } from '@/app/data'
import { AnimatePresence, motion } from 'motion/react'

const PortfolioList = ({ tech }) => {
  const filteredItems = portfolioItems.filter((item) => {
    if (!tech || tech.length === 0) return true
    const itemTechLower = item.tech.map((t) => t.toLowerCase())
    const selectedTechLower = tech.map((t) => t.toLowerCase())
    return selectedTechLower.every((t) => itemTechLower.includes(t))
  })

  return (
    <div className="portfolio-list">
      <AnimatePresence>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <PortfolioItem
                id={item.id}
                title={item.title}
                git={item.git}
                subtitle={item.subtitle}
                images={item.images}
                path={`imgs/${item.id}/`}
              />
            </motion.div>
          ))
        ) : (
          <motion.div
            key="no-result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="no-result"
            style={{
              marginTop: '40px',
              fontSize: '20px',
              color: '#888',
              textAlign: 'center',
            }}
          >
            找不到符合作品
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PortfolioList
