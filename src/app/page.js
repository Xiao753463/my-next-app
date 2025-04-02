'use client'
import Image from 'next/image'
import styles from './page.module.css'
import '@/app/ui/style.css'
import { useContext } from 'react'
import WorksPage from './components/WorksPage'
import ThemeContext, { theme } from '@/app/store/ThemeContext'

export default function Home() {
  const { themeState, setThemeState } = useContext(ThemeContext)
  return (
    <div id="main">
      <div id="banner">
        <div id="banner-div">
          <div id="picture-column">
            <div id="picture"></div>
          </div>
          <div id="MyName">CHUN-YUN XIAO</div>
        </div>
        <div id="scroll">
          <p>繼續往下</p>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="title">
        <h2 className="subtitle">WORKS</h2>
      </div>
      <div id="works">
        <WorksPage />
      </div>
    </div>
  )
}
