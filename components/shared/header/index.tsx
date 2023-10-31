import SectionLogo from './sections/section-logo';
import SectionSearch from './sections/section-search';
import SectionUser from './sections/section-user';

interface HeaderProps {
  theme: boolean;
  setTheme: () => void;
  onClick: () => void;
}

const Header = ({ onClick, theme, setTheme }: HeaderProps) => {
  return (
    <header className='fixed w-full h-[10vh] sm:h-[6vh] lg:h-[7vh] left-0 top-0 flex items-center justify-between px-5 bg-white dark:bg-dark z-40'>
      <SectionLogo onClick={onClick} />
      <SectionSearch />
      <SectionUser theme={theme} setTheme={setTheme} />
    </header>
  );
};

export default Header;
