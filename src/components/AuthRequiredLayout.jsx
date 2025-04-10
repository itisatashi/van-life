import React from "react";
import { Outlet, Navigate, replace } from "react-router-dom";

export default function AuthRequiredLayout() {
  const loggedIn = localStorage.getItem("loggedin");

  if (!loggedIn) {
    return (
      <Navigate
        to="login"
        state={{ message: "You must first log in" }}
        replace
      />
    );
  }

  return <Outlet />;
}
