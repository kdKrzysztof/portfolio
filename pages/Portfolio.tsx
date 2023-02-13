import React from 'react';
import getLanguage from '@/components/GetLanguage';
import styles from '@/styles/Portfolio.module.scss';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import Slider from 'react-slick';

import Project from '@/components/Project';
import bpdiscordbot from '@/public/projects/bpdiscordbot.png';

import { Poppins } from '@next/font/google';
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

  const projectsObj: any = [
    {
      imageURL: bpdiscordbot,
      projectName: 'Brickplanet Discord Bot',
      projectDesc: selectedLanguage.MyWork.Project1,
      techStack: [
        `Node.JS, HTML Parser, Discord.JS v12, Express.JS, MongoDBm, Mongoose, etc. [finish techstack later]`
      ]
    },
    {
      imageURL: bpdiscordbot,
      projectName: 'Buildaverse Clothing Previewer',
      projectDesc: selectedLanguage.MyWork.Project2,
      techStack: `Node.JS, Express.JS, React, JS, Python(BlenderPY), etc. [finish techstack later]`
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0
  };
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
          {projectsObj.map((index: any) => {
            return (
              <Project
                key={index.projectName}
                ImageURL={index.imageURL}
                ProjectName={index.projectName}
                ProjectDesc={index.projectDesc}
                ProjectTechstack={index.techStack}
              />
            );
          })}
          ;
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
