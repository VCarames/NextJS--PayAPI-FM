import React from "react";

function Value({ heading, text }) {
  return (
    <div className="values-section__value">
      <h3 className="values-section__value-heading secondary__subheading">
        {heading}
      </h3>
      <p className="values-section__value-text primary__text">{text}</p>
    </div>
  );
}

export default Value;
