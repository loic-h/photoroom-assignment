import React from "react";

const EditorialCard = ({
  imageSrc,
  headline,
  subheadline,
  authorAvatarSrc,
  authorName
}) => {

  return (
    <div className="flex flex-col">
      <div>
        <img src={imageSrc} alt="" />
      </div>
      <div>
        <div>
          <h4>Category</h4>
          <h3>{headline}</h3>
          <p>{subheadline}</p>
        </div>
        <div>
          <img src={authorAvatarSrc} alt="" />
          <h5>{authorName}</h5>
        </div>
      </div>
    </div>
  );
};

export default EditorialCard;
