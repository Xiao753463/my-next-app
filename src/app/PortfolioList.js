// src/PortfolioList.js
'use client'

import React from 'react'
import PortfolioItem from './components/PortfolioItem'
import { portfolioItems } from './data'

const PortfolioList = ({ tech }) => {
  return (
    <div className="portfolio-list">
      {portfolioItems
        .filter((item) => {
          // 若 tech 沒有傳或為空，則不做篩選，直接顯示全部
          if (!tech || tech.length === 0) return true

          // 全部轉小寫來比對
          const itemTechLower = item.tech.map((t) => t.toLowerCase())
          const filterTechLower = tech.map((t) => t.toLowerCase())

          // 檢查所有傳入 tech 是否都存在於 item.tech 中
          return filterTechLower.every((t) => itemTechLower.includes(t))
        })
        .map((item, index) => (
          <PortfolioItem
            key={index}
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            images={item.images}
            path={`imgs/${item.id}/`}
          />
        ))}
    </div>
  )
}

export default PortfolioList
