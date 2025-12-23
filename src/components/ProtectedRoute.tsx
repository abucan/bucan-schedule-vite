import { Navigate } from 'react-router';
import { useConvexAuth } from 'convex/react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLoading, isAuthenticated } = useConvexAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to='/signin' replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
