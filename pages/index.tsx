import styles from '@/styles/Home.module.scss';
import React from 'react';
import { Button, Typography } from '@mui/material';

const Contact = () => {
  return (
    <div className={styles.main}>
      <div className={styles.part1}>
        <Typography variant="h5" color="#00ADB5">{`Hello, my name is`}</Typography>
        <Typography variant="h1" sx={{ fontWeight: '700' }}>
          Krzysztof Kudzia
        </Typography>
        <Typography variant="h4">Aspiring Fullstack Developer</Typography>
        <div>
          <Button variant="outlined" size="medium">
            Download my CV
          </Button>
          <Button variant="outlined" size="medium">
            Contact me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
