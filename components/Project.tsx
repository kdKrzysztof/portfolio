import React from 'react';

import { Typography, Box, Grid } from '@mui/material';
import styles from '../styles/Portfolio.module.scss';
import Image from 'next/image';
import { Roboto, Merriweather, Poppins } from '@next/font/google';
import { motion } from 'framer-motion';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
});

const poppins = Poppins({
  weight: '300',
  subsets: ['latin']
});

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1
  }
};

import getLanguage from '@/components/GetLanguage';

const Project = (props: any) => {
  let selectedLanguage = getLanguage();

  return (
    <motion.div variants={item} className={styles.projectComponentContainer}>
      <div className={styles.projectComponentImageContainer}>
        <Image src={props.ImageURL} alt="" className={styles.projectComponentImage} />
      </div>
      <Typography
        variant="h5"
        style={poppins.style}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          marginTop: '1rem',
          '::after': {
            content: '""',
            width: '15rem',
            height: '1px',
            marginTop: '1rem',
            marginBottom: '1rem',
            backgroundColor: '#00747C'
          }
        }}>
        {props.ProjectName}
      </Typography>
      <Typography
        variant="subtitle1"
        style={poppins.style}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          '::after': {
            content: '""',
            width: '15rem',
            height: '1px',
            marginTop: '1rem',
            marginBottom: '1rem',
            backgroundColor: '#00747C'
          }
        }}>
        {props.ProjectDesc}
      </Typography>
      <Typography variant="h6" style={poppins.style} sx={{}}>
        Tech stack:
      </Typography>
    </motion.div>
  );
};

export default Project;
