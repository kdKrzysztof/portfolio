import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import React from 'react';
import styles from '../styles/Contact.module.scss';
import getLanguage from '@/components/GetLanguage';
import ContactType from '@/components/ContactOption';

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
      <div className={styles.mainTop}>
        <Typography variant="h4" color="#00ADB5">
          {`Let's get in touch`}
        </Typography>
      </div>
      <div className={styles.mainBottom}>
        <ContactType
          ContactName={'E-mail'}
          ContactData={'example@examp.com'}
          ImageIcon={<EmailIcon sx={{ fontSize: '2rem' }}/>}
        />
        <ContactType
          ContactName={'LinkedIn'}
          ContactData={'https://pl.linkedin.com/'}
          ImageIcon={<LinkedInIcon sx={{ fontSize: '2rem' }} />}
        />
        <ContactType ImageIcon={<EmailIcon />} />
        <ContactType ImageIcon={<EmailIcon />} />
      </div>
    </div>
  );
};

export default Contact;
