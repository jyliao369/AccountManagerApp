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

const ProfilePage = ({
  setUserAccounts,
  userAccounts,
  setNewAccount,
  newAcccount,
  setCurrentUser,
  currentUser,
  setCurrentPage,
  currentPage,
}) => {
  const [userAccountsA, setUserAccountsA] = useState([]);
  const [userAccountsB, setUserAccountsB] = useState([]);
  const [updateUser, setUpdateUser] = useState([]);
  const [accInformation, setAccInformation] = useState([]);

  const [curUpdatePage, setCurUpdatePage] = useState("#updatePageA");
  const [curAccUpdatePage, seCurAccUpdatePage] = useState("#addAccountPageA");
  const [curAccInfoPage, setCurAccInfoPage] = useState("#accCardInfoA");
  const [identifier, setIdentifier] = useState("");

  const grabAccounts = () => {
    Axios.post(`http://localhost:3001/getAcc`, {
      userID: currentUser.id,
    }).then((response) => {
      console.log(response.data);
      if (response.data.length <= 0) {
      } else {
        $("#accountSideA").css({ display: "flex", opacity: 0 });
        $("#accountSideA").animate({ opacity: 1 });
        $("#accountSideB").css({ display: "flex", opacity: 0 });
        $("#accountSideB").animate({ opacity: 1 });
        setUserAccountsA(response.data.slice(0, response.data.length / 2));
        setUserAccountsB(
          response.data.slice(response.data.length / 2, response.data.length)
        );
      }
    });
  };

  const switchPages = (page, id) => {
    if (page === "#settingsForm") {
      Axios.post(`http://localhost:3001/getUser`, {
        userID: id,
      }).then((response) => {
        setUpdateUser(response.data[0]);
      });
    } else {
      setUpdateUser([]);
    }

    if (currentPage !== page) {
      $(currentPage).animate({ opacity: 0 }, function () {
        $(currentPage).css({ display: "none", opacity: 1 });
        setTimeout(() => {
          $(page).css({ display: "flex", opacity: 0 });
          $(page).animate({ opacity: 1 }, function () {});
        }, 250);
        setCurrentPage(page);

        setCurUpdatePage("#updatePageA");
        seCurAccUpdatePage("#addAccountPageA");

        $("#accInfoCard").css({ display: "none" });
        $("#addAccountPageA").css({ display: "flex" });
        $("#addAccountPageB").css({ display: "none" });
        $("#updatePageA").css({ display: "flex" });
        $(`#updatePageB`).css({ display: "none" });
        $("#addAccTwo").prop("checked", false);
        $("#addAccSec").prop("checked", false);
        $("#deleteAccButton").css({ display: "flex", opacity: 1 });
        $("#deleteAccConfirm").css({ display: "none", opacity: 1 });

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
      });
    }
  };

  const logOut = () => {
    $("#appMainCont").animate({ opacity: 0 }, function () {
      $("#appMainCont").css({ display: "none" });
      $("#profileCardCont").children().css({ display: "none" });
      $("#profileCard").css({ display: "flex" });

      $("#accountSideA").css({ display: "none" });
      $("#accountSideB").css({ display: "none" });
      setUserAccountsA([]);
      setUserAccountsB([]);

      $("#logRegForm").css({ display: "flex", opacity: 0 });
      $("#logRegForm").animate({ opacity: 1 }, function () {});
    });
  };

  const showAccInfo = (accountID, identifier) => {
    setCurrentPage("#accInfoCard");
    setCurAccInfoPage("#accCardInfoA");
    setIdentifier(identifier);
    $(currentPage).animate({ opacity: 0 }, function () {
      Axios.post(`http://localhost:3001/getSpecAcc`, {
        accountID: accountID.id,
      }).then((response) => {
        setAccInformation(response.data[0]);
      });
      $("#deleteAccButton").css({ display: "flex", opacity: 1 });
      $("#deleteAccConfirm").css({ display: "none", opacity: 1 });
      $("#accCardInfoA").css({ display: "flex" });
      $("#accCardInfoB").css({ display: "none" });
      $(currentPage).css({ display: "none", opacity: 1 });
      setTimeout(() => {
        $("#accInfoCard").css({ display: "flex", opacity: "0" });
        $("#accInfoCard").animate({ opacity: 1 });
      });
    });
  };

  return (
    <>
      <div className="accountSideA" id="accountSideA">
        {userAccountsA.map((account, index) => (
          <div
            onClick={() => showAccInfo(account, "#accountSideA")}
            className="accInfoBtn"
            id={"accInfoBtnA" + account.id}
            key={index}
          >
            <p>{account.accName} </p>
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
            seCurAccUpdatePage={seCurAccUpdatePage}
            curAccUpdatePage={curAccUpdatePage}
          />
          <Settings
            setUpdateUser={setUpdateUser}
            updateUser={updateUser}
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            setUserAccountsA={setUserAccountsA}
            setUserAccountsB={setUserAccountsB}
            curUpdatePage={curUpdatePage}
            setCurUpdatePage={setCurUpdatePage}
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
            setCurAccInfoPage={setCurAccInfoPage}
            curAccInfoPage={curAccInfoPage}
            identifier={identifier}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
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

      <div className="accountSideB" id="accountSideB">
        {userAccountsB.map((account, index) => (
          <div
            onClick={() => showAccInfo(account, "#accountSideB")}
            className="accInfoBtn"
            id={"accInfoBtnB" + account.id}
            key={index}
          >
            <p>{account.accName} </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfilePage;
