import Link from 'next/link';
import Small from './components/Small';

const NotFound = () => {
  return (
    <div>
      <Small>Error Page</Small>
      <div className='flex h-full w-full flex-col items-center justify-center'>
        <p className='text-3xl'>ERROR 404</p>
        <p className='py-6'>That&apos;s Not The Page You&apos;re Looking For</p>
        <Link href='/' className='bg-textDarkBlue p-4'>
          Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
