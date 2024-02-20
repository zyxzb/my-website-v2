import { cn } from '@/lib/utils';
import { FieldError } from 'react-hook-form';

interface InputProps {
  type: string;
  placeholder: string;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  register: any;
  label: string;
  name: string;
}

const Input = ({
  type,
  label,
  placeholder,
  error,
  register,
  name,
  ...rest
}: InputProps) => {
  return (
    <div className='w-full'>
      <label htmlFor={name} className='mb-2 flex'>
        {label}
      </label>
      <input
        id={name}
        className={cn(
          `test-xs w-full border border-bgDarkBlue bg-transparent p-2 !outline-none transition-[border-color] duration-500 dark:border-textLightBlue ${error ? 'border-rose-400' : ''}`,
        )}
        type={type}
        placeholder={placeholder}
        autoComplete='off'
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

export default Input;
