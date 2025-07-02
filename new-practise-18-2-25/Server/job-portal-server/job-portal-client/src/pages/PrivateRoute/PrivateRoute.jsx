import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-ring loading-xl"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/signIn"></Navigate>;
};

export default PrivateRoute;
