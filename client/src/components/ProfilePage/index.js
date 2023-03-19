import React from "react";
import { useState, useEffect } from "react";

const ProfilePage = ({ setUserAccounts, userAccounts }) => {
  // const [userAccounts, setUserAccounts] = useState([]);

  const grabAccounts = () => {
    let test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log("grabbing accounts");
    setUserAccounts(test);
  };

  return (
    <div className="profileCardPage">
      <div className="profileCardCont">
        <div className="profileCard">
          <div className="profileIcon"></div>
          <p>First Name Last Name</p>
          <p>username</p>
          <p>email</p>
          <div>
            <button onClick={() => grabAccounts()}>Grab Accounts</button>
          </div>
        </div>
      </div>

      <div className="accountsCont">
        {userAccounts.map((account) => (
          <div className="accounts">{account}</div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
