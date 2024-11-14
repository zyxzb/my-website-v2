import Form from '../../components/Form';
import FormText from '../../components/FormText';
import Small from '../../components/Small';
import { getTranslations, setRequestLocale } from 'next-intl/server';

const ContactPage = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations('ContactPage');

  return (
    <div>
      <Small>{t('title')}</Small>
      <div className='mx-auto max-w-[800px] text-center'>
        <FormText />
        <Form />
      </div>
    </div>
  );
};

export default ContactPage;
