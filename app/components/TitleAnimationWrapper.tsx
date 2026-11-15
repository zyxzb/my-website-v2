import { getTranslations } from 'next-intl/server';
import TitleAnimation from '@/app/components/TitleAnimation';

const TitleAnimationWrapper = async (): Promise<React.JSX.Element> => {
  const t = await getTranslations('HomePage');
  const texts = [
    t('animatedText1'),
    t('animatedText2'),
    t('animatedText3'),
  ] as const;

  return (
    <h1 className='text-bold my-8 grid text-3xl font-bold sm:text-5xl md:my-14'>
      {texts.map((text) => (
        <span
          key={text}
          aria-hidden='true'
          className='invisible col-start-1 row-start-1'
        >
          {text}|
        </span>
      ))}
      <TitleAnimation texts={texts} />
    </h1>
  );
};

export default TitleAnimationWrapper;
