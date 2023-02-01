import React from 'react';
import styles from '../styles/Footer.module.scss';
import { Roboto_Flex } from '@next/font/google';

const roboto = Roboto_Flex({
  weight: '100',
  subsets: ['latin']
});

const Footer = () => {
  return (
    <div className={[styles.main, roboto.className].join(' ')}>
      Website made by Krzysztof Kudzia
    </div>
  );
};

export default Footer;
