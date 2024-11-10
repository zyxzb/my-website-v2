import Loader from '../components/Loader';

const Loading = () => {
  return (
    <div className='mt-10 grid w-full md:mt-20'>
      <div className='mx-auto'>
        <Loader />
      </div>
    </div>
  );
};

export default Loading;
