'use client';

import { TypeAnimation } from 'react-type-animation';

const TitleAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        1000,
        "I'm Bartek..",
        2000,
        'Frontend/React developer..',
        2000,
        "Let's Work Together",
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
