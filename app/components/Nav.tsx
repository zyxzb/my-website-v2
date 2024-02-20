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
        `fixed bottom-0 z-30 flex h-[calc(100dvh-56px)] w-[240px] min-w-[240px] flex-col justify-between overflow-auto border-r-[1px] border-bgDarkBlue bg-textLightBlue text-bgDarkBlue transition duration-500 md:relative md:mt-14 md:-translate-x-[0] smallHeight:text-xs dark:border-textLightBlue dark:bg-bgDarkBlue dark:text-textLightBlue ${
          isNavOpen ? `-translate-x-[0]` : `-translate-x-[240px]`
        }`,
      )}
    >
      <NavLinksTop />
      <div className='mx-auto w-[80%] border-b-[1px] border-bgDarkBlue opacity-50 transition duration-500 dark:border-textLightBlue' />
      <NavSkills />
      <div className='mx-auto w-[80%] border-b-[1px] border-bgDarkBlue opacity-50 transition duration-500 smallHeight:hidden dark:border-textLightBlue' />
      <NavLinksBottom />
    </nav>
  );
};

export default Nav;
