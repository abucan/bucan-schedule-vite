import { Navigate } from 'react-router';
import { useConvexAuth } from 'convex/react';

interface PublicRouteProps {
  children: React.ReactNode;
}

function PublicRoute({ children }: PublicRouteProps) {
  const { isLoading, isAuthenticated } = useConvexAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <Navigate to='/dashboard' replace />;
  }

  return <>{children}</>;
}

export default PublicRoute;
