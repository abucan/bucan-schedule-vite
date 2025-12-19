import { Outlet, Link, useLocation } from 'react-router';

function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className='flex min-h-svh'>
      {/* Sidebar */}
      <aside className='w-64 border-r bg-muted/40'>
        <div className='flex h-full flex-col p-4'>
          <h2 className='mb-6 text-lg font-semibold'>Navigation</h2>
          <nav className='flex flex-col space-y-2'>
            <Link
              to='/dashboard'
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/dashboard')
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to='/calendar'
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/calendar')
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
            >
              Calendar
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className='flex-1 overflow-auto'>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

