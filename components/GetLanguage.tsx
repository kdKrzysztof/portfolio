import React from 'react';

import LanguageContext from '@/components/LanguageContext';
import {Translation} from '@/components/Translation';

const GetLanguage = () => {
  const { lang } = React.useContext(LanguageContext);
  let selectedLanguage = Translation.language[lang as keyof typeof Translation.language];

  return selectedLanguage;
};

export default GetLanguage;
