import { useTranslations } from 'next-intl';

const FormText = () => {
  const t = useTranslations('ContactPage');

  return (
    <section className='mb-16 mt-10 sm:text-lg'>
      <p>{t('paragraph1')}</p>
      <p className='my-6'>{t('paragraph2')}</p>
      <p>{t('paragraph3')}</p>
    </section>
  );
};

export default FormText;
