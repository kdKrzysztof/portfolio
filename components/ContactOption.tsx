import { Typography, createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import React from 'react';
import styles from '../styles/Contact.module.scss';
import type { FC } from 'react';
import { ContactOption } from 'types';
let theme = createTheme();
theme = responsiveFontSizes(theme);

theme.typography.body1 = {
  fontFamily: 'sans-serif',
  inlineSize: '100%',
  overflowWrap: 'break-word',
  textAlign: 'center'
};

const ContactOption: FC<ContactOption> = ({ ImageIcon, ContactName, ContactData }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.ContactContainer}>
        {ImageIcon}
        <Typography variant="h4">{ContactName}</Typography>
        <Typography variant="body1">{ContactData}</Typography>
      </div>
    </ThemeProvider>
  );
};

export default ContactOption;
