import React from "react";
import $ from "jquery";
import { useState, useEffect } from "react";

import AddAccount from "../AddAccount";
import Settings from "../Settings";

const ProfilePage = ({
  setUserAccounts,
  userAccounts,
  setNewAccount,
  newAcccount,
}) => {
  const [userAccountsA, setUserAccountsA] = useState([]);
  const [userAccountsB, setUserAccountsB] = useState([]);

  const grabAccounts = () => {
    let test = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(test);
    setUserAccountsA(test.slice(0, test.length / 2));
    setUserAccountsB(test.slice(test.length / 2, test.length));
  };

  const switchPages = (page) => {
    $("#addAccountPageA").css({ display: "flex" });
    $("#addAccountPageB").css({ display: "none" });

    $("#updatePageA").css({ display: "flex" });
    $(`#updatePageB`).css({ display: "none" });

    $("#addAccTwo").prop("checked", false);
    $("#addAccSec").prop("checked", false);

    setNewAccount({
      accName: "",
      accUsername: "",
      accPassword: "",
      accEmail: "",
      accPhoneNum: "",
      accTwoStep: false,
      accSecQues: false,
      accSecOne: "N/A",
      accAnsOne: "N/A",
      accSecTwo: "N/A",
      accAnsTwo: "N/A",
      accSecThree: "N/A",
      accAnsThree: "N/A",
    });

    $("#profileCardCont").children().css({ display: "none" });
    $(page).css({ display: "flex" });
  };

  const logOut = () => {
    $("#appMainCont").css({ display: "none" });
    $("#profileCardCont").children().css({ display: "none" });
    $("#profileCard").css({ display: "flex" });

    $("#logRegForm").css({ display: "flex" });
    setUserAccountsA([]);
    setUserAccountsB([]);
  };

  const updateAccount = (accountID) => {
    console.log(accountID);
  };

  return (
    <div className="profileCardPage" id="profileCardPage">
      <div className="accountSideA">
        {userAccountsA.map((account, index) => (
          <div className="test" key={index}>
            <p>{account}</p>
            <p onClick={() => updateAccount(account)}>update</p>
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

          <AddAccount setNewAccount={setNewAccount} newAcccount={newAcccount} />
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
          <div className="test" key={index}>
            <p>{account}</p>
            <p onClick={() => updateAccount(account)}>update</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
