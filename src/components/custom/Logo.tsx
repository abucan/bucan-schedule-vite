import { cn } from '@/lib/utils';
import logoLight from '@/assets/images/logo.png';
import logoDark from '@/assets/images/logo_black.png';

export const Logo = ({ className }: { className: string }) => {
  return (
    <>
      <img
        src={logoLight}
        alt='logo'
        className={cn('w-fit hidden dark:block', className)}
      />
      <img
        src={logoDark}
        alt='logo'
        className={cn('w-fit dark:hidden', className)}
      />
    </>
  );
};
