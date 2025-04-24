'use client'
import React, { useContext } from 'react'
import { portfolioItems } from '../../data'
import Image from 'next/image'
import Blank from './Blank'
import { useParams } from 'next/navigation'
import './Work.css'
import GitHubButton from '@/app/components/GitHubButton'
const bigImgStyle = {
  width: '100%',
  height: 'auto',
}
const Work = ({ data }) => {
  let { id } = useParams()
  const item = portfolioItems.find((item) => item.id === parseInt(id))
  return (
    <div>
      <div id="main">
        <div className="big-img">
          <Image
            src={`/imgs/${id}/${item.images[0]}`}
            width={0}
            height={0}
            style={bigImgStyle}
            alt={item.title + ' picture 0'}
            unoptimized={true}
          />
        </div>
        <div id="work-title" className="title">
          <h2 className="subtitle">{item.title}</h2>
        </div>
        <GitHubButton gitLink={item.git} />
        <Blank h={40} />
        <div id="work-subtitle" className="subtitle">
          <h3>{item.subtitle}</h3>
        </div>
        <Blank h={40} />
        <div id="info">
          <div id="tech">
            {item.tech.map((element, index) => {
              return (
                <div className="tech-item" key={index}>
                  {element}
                </div>
              )
            })}
          </div>
          <div id="description">
            <p>
              {item.description.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                  <br />
                </span>
              ))}
            </p>
          </div>
          <div id="images">
            {item.images.map((element, i) => {
              if (i != 0)
                return (
                  <Image
                    src={`/imgs/${id}/${element}`}
                    width={0}
                    height={0}
                    alt={item.title + ' picture ' + i}
                    className="small-img"
                    key={i}
                    unoptimized={true}
                  />
                )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
