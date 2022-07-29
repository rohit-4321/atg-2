import React from "react";
export const Header = ({ heading }) => {
  return (
    <div className="header d-flex  align-items-center justify-content-center">
      <span>{heading}</span>
    </div>
  );
};
