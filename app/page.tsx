import HomeTextSection from './components/HomeTextSection';
import Small from './components/Small';

import dynamic from 'next/dynamic';

const DynamicTitleAnimation = dynamic(
  () => import('./components/TitleAnimation'),
  {
    loading: () => (
      <h1 className='text-bold my-8 text-3xl font-bold sm:text-5xl md:my-14'>
        Loading...
      </h1>
    ),
    ssr: false,
  },
);

const HomePage = () => {
  return (
    <div>
      <Small>Home Page</Small>
      <div className='mx-auto max-w-[800px] text-center'>
        <span className='text-bold my-10 sm:text-xl'>Hey there! 👋</span>
        <DynamicTitleAnimation />
        <HomeTextSection />
      </div>
    </div>
  );
};

export default HomePage;
