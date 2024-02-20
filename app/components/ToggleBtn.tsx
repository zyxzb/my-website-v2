'use client';

import { useGlobalStore } from '@/lib/store';
import { cn } from '@/lib/utils';

const ToggleBtn = () => {
  const toggleNav = useGlobalStore((store) => store.toggleNav);
  const isNavOpen = useGlobalStore((store) => store.isNavOpen);

  return (
    <button
      className={cn(
        `group visible relative overflow-hidden md:invisible ${isNavOpen ? 'active' : ''}`,
      )}
      onClick={() => toggleNav()}
      type='button'
      aria-label='toggle navigation'
    >
      <div className='flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300'>
        <div
          className={`h-[2px] w-7 origin-left transform bg-black transition-all duration-300 group-[.active]:translate-x-10 dark:bg-textLightBlue`}
        ></div>
        <div className='h-[2px] w-7 transform rounded bg-black transition-all delay-75 duration-300 group-[.active]:translate-x-10 dark:bg-textLightBlue'></div>
        <div className='h-[2px] w-7 origin-left transform bg-black transition-all delay-150 duration-300 group-[.active]:translate-x-10 dark:bg-textLightBlue'></div>
        <div className='absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 group-[.active]:w-12 group-[.active]:translate-x-0'>
          <div className='absolute h-[2px] w-5 rotate-0 transform bg-black transition-all delay-300 duration-500 group-[.active]:rotate-45 dark:bg-textLightBlue'></div>
          <div className='absolute h-[2px] w-5 -rotate-0 transform bg-black transition-all delay-300 duration-500 group-[.active]:-rotate-45 dark:bg-textLightBlue'></div>
        </div>
      </div>
    </button>
  );
};

export default ToggleBtn;
