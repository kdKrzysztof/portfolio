import React, { FC } from 'react';

import { Typography, Box, Grid, Button } from '@mui/material';
import styles from '../styles/Portfolio.module.scss';
import Image from 'next/image';
import { Poppins } from '@next/font/google';
import { motion } from 'framer-motion';
import { ProjectProps } from 'types';

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
import Link from 'next/link';

const Project: FC<ProjectProps> = ({
  ImageURL,
  ProjectName,
  ProjectDesc,
  LivePreviewLink,
  GithubLink,
  children
}) => {
  let selectedLanguage = getLanguage();

  return (
    <motion.div variants={item} className={styles.projectComponentContainer}>
      <div className={styles.projectComponentImageContainer}>
        <Image src={ImageURL} alt="" className={styles.projectComponentImage} />
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
          width: '17.5rem',
          '::after': {
            content: '""',
            width: '17rem',
            height: '1px',
            marginTop: '1rem',
            marginBottom: '1rem',
            backgroundColor: '#00747C'
          }
        }}>
        {ProjectName}
      </Typography>
      <Box
        component="div"
        sx={
          {
            // overflow: 'auto',
            // height: '6.5rem'
            // '&::-webkit-scrollbar': {
            //   width: 2
            // },
            // '&::-webkit-scrollbar-track': {
            //   boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`
            // },
            // '&::-webkit-scrollbar-thumb': {
            //   backgroundColor: '#00747C',
            //   borderRadius: '999rem',
            //   opacity: '0.3'
            // }
          }
        }>
        <Typography
          variant="body2"
          style={poppins.style}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '17rem'
          }}>
          {ProjectDesc}
        </Typography>
      </Box>
      <Typography
        variant="h6"
        style={poppins.style}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '::before': {
            content: '""',
            width: '17rem',
            height: '1px',
            marginTop: '1rem',
            marginBottom: '1rem',
            backgroundColor: '#00747C'
          }
        }}>
        Tech stack:
      </Typography>
      <Box
        style={poppins.style}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          gap: '.4rem',
          width: '16.7rem',
          mt: '1rem',
          mb: '1rem',
          '::after': {
            content: '""',
            width: '17rem',
            height: '1px',
            marginTop: '1.5rem',
            marginBottom: '1rem',
            backgroundColor: '#00747C'
          }
        }}>
        {children}
      </Box>
      <div className={styles.buttonContainer}>
        <Button variant="outlined" size="medium">
          <Link href={GithubLink}>{selectedLanguage.MyWork.Button1}</Link>
        </Button>
        <Button
          variant="outlined"
          size="medium"
          sx={{ marginLeft: '1rem' }}
          disabled={LivePreviewLink === '' ? true : false}>
          {selectedLanguage.MyWork.Button2}
        </Button>
      </div>
    </motion.div>
  );
};

export default Project;
