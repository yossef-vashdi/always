import React from 'react';
import Link from 'next/link';
import style from '../styles/layout.module.css';

function Layout({ children }) {
  return (
    <>
      <nav className={style.main}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact us</Link>
          </li>
          <li>
            <Link href="/dummyjson">Dummy json API</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}

export default Layout;
