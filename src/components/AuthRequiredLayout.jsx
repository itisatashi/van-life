import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequiredLayout() {
  const loggedIn = localStorage.getItem("loggedin");

  if (!loggedIn) {
    return <Navigate to="login" state={{ message: "You must first log in" }} />;
  }

  return <Outlet />;
}
