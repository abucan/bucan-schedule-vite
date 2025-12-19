import { Navigate } from 'react-router';
import { isAuthenticated } from '../lib/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  if (!isAuthenticated()) {
    return <Navigate to='/signin' replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
