import React from "react";

function Error() {
  return (
    <div className="errorSection">
      <img src={require("../error.png")} alt="img" />
      <h1 className="errorText">Error....</h1>
    </div>
  );
}

export default Error;
