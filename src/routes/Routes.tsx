import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import List from "../components/Postgress/List";
import Create from "../components/Postgress/Create";
const ApplicationList = lazy(() => import("../components/ApplicationList"));

const getElement = (element: JSX.Element) => {
  return <Suspense fallback={<>Loading....</>}>{element}</Suspense>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={getElement(<ApplicationList />)} />
      <Route path="/application/postgres" element={getElement(<List />)} />
      <Route
        path="/application/postgres/create"
        element={getElement(<Create />)}
      />
    </Routes>
  );
};

export default AppRoutes;
