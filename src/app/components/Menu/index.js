'use client'
import React, { useState, useContext, useEffect } from 'react'
import { portfolioItems } from '../../data'
import SearchBar from '../SearchBar'
import MenuItems from '../MenuItems'
import ThemeButton from './ThemeButton'
import ThemeContext, { theme } from '@/app/store/ThemeContext'
import Link from 'next/link'
import './Menu.css'
import '@/app/ui/style.css'

const imageStyle = {
  width: '100%',
  height: '100%',
}
export default function Menu() {
  const { themeState, setThemeState } = useContext(ThemeContext)
  useEffect(() => {
    const html = document.documentElement
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark') {
      html.classList.add('dark')
      setThemeState(theme.dark)
    } else if (savedTheme === 'light') {
      html.classList.add('light')
      setThemeState(theme.light)
    } else {
      // 根據系統偏好設定
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      if (prefersDark) {
        html.classList.add('dark')
        setThemeState(theme.dark)
      } else {
        html.classList.add('light')
        setThemeState(theme.light)
      }
    }
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }
  const [bg, setBg] = useState('') // 控制背景圖片
  // 模擬 menu-list 資料
  const menuItems = portfolioItems.reduce((acc, item) => {
    const { category, id, title } = item
    if (!acc[category]) {
      acc[category] = { works: [], links: [] }
    }
    acc[category].works.push(title)
    acc[category].links.push(`${id}`)
    return acc
  }, {})

  const socialMediaLinks = [
    {
      imgSrc: '/imgs/FB-Icon.png',
      url: 'https://www.facebook.com/hsiao.chunyun/',
    },
    {
      imgSrc: '/imgs/instagram_PNG9.png',
      url: 'https://www.instagram.com/xiao753463/',
    },
    {
      imgSrc: '/imgs/instagram_PNG9.png',
      url: 'https://www.instagram.com/peco.x1101/',
    },
  ]

  const handleMouseOver = (index) => {
    const backgroundImage = `Cover-${index}.png`
    setBg(backgroundImage) // 更新背景圖片
  }

  const handleMouseOut = () => {
    setBg('') // 清空背景圖片
  }

  const openLink = (url) => {
    window.open(url, '_blank')
  }

  return (
    <menu>
      <div>
        <div id="nav">
          <Link href="/" className="link">
            Xiao&apos;s Resume
          </Link>

          <MenuItems
            menuItems={menuItems}
            socialMediaLinks={socialMediaLinks}
            onItemClick={() => {}}
          />
        </div>
        <SearchBar />
      </div>
      <ThemeButton />
    </menu>
  )
}
