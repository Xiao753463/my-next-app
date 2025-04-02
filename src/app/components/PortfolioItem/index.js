// src/PortfolioItem.js
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const imageStyle = {
  height: 'auto',
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.05)',
  width: '100%',
  maxWidth: '100%',
  height: 'auto',
}
const PortfolioItem = ({ id, title, subtitle, images, path }) => {
  return (
    <div className="portfolio-item">
      <div className="w_item">
        <Link href={'/works/' + id}>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src={`/${path + images[0]}`}
            style={imageStyle}
            alt={title}
          />
          <h5>{title}</h5>
          <small>{subtitle}</small>
        </Link>
      </div>
    </div>
  )
}

export default PortfolioItem
