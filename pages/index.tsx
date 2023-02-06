import styles from '@/styles/Home.module.scss';
import React from 'react';
import { Button, Typography } from '@mui/material';

import LanguageContext from '@/components/LanguageContext';
import Translation from '@/components/Translation';

const Contact = () => {
  const { lang } = React.useContext(LanguageContext);
  let selectedLanguage = Translation.language[lang as keyof typeof Translation.language];

  React.useEffect(() => {
    console.log(lang);
  }, [lang]);

  return (
    <div className={styles.main}>
      <div className={styles.part1}>
        <Typography variant="h5" color="#00ADB5">
          {selectedLanguage.Home.preName}
        </Typography>
        <Typography variant="h1" sx={{ fontWeight: '700' }}>
          {selectedLanguage.Home.Name}
        </Typography>
        <Typography variant="h4">{selectedLanguage.Home.title}</Typography>
        <div>
          <Button variant="outlined" size="medium">
            {selectedLanguage.Home.button1}
          </Button>
          <Button variant="outlined" size="medium">
            {selectedLanguage.Home.button2}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
