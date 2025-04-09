'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { useTranslations } from 'next-intl';

import Input from './Input';
import TextArea from './TextArea';

import { sendEmail } from '@/actions/sendEmail';

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations('ContactPage');

  const validationSchema = z.object({
    firstName: z.string().min(1, { message: t('firstNameZodValidation') }),
    lastName: z.string().optional(),
    email: z
      .string()
      .min(1, { message: t('emailLengthZodValidation') })
      .email({
        message: t('emailValidZodValidation'),
      }),
    phone: z.string().optional(),
    message: z.string().min(1, { message: t('messageZodValidation') }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    setIsLoading(true);
    const result = await sendEmail(data);
    if (result.success) {
      toast.success(result.message);
      reset();
    } else {
      toast.error(result.message);
    }
    setIsLoading(false);
  };

  return (
    <div className='flex flex-col gap-10'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto flex w-full max-w-[600px] flex-col gap-4'
      >
        <div className='flex flex-col gap-4 sm:flex-row'>
          <Input
            label={t('inputFirstNameLabel')}
            type='text'
            name='firstName'
            placeholder={t('inputFirstNamePlaceholder')}
            error={errors.firstName}
            register={register}
          />
          <Input
            label={t('inputLastNameLabel')}
            type='text'
            name='lastName'
            placeholder={t('inputLastNamePlaceholder')}
            error={errors.lastName}
            register={register}
          />
        </div>
        <div className='flex flex-col gap-4 sm:flex-row'>
          <Input
            label={t('inputEmailLabel')}
            type='email'
            name='email'
            placeholder={t('inputEmailPlaceholder')}
            error={errors.email}
            register={register}
          />
          <Input
            label={t('inputPhoneLabel')}
            type='text'
            name='phone'
            placeholder={t('inputPhonePlaceholder')}
            error={errors.phone}
            register={register}
          />
        </div>
        <TextArea
          label={t('textAreaLabel')}
          rows='6'
          placeholder={t('textAreaPlaceholder')}
          name='message'
          error={errors.message}
          register={register}
        />
        <button
          type='submit'
          disabled={isLoading}
          className='bg-lightBlue p-2 text-white hover:bg-black hover:transition dark:hover:bg-white dark:hover:text-darkBlue'
        >
          {isLoading ? t('loadingButton') : t('submitButton')}
        </button>
      </form>
    </div>
  );
};

export default Form;
