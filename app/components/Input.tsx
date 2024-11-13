import { cn } from '@/lib/utils';
import { FieldError } from 'react-hook-form';
import { memo } from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  error?: FieldError | undefined;
  register?: any;
  label: string;
  name: string;
  value?: string;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  label,
  placeholder,
  error,
  register,
  name,
  onChange,
  value,
  children,
  ...rest
}: InputProps) => {
  return (
    <div className='w-full'>
      <label htmlFor={name} className='mb-2 flex'>
        {label}
      </label>
      <div className='relative'>
        <input
          id={name}
          className={cn(
            `test-xs w-full border border-darkBlue bg-transparent p-2 !outline-none transition-[border-color] duration-0 dark:border-white ${
              error ? 'border-rose-400 dark:border-rose-400' : ''
            }`,
          )}
          type={type}
          placeholder={placeholder}
          autoComplete='off'
          onChange={onChange}
          value={value}
          {...(register && register(name))}
          {...rest}
        />
        {children}
      </div>

      {error && (
        <span className='error-message mt-1 flex text-sm text-rose-400'>
          {error.message}
        </span>
      )}
    </div>
  );
};

export default memo(Input);
