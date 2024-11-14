import Small from '@/app/components/Small';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

const AboutPage = ({ params: { locale } }: { params: { locale: string } }) => {
  // Enable static rendering
  setRequestLocale(locale);

  // useTranslation or await getTranslation, doesn't matter for enabling static rendering
  const t = useTranslations('AboutPage');
  return (
    <div>
      <Small>{t('title')}</Small>
      <p>{t('text')}</p>
    </div>
  );
};

export default AboutPage;
