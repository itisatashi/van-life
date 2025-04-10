import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthRequiredLayout() {
  const loggedIn = localStorage.getItem("loggedin");
  const location = useLocation();

  if (!loggedIn) {
    return (
      <Navigate
        to="login"
        state={{ message: "You must first log in", from: location.pathname }}
        replace
      />
    );
  }

  return <Outlet />;
}
