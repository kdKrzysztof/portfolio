import Link from 'next/link';
import React, { useState } from 'react';
// import styles from '../styles/Header.module.scss'
import styles from '../styles/Header.module.scss';
import { Roboto, Merriweather } from '@next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
});

const merriweather = Merriweather({
  weight: '400',
  display: 'auto',
  subsets: ['latin']
});

const Header = () => {
  const [pageId, setPageId] = useState<{ id: number }>({
    id: 1
  });

  return (
    <div className={styles.main}>
      <p className={merriweather.className}>{`Portfolio`}</p>
      <span className={[styles.buttonsArea, roboto.className].join(' ')}>
        <Link
          href={{
            pathname: '/',
            query: pageId
          }}
          onClick={(e) => {
            setPageId({
              id: 1
            });
          }}>
          Home
        </Link>

        <Link
          href={{
            pathname: '/About',
            query: pageId
          }}
          onClick={() => {
            setPageId({
              id: 2
            });
          }}>
          About
        </Link>

        <Link
          href={{
            pathname: '/Skills',
            query: pageId
          }}
          onClick={() => {
            setPageId({
              id: 3
            });
          }}>
          My Skills
        </Link>

        <Link
          href={{
            pathname: '/Portfolio',
            query: pageId
          }}
          onClick={() => {
            setPageId({
              id: 4
            });
          }}>
          My Work
        </Link>

        <Link
          href={{
            pathname: '/Contact',
            query: pageId
          }}
          onClick={() => {
            console.log({ id: 5 });
            setPageId({
              id: 5
            });
            console.log(pageId);
          }}>
          About
        </Link>
      </span>
    </div>
  );
};

export default Header;
