import { Typography } from '@mui/material';
import React from 'react';
import styles from '../styles/Contact.module.scss';
import getLanguage from '@/components/GetLanguage';
import ContactType from '@/components/ContactOption';

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  let selectedLanguage = getLanguage();

  return (
    <div className={styles.main}>
      <div className={styles.mainTop}>
        <Typography variant="h4" color="#00ADB5">
          {selectedLanguage.ContactMe.Title}
        </Typography>
      </div>
      <div className={styles.mainBottom}>
        <ContactType
          ContactName={'Github'}
          ContactData={'https://github.com/kdKrzysztof'}
          ImageIcon={<GitHubIcon sx={{ fontSize: '2rem' }} />}
        />
        <ContactType
          ContactName={'E-mail'}
          ContactData={'krzysztof.kudzia.dev@gmail.com'}
          ImageIcon={<EmailIcon sx={{ fontSize: '2rem' }} />}
        />
        <ContactType
          ContactName={'LinkedIn'}
          ContactData={'https://www.linkedin.com/in/kudzia/'}
          ImageIcon={<LinkedInIcon sx={{ fontSize: '2rem' }} />}
        />
      </div>
    </div>
  );
};

export default Contact;
