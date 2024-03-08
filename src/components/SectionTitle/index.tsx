import React from "react";

const SectionTitle = ({
  headline,
  subheadline
}) => {

  return (
    <div className="text-center">
      <h2 className="text-strong-2000">{headline}</h2>
      <p className="text-700">{subheadline}</p>
    </div>
  );
};

export default SectionTitle;
