import ToggleBtn from './ToggleBtn';
import Link from 'next/link';
import ToggleTheme from './ToggleTheme';

const Header = () => {
  return (
    <header
      className='border-darkBlue fixed left-1/2 z-20 mx-auto flex h-14 w-full max-w-screen-2xl -translate-x-1/2 items-center justify-between border-b-[1px] bg-opacity-40 px-6 backdrop-blur-[5px] transition-[border-color] duration-500
    dark:border-white'
    >
      <Link
        href='/'
        className='my-auto text-2xl font-bold tracking-wide'
      >{`</> Zarzycki`}</Link>
      <div className='flex gap-10'>
        <ToggleTheme />
        <ToggleBtn />
      </div>
    </header>
  );
};

export default Header;
