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
    <div className='group relative mb-3 inline-block w-full overflow-hidden rounded-md last-of-type:mb-0 lg:mb-6'>
      {/* Top */}
      <div className='absolute left-0 right-0 top-0 z-10 flex justify-between bg-slate-500 p-2'>
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
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-black/20 transition-all group-hover:bg-transparent' />
      </div>
      {/* Tech  */}
      <div className={`max-h-max w-full bg-slate-500/70 p-2 text-sm`}>
        <ul className='flex flex-wrap gap-2 text-center'>
          {tags.map((el) => (
            <li
              className='max-h-max cursor-pointer rounded-2xl border p-2 transition hover:border-textDarkBlue hover:text-textDarkBlue'
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
