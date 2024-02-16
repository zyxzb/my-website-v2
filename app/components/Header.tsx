import ToggleBtn from './ToggleBtn';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='fixed left-1/2 z-20 mx-auto flex h-14 w-full max-w-screen-2xl -translate-x-1/2 items-center justify-between border-b-[1px] bg-opacity-40 px-6 backdrop-blur-[5px]'>
      <Link
        href='/'
        className='my-auto text-2xl font-bold tracking-wide text-textLightBlue'
      >{`</> Zarzycki`}</Link>
      <ToggleBtn />
    </header>
  );
};

export default Header;
