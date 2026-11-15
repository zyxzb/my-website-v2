'use client';

import { TypeAnimation } from 'react-type-animation';

const TitleAnimation = ({
  texts,
}: {
  texts: readonly [string, string, string];
}): React.JSX.Element => {
  return (
    <TypeAnimation
      sequence={[1000, texts[0], 2000, texts[1], 2000, texts[2], 1000]}
      wrapper='span'
      cursor={true}
      repeat={0}
      className='col-start-1 row-start-1'
    />
  );
};

export default TitleAnimation;
