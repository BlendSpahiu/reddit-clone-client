import { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "@containers";
import { AuthRedirect, Create, Home, NotFound } from "@views";
import { AuthRoute } from "./AuthRoute";

export const DefaultRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/r/home" />} />
      <Route
        path="/r/home"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route path="/logout" element={<AuthRedirect />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<AuthRoute />}>
        <Route
          path="/create"
          element={
            <MainLayout isCreate>
              <Create />
            </MainLayout>
          }
        />
      </Route>
    </Routes>
  );
};
