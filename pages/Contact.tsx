import { Typography } from '@mui/material';
import React from 'react';
import styles from '../styles/Contact.module.scss';
import getLanguage from '@/components/GetLanguage';
import ContactType from '@/components/ContactOption';

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MessageIcon from '@mui/icons-material/Message';


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
          ImageIcon={<EmailIcon sx={{ fontSize: '2rem' }} />}
        />
        <ContactType
          ContactName={'LinkedIn'}
          ContactData={'https://pl.linkedin.com/'}
          ImageIcon={<LinkedInIcon sx={{ fontSize: '2rem' }} />}
        />
        <ContactType
          ContactName={'Messenger'}
          ContactData={'m.me/x2x823x121'}
          ImageIcon={<MessageIcon sx={{ fontSize: '2rem' }} />}
        />
      </div>
    </div>
  );
};

export default Contact;
