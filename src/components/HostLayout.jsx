import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

export default function HostLayout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-layout-navbar">
        <ul className="host-layout-nav-list">
          <li className="host-layout-nav-item">
            <NavLink
              className="host-layout-link"
              to="/host"
              style={({ isActive }) => (isActive ? activeStyles : null)}
              end
            >
              Dashboard
            </NavLink>
          </li>
          <li className="host-layout-nav-item">
            <NavLink
              className="host-layout-link"
              to="/host/income"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Income
            </NavLink>
          </li>
          <li className="host-layout-nav-item">
            <NavLink
              className="host-layout-link"
              to="/host/reviews"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
