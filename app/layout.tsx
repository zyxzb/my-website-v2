import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

import Header from './components/Header';
import Nav from './components/Nav';
import ThemeProvider from '@/providers/ThemeProvider';

import { inconsolata } from '@/fonts/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'React / FrontEnd Developer',
  description:
    'React and Next.js developer services in Warsaw and remotely ✔️ Boost your project with high-quality FrontEnd expertise ⚡ Let&apos;s find the best solution for your business',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' data-mode='dark'>
      <body
        className={`${inconsolata.className} bg-textLightBlue text-bgDarkBlue transition-colors duration-500 dark:bg-bgDarkBlue dark:text-textLightBlue`}
      >
        <ThemeProvider>
          <Header />
          <div className='relative mx-auto flex w-full max-w-screen-2xl tracking-wide'>
            <Nav />
            <main className='h-screen w-full overflow-auto px-3 pb-[40px] pt-24 md:px-6'>
              {children}
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
