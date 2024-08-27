import React from 'react';
import styles from './record.module.css';

export default function Record({
  date,
  children,
}: {
  date: string;
  children: React.ReactNode;
}) {
  return (
    <li className={styles.record}>
      <div className={styles.date}>{date}</div>
      <div className={styles.content}>{children}</div>
    </li>
  );
}
