import React from "react";

const ProfileCard = () => {
  const grabAccounts = () => {};

  return (
    <>
      <div className="profileCard">
        <div className="profileIcon"></div>
        <p>First Name Last Name</p>
        <p>username</p>
        <p>email</p>
        <div>
          <button>Grab Accounts</button>
        </div>
      </div>
      <div className="accountsCont"></div>
    </>
  );
};

export default ProfileCard;
