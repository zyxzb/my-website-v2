import { useTranslations } from 'next-intl';
import Form from '../../components/Form';
import FormText from '../../components/FormText';
import Small from '../../components/Small';

const ContactPage = () => {
  const t = useTranslations('ContactPage');

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
