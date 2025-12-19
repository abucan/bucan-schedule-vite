import { Navigate } from 'react-router';
import { isAuthenticated } from '../lib/auth';

interface PublicRouteProps {
  children: React.ReactNode;
}

function PublicRoute({ children }: PublicRouteProps) {
  if (isAuthenticated()) {
    return <Navigate to='/dashboard' replace />;
  }

  return <>{children}</>;
}

export default PublicRoute;

