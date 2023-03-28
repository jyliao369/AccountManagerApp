import React from "react";
import $ from "jquery";
import { useState, useEffect } from "react";

import AddAccount from "../AddAccount";
import Settings from "../Settings";

const ProfilePage = ({ setUserAccounts, userAccounts }) => {
  const [userAccountsA, setUserAccountsA] = useState([]);
  const [userAccountsB, setUserAccountsB] = useState([]);

  const grabAccounts = () => {
    let test = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(test);
    setUserAccountsA(test.slice(0, test.length / 2));
    setUserAccountsB(test.slice(test.length / 2, test.length));
  };

  const switchPages = (page) => {
    console.log("hello");
    console.log(page);

    $("#profileCardCont").children().css({ display: "none" });
    $(page).css({ display: "flex" });

    // $("#addAccountPageA").css({ display: "flex" });
    // $("#addAccountPageB").css({ display: "none" });

    // $("#updatePageA").css({ display: "flex" });
    // $(`#updatePageB`).css({ display: "none" });

    // $("#appMainCont").children().css({ display: "none" });
    // $(page).css({ display: "flex" });
  };

  const logOut = () => {
    $("#appMainCont").css({ display: "none" });
    $("#navigationBar").css({ display: "none" });
    $("#logRegForm").css({ display: "flex" });
    setUserAccounts([]);
  };

  const test = (account) => {
    console.log(account);
  };

  return (
    <div className="profileCardPage" id="profileCardPage">
      <div className="accountSideA">
        {userAccountsA.map((account, index) => (
          <div onClick={() => test()} className="test" key={index}>
            {account}
          </div>
        ))}
      </div>

      <div className="mainProfilePage">
        <div className="profileCardCont" id="profileCardCont">
          <div className="profileCard" id="profileCard">
            <div className="profileIcon"></div>
            <p>First Name Last Name</p>
            <p>username</p>
            <p>email</p>
            <div>
              <button onClick={() => grabAccounts()}>Grab Accounts</button>
            </div>
          </div>

          <AddAccount />
          <Settings />
        </div>

        <div className="profileNav">
          <button onClick={() => switchPages("#profileCard")}>Home</button>
          <button onClick={() => switchPages("#settingsForm")}>Settings</button>
          <button onClick={() => switchPages("#addAccountForm")}>
            Add Account
          </button>
          <button onClick={() => logOut()}>Log Out</button>
        </div>
      </div>

      <div className="accountSideB">
        {userAccountsB.map((account, index) => (
          <div onClick={() => test(account)} className="test" key={index}>
            {account}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
