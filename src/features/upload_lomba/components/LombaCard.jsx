import React from "react";

const LombaCard = ({ title, buttonTitle, onTap }) => {
  return (
    <div className="flex justify-between items-center py-2 px-4 border border-border rounded-lg">
      <p className="text-base text-textBlack ">{title}</p>
      <button
        type="button"
        className="btn btn-ghost text-primary "
        onClick={onTap}
      >
        {buttonTitle}
      </button>
    </div>
  );
};

export default LombaCard;
