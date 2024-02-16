import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

import Header from './components/Header';
import Nav from './components/Nav';

import { inconsolata } from '@/fonts/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'React / FrontEnd Developer',
  description:
    'React and Next.js developer services in Warsaw and remotely ✔️ Boost your project with high-quality FrontEnd expertise ⚡ Let&apos;s find the best solution for your business',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`${inconsolata.className} bg-bgDarkBlue`}>
        <Header />
        <div className='relative mx-auto flex w-full max-w-screen-2xl tracking-wide'>
          <Nav />
          <main className='h-screen w-full overflow-auto px-3 pb-[40px] pt-24 text-textLightBlue transition-all duration-300 md:px-6'>
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
