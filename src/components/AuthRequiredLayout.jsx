import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequiredLayout() {
  const authenticated = false;

  if (!authenticated) {
    return <Navigate to="login" state={{ message: "You must first log in" }} />;
  }

  return <Outlet />;
}
