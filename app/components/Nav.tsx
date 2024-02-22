'use client';

import { useGlobalStore } from '@/lib/store';
import { cn } from '@/lib/utils';

import NavLinksBottom from './NavLinksBottom';
import NavLinksTop from './NavLinksTop';
import NavSkills from './NavSkills';

const Nav = () => {
  const isNavOpen = useGlobalStore((store) => store.isNavOpen);

  return (
    <nav
      className={cn(
        `border-darkBlue text-darkBlue dark:bg-darkBlue fixed bottom-0 z-30 flex h-[calc(100dvh-56px)] w-[240px] min-w-[240px] flex-col justify-between overflow-auto border-r-[1px] bg-white transition duration-500 dark:border-white dark:text-white md:relative md:mt-14 md:-translate-x-[0] smallHeight:text-xs ${
          isNavOpen ? `-translate-x-[0]` : `-translate-x-[240px]`
        }`,
      )}
    >
      <NavLinksTop />
      <div className='border-darkBlue mx-auto w-[80%] border-b-[1px] opacity-50 transition duration-500 dark:border-white' />
      <NavSkills />
      <div className='border-darkBlue mx-auto w-[80%] border-b-[1px] opacity-50 transition duration-500 dark:border-white smallHeight:hidden' />
      <NavLinksBottom />
    </nav>
  );
};

export default Nav;
