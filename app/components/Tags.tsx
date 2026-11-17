'use client';

import { usePathname, useRouter } from 'next/navigation';

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleTagClick = (tag: string): void => {
    const params = new URLSearchParams();
    params.set('q', tag.toLowerCase());

    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <ul className='flex flex-wrap gap-2 text-center lg:gap-3'>
      {tags.map((el) => (
        <li
          onClick={() => handleTagClick(el)}
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
