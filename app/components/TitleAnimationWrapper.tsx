import dynamic from 'next/dynamic';

const DynamicTitleAnimation = dynamic(
  () => import('../components/TitleAnimation'),
  {
    loading: () => (
      <h1 className='text-bold my-8 text-3xl font-bold sm:text-5xl md:my-14'>
        Loading...
      </h1>
    ),
    ssr: true,
  },
);
const TitleAnimationWrapper = () => {
  return <DynamicTitleAnimation />;
};

export default TitleAnimationWrapper;
