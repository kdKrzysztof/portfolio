import styles from '@/styles/Home.module.scss';
import React from 'react';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import getLanguage from '@/components/GetLanguage';

const Home = () => {
  let selectedLanguage = getLanguage();

  return (
    <div className={styles.main}>
      <div className={styles.mainContent}>
        <Typography variant="h5" color="#00ADB5">
          {selectedLanguage.Home.preName}
        </Typography>
        <Typography variant="h1" sx={{ fontWeight: '700' }}>
          {selectedLanguage.Home.Name}
        </Typography>
        <Typography variant="h4">{selectedLanguage.Home.title}</Typography>
        <div className={'buttonsContainer'}>
          <Button variant="outlined" size="medium">
            {selectedLanguage.Home.button1}
          </Button>
          <Button variant="outlined" size="medium">
            <Link href="/Contact">{selectedLanguage.Home.button2}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
