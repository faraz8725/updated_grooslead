
/*import "../styles/Team.css";

const Team = () => {
  return (
    <div className="team-page">

      {/* HERO *}
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

      {/* TEAM MEMBERS *}
      <section className="team-members">
        <div className="team-container">

          <div className="team-section-label">
            <span></span>
            MEET THE TEAM
          </div>

          <div className="team-grid">

            {/* CEO *}
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

export default Team; */




import { useEffect, useState } from "react";

import API_URL from "../config/api";

import "../styles/Team.css";

const Team = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/team`
        );

        const data = await response.json();

        if (response.ok) {
          setMembers(data);
        } else {
          console.error(
            "Failed to fetch team:",
            data.message
          );
        }
      } catch (error) {
        console.error(
          "Error fetching team:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return (
    <div className="team-page">

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
            Meet the people behind Grosslead
            Media who bring together creativity,
            technology, strategy and ambition
            to create meaningful digital
            experiences.
          </p>

        </div>
      </section>

      <section className="team-members">
        <div className="team-container">

          <div className="team-section-label">
            <span></span>
            MEET THE TEAM
          </div>

          {loading ? (
            <p>Loading team...</p>
          ) : members.length === 0 ? (
            <p>
              Our team information will appear
              here soon.
            </p>
          ) : (
            <div className="team-grid">

              {members.map((member, index) => (
                <div
                  className="team-card"
                  key={member._id}
                >
                  <div className="team-image">
                    <img
                      src={member.image}
                      alt={member.name}
                    />
                  </div>

                  <div className="team-info">
                    <div>
                      <h2>
                        {member.name}
                      </h2>

                      <p>
                        {member.designation}
                      </p>
                    </div>

                    <span>
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </div>
                </div>
              ))}

            </div>
          )}

        </div>
      </section>

    </div>
  );
};

export default Team;
