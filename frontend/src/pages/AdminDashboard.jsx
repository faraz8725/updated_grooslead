import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

import "../styles/Admin.css";

const AdminDashboard = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-main">
        <AdminTopbar />

        <section className="admin-dashboard">
          <div className="admin-welcome">
            <div>
              <span className="admin-section-label">
                <i></i>
                OVERVIEW
              </span>

              <h2>
                Manage your
                <br />
                <span>digital presence.</span>
              </h2>
            </div>

            <p>
              Manage services, career opportunities and website content
              from one place.
            </p>
          </div>

          <div className="admin-stats">
            <div className="admin-stat-card">
              <span>01</span>
              <small>SERVICES</small>
              <strong>—</strong>
              <p>Manage website services</p>
            </div>

            <div className="admin-stat-card">
              <span>02</span>
              <small>CAREERS</small>
              <strong>—</strong>
              <p>Manage career openings</p>
            </div>

            <div className="admin-stat-card">
              <span>03</span>
              <small>WEBSITE</small>
              <strong>↗</strong>
              <p>View public website</p>
            </div>
          </div>

          <div className="admin-quick-section">
            <span className="admin-section-label">
              <i></i>
              QUICK ACTIONS
            </span>

            <div className="admin-quick-grid">
              <a href="/admin/services" className="admin-quick-card">
                <div>
                  <small>01</small>
                  <h3>Manage Services</h3>
                  <p>Add, edit or remove services.</p>
                </div>

                <span>↗</span>
              </a>

              <a href="/admin/careers" className="admin-quick-card">
                <div>
                  <small>02</small>
                  <h3>Manage Careers</h3>
                  <p>Add and manage job openings.</p>
                </div>

                <span>↗</span>
              </a>

              <a href="/" className="admin-quick-card">
                <div>
                  <small>03</small>
                  <h3>View Website</h3>
                  <p>Open the public Grosslead website.</p>
                </div>

                <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;