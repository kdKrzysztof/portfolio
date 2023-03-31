import React from 'react';
import { Typography, Grid, List, ListItem } from '@mui/material';
import styles from '../styles/About.module.scss';
import styled from '@emotion/styled';

import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import WorkHistorySharpIcon from '@mui/icons-material/WorkHistorySharp';
import FolderSpecialSharpIcon from '@mui/icons-material/FolderSpecialSharp';
import Link from 'next/link';

const RightText = styled.div`
border: '1px solid',
bordercolor: '#00ADB5',
outline: 1px,
display: flex,
flex-direction: column,
`;

import ListComponent from '@/components/List';
import getLanguage from '@/components/GetLanguage';

const About = () => {
  let selectedLanguage = getLanguage();

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <Typography variant="h4" color="#00ADB5" className={styles.Title}>
            {selectedLanguage.About.Title1}
          </Typography>
          <Typography variant="subtitle1" color="white">
            {selectedLanguage.About.AboutMeDesc}
          </Typography>
        </div>
        <div className={styles.rightSide}>
          <Grid container rowSpacing={2} direction="column">
            <Grid item>
              <RightText>
                <Typography
                  variant="h6"
                  color="#00ADB5"
                  sx={{ display: 'flex', alignItems: 'center' }}>
                  <SchoolSharpIcon sx={{ marginRight: '1rem' }} />
                  {selectedLanguage.About.Education}
                </Typography>
                <ListComponent array={selectedLanguage.About.EduDesc} />
              </RightText>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                color="#00ADB5"
                sx={{ display: 'flex', alignItems: 'center' }}>
                <WorkHistorySharpIcon sx={{ marginRight: '1rem' }} />
                {selectedLanguage.About.WorkExp}
              </Typography>
              <ListComponent array={selectedLanguage.About.WorkExpDesc} />
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                color="#00ADB5"
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                <FolderSpecialSharpIcon sx={{ marginRight: '1rem' }} />
                <Link href="/Portfolio" style={{ textDecoration: 'none', color: '#00ADB5' }}>
                  {selectedLanguage.About.Portfolio}
                </Link>
              </Typography>
              <Typography variant="subtitle2" color="white">
                <ListComponent array={selectedLanguage.About.PortfolioDesc} />
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default About;
