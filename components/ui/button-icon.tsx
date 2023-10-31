import { cn } from '@/libs/utils';
import { IconType } from 'react-icons';

interface ButtonIconProps {
  type?: 'button' | 'submit' | 'reset';
  icon: IconType;
  badge?: number;
  className?: string;
}

const ButtonIcon = ({
  type = 'button',
  icon: Icon,
  badge,
  className,
}: ButtonIconProps) => {
  return (
    <button
      type={type}
      className={cn(
        'relative w-11 h-11 bg-gray-100 text-gray-500 dark:text-gray-300 hover:text-black dark:bg-dark-light flex items-center justify-center rounded-full dark:hover:text-white transition-colors duration-300',
        className
      )}
    >
      {badge && (
        <span className='w-5 h-5 rounded-full bg-[#CC0000] text-white flex items-center justify-center text-xs font-medium absolute top-0 right-1'>
          {badge}
        </span>
      )}
      <Icon size={18} />
    </button>
  );
};

export default ButtonIcon;
