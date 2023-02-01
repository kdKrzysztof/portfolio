import Link from 'next/link'
import React from 'react'
// import styles from '../styles/Header.module.scss'
import styles from '../styles/Header.module.scss'
import { Roboto, Merriweather } from '@next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})

const merriweather = Merriweather({
  weight: '400',
  display: 'auto',
  subsets: ['latin']
})

const Header = () => {
  return (
    <div className={styles.main}>
      <p className={merriweather.className}>{`Krzysztof Kudzia`}</p>
      <span className={[styles.buttonsArea, roboto.className].join(' ')}>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Portfolio">Portfolio</Link>
        <Link href="/Contact">Contact</Link>
      </span>
    </div>
  )
}

export default Header