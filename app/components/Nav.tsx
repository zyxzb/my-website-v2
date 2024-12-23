'use client';

import { useGlobalStore } from '@/lib/store';
import { cn } from '@/lib/utils';

import NavLinksBottom from './NavLinksBottom';
import NavLinksTop from './NavLinksTop';
import NavSkills from './NavSkills';

const Nav = () => {
  const isNavOpen = useGlobalStore((store) => store.isNavOpen);
  const closeNav = useGlobalStore((store) => store.closeNav);

  return (
    <>
      <nav
        className={cn(
          `fixed bottom-0 z-30 flex h-[calc(100dvh-56px)] w-[240px] min-w-[240px] flex-col justify-between overflow-auto border-r-[1px] border-darkBlue bg-white text-darkBlue transition duration-500 dark:border-white dark:bg-darkBlue dark:text-white md:relative md:mt-14 md:-translate-x-[0] smallHeight:text-xs ${
            isNavOpen ? `-translate-x-[0]` : `-translate-x-[240px]`
          }`,
        )}
      >
        <NavLinksTop />
        <div className='mx-auto w-[80%] border-b-[1px] border-darkBlue opacity-50 transition duration-500 dark:border-white' />
        <NavSkills />
        <div className='mx-auto w-[80%] border-b-[1px] border-darkBlue opacity-50 transition duration-500 dark:border-white smallHeight:hidden' />
        <NavLinksBottom />
      </nav>
      <div
        className={cn(
          `bottom-0 z-20 h-[calc(100dvh-56px)] w-full bg-darkBlue/60 backdrop-blur-sm md:hidden
          ${isNavOpen ? 'fixed' : 'hidden'}`,
        )}
        onClick={() => closeNav()}
      />
    </>
  );
};

export default Nav;
