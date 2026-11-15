import type { ReactNode } from 'react';

const Template = ({ children }: { children: ReactNode }): React.JSX.Element => {
  return (
    <div className='motion-safe:animate-[pageEnter_750ms_ease-in-out]'>
      {children}
    </div>
  );
};

export default Template;
