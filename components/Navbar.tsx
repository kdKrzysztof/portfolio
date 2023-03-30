import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import type { Dispatch, FC, SetStateAction} from 'react';
// import styles from '../styles/Header.module.scss'
import styles from '../styles/Header.module.scss';
import { Roboto, Merriweather, Poppins } from '@next/font/google';

import { Button, Collapse } from '@mui/material';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

import PolishFlag from '../public/polish.png';
import EnglishFlag from '../public/english.png';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
});

const merriweather = Merriweather({
  weight: '400',
  subsets: ['latin']
});

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
});

import getLanguage from '@/components/GetLanguage';
import {languageType} from 'types';

const Header: FC<languageType> = ({ setLang }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  let selectedLanguage = getLanguage();

  const onClickLang = (): any => {
    setOpenLang(!openLang);
    openLang ? setLang('en') : setLang('pl');
  };

  return (
    <header className={styles.navbarContainer}>
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
      <nav className={[styles.buttonsArea, poppins.className, showMenu && styles.show].join(' ')}>
        <Link href="/">{selectedLanguage.Header.Home}</Link>
        <Link href="/About">{selectedLanguage.Header.About}</Link>
        <Link href="/Skills">{selectedLanguage.Header.Skills}</Link>
        <Link href="/Portfolio">{selectedLanguage.Header.Work}</Link>
        <Link href="/Contact">{selectedLanguage.Header.Contact}</Link>
        <Button
          onClick={onClickLang}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            src={openLang ? EnglishFlag : PolishFlag}
            alt=""
            className={styles.selectLanguageImage}></Image>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
