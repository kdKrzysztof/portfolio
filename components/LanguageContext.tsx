import React from 'react';

const defaultValue = {
  lang: 'en'
};

const LanguageContext = React.createContext(defaultValue);

export default LanguageContext;

export { defaultValue };
