import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
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

import LanguageContext from '@/components/LanguageContext';
import Translation from '@/components/Translation';

const Header = (props: any) => {
  const [showMenu, setShowMenu] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  const { lang } = React.useContext(LanguageContext);

  React.useEffect(() => {
    console.log(lang);
  }, [lang]);

  let selectedLanguage = Translation.language[lang as keyof typeof Translation.language];

  const onClickLang = (): any => {
    setOpenLang(!openLang);

    switch (openLang) {
      case false:
        props.setLang('pl');
        break;
      case true:
        props.setLang('en');
        break;
      default:
        setOpenLang(false);
        props.setLang('en');
    }
  };

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
      <span className={[styles.buttonsArea, poppins.className, showMenu && styles.show].join(' ')}>
        <Link href="/">{selectedLanguage.Header.Home}</Link>
        <Link href="/About">{selectedLanguage.Header.About}</Link>
        <Link href="/Skills">{selectedLanguage.Header.Skills}</Link>
        <Link href="/Portfolio">{selectedLanguage.Header.Work}</Link>
        <Link href="/Contact">{selectedLanguage.Header.Contact}</Link>
        <Button onClick={onClickLang}>
          <Image
            src={openLang ? PolishFlag : EnglishFlag}
            alt=""
            className={styles.selectLanguageImage}></Image>
        </Button>
      </span>
    </div>
  );
};

export default Header;
