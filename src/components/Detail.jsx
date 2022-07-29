import React from "react";

function Detail({ data, selected }) {
  let user = data[selected];
  return (
    <>
      <img src={require("../avatar.png")} className="detailProfile" alt="img" />
      <span className="userName">{user.profile.username}</span>
      <Description description={user.Bio} />
      <TitleText
        title={"Full Name"}
        value={`${user.profile.firstName} ${user.profile.lastName}`}
      />
      <TitleText title={"Job Title"} value={user.jobTitle} />
      <TitleText title={"Email"} value={user.profile.email} />
    </>
  );
}

const Description = ({ description }) => {
  return (
    <div className="discription">
      <p>{description}</p>
    </div>
  );
};

const TitleText = ({ title, value }) => {
  return (
    <div className=" titleSection d-flex flex-column ">
      <span>{title}</span>
      <div className="titleBody">
        <span>{value}</span>
      </div>
    </div>
  );
};

export default Detail;
