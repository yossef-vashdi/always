import React from 'react';
import Link from 'next/link';
import style from '../styles/layout.module.css';
import { BiNoEntry } from 'react-icons/bi';

function Layout({ children }) {
  return (
    <>
      <nav className={style.main}>
        <ul>
          <div> Menu</div>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/diary">Diary</Link>
          </li>
          <li>
            <Link href="/about">About me</Link>
          </li>

          {/* <li>
            <Link href="/fun/movies">Movies</Link>
          </li>
          <li>
            <Link href="/dummyjson">Dummy json API </Link>
          </li> */}
        </ul>
      </nav>

      {children}
    </>
  );
}

export default Layout;
