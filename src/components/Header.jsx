import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link className="logo" to="/">
          #Vanlife
        </Link>
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" to="/host">
              Host
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/vans">
              Vans
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
