/*


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
import Team from "./pages/Team";
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
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
      </Route>

      {/* Protected Admin Panel *}
      <Route element={<AdminRoute />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/services" element={<AdminServices />} />
        <Route path="/admin/careers" element={<AdminCareers />} />
      </Route>
    </Routes>
  );
}

export default App;

*/


import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AdminRoute from "./components/AdminRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails";
import Login from "./pages/Login";
import Team from "./pages/Team";

import AdminDashboard from "./pages/AdminDashboard";
import AdminServices from "./pages/AdminServices";
import AdminCareers from "./pages/AdminCareers";
import AdminInventory from "./pages/AdminInventory";
import AdminTeam from "./pages/AdminTeam";
import AdminCEO from "./pages/AdminCEO";
import AdminContacts from "./pages/AdminContacts";

import "./styles/App.css";

function App() {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/career"
          element={<Career />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/team"
          element={<Team />}
        />

        <Route
          path="/services/:slug"
          element={<ServiceDetails />}
        />

      </Route>

      <Route element={<AdminRoute />}>

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/services"
          element={<AdminServices />}
        />

        <Route
          path="/admin/careers"
          element={<AdminCareers />}
        />

        <Route
          path="/admin/inventory"
          element={<AdminInventory />}
        />

        <Route
          path="/admin/team"
          element={<AdminTeam />}
        />

        <Route
          path="/admin/ceo"
          element={<AdminCEO />}
        />

        <Route
          path="/admin/contacts"
          element={<AdminContacts />}
        />

      </Route>

    </Routes>
  );
}

export default App;