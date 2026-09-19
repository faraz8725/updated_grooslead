import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

import "../styles/Admin.css";

const AdminServices = () => {
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
                SERVICES
              </span>

              <h2>
                Manage your
                <br />
                <span>services.</span>
              </h2>
            </div>

            <button className="admin-primary-button">
              + Add Service
            </button>
          </div>

          <div className="admin-empty-state">
            <span>+</span>

            <div>
              <h3>Services will appear here</h3>
              <p>
                Once connected with the backend, services added from
                this panel will be displayed here.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminServices;