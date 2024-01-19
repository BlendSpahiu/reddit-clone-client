import { ReactElement, ReactNode } from "react";
import { Navigate, Outlet, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../hooks/Auth/useAuth";

export const AuthRoute = (): ReactElement => {
  const isAuthenticated = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
};
