import { cn } from '@/lib/utils';
import { FieldError } from 'react-hook-form';

interface InputProps {
  type: string;
  placeholder: string;
  error?: FieldError | undefined;
  register?: any;
  label: string;
  name: string;
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
          `test-xs border-darkBlue w-full border bg-transparent p-2 !outline-none transition-[border-color] duration-500 dark:border-white ${error ? 'border-rose-400 dark:border-rose-400' : ''}`,
        )}
        type={type}
        placeholder={placeholder}
        autoComplete='off'
        onChange={onChange}
        {...(register && register(name))}
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
