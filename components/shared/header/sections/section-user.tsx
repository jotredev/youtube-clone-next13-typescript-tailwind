import { Menu, MenuButton } from '@szhsin/react-menu';
import {
  LuVideo,
  LuBell,
  LuUserSquare,
  LuLogOut,
  LuShieldCheck,
  LuSunMedium,
  LuMoon,
  LuFlame,
  LuShieldAlert,
  LuGlobe,
  LuSettings,
} from 'react-icons/lu';
import { RiGoogleFill } from 'react-icons/ri';

import ButtonIcon from '@/components/ui/button-icon';
import Image from 'next/image';
import Link from 'next/link';

interface SectionUserProps {
  theme: boolean;
  setTheme: () => void;
}

const SectionUser = ({ theme, setTheme }: SectionUserProps) => {
  return (
    <section className='flex items-center gap-1'>
      <ButtonIcon
        icon={LuVideo}
        className='bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-dark-light'
      />
      <ButtonIcon
        icon={LuBell}
        className='bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-dark-light'
        badge={3}
      />
      <Menu
        menuButton={
          <MenuButton>
            <div className='relative w-10 h-10'>
              <Image
                src='https://res.cloudinary.com/jotredev/image/upload/v1698247714/ElementumUI/hombres/a-parque-atracciones-que-mira-camara_qxn9il.webp'
                alt='Image'
                fill
                className='object-cover object-top rounded-full'
              />
            </div>
          </MenuButton>
        }
        menuClassName='bg-white dark:bg-dark-light py-2 px-4 rounded-lg'
        align='end'
        transition
      >
        <div className='flex items-center gap-4'>
          <div className='relative w-8 h-8'>
            <Image
              src='https://res.cloudinary.com/jotredev/image/upload/v1698247714/ElementumUI/hombres/a-parque-atracciones-que-mira-camara_qxn9il.webp'
              alt='Image'
              fill
              className='object-cover object-top rounded-full'
            />
          </div>
          <div className='font-semibold dark:text-white'>
            <h3>jotredev</h3>
            <h5 className='text-sm text-gray-500'>@jotredev</h5>
          </div>
        </div>
        <hr className='my-3 border-gray-500/30' />
        <ul>
          <li>
            <Link
              href='/'
              className='flex items-center gap-4 py-2 px-4 dark:text-white dark:hover:bg-dark/30 hover:bg-gray-100 transition-colors duration-300 rounded-lg font-light'
            >
              <RiGoogleFill />
              Cuenta de Google
            </Link>
          </li>
          <li>
            <Link
              href='/mi-cuenta'
              className='flex items-center gap-4 py-2 px-4 dark:text-white dark:hover:bg-dark/30 hover:bg-gray-100 transition-colors duration-300 rounded-lg font-light'
            >
              <LuUserSquare />
              Cambiar cuenta
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='flex items-center gap-4 py-2 px-4 dark:text-white dark:hover:bg-dark/30 hover:bg-gray-100 transition-colors duration-300 rounded-lg font-light'
            >
              <LuLogOut />
              Cerrar sesión
            </Link>
          </li>
        </ul>
        <hr className='my-3 border-gray-500/30' />
        <ul>
          <li>
            <Link
              href='/'
              className='flex items-center gap-4 py-2 px-4 dark:text-white dark:hover:bg-dark/30 hover:bg-gray-100 transition-colors duration-300 rounded-lg font-light'
            >
              <LuShieldCheck />
              Tus datos en YouTube
            </Link>
          </li>
          <li>
            <button
              type='button'
              onClick={setTheme}
              className='flex items-center gap-4 py-2 px-4 dark:text-white dark:hover:bg-dark/30 hover:bg-gray-100 transition-colors duration-300 rounded-lg font-light w-full'
            >
              {theme ? <LuMoon /> : <LuSunMedium />}
              Aspecto: {theme ? 'Dark' : 'Light'}
            </button>
          </li>
          <li>
            <Link
              href='/'
              className='flex items-center gap-4 py-2 px-4 dark:text-white dark:hover:bg-dark/30 hover:bg-gray-100 transition-colors duration-300 rounded-lg font-light'
            >
              <LuFlame />
              Idioma: Español
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='flex items-center gap-4 py-2 px-4 dark:text-white dark:hover:bg-dark/30 hover:bg-gray-100 transition-colors duration-300 rounded-lg font-light'
            >
              <LuShieldAlert />
              Modo restringido: Desactivado
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='flex items-center gap-4 py-2 px-4 dark:text-white dark:hover:bg-dark/30 hover:bg-gray-100 transition-colors duration-300 rounded-lg font-light'
            >
              <LuGlobe />
              Ubicación: México
            </Link>
          </li>
        </ul>
        <hr className='my-3 border-gray-500/30' />
        <ul>
          <li>
            <Link
              href='/'
              className='flex items-center gap-4 py-2 px-4 dark:text-white dark:hover:bg-dark/30 hover:bg-gray-100 transition-colors duration-300 rounded-lg font-light'
            >
              <LuSettings />
              Configuración
            </Link>
          </li>
        </ul>
      </Menu>
    </section>
  );
};

export default SectionUser;
