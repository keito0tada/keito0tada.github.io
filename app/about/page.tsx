import React from 'react';
import styles from './about.module.css';
import Record from '@/components/record';

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>
        <h1>多田　佳杜</h1>
        <p>東京工業大学　情報理工学院　情報工学系　所属</p>
      </div>
      <div className={styles.history}>
        <h2>経歴、実績</h2>
        <ul>
          <Record date='2018/02'>
            <a
              href='https://www2.ioi-jp.org/joi/2017/2018-ho-invited-list.html'
              target='_blank'
            >
              第 17 回日本情報オリンピック本選出場
            </a>
          </Record>
          <Record date='2019/02'>
            <a
              href='https://www2.ioi-jp.org/joi/2018/2019-ho-invited-list.html'
              target='_blank'
            >
              第 18 回日本情報オリンピック本選出場
            </a>
          </Record>
          <Record date='2021/04'>東京工業大学　入学</Record>
          <Record date='2023/08'>freee株式会社　夏インターン</Record>
          <Record date='2023/09'>株式会社いい生活　夏インターン</Record>
          <Record date='2024/04'>
            <a
              href='https://cao-lab.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              曹研究室
            </a>
            　配属
          </Record>
        </ul>
      </div>
    </div>
  );
}
