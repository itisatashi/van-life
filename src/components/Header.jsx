import React from "react";
import { Link, NavLink } from "react-router-dom";

// Header component serves as a wrapper for the website's navigation
export default function Header() {
  return (
    <header>
      <nav>
        {/* Link to the homepage */}
        <Link className="logo" to="/">
          #Vanlife
        </Link>
        {/* Navigation list */}
        <ul className="nav-list">
          {/* Navigation item with link to the host page */}
          <li className="nav-item">
            <NavLink
              // Link to the host page
              to="/host"
              // Conditionally apply the active-link class based on the route
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Host
            </NavLink>
          </li>
          {/* Navigation item with link to the about page */}
          <li className="nav-item">
            <NavLink
              // Link to the about page
              to="/about"
              // Conditionally apply the active-link class based on the route
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              About
            </NavLink>
          </li>
          {/* Navigation item with link to the vans page */}
          <li className="nav-item">
            <NavLink
              // Link to the vans page
              to="/vans"
              // Conditionally apply the active-link class based on the route
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Vans
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
