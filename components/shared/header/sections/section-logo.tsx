import { LuMenu } from 'react-icons/lu';

import Logo from '@/components/shared/logo';

interface SectionLogoProps {
  onClick: () => void;
}

const SectionLogo = ({ onClick }: SectionLogoProps) => {
  return (
    <section className='flex items-center gap-4'>
      <LuMenu size={30} onClick={onClick} className='lg:hidden' />
      <Logo />
    </section>
  );
};

export default SectionLogo;
