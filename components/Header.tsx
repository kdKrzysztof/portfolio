import Link from 'next/link';
import React from 'react';
// import styles from '../styles/Header.module.scss'
import styles from '../styles/Header.module.scss';
import { Roboto, Merriweather } from '@next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
});

const merriweather = Merriweather({
  weight: '400',
  display: 'auto',
  subsets: ['latin']
});

const Header = () => {
  return (
    <div className={styles.main}>
      <p className={merriweather.className}>{`Portfolio`}</p>
      <span className={[styles.buttonsArea, roboto.className].join(' ')}>
        <Link href="/">Home</Link>
        <Link href="/About">About Me</Link>
        <Link href="/Skills">My Skills</Link>
        <Link href="/Portfolio">My Work</Link>
        <Link href="/Contact">Contact me</Link>
      </span>
    </div>
  );
};

export default Header;
