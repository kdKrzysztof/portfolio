import React from 'react';

import { Typography, Box, Grid } from '@mui/material';
import styles from '../styles/Skills.module.scss';
import Image from 'next/image';

const Skill = (props: any) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        border: '1px solid #00ADB5',
        borderRadius: '8px',
        margin: '1rem',
        padding: '.5rem'
      }}
      width="12rem">
      <Image src={props.ImageURL} alt="" className={styles.SkillImage} />
      <Typography variant="subtitle1">{props.SkillName}</Typography>
    </Box>
  );
};

export default Skill;
