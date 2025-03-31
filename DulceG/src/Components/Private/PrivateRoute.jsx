import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const estasautenticado = !!localStorage.getItem("token");

  if (estasautenticado) {
    return element;
  } else {
    return <Navigate to="/admin" />;
  }
};

export default PrivateRoute;