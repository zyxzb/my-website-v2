import Small from '@/app/components/Small';
import { useTranslations } from 'next-intl';

const AboutPage = () => {
  const t = useTranslations('AboutPage');
  return (
    <div>
      <Small>{t('title')}</Small>
      <p>{t('text')}</p>
    </div>
  );
};

export default AboutPage;
