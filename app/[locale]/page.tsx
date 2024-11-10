import HomeTextSection from '../components/HomeTextSection';
import Small from '../components/Small';
import { useTranslations } from 'next-intl';

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

const HomePage = () => {
  const t = useTranslations('HomePage');

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
