'use client';

import { useThemeStore } from '@/lib/store.theme';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

const ToggleTheme = (): React.JSX.Element => {
  const toggleTheme = useThemeStore((store) => store.setTheme);

  return (
    <button type='button' aria-label='toggle theme' onClick={toggleTheme}>
      <IoSunnyOutline size={20} className='dark:hidden' />
      <IoMoonOutline size={20} className='hidden dark:block' />
    </button>
  );
};

export default ToggleTheme;
