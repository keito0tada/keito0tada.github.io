'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './header.module.css';

const NavItem = ({
  currentPathName,
  name,
  children,
}: {
  currentPathName: string;
  name: string;
  children: React.ReactNode;
}) => {
  const pathName = '/' + name;
  return (
    <li>
      <Link
        href={pathName}
        style={
          currentPathName == pathName ? { textDecoration: 'underline' } : {}
        }
      >
        {children}
      </Link>
    </li>
  );
};

export default function Navigation() {
  const pathName = usePathname();
  return (
    <>
      <NavItem currentPathName={pathName} name='about'>
        About
      </NavItem>
      <NavItem currentPathName={pathName} name='works'>
        Works
      </NavItem>
      <NavItem currentPathName={pathName} name='contact'>
        Contact
      </NavItem>
    </>
  );
}
