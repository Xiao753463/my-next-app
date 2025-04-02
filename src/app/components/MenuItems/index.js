// components/MenuItems.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MenuItems({
  menuItems,
  socialMediaLinks,
  onItemClick,
}) {
  return (
    <>
      <div className="menu">
        <div>作品集</div>
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
      </div>
      <div className="menu">
        <div>關於我</div>
        <ul role="menu" className="dropdown-menu">
          <span id="name">蕭淳云 XIAO CHUN-YUN</span>
          <br />
          國立成功大學製造資訊與系統研究所碩士 在學中
          <br />
          <b>
            HTML / CSS / javascript / Vue.js / React / Node.js / Python / Flask
            / C# / VBA / SQL
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
      </div>
    </>
  )
}
