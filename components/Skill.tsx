import React from 'react';

import { Typography, Box, Grid } from '@mui/material';
import styles from '../styles/Skills.module.scss';
import Image from 'next/image';
import { Roboto, Merriweather, Poppins } from '@next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
});

const merriweather = Merriweather({
  weight: '400',
  subsets: ['latin']
});

const poppins = Poppins({
  weight: '300',
  subsets: ['latin']
});

const Skill = (props: any) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        // border: '1px solid #00ADB5',
        borderRadius: '8px',
        margin: '1rem',
        padding: '.5rem',
        transition: 'background-color 200ms',
        // backgroundColor: 'rgb(0, 173, 181, 0.05)',
        ':hover': {
          backgroundColor: 'rgb(0, 173, 181, 0.05)',
          transition: 'background-color 200ms'
        }
      }}
      maxWidth="6rem"
      maxHeight="6rem">
      <Image src={props.ImageURL} alt="" className={styles.SkillImage} />
      <Typography variant="subtitle1" style={poppins.style}>
        {props.SkillName}
      </Typography>
    </Box>
  );
};

export default Skill;
