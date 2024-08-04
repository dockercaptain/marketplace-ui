import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const ApplicationList = lazy(() => import("../components/ApplicationList"));

const getElement = (element: JSX.Element) => {
  return <Suspense fallback={<>Loading....</>}>{element}</Suspense>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={getElement(<ApplicationList />)} />
    </Routes>
  );
};

export default AppRoutes;
