import React from "react";

const EditorialCard = ({
  imageSrc,
  headline,
  subheadline,
  authorAvatarSrc,
  authorName
}) => {

  return (
    <div className="flex flex-col rounded-500 border-neutral-2 border overflow-hidden">
      <div className="overflow-hidden h-0 relative" style={{ paddingTop: "56.25%" }}>
        <img src={imageSrc} alt="" className="block w-full h-full object-contain absolute top-0"/>
      </div>
      <div className="p-200 pb-250 flex flex-col gap-200">
        <div className="flex flex-col gap-100">
          <h4 className="uppercase text-comp-semi-400 text-content-secondary">Category</h4>
          <h3 className="text-comp-600">{headline}</h3>
          <p className="text-comp-600 text-content-secondary">{subheadline}</p>
        </div>
        <div className="flex gap-100 items-center text-comp-500 text-content-secondary">
          <img className="block rounded-full overflow-hidden w-240 h-250 object-contain" src={authorAvatarSrc} alt="" />
          <h5>{authorName}</h5>
        </div>
      </div>
    </div>
  );
};

export default EditorialCard;
