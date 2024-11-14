import { getTranslations, setRequestLocale } from 'next-intl/server';
import HomeTextSection from '../components/HomeTextSection';
import Small from '../components/Small';

import dynamic from 'next/dynamic';

const DynamicTitleAnimation = dynamic(
  () => import('../components/TitleAnimation'),
  {
    loading: () => (
      <h1 className='text-bold my-8 text-3xl font-bold sm:text-5xl md:my-14'>
        Loading...
      </h1>
    ),
    ssr: false,
  },
);

const HomePage = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations('HomePage');

  return (
    <div>
      <Small>{t('title')}</Small>
      <div className='mx-auto max-w-[800px] text-center'>
        <span className='text-bold my-10 sm:text-xl'>{t('greeting')} 👋</span>
        <DynamicTitleAnimation />
        <HomeTextSection />
      </div>
    </div>
  );
};

export default HomePage;
