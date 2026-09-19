import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

import "../styles/Admin.css";

const AdminCareers = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-main">
        <AdminTopbar />

        <section className="admin-management">
          <div className="admin-management-header">
            <div>
              <span className="admin-section-label">
                <i></i>
                CAREERS
              </span>

              <h2>
                Manage
                <br />
                <span>opportunities.</span>
              </h2>
            </div>

            <button className="admin-primary-button">
              + Add Career
            </button>
          </div>

          <div className="admin-empty-state">
            <span>+</span>

            <div>
              <h3>Career openings will appear here</h3>
              <p>
                Once connected with the backend, career openings added
                from this panel will be displayed here.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminCareers;