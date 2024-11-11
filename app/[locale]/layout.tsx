import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import Header from '../components/Header';
import Nav from '../components/Nav';
import ThemeProvider from '@/providers/ThemeProvider';

import { inconsolata } from '@/fonts/fonts';

export const metadata: Metadata = {
  title: 'React / FrontEnd Developer',
  description:
    'React and Next.js developer services in Warsaw and remotely ✔️ Boost your project with high-quality FrontEnd expertise ⚡ Let&apos;s find the best solution for your business',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const RootLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} data-mode='dark'>
      <body
        className={`${inconsolata.className} bg-white text-darkBlue transition-colors duration-500 dark:bg-darkBlue dark:text-white`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Header />
            <div className='relative mx-auto flex w-full max-w-screen-2xl tracking-wide'>
              <Nav />
              <main className='h-100dvh w-full overflow-auto px-3 pb-[40px] pt-24 md:px-6'>
                {children}
              </main>
            </div>
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
