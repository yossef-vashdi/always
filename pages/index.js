import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  const button = () => {
    console.log('button clicked');
  };
  return (
    <div>
      <h1>Home</h1>
      <br />

      <p>the button is not active yet</p>
      <button onClick={button}> check DB status </button>
    </div>
  );
}
