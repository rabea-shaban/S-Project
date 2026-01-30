import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
  
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;