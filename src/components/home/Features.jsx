import Image from "next/image";
import featuresData from "/public/data/features";

function Features() {
  return (
    <section className="features-section">
      <div className="features-section__content">
        <h2 className="features-section__heading visually-hidden">Features</h2>
        <ul className="features-section__list" role="list">
          {featuresData.features.map((feature) => (
            <li
              className="features-section__list-item"
              key={feature.id}
              role="listitem"
            >
              <Image
                className="features-section__list-icon"
                src={feature.icon}
                alt=""
                width={106}
                height={106}
              />
              <div className="features-section__list-container">
                <h3 className="features-section__list-heading primary__subheading">
                  {feature.heading}
                </h3>
                <p className="features-section__list-text primary__text">
                  {feature.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;
