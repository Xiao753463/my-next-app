import React, { useContext } from 'react'
import ThemeContext, { theme } from '@/app/store/ThemeContext'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import styles from './githubbutton.module.css'
export default function GitHubButton(props) {
  const { themeState } = useContext(ThemeContext)
  const gitLink = props.gitLink

  if (!gitLink) return null
  return (
    <div id={styles['githubBtnComponent']}>
      <motion.a
        href={gitLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.95, rotate: 0 }}
      >
        <Image
          src={
            themeState === theme.dark
              ? '/imgs/github-mark-white.svg'
              : '/imgs/github-mark.svg'
          }
          alt="GitHub"
          width={24}
          height={24}
        />
      </motion.a>
    </div>
  )
}
