import { Logo } from '@/components/custom/Logo';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Authenticated, Unauthenticated } from 'convex/react';
import { SignIn as ClerkSignIn } from '@clerk/clerk-react';
import { shadcn } from '@clerk/themes';

function SignIn() {
  return (
    <div className='flex h-screen max-h-screen relative bg-dark-300 antialiased'>
      <section className='remove-scrollbar relative flex-1 overflow-y-auto px-[5%] my-auto z-10'>
        <div className='mx-auto flex size-full flex-col py-10 max-w-sm'>
          <Logo className='h-14 mb-12 self-center' />
          <Unauthenticated>
            <ClerkSignIn
              withSignUp={false}
              appearance={{
                theme: shadcn,
              }}
            />
          </Unauthenticated>
          <Authenticated>User is signed in.</Authenticated>
          <div className='text-14-regular mt-14 flex items-center justify-center'>
            <p className='justify-items-end text-dark-600'>
              {new Date().getFullYear()} © All rights reserved.
            </p>
          </div>
        </div>
      </section>
      <BackgroundBeams />
    </div>
  );
}

export default SignIn;
