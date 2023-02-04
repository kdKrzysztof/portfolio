import React from 'react';
import { Typography, Grid } from '@mui/material';
import styles from '../styles/Skills.module.scss';
import Image from 'next/image';

import Skill from '../components/Skill';

import JSlogo from '../public/techstack_icons/JavaScript-logo.png';
import CSSlogo from '../public/techstack_icons/CSS-logo.png';
import HTMLlogo from '../public/techstack_icons/HTML-logo.png';

const Skills = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <Typography variant="h4" color="#00ADB5" className={styles.Title}>
            My Skills
          </Typography>
          <Typography variant="subtitle1" color="white">
            {`I've worked with these technologies:`}
          </Typography>
        </div>
        <div className={styles.rightSide}>
          <Skill ImageURL={HTMLlogo} SkillName="JavaScript" />
          <Skill ImageURL={CSSlogo} SkillName="JavaScript" />
          <Skill ImageURL={JSlogo} SkillName="JavaScript" />
          <Skill ImageURL={JSlogo} SkillName="JavaScript" />
          <Skill ImageURL={JSlogo} SkillName="JavaScript" />
          <Skill ImageURL={JSlogo} SkillName="JavaScript" />
          <Skill ImageURL={JSlogo} SkillName="JavaScript" />
          <Skill ImageURL={JSlogo} SkillName="JavaScript" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
