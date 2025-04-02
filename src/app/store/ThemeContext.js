'use client'
import { Children, createContext } from 'react'

export const theme = {
  light: {
    backgroundColor: '#f8f8f8',
    color: '#323232',
  },
  dark: {
    backgroundColor: '#0f0f0f',
    color: '#f8f8f8',
  },
}
const ThemeContext = createContext({
  backgroundColor: '#eae0d0',
  color: '#000',
})
export default ThemeContext
