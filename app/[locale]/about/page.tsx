import Small from '@/app/components/Small';
import { getTranslations } from 'next-intl/server';

const AboutPage = async (): Promise<React.JSX.Element> => {
  const t = await getTranslations('AboutPage');

  return (
    <div>
      <Small>{t('title')}</Small>
      <p>{t('text')}</p>
    </div>
  );
};

export default AboutPage;
