import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import ForgotPassword from "../pages/ForgotPasword";
import CreatePassword from "../pages/CreatePassword";
import PrivateRoute from "./PrivateRoute";
import GuestRoute from "./GuestRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />
      <Route
        path="/forgot"
        element={
          <GuestRoute>
            <ForgotPassword />
          </GuestRoute>
        }
      />
      <Route
        path="/create"
        element={
          <GuestRoute>
            <CreatePassword />
          </GuestRoute>
        }
      />
      <Route
        path="*"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
