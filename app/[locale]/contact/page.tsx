import Form from '../../components/Form';
import FormText from '../../components/FormText';
import Small from '../../components/Small';

const ContactPage = () => {
  return (
    <div>
      <Small>Contact Page</Small>
      <div className='mx-auto max-w-[800px] text-center'>
        <FormText />
        <Form />
      </div>
    </div>
  );
};

export default ContactPage;
