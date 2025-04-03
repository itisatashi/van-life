import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="host-layout-navbar">
        <ul className="host-layout-nav-list">
          <li className="host-layout-nav-item">
            <Link className="host-layout-link" to="/host">
              Host
            </Link>
          </li>
          <li className="host-layout-nav-item">
            <Link className="host-layout-link" to="/host/income">
              Income
            </Link>
          </li>
          <li className="host-layout-nav-item">
            <Link className="host-layout-link" to="/host/reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
