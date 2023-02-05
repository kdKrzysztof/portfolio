import React from 'react';
import { Typography, Grid } from '@mui/material';
import styles from '../styles/Skills.module.scss';
import Image from 'next/image';

import Skill from '../components/Skill';

import JSlogo from '../public/techstack_icons/JavaScript-logo.png';
import CSSlogo from '../public/techstack_icons/CSS-logo.png';
import HTMLlogo from '../public/techstack_icons/HTML-logo.png';
import REACTlogo from '../public/techstack_icons/react-logo.png';
import NEXTlogo from '../public/techstack_icons/next-js-logo.png';
import TSlogo from '../public/techstack_icons/Typescript-logo.png';
import NODElogo from '../public/techstack_icons/node-js-logo.png';
import EXPRESSlogo from '../public/techstack_icons/expressjs-logo.png';
import MONGODBlogo from '../public/techstack_icons/mongodb-logo.png';
import MONGOOSElogo from '../public/techstack_icons/mongoose-logo.png';
import MYSQLlogo from '../public/techstack_icons/mysql-logo.png';
import MARIADBlogo from '../public/techstack_icons/mariadb-logo.png';
import SEQUELIZElogo from '../public/techstack_icons/sequelize-logo.png';
import MUIlogo from '../public/techstack_icons/mui-logo.png';

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
          <Skill ImageURL={HTMLlogo} SkillName="HTML" />
          <Skill ImageURL={CSSlogo} SkillName="CSS" />
          <Skill ImageURL={MUIlogo} SkillName="MaterialUI" />
          <Skill ImageURL={JSlogo} SkillName="JavaScript" />
          <Skill ImageURL={TSlogo} SkillName="TypeScript" />
          <Skill ImageURL={REACTlogo} SkillName="React" />
          <Skill ImageURL={NEXTlogo} SkillName="NextJS" />
          <Skill ImageURL={NODElogo} SkillName="NodeJS" />
          <Skill ImageURL={EXPRESSlogo} SkillName="Express.js" />
          <Skill ImageURL={MONGODBlogo} SkillName="MongoDB" />
          <Skill ImageURL={MONGOOSElogo} SkillName="Mongoose" />
          <Skill ImageURL={MYSQLlogo} SkillName="MySQL" />
          <Skill ImageURL={MARIADBlogo} SkillName="MariaDB" />
          <Skill ImageURL={SEQUELIZElogo} SkillName="Sequelize" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
