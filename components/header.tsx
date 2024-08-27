import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Navigation from './navigation';
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.home_icon}>
          <Link href='/' className={styles.link}>
            keito tada
          </Link>
        </div>
        <nav className={styles.header_nav}>
          <a
            href='https://github.com/keito0tada'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/github-mark/github-mark.svg'
              width={32}
              height={32}
              alt='github link'
            />
          </a>
          <ul>
            <Navigation />
          </ul>
        </nav>
      </div>
    </header>
  );
}
