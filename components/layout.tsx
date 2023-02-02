// import Header from './Header'
// import Head from '../../../failedProject/portfolio/pages/head'
// import styles from '../styles/Article.module.scss'

// import React, { useEffect, useState } from 'react'
// import router from 'next/router'
// import { Collapse } from '@mui/material'
// import Fade from '@mui/material/Fade'

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   // const [isLoading, setIsLoading] = useState(false)
//   // useEffect(() => {

//   //   router.events.on("routeChangeStart", () => {
//   //     setIsLoading(true)
//   //     console.log(isLoading)
//   //   })
//   // }, [])
//   // router.events.on("routeChangeError", () => setIsLoading(false))
//   // router.events.on("routeChangeComplete", () => setIsLoading(false))

//   return (
//     <html>
//     </html>
//   )
// }

import Header from './Header';
import Footer from './Footer';

import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import styles from '../styles/Article.module.scss';
import Image from 'next/image';

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

  return (
    <>
      <Head>
        */ zmienic po jakims czasie yoł
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="iconDASDHASDa" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
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
      </main>
    </>
  );
}
