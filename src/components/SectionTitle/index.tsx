import React from "react";

const SectionTitle = ({
  headline,
  subheadline
}) => {

  return (
    <div className="text-center">
      <h2 className="text-head-1000">{headline}</h2>
      <p className="text-body-700 text-content-secondary">{subheadline}</p>
    </div>
  );
};

export default SectionTitle;
