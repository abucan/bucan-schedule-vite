import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form } from '@/components/ui/form';
import { CustomFormField } from './CustomFormField';
import { FORM_FIELD_TYPE } from '@/constants';
import { Lock, Mail } from 'lucide-react';
import { SubmitButton } from './SubmitButton';

import { useAuthActions } from '@convex-dev/auth/react';

const signInFormSchema = z.object({
  email: z.email({
    message: 'Email je obavezan.',
  }),
  password: z.string().min(8, {
    message: 'Lozinka je obavezna.',
  }),
});

type SignInFormValues = z.infer<typeof signInFormSchema>;

export function SignInForm() {
  const { signIn } = useAuthActions();
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: SignInFormValues) {
    await signIn('password', {
      flow: 'signIn',
      email: values.email,
      password: values.password,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 flex-1'>
        <CustomFormField
          fieldType={FORM_FIELD_TYPE.INPUT}
          control={form.control}
          name='email'
          label='Email'
          placeholder='Email'
          icon={Mail}
        />
        <CustomFormField
          fieldType={FORM_FIELD_TYPE.INPUT}
          control={form.control}
          name='password'
          label='Password'
          placeholder='Password'
          icon={Lock}
        />
        <SubmitButton isLoading={false}>Submit</SubmitButton>
      </form>
    </Form>
  );
}
