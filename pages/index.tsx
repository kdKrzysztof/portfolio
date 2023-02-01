import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.scss';
import { motion } from 'framer-motion';
import React from 'react';
import { Button, Typography } from '@mui/material';
import { color } from '@mui/system';

const Contact = () => {
  return (
    <div className={styles.main}>
      <div className={styles.part1}>
        <Typography
          variant="h4"
          sx={{ color: '#00ADB5', display: 'flex' }}>{`Hello, my name is`}</Typography>
        <Typography variant="h1" sx={{ fontWeight: '700' }}>
          Krzysztof Kudzia
        </Typography>
        <Typography variant="h4">Aspiring Fullstack Developer</Typography>
        <div>
          <Button variant="outlined" size="medium">
            Download my CV
          </Button>
          <Button variant="outlined" sx={{ marginLeft: '2rem' }}>
            Contact me
          </Button>
        </div>
      </div>
      <div className={styles.part2}>
        <Typography></Typography>
      </div>
    </div>
  );
};

export default Contact;
