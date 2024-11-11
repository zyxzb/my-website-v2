'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import { usePathname } from 'next/navigation';

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
    <label className='border'>
      <p className='sr-only'>change language</p>
      <select
        defaultValue={localActive}
        className='bg-transparent p-1 py-0.5 sm:p-2'
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
    </label>
  );
}
