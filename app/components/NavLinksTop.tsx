'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { navLinks } from '@/constants/nav-links';
import { cn } from '@/lib/utils';
import { useGlobalStore } from '@/lib/store';

const NavLinksTop = () => {
  const pathname = usePathname();

  const closeNav = useGlobalStore((state) => state.closeNav);

  return (
    <div>
      <ul className='flex flex-col p-6'>
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={link.url}
                onClick={() => closeNav()}
                className={cn(
                  `flex w-full items-center py-4 capitalize hover:text-lightBlue hover:transition xSmallHeight:py-2 ${
                    pathname === link.url ? 'text-lightBlue' : ''
                  }`,
                )}
              >
                <div className='pr-3'>{link.icon}</div>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinksTop;
