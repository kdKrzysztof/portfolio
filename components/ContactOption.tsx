import { Typography } from '@mui/material';
import React, { FC } from 'react';
import styles from '../styles/Contact.module.scss';

const ContactOption: FC<any> = (props) => {
  return (
    <div className={styles.ContactContainer}>
      {props.ImageIcon}
      <Typography variant="h4">{props.ContactName}</Typography>
      <Typography variant="subtitle1">{props.ContactData}</Typography>
    </div>
  );
};

export default ContactOption;
