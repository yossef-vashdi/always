import React from 'react';
import DiaryComponent from '../components/diary';
import heroImage from '../components/heroImage';
import Head from 'next/head';

function Diary() {
  return (
    <div>
      <Head>
        <title>My Diary</title>
        <meta
          name="description"
          content="my online open diary, feel free to join and add your two cents "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {heroImage('/DearDiary.jpg')}
      {/* <h1 style={{ backgroundColor: 'red' }}>
        This section is not yet ready, Work in progress
      </h1>
      <hr />
      <br /> */}
      <DiaryComponent />
    </div>
  );
}

export default Diary;
