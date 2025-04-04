import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link className="logo" to="/">
          #Vanlife
        </Link>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              to="/host"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Host
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/vans"
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
