'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Input from './Input';
import debounce from 'lodash/debounce';
import { IoMdClose } from 'react-icons/io';

const GalleryInput = ({ q }: { q?: string }) => {
  const [inputValue, setInputValue] = useState<string>(q || '');
  const inputQueries = useRef<Set<string>>(new Set());
  const pathName = usePathname();
  const router = useRouter();
  const t = useTranslations('ProjectsPage');

  const debouncedUpdate = useMemo(
    () =>
      debounce((searchTerm: string): void => {
        const params = new URLSearchParams();
        if (searchTerm) params.set('q', searchTerm);
        const queryString = params.toString();

        inputQueries.current.add(searchTerm);
        router.replace(queryString ? `${pathName}?${queryString}` : pathName, {
          scroll: false,
        });
      }, 500),
    [pathName, router],
  );

  useEffect(() => {
    const query = q || '';

    if (inputQueries.current.delete(query)) return;

    debouncedUpdate.cancel();
    setInputValue(query);
  }, [q, debouncedUpdate]);

  useEffect(() => {
    return () => debouncedUpdate.cancel();
  }, [debouncedUpdate]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchTerm = event.target.value.toLowerCase();

    setInputValue(searchTerm);
    debouncedUpdate(searchTerm);
  };

  const handleDelete = (): void => {
    debouncedUpdate.cancel();
    setInputValue('');
    inputQueries.current.add('');
    router.replace(pathName, { scroll: false });
  };

  return (
    <div className='my-8'>
      <Input
        label={t('searchInputLabel')}
        type='text'
        name='search'
        placeholder={t('searchInputPlaceholder')}
        onChange={handleChange}
        value={inputValue}
      >
        <button
          onClick={handleDelete}
          className='absolute right-1 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100'
        >
          <IoMdClose size={30} />
        </button>
      </Input>
    </div>
  );
};

export default GalleryInput;
