import { Loader2 } from 'lucide-react';

import type { SubmitButtonProps } from '@/types';

import { Button } from '@/components/ui/button';

export const SubmitButton = ({
  isLoading,
  children,
  disabled,
}: SubmitButtonProps) => {
  return (
    <Button
      type='submit'
      disabled={disabled}
      size={'lg'}
      className={
        'shad-btn transition-all duration-200 ease-in-out bg-green-500 text-white w-full hover:bg-green-500/90 disabled:bg-green-500/50'
      }
    >
      {isLoading ? (
        <div className='flex items-center gap-4'>
          <Loader2 className='animate-spin mr-2 h-4 w-4' />
        </div>
      ) : (
        children
      )}
    </Button>
  );
};
