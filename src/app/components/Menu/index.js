'use client'
import React, { useState, useContext } from 'react'
import { portfolioItems } from '../../data'
import SearchBar from '../SearchBar'
import MenuItems from '../MenuItems'
import ThemeContext, { theme } from '@/app/store/ThemeContext'
import Link from 'next/link'
import './Menu.css'
import '@/app/ui/style.css'

const setBodyClass = (className) =>
  (document.documentElement.className = className)
const imageStyle = {
  width: '100%',
  height: '100%',
}
export default function Menu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { themeState, setThemeState } = useContext(ThemeContext)

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
        <div id="tools">
          <SearchBar />
          <button
            id="themeBtn"
            onClick={() => {
              setThemeState((pre) =>
                pre === theme.light ? theme.dark : theme.light
              )
              setBodyClass(themeState.color === '#f8f8f8' ? 'dark' : 'light')
              console.log(themeState.color)
            }}
          ></button>
        </div>
      </div>
    </menu>
  )
}
