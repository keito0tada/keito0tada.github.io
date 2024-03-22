import React from 'react';
import Header from '../components/header';

import './global.css';
import 'modern-css-reset/dist/reset.min.css';

export const metadata = {
  title: 'keito tada',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
