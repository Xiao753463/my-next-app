'use client'
import React, { useState, useContext, useEffect } from 'react'
import ThemeContext, { theme } from '@/app/store/ThemeContext'
import '@/app/ui/style.css'
import styles from './themebutton.module.css'
import { AnimatePresence, motion } from 'motion/react'

const setBodyClass = (className) => {
  document.documentElement.className = className
  localStorage.setItem('theme', className)
}
export default function ThemeButton() {
  const { themeState, setThemeState } = useContext(ThemeContext)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  const isLight = themeState == theme.light
  console.log(isLight)
  return (
    <div id={styles['theme-toggle']}>
      <motion.button
        layout
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.25 },
        }}
        initial={{ x: isLight ? 0 : 25 }}
        animate={{ x: isLight ? 0 : 25 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        id={styles['theme-toggle-btn']}
        onClick={() => {
          const newTheme = themeState === theme.light ? theme.dark : theme.light
          setThemeState(newTheme)
          setBodyClass(newTheme === theme.light ? 'light' : 'dark')
        }}
      ></motion.button>
    </div>
  )
}
