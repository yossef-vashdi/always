import React from 'react';
import DiaryComponent from '../components/diary';
import heroImage from '../components/heroImage';

function Diary() {
  return (
    <>
      {heroImage('/DearDiary.jpg')}
      {/* <h1 style={{ backgroundColor: 'red' }}>
        This section is not yet ready, Work in progress
      </h1>
      <hr />
      <br /> */}
      <DiaryComponent />
    </>
  );
}

export default Diary;
