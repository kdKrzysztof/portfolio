import Link from 'next/link'
import React from 'react'
// import styles from '../styles/Header.module.scss'
import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <div className={styles.main}>
        <p>{`{Portoflio name}`}</p>
        <span className={styles.buttonsArea}>
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Portfolio">Portfolio</Link>
            <Link href="/Contact">Contact</Link>
        </span>
    </div>
  )
}

export default Header