import React from "react";

const Dropdown = ({ selected, onChange, options }) => {
  return (
    <select
      id="gender"
      name="gender"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1 block w-full py-2 px-3 text-base custom-input"
      required
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
