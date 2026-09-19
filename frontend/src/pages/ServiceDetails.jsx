import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { slug } = useParams();

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "160px 30px 80px",
      }}
    >
      <h1>Service</h1>

      <p style={{ marginTop: "15px", color: "#ffc107" }}>
        {slug}
      </p>
    </section>
  );
};

export default ServiceDetails;