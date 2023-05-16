import React from 'react';
import styles from '../styles/Footer.module.scss';
import { Roboto_Flex } from '@next/font/google';

const roboto = Roboto_Flex({
  weight: '100',
  subsets: ['latin']
});

const Footer = () => {
  return (
    <footer className={[styles.main, roboto.className].join(' ')}>
      Website made by Krzysztof Kudzia
    </footer>
  );
};

export default Footer;
