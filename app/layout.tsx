import { ReactNode } from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { cn } from '@/libs/utils';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const font = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'YouTube clone',
  description: 'YouTube clone',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('', font.className)}>{children}</body>
    </html>
  );
}
