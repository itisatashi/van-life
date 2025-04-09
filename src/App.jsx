import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing page components
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import NotFound from "./pages/NotFound";
import Login from "./Login";

// Importing layout components
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";

// Importing host-related components
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import HostVans from "./pages/Host/HostVans";
import Reviews from "./pages/Host/Reviews";
import HostVansDetail from "./pages/Host/HostVansDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";

// Import server for API mocking
import "./server/server";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main layout routes */}
        <Route path="/" element={<Layout />}>
          {/* Public routes */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />

          {/* Vans routes */}
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          {/* Host routes with nested layout */}
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="reviews" element={<Reviews />} />
            {/* Nested routes for each host van */}
            <Route path="vans/:id" element={<HostVansDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
