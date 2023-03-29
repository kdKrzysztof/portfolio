import React from 'react';
import getLanguage from '@/components/GetLanguage';
import styles from '@/styles/Portfolio.module.scss';
import { motion } from 'framer-motion';
import { Chip, Typography } from '@mui/material';

import Project from '@/components/Project';
import bpdiscordbot from '@/public/projects/bpdiscordbot.png';

import { Poppins } from '@next/font/google';
import { StaticImageData } from 'next/image';
const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
});

const container = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
};

const Portfolio = () => {
  let selectedLanguage = getLanguage();

  interface ProjectObjInterface {
    imageURL: StaticImageData;
    projectName: string;
    projectDesc: string;
    techStack: string[];
  }

  const projectsObj: ProjectObjInterface[] = [
    {
      imageURL: bpdiscordbot,
      projectName: 'Brickplanet Discord Bot',
      projectDesc: selectedLanguage.MyWork.Project1,
      techStack: [
        'Node.JS',
        'HTML Parser',
        'Discord.JS v12',
        'Express.JS',
        'MongoDB',
        'Mongoose',
        'etc. [finish techstack later]'
      ]
    },
    {
      imageURL: bpdiscordbot,
      projectName: 'Buildaverse Clothing Previewer',
      projectDesc: selectedLanguage.MyWork.Project2,
      techStack: [
        'Node.JS',
        'Express.JS',
        'React',
        'JS',
        'Python(BlenderPY)',
        'etc. [finish techstack later]',
        'testeste',
        'testeste',
        'testeste',
        'testeste',
        'testeste',
        'testeste',
        'testeste',
        'testeste',
        'testeste',
        'testeste'
      ]
    }
  ];

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <motion.div className={styles.leftSide}>
          <Typography
            variant="h4"
            color="#00ADB5"
            className={[styles.Title, styles.noselect].join(' ')}>
            {selectedLanguage.MyWork.Title1}
          </Typography>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className={styles.rightSide}>
          {projectsObj.map((index: ProjectObjInterface) => {
            return (
              <Project
                key={index.projectName}
                ImageURL={index.imageURL}
                ProjectName={index.projectName}
                ProjectDesc={index.projectDesc}>
                <>
                  {index.techStack.map((element: string) => {
                    return <Chip key={element} label={element} variant={'outlined'} />;
                  })}
                </>
              </Project>
            );
          })}
          ;
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
