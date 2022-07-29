import React from "react";

function UserItem({ name, onClick, index, clickedIndex, setClickedIndex }) {
  return (
    <div
      className={`userItem d-flex  align-items-center justify-content-center ${
        index === clickedIndex ? "darkShade" : ""
      }`}
      onClick={() => {
        onClick(index);
        setClickedIndex(index);
      }}
    >
      <img src={require("../avatar.png")} alt="img" />
      <p>{name}</p>
    </div>
  );
}

export default UserItem;
