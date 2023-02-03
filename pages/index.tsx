import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.scss';
import { motion } from 'framer-motion';
import React from 'react';
import { Button, ThemeProvider, Typography } from '@mui/material';
import { responsiveFontSizes, createTheme } from '@mui/material';
import { color } from '@mui/system';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Contact = () => {
  return (
    <div className={styles.main}>
      <div className={styles.part1}>
        <ThemeProvider theme={theme}>
          <Typography
            variant="h5"
            sx={{ color: '#00ADB5', display: 'flex' }}>{`Hello, my name is`}</Typography>
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
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Contact;
