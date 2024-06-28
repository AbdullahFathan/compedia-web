import React from "react";

const RequiredText = ({ title, isRequired = true }) => {
  return (
    <h5 className="font-medium text-base my-2">
      <span className="text-textBlack">{title}</span>
      {isRequired ? (
        <span className="text-red">*</span>
      ) : (
        <span className="text-red">(Optional)</span>
      )}
    </h5>
  );
};

export default RequiredText;
