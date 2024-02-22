'use client';

import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';

export type ProjectProps = {
  _id: string;
  name: string;
  githubUrl: string;
  liveUrl: string;
  images: any;
  tags: string[];
  descriptions: string;
  slug: string;
};

interface CardProps {
  project: ProjectProps;
}

const Card = ({ project }: CardProps) => {
  const { name, githubUrl, liveUrl, images, tags } = project;
  return (
    <div className='group relative mb-3 inline-block w-full overflow-hidden rounded-md border border-bgDarkBlue transition-[border-color] duration-500 last-of-type:mb-0 dark:border-textLightBlue lg:mb-6'>
      {/* Top */}
      <div className='flex justify-between p-2 lg:p-3'>
        <div className='line-clamp-1 w-[70%]'>{name}</div>
        <div className='flex gap-2'>
          {githubUrl ? (
            <Link
              href={githubUrl}
              className='underline-offset-2 hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              {`</>`}
            </Link>
          ) : null}
          <Link
            href={liveUrl}
            className='underline-offset-2 hover:underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            Url
          </Link>
        </div>
      </div>
      {/* Img section */}
      <div className='relative'>
        <Image
          src={urlFor(images[0]).url()}
          alt={name}
          className={`h-full w-full object-cover`}
          width={500}
          height={300}
        />
        <div className='' />
      </div>
      {/* Tech  */}
      <div className={`max-h-max w-full p-2 text-sm lg:p-3`}>
        <ul className='flex flex-wrap gap-2 text-center lg:gap-3'>
          {tags.map((el) => (
            <li
              className='max-h-max cursor-pointer rounded-2xl border border-bgDarkBlue p-2 transition-[border-color] hover:border-textDarkBlue hover:text-textDarkBlue hover:transition dark:border-textLightBlue dark:hover:border-textDarkBlue'
              key={el}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
