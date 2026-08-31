import { Navigate } from './Navigate';

export const ProtectedRoute = ({ user, children }: { user: string | null, children: React.ReactNode }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}