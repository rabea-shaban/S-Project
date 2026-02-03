import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ProtectedRoute from "../Components/ProtectedRoute";
import PageAuth from "../pages/AuthLanding";
import SelectRole from "../pages/SelectRole";
import GuardianRegister from "../pages/GuardianRegister";
import PatientLink from "../pages/PatientLink";

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Root />
      </ProtectedRoute>
    ),
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "/auth", element: <PageAuth /> },
      { path: "login", element: <Login /> },
      { path: "SelectRole", element: <SelectRole /> },
      { path: "Guardian", element: <GuardianRegister /> },
      { path: "Patient", element: <PatientLink /> },
    ],
  },
]);

export default route;
