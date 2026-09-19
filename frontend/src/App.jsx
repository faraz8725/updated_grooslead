/*import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AdminServices from "./pages/AdminServices";
import AdminCareers from "./pages/AdminCareers";

import "./styles/App.css";

function App() {
  return (
    <Routes>
      {/* Public Website *}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
      </Route>

      {/* Admin Panel *}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/services" element={<AdminServices />} />
      <Route path="/admin/careers" element={<AdminCareers />} />
    </Routes>
  );
}

export default App; */


import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AdminRoute from "./components/AdminRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AdminServices from "./pages/AdminServices";
import AdminCareers from "./pages/AdminCareers";

import "./styles/App.css";

function App() {
  return (
    <Routes>
      {/* Public Website */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
      </Route>

      {/* Protected Admin Panel */}
      <Route element={<AdminRoute />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/services" element={<AdminServices />} />
        <Route path="/admin/careers" element={<AdminCareers />} />
      </Route>
    </Routes>
  );
}

export default App;

