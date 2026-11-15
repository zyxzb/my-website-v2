import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { locale as getRootLocale } from 'next/root-params';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default getRequestConfig(async ({ locale }) => {
  const requestedLocale = locale ?? (await getRootLocale());

  if (!hasLocale(routing.locales, requestedLocale)) {
    notFound();
  }

  return {
    locale: requestedLocale,
    messages: (await import(`../messages/${requestedLocale}.json`)).default,
  };
});
