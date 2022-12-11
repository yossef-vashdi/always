import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import DbFolder from '../components/dbFolder';
import styles from '../styles/Home.module.css';
import heroImage from '../components/heroImage';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My app</title>
        <meta
          name="description"
          content="Another place for me to build something and show it for constructive criticism, please share your thoughts with me, Yossi."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {heroImage('/science-experiments.webp')}

      <h1>Welcome ! </h1>
      <h2>
        This site is used as a testing ground for me. to show some of
        the things I've learned and to encourage guidance and
        criticism in the name of improvement, dont spare it from me.
      </h2>
      <h2 className={styles.signature}>Yossi V.</h2>
    </div>
  );
}
