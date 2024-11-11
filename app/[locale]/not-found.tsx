import { useTranslations } from 'next-intl';
import Small from '../components/Small';
import { Link } from '@/i18n/routing';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <div>
      <Small>{t('title')}</Small>
      <div className='flex h-full w-full flex-col items-center justify-center'>
        <p className='text-3xl'>404</p>
        <p className='py-6'>{t('text')}</p>
        <Link
          href='/'
          className='bg-lightBlue p-4 text-white hover:bg-black hover:transition dark:hover:bg-white dark:hover:text-darkBlue'
        >
          {t('button')}
        </Link>
      </div>
    </div>
  );
}
