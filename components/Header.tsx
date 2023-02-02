import Link from 'next/link';
import React, { useState } from 'react';
// import styles from '../styles/Header.module.scss'
import styles from '../styles/Header.module.scss';
import { Roboto, Merriweather } from '@next/font/google';

import { Button } from '@mui/material';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

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
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.main}>
      <div>
        <Button variant="text" size="small" sx={{ visibility: 'hidden' }}></Button>
        <p className={merriweather.className}>{`Portfolio`}</p>
        <Button
          variant="text"
          onClick={() => {
            setShowMenu(!showMenu);
            console.log(showMenu);
          }}>
          <MenuSharpIcon sx={{ display: 'flex', minHeight: '1.8rem' }}></MenuSharpIcon>
        </Button>
      </div>
      <span className={[styles.buttonsArea, roboto.className, showMenu && styles.show].join(' ')}>
        <Link href="/">Home</Link>
        <Link href="/About">About Me</Link>
        <Link href="/Skills">My Skills</Link>
        <Link href="/Portfolio">My Work</Link>
        <Link href="/Contact">Contact Me</Link>
      </span>
    </div>
  );
};

export default Header;
