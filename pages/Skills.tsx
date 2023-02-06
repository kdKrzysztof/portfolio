import React, { useRef } from 'react';
import { Typography, Grid } from '@mui/material';
import styles from '../styles/Skills.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

import { Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: '300',
  subsets: ['latin']
});

const skillsObj: any = [
  { imageURL: HTMLlogo, skillName: 'HTML' },
  { imageURL: CSSlogo, skillName: 'CSS' },
  { imageURL: MUIlogo, skillName: 'MaterialUI' },
  { imageURL: JSlogo, skillName: 'JavaScript' },
  { imageURL: TSlogo, skillName: 'TypeScript' },
  { imageURL: REACTlogo, skillName: 'React' },
  { imageURL: NEXTlogo, skillName: 'Next.JS' },
  { imageURL: NODElogo, skillName: 'Node.JS' },
  { imageURL: EXPRESSlogo, skillName: 'Express.JS' },
  { imageURL: MONGODBlogo, skillName: 'MongoDB' },
  { imageURL: MONGOOSElogo, skillName: 'Mongoose' },
  { imageURL: MYSQLlogo, skillName: 'MySQL' },
  { imageURL: MARIADBlogo, skillName: 'MariaDB' },
  { imageURL: SEQUELIZElogo, skillName: 'Sequelize' }
];

const container = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
};

import LanguageContext from '@/components/LanguageContext';
import Translation from '@/components/Translation';

const Skills = () => {
  const { lang } = React.useContext(LanguageContext);
  let selectedLanguage = Translation.language[lang as keyof typeof Translation.language];

  React.useEffect(() => {
    console.log(lang);
  }, [lang]);

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <motion.div className={styles.leftSide}>
          <Typography
            variant="h4"
            color="#00ADB5"
            className={[styles.Title, styles.noselect].join(' ')}>
            {selectedLanguage.MySkills.Title1}
          </Typography>
          <Typography
            variant="subtitle1"
            color="white"
            className={styles.noselect}
            style={poppins.style}>
            {selectedLanguage.MySkills.subtitle1}
          </Typography>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className={styles.rightSide}>
          {skillsObj.map((index: any) => {
            return (
              <Skill key={index.skillName} ImageURL={index.imageURL} SkillName={index.skillName} />
            );
          })}
          ;
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

{
  /* <Skill ImageURL={HTMLlogo} SkillName="HTML" />
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
<Skill ImageURL={SEQUELIZElogo} SkillName="Sequelize" /> */
} // before used this
