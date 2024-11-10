'use client';

import { TypeAnimation } from 'react-type-animation';
import { useTranslations } from 'next-intl';

const TitleAnimation = () => {
  const t = useTranslations('HomePage');

  return (
    <TypeAnimation
      sequence={[
        1000,
        t('animatedText1'),
        2000,
        t('animatedText2'),
        2000,
        t('animatedText3'),
        1000,
      ]}
      wrapper='h1'
      cursor={true}
      repeat={0}
      className='text-bold my-8 text-3xl font-bold sm:text-5xl md:my-14'
    />
  );
};

export default TitleAnimation;
