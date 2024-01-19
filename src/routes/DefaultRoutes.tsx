import { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Main } from "../views/Main";

export const DefaultRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
};
