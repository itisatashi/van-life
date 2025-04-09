import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequiredLayout() {
  const authenticated = true;

  if (!authenticated) {
    return <Navigate to="login" />;
  }

  return <Outlet />;
}
