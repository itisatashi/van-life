import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// Layout component serves as a wrapper for pages, providing consistent Header and Footer
export default function Layout() {
  return (
    <>
      {/* Render the Header component */}
      <Header />
      <main>
        {/* Outlet renders the matched child route component */}
        <Outlet />
      </main>
      {/* Render the Footer component */}
      <Footer />
    </>
  );
}
