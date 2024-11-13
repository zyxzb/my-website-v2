'use client';

import { usePathname, useRouter } from 'next/navigation';

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleSetParam = (el: string) => {
    const params = new URLSearchParams();
    params.set('q', el.toLowerCase());

    router.replace(`${pathName}?${params.toString()}`);
  };

  return (
    <ul className='flex flex-wrap gap-2 text-center lg:gap-3'>
      {tags.map((el) => (
        <li
          onClick={() => handleSetParam(el)}
          className='max-h-max cursor-pointer rounded-2xl border border-darkBlue p-2 transition-[border-color] hover:border-lightBlue hover:text-lightBlue hover:transition dark:border-white dark:hover:border-lightBlue'
          key={el}
        >
          {el}
        </li>
      ))}
    </ul>
  );
};

export default Tags;
