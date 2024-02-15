import { FieldError } from 'react-hook-form';

interface FormInputProps {
  placeholder: string;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  register: any;
  label: string;
  name: string;
  rows: string;
}

import React from 'react';
import { cn } from '@/lib/utils';

const TextArea = ({
  label,
  placeholder,
  error,
  register,
  name,
  rows,
  ...rest
}: FormInputProps) => {
  return (
    <div className='w-full'>
      <label htmlFor={name} className='mb-2 flex'>
        {label}
      </label>
      <textarea
        id={name}
        className={cn(
          `w-full align-top !outline-none ${error ? 'border-rose-400' : ''}`,
        )}
        placeholder={placeholder}
        autoComplete='off'
        rows={rows}
        {...register(name)}
        {...rest}
      />
      {error && (
        <span className='error-message mt-1 flex text-sm text-rose-400'>
          {error.message}
        </span>
      )}
    </div>
  );
};

export default TextArea;
