import React from 'react';
import { Typography, Grid } from '@mui/material';
import styles from '../styles/About.module.scss';
import styled from '@emotion/styled';

import { SchoolSharp, WorkHistorySharp, FolderSharedSharp } from '@mui/icons-material';
import Link from 'next/link';

const RightText = styled.div`
  border: '1px solid',
  bordercolor: '#00ADB5',
  outline: 1px,
  display: flex,
  flex-direction: column,
`;

const About = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <Typography variant="h4" color="#00ADB5" className={styles.Title}>
            About me
          </Typography>
          <Typography variant="subtitle1" color="white">
            Eu id laboris sit dolor irure cupidatat laborum et voluptate non anim anim laborum
            aliqua. Do voluptate anim enim voluptate officia ut ad. Sunt incididunt ut nisi mollit
            magna dolor commodo elit. Reprehenderit ea sint qui nisi aliquip velit aliqua consequat
            enim dolore. In consequat irure cupidatat voluptate ex labore sit aliquip ad ex nulla
            dolore elit pariatur. Pariatur mollit elit labore dolor voluptate non velit cupidatat
            aliquip culpa ullamco magna laboris. Sint sit reprehenderit aute ut.
          </Typography>
        </div>
        <div className={styles.rightSide}>
          <Grid container rowSpacing={2}>
            <Grid item>
              <RightText>
                <Typography
                  variant="h6"
                  color="#00ADB5"
                  sx={{ display: 'flex', alignItems: 'center' }}>
                  <SchoolSharp sx={{ marginRight: '1rem' }} /> Education
                </Typography>
                <Typography variant="subtitle2" color="white">
                  Eu id laboris sit dolor irure cupidatat laborum et voluptate non anim
                </Typography>
              </RightText>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                color="#00ADB5"
                sx={{ display: 'flex', alignItems: 'center' }}>
                <WorkHistorySharp sx={{ marginRight: '1rem' }} />
                Work Experience
              </Typography>
              <Typography variant="subtitle2" color="white">
                Eu id laboris sit dolor irure cupidatat laborum et voluptate non anim
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                color="#00ADB5"
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                <FolderSharedSharp sx={{ marginRight: '1rem' }} />
                <Link href="/Portfolio" style={{ textDecoration: 'none', color: '#00ADB5' }}>
                  Personal Work
                </Link>
              </Typography>
              <Typography variant="subtitle2" color="white">
                Eu id laboris sit dolor irure cupidatat laborum et voluptate non anim
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default About;
