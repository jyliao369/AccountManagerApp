import React from "react";
import $ from "jquery";
import Axios from "axios";
import { useState, useEffect } from "react";

import AddAccount from "../AddAccount";
import Settings from "../Settings";
import AccountInfoCard from "../AccountInfoCard";

const ProfilePage = ({
  setUserAccounts,
  userAccounts,
  setNewAccount,
  newAcccount,
  setCurrentUser,
  currentUser,
}) => {
  const [userAccountsA, setUserAccountsA] = useState([]);
  const [userAccountsB, setUserAccountsB] = useState([]);
  const [updateUser, setUpdateUser] = useState([]);

  const grabAccounts = () => {
    let test = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(test);
    setUserAccountsA(test.slice(0, test.length / 2));
    setUserAccountsB(test.slice(test.length / 2, test.length));
  };

  const switchPages = (page, id) => {
    if (page === "#settingsForm") {
      console.log(id);
      Axios.post(`http://localhost:3001/getUser`, {
        userID: id,
      }).then((response) => {
        // console.log(response.data[0]);
        setUpdateUser(response.data[0]);
      });
    } else {
      setUpdateUser([]);
    }

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

  const showAccInfo = (accountID) => {
    console.log(accountID);
    $("#profileCard").css({ display: "none" });
    $("#accInfoCard").css({ display: "flex" });
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
            <p>
              {currentUser.firstName} {currentUser.lastName}
            </p>
            <p>{currentUser.username}</p>
            <p>{currentUser.email}</p>
            <div>
              <button onClick={() => grabAccounts()}>Grab Accounts</button>
            </div>
          </div>

          <AddAccount
            setNewAccount={setNewAccount}
            newAcccount={newAcccount}
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
          <Settings setUpdateUser={setUpdateUser} updateUser={updateUser} />
          <AccountInfoCard />
        </div>

        <div className="profileNav">
          <button onClick={() => switchPages("#profileCard")}>Home</button>
          <button onClick={() => switchPages("#settingsForm", currentUser.id)}>
            Settings
          </button>
          <button onClick={() => switchPages("#addAccountForm")}>
            Add Account
          </button>
          <button onClick={() => logOut()}>Log Out</button>
        </div>
      </div>

      <div className="accountSideB">
        {userAccountsB.map((account, index) => (
          <div className="test" key={index}>
            <p onClick={() => showAccInfo(account)}>{account}</p>
            <p onClick={() => updateAccount(account)}>update</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
