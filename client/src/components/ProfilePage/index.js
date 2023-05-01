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
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CheckIcon from "@mui/icons-material/Check";

const ProfilePage = ({
  setUserAccounts,
  userAccounts,
  setNewAccount,
  newAcccount,
  setCurrentUser,
  currentUser,
  setCurrentPage,
  currentPage,
  setCurrentIcon,
  currentIcon,
}) => {
  const [userAccountsA, setUserAccountsA] = useState([]);
  const [userAccountsB, setUserAccountsB] = useState([]);
  const [updateUser, setUpdateUser] = useState([]);
  const [accInformation, setAccInformation] = useState([]);

  const [curUpdatePage, setCurUpdatePage] = useState("#updatePageA");
  const [curAccUpdatePage, seCurAccUpdatePage] = useState("#addAccountPageA");
  const [curAccInfoPage, setCurAccInfoPage] = useState("#accCardInfoA");
  const [identifier, setIdentifier] = useState("");

  const switchPages = (page, id, icon) => {
    console.log(icon);
    if (page === "#settingsForm") {
      Axios.post(`http://localhost:3001/getUser`, {
        userID: id,
      }).then((response) => {
        setUpdateUser(response.data[0]);
      });
    } else {
      setUpdateUser([]);
    }

    setTimeout(() => {
      $("#profileNav")
        .children()
        .css({ animation: "float 0s linear infinite" });
      $(".accInfoBtn").css({
        animation: "float 0s linear infinite",
        opacity: 1,
      });
      setCurrentIcon(icon);
      $(icon).parent().css({ animation: "float 2s linear infinite" });
    });

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
      $("#profileCard").css({ display: "flex" });

      $("#accountSideA").css({ display: "none" });
      $("#accountSideB").css({ display: "none" });
      setUserAccountsA([]);
      setUserAccountsB([]);

      $("#logRegForm").css({ display: "flex", opacity: 0 });
      $("#logRegForm").animate({ opacity: 1 }, function () {});

      $("#grabAccButton").css({ display: "flex", opacity: 1 });
      $("#storeAccButton").css({ display: "none", opacity: 1 });
    });
  };

  const showAccInfo = (accountID, identifier) => {
    setCurrentPage("#accInfoCard");
    setCurAccInfoPage("#accCardInfoA");
    setIdentifier(identifier);

    $("#profileNav").children().css({ animation: "float 0s linear infinite" });
    $(".accInfoBtn").css({
      animation: "float 0s linear infinite",
    });
    $("#accInfoBtnB" + accountID.id).css({
      animation: "float 2s linear infinite",
    });
    $("#accInfoBtnA" + accountID.id).css({
      animation: "float 2s linear infinite",
    });

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

  const storeAccount = () => {
    setTimeout(() => {
      $("#grabAccBtnCont")
        .children()
        .animate({ opacity: 0 }, function () {
          $("#grabAccBtnCont").children().css({ display: "none" });
          $("#grabAccBtnCont").animate({ maxWidth: "2.5rem" }, function () {
            $("#grabAccBtnCont").css({
              borderTop: ".35rem solid #F3D265",
              animation: "spin 0.5s linear infinite",
            });
          });
        });
    });
    setTimeout(() => {
      $("#grabAccBtnCont").css({
        borderTop: "",
        animation: "",
      });
      setTimeout(() => {
        $("#accountSideA, #accountSideB").animate({ opacity: 0 }, function () {
          setUserAccountsA([]);
          setUserAccountsB([]);
          $("#grabAccBtnCont").animate(
            {
              maxWidth: "10rem",
            },
            function () {
              $("#grabAccBtnCont")
                .children()
                .animate({ opacity: 0 }, function () {
                  $("#grabAccBtnCont").children().css({ display: "none" });
                  $("#grabAccBtnCont").animate(
                    { maxWidth: "10rem" },
                    function () {
                      $("#grabAccButton").css({ display: "flex" });
                      setTimeout(() => {
                        $("#grabAccButton").animate({ opacity: 1 });
                      });
                    }
                  );
                });
            }
          );
        });
      }, 500);
    }, 5000);
  };

  const grabAccounts = () => {
    setTimeout(() => {
      $("#grabAccBtnCont")
        .children()
        .animate({ opacity: 0 }, function () {
          $("#grabAccBtnCont").children().css({ display: "none" });
          $("#grabAccBtnCont").animate({ maxWidth: "2.5rem" }, function () {
            $("#grabAccBtnCont").css({
              borderTop: ".35rem solid #F3D265",
              animation: "spin 0.5s linear infinite",
            });
          });
        });
    });
    setTimeout(() => {
      $("#grabAccBtnCont").css({
        borderTop: "",
        animation: "",
      });

      Axios.post(`http://localhost:3001/getAcc`, {
        userID: currentUser.id,
      }).then((response) => {
        console.log(response.data);
        if (response.data.length <= 0) {
        } else {
          setTimeout(() => {
            $("#grabAccBtnCont").css({
              borderTop: "",
              animation: "",
            });
            $("#grabAccSuccess").css({ display: "flex" });
            $("#grabAccSuccess").animate({ opacity: 1 }, function () {});
          });
          setTimeout(() => {
            setUserAccountsA(response.data.slice(0, response.data.length / 2));
            setUserAccountsB(
              response.data.slice(
                response.data.length / 2,
                response.data.length
              )
            );
            $("#accountSideA").css({ display: "flex", opacity: 0 });
            $("#accountSideA").animate({ opacity: 1 });
            $("#accountSideB").css({ display: "flex", opacity: 0 });
            $("#accountSideB").animate({ opacity: 1 });
          }, 3000);
          setTimeout(() => {
            $("#grabAccBtnCont")
              .children()
              .animate({ opacity: 0 }, function () {
                $("#grabAccBtnCont").children().css({ display: "none" });
                $("#grabAccBtnCont").animate(
                  { maxWidth: "10rem" },
                  function () {
                    $("#storeAccButton").css({ display: "flex" });
                    setTimeout(() => {
                      $("#storeAccButton").animate({ opacity: 1 });
                    });
                  }
                );
              });
          }, 3000);
        }
      });
    }, 5000);
  };

  return (
    <>
      <div className="accountSideA" id="accountSideA">
        {userAccountsA.map((account, index) => (
          <div className="accInfoCont" id={"accInfoCont" + account.id}>
            <div
              onClick={() => showAccInfo(account, "#accountSideA")}
              className="accInfoBtn"
              id={"accInfoBtnA" + account.id}
              key={index}
            >
              <p>{account.accName} </p>
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
              <div className="grabAccBtnCont" id="grabAccBtnCont">
                <PriorityHighIcon id="grabAccErr" />
                <CheckIcon id="grabAccSuccess" />
                <button id="grabAccButton" onClick={() => grabAccounts()}>
                  Grab Accounts
                </button>
                <button id="storeAccButton" onClick={() => storeAccount()}>
                  Store Accounts
                </button>
              </div>
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
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
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
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
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

        <div className="profileNav" id="profileNav">
          <button onClick={() => switchPages("#profileCard", 0, "#homeIcon")}>
            <HomeIcon id="homeIcon" />
          </button>
          <button
            onClick={() =>
              switchPages("#settingsForm", currentUser.id, "#settingIcon")
            }
          >
            <SettingsIcon id="settingIcon" />
          </button>
          <button onClick={() => switchPages("#addAccountForm", 0, "#addIcon")}>
            <NoteAddIcon id="addIcon" />
          </button>
          <button onClick={() => logOut()}>
            <LogoutIcon id="logOutIcon" />
          </button>
        </div>
      </div>

      <div className="accountSideB" id="accountSideB">
        {userAccountsB.map((account, index) => (
          <div className="accInfoCont" id={"accInfoCont" + account.id}>
            <div
              onClick={() => showAccInfo(account, "#accountSideB")}
              className="accInfoBtn"
              id={"accInfoBtnB" + account.id}
              key={index}
            >
              <p>{account.accName} </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfilePage;
