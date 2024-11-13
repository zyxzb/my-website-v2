'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Input from './Input';
import debounce from 'lodash/debounce';
import { IoMdClose } from 'react-icons/io';

const GalleryInput = ({ q }: { q?: string }) => {
  const [inputValue, setInputValue] = useState(q || '');
  const pathName = usePathname();
  const router = useRouter();
  const t = useTranslations('ProjectsPage');

  useEffect(() => {
    setInputValue(q || '');
  }, [q]);

  const debouncedUpdate = useRef(
    debounce((searchTerm) => {
      const params = new URLSearchParams();
      if (searchTerm) {
        params.set('q', searchTerm);
      } else {
        params.delete('q');
      }
      router.replace(`${pathName}?${params.toString()}`);
    }, 500),
  ).current;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setInputValue(searchTerm);
    debouncedUpdate(searchTerm);
  };

  const handleDelete = () => {
    setInputValue('');
    router.replace(pathName);
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
