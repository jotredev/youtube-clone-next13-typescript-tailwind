import { cn } from '@/libs/utils';

interface BadgeProps {
  id: number;
  category: string;
  className?: string;
}

const Badge = ({ id, category, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        'py-2 px-4 rounded-lg bg-gray-100 font-medium dark:bg-dark-light dark:text-white text-sm',
        id === 1 && 'bg-dark text-white dark:bg-white dark:text-dark'
      )}
    >
      {category}
    </span>
  );
};

export default Badge;
