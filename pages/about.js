import React from 'react';
import styles from '../styles/About.module.css';
import heroImage from '../components/heroImage';
import Head from 'next/head';

function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About me</title>
        <meta
          name="description"
          content="About me, yossef Vashdi, at your service"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About me </h1>
      {heroImage('/man nature.jpg')}
      {/* <h2>
        Not much to say, I'm ordinary person who have a peaceful and
        pleasantly-boring life.
      </h2> */}
      <h2>
        My name is Yossef Vashdi, and you welcome to contact me <br />
        Email: yova4work@gmail.com
      </h2>
    </div>
  );
}

export default About;
