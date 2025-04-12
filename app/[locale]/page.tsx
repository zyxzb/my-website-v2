import { getTranslations, setRequestLocale } from 'next-intl/server';
import HomeTextSection from '../components/HomeTextSection';
import Small from '../components/Small';
import TitleAnimationWrapper from '../components/TitleAnimationWrapper';

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
        <TitleAnimationWrapper />
        <HomeTextSection />
      </div>
    </div>
  );
};

export default HomePage;
