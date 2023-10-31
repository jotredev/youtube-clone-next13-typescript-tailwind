'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { formatNumber } from '@/libs/utils';

interface CardProps {
  image: string;
  href: string;
  title: string;
  user: {
    username: string;
    image: string;
  };
  views: number;
  createdAt: string;
}

const Card = ({ image, href, title, user, views, createdAt }: CardProps) => {
  const router = useRouter();

  return (
    <div role='button' onClick={() => router.push(href)} className='group'>
      <section className='relative w-full h-56 mb-5'>
        <Image
          src={image}
          alt={title}
          className='object-cover rounded-2xl'
          fill
        />
      </section>
      <section className='flex items-start gap-2'>
        <div className='relative w-10 h-10'>
          <Image
            src={user.image}
            alt={user.username}
            fill
            className='object-cover rounded-full'
          />
        </div>
        <div className='flex-1'>
          <h4 className='font-semibold dark:text-white mb-2 group-hover:underline'>
            {title}
          </h4>
          <h5 className='text-gray-500 text-sm'>{user.username}</h5>
          <div className='text-gray-500 flex gap-2'>
            <h6>{formatNumber(views)} visualizaciones</h6>
            <h6>{createdAt}</h6>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
