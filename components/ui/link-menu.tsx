'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/libs/utils';
import { IconType } from 'react-icons';
import Image from 'next/image';

interface LinkMenuProps {
  children: ReactNode;
  icon?: IconType;
  image?: string;
  href: string;
  className?: string;
}

const LinkMenu = ({
  children,
  icon: Icon,
  image,
  href,
  className,
}: LinkMenuProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-6 py-3 px-4 hover:bg-gray-100 dark:hover:bg-dark-light transition-colors duration-300 rounded-lg text-sm',
        className,
        pathname === href &&
          'bg-gray-100 dark:bg-dark-light font-medium dark:text-white'
      )}
    >
      {Icon ? (
        <Icon size={20} />
      ) : (
        <div className='relative w-6 h-6'>
          <Image
            src={image ? image : ''}
            alt='Image'
            fill
            className='object-cover rounded-full'
          />
        </div>
      )}
      {children}
    </Link>
  );
};

export default LinkMenu;
