'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import toast from 'react-hot-toast';

import Input from './Input';
import TextArea from './TextArea';

const validationSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().optional(),
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  phone: z.string().optional(),
  message: z.string().min(1, { message: 'Message is required' }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    setIsLoading(true);

    axios
      .post('/api/sendEmail', data)
      .then(({ data }) => {
        toast.success(data.message);
        reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className='flex flex-col gap-10'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto flex w-full max-w-[600px] flex-col gap-4'
      >
        <div className='flex flex-col gap-4 sm:flex-row'>
          <Input
            label='First Name'
            type='text'
            name='firstName'
            placeholder='First Name'
            error={errors.firstName}
            register={register}
          />
          <Input
            label='Last Name'
            type='text'
            name='lastName'
            placeholder='Last Name (optional)'
            error={errors.lastName}
            register={register}
          />
        </div>
        <div className='flex flex-col gap-4 sm:flex-row'>
          <Input
            label='Your Email Address'
            type='email'
            name='email'
            placeholder='Email Address'
            error={errors.email}
            register={register}
          />
          <Input
            label='Your Phone number'
            type='text'
            name='phone'
            placeholder='Phone number (optional)'
            error={errors.phone}
            register={register}
          />
        </div>
        <TextArea
          label='Your message'
          rows='6'
          placeholder='Your message...'
          name='message'
          error={errors.message}
          register={register}
        />
        <button
          type='submit'
          disabled={isLoading}
          className='bg-lightBlue dark:hover:text-darkBlue p-2 text-white hover:bg-black hover:transition dark:hover:bg-white'
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Form;
