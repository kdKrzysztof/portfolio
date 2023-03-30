import { Typography } from '@mui/material';
import React from 'react';
import styles from '../styles/Contact.module.scss';
import type { FC } from 'react';
import { ContactOption } from 'types';

const ContactOption: FC<ContactOption> = ({ ImageIcon, ContactName, ContactData }) => {
  return (
    <div className={styles.ContactContainer}>
      {ImageIcon}
      <Typography variant="h4">{ContactName}</Typography>
      <Typography variant="subtitle1">{ContactData}</Typography>
    </div>
  );
};

export default ContactOption;
