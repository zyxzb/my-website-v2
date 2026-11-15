'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import type { ChangeEvent } from 'react';
import { usePathname } from 'next/navigation';
import { IoChevronDownOutline } from 'react-icons/io5';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      const segments = pathname.split('/');

      if (segments[1] === 'en' || segments[1] === 'pl') {
        segments[1] = nextLocale;
      }

      const newPath = segments.join('/');

      router.replace(newPath, { scroll: false });
    });
  };

  return (
    <label className='relative inline-flex items-center border'>
      <p className='sr-only'>change language</p>
      <select
        defaultValue={localActive}
        className='appearance-none bg-transparent py-0.5 pl-2 pr-7'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option className='text-darkBlue' value='en'>
          EN
        </option>
        <option className='text-darkBlue' value='pl'>
          PL
        </option>
      </select>
      <IoChevronDownOutline
        aria-hidden='true'
        className='pointer-events-none absolute right-2 h-3 w-3'
      />
    </label>
  );
}
