import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const HomeTextSection = () => {
  const t = useTranslations('HomePage');

  return (
    <section>
      <p className='my-8 sm:text-lg'>{t('about')}</p>
      <p className='mb-10 mt-14 sm:text-lg'>{t('myProjectText')}</p>
      <Link
        href='/projects'
        className='mb-14 bg-lightBlue p-4 text-white hover:bg-black hover:transition dark:hover:bg-white dark:hover:text-darkBlue'
      >
        {t('myProjectButton')}
      </Link>
      <div>
        <p className='mb-10 mt-14 sm:text-lg'> {t('leaveMessageText')}</p>
        <Link
          href='/contact'
          className='mb-14 bg-lightBlue p-4 text-white hover:bg-black hover:transition dark:hover:bg-white dark:hover:text-darkBlue'
        >
          {t('leaveMessageButton')}
        </Link>
      </div>
    </section>
  );
};

export default HomeTextSection;
