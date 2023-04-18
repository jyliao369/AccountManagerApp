import React from "react";
import $ from "jquery";
import Axios from "axios";
import { useState, useEffect } from "react";

import AddAccount from "../AddAccount";
import Settings from "../Settings";
import AccountInfoCard from "../AccountInfoCard";

import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import DeleteIcon from "@mui/icons-material/Delete";

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
  const [accInformation, setAccInformation] = useState([]);

  const grabAccounts = () => {
    Axios.post(`http://localhost:3001/getAcc`, {
      userID: currentUser.id,
    }).then((response) => {
      console.log(response);
      setUserAccountsA(response.data.slice(0, response.data.length / 2));
      setUserAccountsB(
        response.data.slice(response.data.length / 2, response.data.length)
      );
    });
  };

  const switchPages = (page, id) => {
    if (page === "#settingsForm") {
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

  const showAccInfo = (accountID) => {
    $("#profileCardCont").children().css({ display: "none" });
    $("#accInfoCard").css({ display: "flex" });
    $("#accCardInfoA").css({ display: "flex" });
    $("#accCardInfoB").css({ display: "none" });

    Axios.post(`http://localhost:3001/getSpecAcc`, {
      accountID: accountID.id,
    }).then((response) => {
      setAccInformation(response.data[0]);
    });
  };

  const deleteAcc = (accID, identifier) => {
    console.log(identifier);

    if (identifier === "accountSideB") {
      console.log(userAccountsB);
      setUserAccountsB(userAccountsB.filter((account) => account.id !== accID));
    } else if (identifier === "accountSideA") {
      console.log(userAccountsA);
      setUserAccountsA(userAccountsA.filter((account) => account.id !== accID));
    }

    // let testArray = userAccountsB.filter((account) => account.id !== accID);
    // console.log(testArray);
    // Axios.post(`http://localhost:3001/deleteAcc`, {
    //   accID: accID,
    //   userID: currentUser.id,
    // }).then((response) => {
    //   // console.log(response.data.message === "deleted");
    //   if (response.data.message === "deleted") {
    //     $("#accInfoCard").css({ display: "none" });
    //     $("#profileCard").css({ display: "flex" });
    //     $("#accCardInfoA").css({ display: "flex" });
    //     $("#accCardInfoB").css({ display: "none" });
    //     setUserAccountsA(
    //       response.data.result.slice(0, response.data.result.length / 2)
    //     );
    //     setUserAccountsB(
    //       response.data.result.slice(
    //         response.data.result.length / 2,
    //         response.data.result.length
    //       )
    //     );
    //   }
    // });
  };

  return (
    <>
      <div className="accountSideA">
        {userAccountsA.map((account, index) => (
          <div className="accInfoBtn" key={index}>
            <div onClick={() => showAccInfo(account)} className="accInfoBtnA">
              <p>{account.accName} </p>
            </div>
            <div className="accInfoBtnB">
              <DeleteIcon
                onClick={() => deleteAcc(account.id, "accountSideA")}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mainProfilePage">
        <div className="profileCardCont" id="profileCardCont">
          <div className="profileCard" id="profileCard">
            <div className="profileIconCont">
              <div className="profileIcon"></div>
            </div>
            <p>
              {currentUser.firstName} {currentUser.lastName}
            </p>
            <p>{currentUser.username}</p>
            <p>{currentUser.email}</p>
            <div className="grabAccBtn">
              <button onClick={() => grabAccounts()}>Grab Accounts</button>
            </div>
          </div>

          <AddAccount
            setNewAccount={setNewAccount}
            newAcccount={newAcccount}
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            setUserAccountsA={setUserAccountsA}
            userAccountsA={userAccountsA}
            setUserAccountsB={setUserAccountsB}
            userAccountsB={userAccountsB}
          />
          <Settings
            setUpdateUser={setUpdateUser}
            updateUser={updateUser}
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            setUserAccountsA={setUserAccountsA}
            setUserAccountsB={setUserAccountsB}
          />
          <AccountInfoCard
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            setAccInformation={setAccInformation}
            accInformation={accInformation}
            setUserAccountsA={setUserAccountsA}
            userAccountsA={userAccountsA}
            setUserAccountsB={setUserAccountsB}
            userAccountsB={userAccountsB}
          />
        </div>

        <div className="profileNav">
          <button onClick={() => switchPages("#profileCard")}>
            <HomeIcon id="homeIcon" />
          </button>
          <button onClick={() => switchPages("#settingsForm", currentUser.id)}>
            <SettingsIcon id="settingIcon" />
          </button>
          <button onClick={() => switchPages("#addAccountForm")}>
            <NoteAddIcon id="addIcon" />
          </button>
          <button onClick={() => logOut()}>
            <LogoutIcon id="logOutIcon" />
          </button>
        </div>
      </div>

      <div className="accountSideB">
        {userAccountsB.map((account, index) => (
          <div className="accInfoBtn" key={index}>
            <div onClick={() => showAccInfo(account)} className="accInfoBtnA">
              <p>{account.accName} </p>
            </div>
            <div className="accInfoBtnB">
              <DeleteIcon
                onClick={() => deleteAcc(account.id, "accountSideB")}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfilePage;
