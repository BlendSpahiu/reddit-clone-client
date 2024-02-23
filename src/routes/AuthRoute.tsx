import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/Auth/useAuth";

export const AuthRoute = (): ReactElement => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return isAuthenticated ? <Outlet /> : <Navigate to="/r/home" />;
};
