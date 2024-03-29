import Navbar from './Navbar';
import Footer from './Footer';
import LanguageContext from './LanguageContext';

import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const variants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  };

  const Router = useRouter();

  const [lang, setLang] = useState<string>('en');

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Aspiring Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="iconDASDHASDa" href="/favicon.ico" />
      </Head>
      <LanguageContext.Provider value={{ lang: lang }}>
        <Navbar setLang={setLang} />
        <AnimatePresence mode="wait">
          <motion.main
            key={Router.route}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit">
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </LanguageContext.Provider>
    </>
  );
}
