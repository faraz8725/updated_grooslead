import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import ServicesSection from "../components/ServicesSection";
import WhyGrosslead from "../components/WhyGrosslead";
import OurProcess from "../components/OurProcess";
import CareerCTA from "../components/CareerCTA";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />

      {/* Who We Are */}
      <WhoWeAre />

      {/* Services */}
      <ServicesSection />

      {/* Why Grosslead */}
      <WhyGrosslead />

      {/* Our Process */}
      <OurProcess />

      {/* Career CTA */}
      <CareerCTA />
    </div>
  );
};

export default Home;