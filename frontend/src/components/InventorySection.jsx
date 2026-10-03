
import { useEffect, useState } from "react";
import "../styles/InventorySection.css";

const inventories = [
  {
    id: 1,
    name: "Grosslead Media",
    category: "Digital Experience",
    image: "/inventory/grosslead.png",
    url: "https://grosslead.com/",
  },
  {
    id: 2,
    name: "Insurance",
    category: "Choose your insurance policy",
    image: "/inventory/insurance.png",
    url: "https://insurance-website-sooty.vercel.app/",
  },
  {
    id: 3,
    name: "Fleets Info",
    category: "Business Website",
    image: "/inventory/fleetsInfo.png",
    url: "https://fleetsinfo.com",
  },
  {
    id: 4,
    name: "AutoCafe",
    category: "Buy your dream car today.",
    image: "/inventory/autocafe.png",
    url: "https://www.autocafe.in/",
  },
  {
    id: 5,
    name: "GenzGrow",
    category: "Education website",
    image: "/inventory/digital-solutions.jpg",
    url: "#",
  },
];

const InventorySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => {
        if (current === inventories.length - 1) {
          return 0;
        }

        return current + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeItem = inventories[activeIndex];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="inventory-section">
      <div className="inventory-container">

        {/* HEADER */}
        <div className="inventory-header">

          <div className="inventory-label">
            <span></span>
            OUR INVENTORY
          </div>

          <div className="inventory-heading-row">
            <h2>
              Websites we've
              <br />
              <span>built.</span>
            </h2>

            <p>
              Explore some of our digital experiences, websites and products
              created for different ideas, businesses and brands.
            </p>
          </div>

        </div>

        {/* SHOWCASE */}
        <div
          className="inventory-showcase"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* IMAGE */}
          <a
            href={activeItem.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inventory-image-link"
          >
            <div className="inventory-image-box">

              <img
                key={activeItem.id}
                src={activeItem.image}
                alt={activeItem.name}
                className="inventory-main-image"
              />

              <div className="inventory-image-overlay">
                <span>View Website ↗</span>
              </div>

            </div>
          </a>

          {/* INFO */}
          <div className="inventory-info">

            <div className="inventory-info-left">

              <div className="inventory-project-number">
                {String(activeItem.id).padStart(2, "0")}
                <span>
                  / {String(inventories.length).padStart(2, "0")}
                </span>
              </div>

              <div className="inventory-project-category">
                {activeItem.category}
              </div>

              <h3>{activeItem.name}</h3>

            </div>

            <a
              href={activeItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inventory-view-button"
            >
              <span>View Website</span>
              <strong>↗</strong>
            </a>

          </div>

          {/* DOTS */}
          <div className="inventory-dots">

            {inventories.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={
                  index === activeIndex
                    ? "inventory-dot active"
                    : "inventory-dot"
                }
                onClick={() => handleDotClick(index)}
                aria-label={`Show ${item.name}`}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default InventorySection;


