import React from 'react';
import getLanguage from '@/components/GetLanguage';
import styles from '@/styles/Portfolio.module.scss';
import { motion } from 'framer-motion';
import { Chip, Typography } from '@mui/material';

import Project from '@/components/Project';
import { projectObjFunc } from '@/components/ProjectsObject';

const container = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
};

const Projects = () => {
  let selectedLanguage = getLanguage();
  const projectsObj = projectObjFunc();

  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.portfolioContent}>
        <motion.div className={styles.portfolioHeading}>
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
          className={styles.portfolioProjectsContainer}>
          {projectsObj.map((index) => {
            return (
              <Project
                key={index.projectName}
                ImageURL={index.imageURL}
                ProjectName={index.projectName}
                ProjectDesc={index.projectDesc}
                GithubLink={index.GithubLink}
                LivePreviewLink={index.LivePreviewLink}>
                <>
                  {index.techStack.map((element) => {
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

export default Projects;
