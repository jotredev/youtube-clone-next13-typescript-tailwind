import { LuSearch } from 'react-icons/lu';
import { BiSolidMicrophone } from 'react-icons/bi';

import ButtonIcon from '@/components/ui/button-icon';

const SectionSearch = () => {
  return (
    <section className='hidden lg:flex items-center gap-4'>
      <div className='flex items-center'>
        <input
          type='text'
          className='border border-gray-300 dark:border-dark-light bg-transparent outline-none py-2 px-4 placeholder:text-gray-500/70 rounded-tl-full rounded-bl-full w-96'
          placeholder='Buscar'
        />
        <button
          type='button'
          className='bg-gray-100 dark:bg-dark-light py-3 px-6 border-gray-300 dark:border-dark-light rounded-tr-full rounded-br-full text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300'
        >
          <LuSearch size={18} />
        </button>
      </div>
      <ButtonIcon icon={BiSolidMicrophone} />
    </section>
  );
};

export default SectionSearch;
