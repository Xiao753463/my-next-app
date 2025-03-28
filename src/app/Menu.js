'use client'
import React, { useState } from 'react'
import { portfolioItems } from './data'
import SearchBar from './components/SearchBar/SearchBar'
import Image from 'next/image'
import Link from 'next/link'
import '@/app/ui/style.css'
const imageStyle = {
  width: '100%',
  height: '100%',
}
export default function Menu() {
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
        <div>
          <Link href="/" className="link">
            Xiao&apos;s Resume
          </Link>
          <button className="menu">
            作品集
            <ul role="menu" className="dropdown-menu">
              {Object.keys(menuItems).map((category) => (
                <React.Fragment key={category}>
                  <li className="subtitle">
                    <span>— {category} ———</span>
                  </li>
                  {menuItems[category].works.map((work, index) => (
                    <li className="menu-list" key={`${category}-${index}`}>
                      <Link href={`/works/${menuItems[category].links[index]}`}>
                        {work}
                      </Link>
                    </li>
                  ))}
                </React.Fragment>
              ))}
            </ul>
          </button>

          <button className="menu">
            關於我
            <ul role="menu" className="dropdown-menu">
              <span id="name">蕭淳云 XIAO CHUN-YUN</span>
              <br />
              國立成功大學製造資訊與系統研究所碩士 在學中
              <br />
              <b>
                HTML / CSS / javascript / React / Node.js / Python / Flask / C#
                / VBA / SQL
              </b>
              <div id="socialmedia">
                {socialMediaLinks.map((link, index) => (
                  <a
                    key={index}
                    className="socialimg"
                    onClick={() => openLink(link.url)}
                    style={{ cursor: 'pointer' }}
                  >
                    <Image
                      src={link.imgSrc}
                      width={0}
                      height={0}
                      unoptimized
                      alt="Social Media"
                    />
                  </a>
                ))}
              </div>
            </ul>
          </button>

          {/* 背景圖片顯示 */}
          <div
            className="dropdown-menu"
            style={{
              width: '300px',
              height: '200px',
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
            }}
          >
            Dropdown content
          </div>
        </div>
        <SearchBar />
      </div>
    </menu>
  )
}
