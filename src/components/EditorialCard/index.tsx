import React from "react";

const EditorialCard = ({
  imageSrc,
  headline,
  subheadline,
  authorAvatarSrc,
  authorName,
  direction = "vertical"
}) => {

  const directionClasses = {
    container: {
      vertical: "flex-col",
      horizontal: "flex-row",
    },
    content: {
      vertical: "p-200 pb-250 gap-200",
      horizontal: "p-500 gap-500",
    },
    headline: {
      vertical: "text-comp-600",
      horizontal: "text-comp-semi-900",
    }
  }

  return (
    <div className={`flex rounded-500 border-neutral-2 border overflow-hidden ${directionClasses.container[direction]}`}>
      <div className="grow">
        <div className="overflow-hidden h-full relative" style={{ paddingTop: "56.25%" }}>
          <img src={imageSrc} alt="" className="block w-full h-full object-contain absolute top-0"/>
        </div>
      </div>
      <div className={`flex flex-col max-w-[400px] w-full ${directionClasses.content[direction]}`}>
        <div className="flex flex-col gap-100">
          <h4 className="uppercase text-comp-semi-400 text-content-secondary">Category</h4>
          <h3 className={`${directionClasses.headline[direction]}`}>{headline}</h3>
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
