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

const Project = (props: any) => {
  return (
    <motion.div
      variants={item}
      className={styles.projectComponentContainer}>
      <div className={styles.projectComponentImageContainer}>
        <Image src={props.ImageURL} alt="" className={styles.projectComponentImage} />
      </div>
      <Typography variant="h5" style={poppins.style}>
        {props.ProjectName}
      </Typography>
      <Typography variant="subtitle1" style={poppins.style}>
        adshkjlfahksjdlfgklajgfksgdakfg
      </Typography>
      <Typography variant="subtitle1" style={poppins.style}>
        adshkjlfahksjdlfgklajgfksgdakfg
      </Typography>
    </motion.div>
  );
};

export default Project;
