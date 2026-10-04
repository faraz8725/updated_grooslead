
import "../styles/Team.css";

const Team = () => {
  return (
    <div className="team-page">

      {/* HERO */}
      <section className="team-hero">
        <div className="team-container">

          <div className="team-label">
            <span></span>
            OUR TEAM
          </div>

          <h1>
            The people
            <br />
            <span>behind the work.</span>
          </h1>

          <p>
            Meet the people behind Grosslead Media who bring together
            creativity, technology, strategy and ambition to create meaningful
            digital experiences.
          </p>

        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section className="team-members">
        <div className="team-container">

          <div className="team-section-label">
            <span></span>
            MEET THE TEAM
          </div>

          <div className="team-grid">

            {/* CEO */}
            <div className="team-card">

              <div className="team-image">
                <img
                  src="/team/ceo.jpg"
                  alt="CEO of Grosslead Media"
                />
              </div>

              <div className="team-info">

                <div>
                  <h2>CEO NAME</h2>
                  <p>CEO & Founder</p>
                </div>

                <span>01</span>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Team;



