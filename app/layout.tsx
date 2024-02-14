import type { Metadata } from 'next';

import Header from './components/Header';
import Nav from './components/Nav';
import { inconsolata } from '@/fonts/fonts';

import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inconsolata.className} bg-bgDarkBlue`}>
        <Header />
        <div className='relative mx-auto flex w-full max-w-screen-2xl tracking-wide'>
          <Nav />
          <main className='text-textLightBlue min-h-screen w-full overflow-auto px-3 pb-[40px] pt-24 transition-all duration-300 md:px-6'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
