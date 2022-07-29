import React, { useState } from "react";
import { useFetch } from "./customHook/useFetch";
import Detail from "./Detail";
import Error from "./Error";
import { Header } from "./Header";
import Loading from "./Loading";
import UserItem from "./UserItem";

const URL = "https://602e7c2c4410730017c50b9d.mockapi.io/users";

function MainContainer() {
  const [loading, data, error] = useFetch(URL);

  return (
    <div className="mainContainer d-flex  align-items-stretch">
      <ShowData loading={loading} data={data} error={error} />
    </div>
  );
}

const ShowData = ({ loading, data, error }) => {
  const [selected, setSelectedValue] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(0);

  if (loading == "true") {
    return <Loading />;
  } else if (data) {
    return (
      <>
        <div className="userList d-flex align-items-center justify-content-center">
          <div className="useListContainer">
            <Header heading="USER LIST" />
            <div className="scroller">
              {data.map((data, index) => (
                <UserItem
                  img={data.avatar}
                  index={index}
                  clickedIndex={clickedIndex}
                  setClickedIndex={setClickedIndex}
                  onClick={setSelectedValue}
                  name={`${data.profile.firstName} ${data.profile.lastName}`}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="userDetail d-flex align-items-center justify-content-center">
          <div className="useDetailContainer d-flex flex-column align-items-center ">
            <Header heading="USER DETAILS" />
            <Detail data={data} selected={selected} />
          </div>
        </div>
      </>
    );
  } else {
    return <Error />;
  }
};
export default MainContainer;
