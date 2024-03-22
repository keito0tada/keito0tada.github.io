import Link from 'next/link';
import React from 'react';

export default function Navigation() {
  return (
    <>
      <li>
        <Link href='/about'>About</Link>
      </li>
      <li>
        <Link href='/works'>Works</Link>
      </li>
      <li>
        <Link href='/contact'>Contact</Link>
      </li>
    </>
  );
}
