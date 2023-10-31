import Link from 'next/link';

import { menu, subs } from '@/assets/menu';
import LinkMenu from '@/components/ui/link-menu';

import { LuChevronRight } from 'react-icons/lu';

const Menu = () => {
  const menuCategory = menu.find((item) => item.category === 'menu');
  const userCategory = menu.find((item) => item.category === 'user');

  return (
    <ul>
      {menuCategory?.items.map((item) => (
        <li key={item.id}>
          <LinkMenu icon={item.icon} href={item.href}>
            {item.label}
          </LinkMenu>
        </li>
      ))}
      <hr className='my-4 border-gray-500/30' />
      <Link
        href='/perfil'
        className='py-3 px-4 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-dark-light transition-colors duration-300 rounded-lg text-sm'
      >
        Tú <LuChevronRight />
      </Link>
      {userCategory?.items.map((item) => (
        <li key={item.id}>
          <LinkMenu icon={item.icon} href={item.href}>
            {item.label}
          </LinkMenu>
        </li>
      ))}
      <hr className='my-4 border-gray-500/30' />
      <Link
        href='/subscripciones'
        className='py-3 px-4 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-dark-light transition-colors duration-300 rounded-lg text-sm'
      >
        Subscripciones
      </Link>
      {subs.map((item) => (
        <li key={item.id}>
          <LinkMenu image={item.image} href={item.href}>
            {item.label}
          </LinkMenu>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
