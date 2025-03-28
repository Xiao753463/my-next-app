import Image from 'next/image'
import styles from './page.module.css'
import '@/app/ui/style.css'
import PortfolioList from './PortfolioList'

export default function Home() {
  return (
    <div>
      <div id="main">
        <div id="banner">
          <div id="banner-div">
            <div id="picture-column">
              <div id="picture"></div>
            </div>
            <div id="MyName">XIAO CHUN-YUN</div>
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
          <PortfolioList />
        </div>
      </div>
    </div>
  )
}
