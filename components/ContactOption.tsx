import { Typography } from '@mui/material';
import { StaticImageData } from 'next/image';
import React, { FC } from 'react';
import styles from '../styles/Contact.module.scss';

interface ContactOption {
  ImageIcon: JSX.Element;
  ContactName: string;
  ContactData: string;
}

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
