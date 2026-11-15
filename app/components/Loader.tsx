const Loader = (): React.JSX.Element => {
  return (
    <svg
      role='status'
      aria-label='Loading'
      viewBox='0 0 50 50'
      width={150}
      height={150}
      className='animate-spin text-white motion-reduce:animate-none'
      fill='none'
      stroke='currentColor'
      strokeWidth={5}
    >
      <circle cx={25} cy={25} r={20} opacity={0.25} />
      <path d='M25 5a20 20 0 0 1 20 20' strokeLinecap='round' />
    </svg>
  );
};

export default Loader;
