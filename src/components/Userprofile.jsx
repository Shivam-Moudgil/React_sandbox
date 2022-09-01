import React from "react";

const UserProfile = (props) => {
  const { first_name, last_name, avatar } = props;
  return (
    <div id="here">
      <div className="ok">
        <h1>{first_name}</h1>
        <h3>{last_name}</h3>
        <img src={avatar} />
        <button
          onClick={() => {
            alert(`Hii ${first_name}`);
          }}
        >
          Say hii
        </button>
      </div>
    </div>
  );
};
export default UserProfile;
