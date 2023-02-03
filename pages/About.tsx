import React from 'react';
import { Button, ThemeProvider, Typography } from '@mui/material';
import { responsiveFontSizes, createTheme } from '@mui/material';
import styles from '../styles/About.module.scss';

let themeLeftSide = createTheme();
themeLeftSide = responsiveFontSizes(themeLeftSide);

const About = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <ThemeProvider theme={themeLeftSide}>
            <Typography variant="h4" color="#00ADB5" className={styles.Title}>
              About me
            </Typography>
            <Typography variant="subtitle1" color="white">
              Eu id laboris sit dolor irure cupidatat laborum et voluptate non anim anim laborum
              aliqua. Do voluptate anim enim voluptate officia ut ad. Sunt incididunt ut nisi mollit
              magna dolor commodo elit. Reprehenderit ea sint qui nisi aliquip velit aliqua
              consequat enim dolore. In consequat irure cupidatat voluptate ex labore sit aliquip ad
              ex nulla dolore elit pariatur. Pariatur mollit elit labore dolor voluptate non velit
              cupidatat aliquip culpa ullamco magna laboris. Sint sit reprehenderit aute ut.
            </Typography>
          </ThemeProvider>
        </div>
        <div className={styles.rightSide}>${'components'}</div>
      </div>
    </div>
  );
};

export default About;
