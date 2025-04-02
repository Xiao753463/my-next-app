'use client'
import ThemeContext, { theme } from './ThemeContext'
import { useState } from 'react'

export const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState(theme.light)
  return (
    <ThemeContext.Provider value={{ themeState, setThemeState }}>
      {children}
    </ThemeContext.Provider>
  )
}
