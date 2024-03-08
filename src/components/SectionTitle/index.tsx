import React from "react";

const SectionTitle = ({
  headline,
  subheadline
}) => {

  return (
    <div>
      <h2>{headline}</h2>
      <p>{subheadline}</p>
    </div>
  );
};

export default SectionTitle;
