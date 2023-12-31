/*
 * @Date: 2023-06-27 17:41:03
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2023-07-05 10:11:48
 * @FilePath: \felho-fullpage\src\app\layout.js
 */
import './globals.css';
import { Inter, Raleway } from 'next/font/google';
import '@fontsource/raleway';

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
