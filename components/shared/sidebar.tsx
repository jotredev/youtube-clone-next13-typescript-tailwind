'use client';

import Menu from '@/components/shared/menu';
import { cn } from '@/libs/utils';

interface SidebarProps {
  showMenu: boolean;
  onClick: () => void;
}

const Sidebar = ({ showMenu, onClick }: SidebarProps) => {
  return (
    <>
      <aside
        className={cn(
          'bg-white dark:bg-dark fixed lg:left-0 top-0 lg:top-[7vh] w-[240px] h-full lg:h-[93vh] z-[9999] overflow-y-auto p-5 transition-all duration-300 ease-in-out',
          showMenu ? 'left-0' : '-left-full'
        )}
      >
        <Menu />
      </aside>
      <div
        role='button'
        onClick={onClick}
        className={cn(
          'hidden fixed left-0 top-0 w-full h-full bg-black/30 z-[9998]',
          showMenu && 'block'
        )}
      />
    </>
  );
};

export default Sidebar;
