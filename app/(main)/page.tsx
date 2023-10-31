import { categories } from '@/assets/categories';
import { data } from '@/assets/data';
import Badge from '@/components/ui/badge';
import Card from '@/components/ui/card';

export default function Home() {
  return (
    <>
      <div className='mb-10 flex items-center gap-3 overflow-x-auto'>
        {categories.map((item) => (
          <Badge key={item.id} {...item} />
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-5'>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
