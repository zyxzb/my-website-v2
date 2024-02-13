import HomeTextSection from './components/HomeTextSection';
import Small from './components/Small';
import TitleAnimation from './components/TitleAnimation';

const HomePage = () => {
  return (
    <div>
      <Small>Home Page</Small>
      <div className='mx-auto max-w-[800px] text-center'>
        <span className='text-bold my-10 sm:text-xl'>Hey there! 👋</span>
        <TitleAnimation />
        <HomeTextSection />
      </div>
    </div>
  );
};

export default HomePage;
