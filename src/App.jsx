import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link className="logo">#Vanlife</Link>
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Vans</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <footer>
        <p>Ⓒ 2022 #VANLIFE</p>
      </footer>
    </BrowserRouter>
  );
}
