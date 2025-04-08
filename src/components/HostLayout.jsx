import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

// This component is responsible for rendering the common layout for all host related pages
export default function HostLayout() {
  // activeStyles is an object that contains the styles for the active link
  // It sets the font weight to bold, text decoration to underline and color to dark grey
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      {/* The navbar is rendered here */}
      <nav className="host-layout-navbar">
        <ul className="host-layout-nav-list">
          <li className="host-layout-nav-item">
            {/* The NavLink component is used to create a link to the dashboard page */}
            {/* The style prop is used to dynamically apply the activeStyles to the link */}
            {/* The end prop is used to indicate that this is the last link in the list */}
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
            {/* The NavLink component is used to create a link to the income page */}
            <NavLink
              className="host-layout-link"
              to="income"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Income
            </NavLink>
          </li>
          <li className="host-layout-nav-item">
            {/* The NavLink component is used to create a link to the vans page */}
            <NavLink
              className="host-layout-link"
              to="vans"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Vans
            </NavLink>
          </li>
          <li className="host-layout-nav-item">
            {/* The NavLink component is used to create a link to the reviews page */}
            <NavLink
              className="host-layout-link"
              to="reviews"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* The Outlet component is used to render the content of the page */}
      <Outlet />
    </>
  );
}
