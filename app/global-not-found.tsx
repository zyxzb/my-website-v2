import Link from 'next/link';
import Small from './components/Small';
import ThemeScript from '@/app/components/ThemeScript';
import { inconsolata } from '@/fonts/fonts';
import '@/app/globals.css';

const NotFound = (): React.JSX.Element => {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${inconsolata.className} bg-white p-6 text-darkBlue dark:bg-darkBlue dark:text-white`}
      >
        <Small>Error Page</Small>
        <div className='flex h-full w-full flex-col items-center justify-center'>
          <p className='text-3xl'>ERROR 404</p>
          <p className='py-6'>
            That&apos;s Not The Page You&apos;re Looking For
          </p>
          <Link
            href='/'
            className='bg-lightBlue p-4 text-white hover:bg-black hover:transition dark:hover:bg-white dark:hover:text-darkBlue'
          >
            Home Page
          </Link>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
