'use client';

import { ReactNode, useState } from 'react';

import Header from '@/components/shared/header';
import Sidebar from '@/components/shared/sidebar';

export default function Layout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <main className={theme ? 'dark' : 'light'}>
      <div className='p-5 sm:pr-8 sm:pb-8 pt-24 lg:pt-[8vh] lg:pl-[250px] min-h-screen dark:bg-dark dark:text-gray-300'>
        <Header
          onClick={() => setShowMenu(true)}
          theme={theme}
          setTheme={() => setTheme(!theme)}
        />
        <Sidebar showMenu={showMenu} onClick={() => setShowMenu(false)} />
        <div>{children}</div>
      </div>
    </main>
  );
}
