import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Navigation from './navigation';

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.home_icon}>
          <Link href='/' className={styles.link}>
            keito tada
          </Link>
        </div>
        <nav>
          <ul className={styles.header_nav}>
            <Navigation />
          </ul>
        </nav>
      </div>
    </header>
  );
}
