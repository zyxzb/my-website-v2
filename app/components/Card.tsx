import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import ImageServer from './ImageServer';
import Tags from './Tags';

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

const Card = async ({ project }: CardProps) => {
  const { name, githubUrl, liveUrl, images, tags } = project;
  return (
    <div className='group relative inline-block max-h-max w-full overflow-hidden rounded-md border border-darkBlue transition-[border-color] duration-500 last-of-type:mb-0 dark:border-white'>
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
        <ImageServer
          src={urlFor(images[0]).url()}
          alt={name}
          className={`h-full w-full object-cover`}
          width={500}
          height={300}
          loading='lazy'
        />
      </div>
      {/* Tech  */}
      <div className={`max-h-max w-full p-2 text-sm lg:p-3`}>
        <Tags tags={tags} />
      </div>
    </div>
  );
};

export default Card;
