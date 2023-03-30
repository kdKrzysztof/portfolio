import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import styles from '../styles/Skills.module.scss';
import Image from 'next/image';
import { Poppins } from '@next/font/google';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { SkillInterface } from 'types';


const poppins = Poppins({
  weight: '300',
  subsets: ['latin']
});

const item = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Skill: FC<SkillInterface> = ({ImageURL, SkillName}) => {
  return (
    <motion.div variants={item}>
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
        <Image src={ImageURL} alt="" className={styles.SkillImage} />
        <Typography variant="subtitle1" style={poppins.style}>
          {SkillName}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default Skill;
