import { Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';
import React from 'react';
import styles from '../styles/Contact.module.scss';
import getLanguage from '@/components/GetLanguage';

const RightText = styled.div`
border: '1px solid',
bordercolor: '#00ADB5',
outline: 1px,
display: flex,
flex-direction: column,
`;

const Contact = () => {
  let selectedLanguage = getLanguage();

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.leftSide}></div>
        <div className={styles.rightSide}></div>
      </div>
    </div>
  );
};

export default Contact;
