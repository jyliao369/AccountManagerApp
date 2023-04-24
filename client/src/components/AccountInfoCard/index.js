import React from "react";
import $ from "jquery";
import Axios from "axios";
import { useState } from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const AccountInfoCard = ({
  setCurrentUser,
  currentUser,
  setAccInformation,
  accInformation,
  setUserAccountsA,
  userAccountsA,
  setUserAccountsB,
  userAccountsB,
  setCurAccInfoPage,
  curAccInfoPage,
  identifier,
  setCurrentPage,
  currentPage,
}) => {
  const changeAddAccPage = (accPage) => {
    if (accPage !== curAccInfoPage) {
      if (accPage === "#accCardInfoA") {
        setCurAccInfoPage("#accCardInfoA");
        $("#accCardInfoB").animate({ opacity: 0 }, function () {
          $("#accCardInfoB").css({ display: "none", opacity: 1 });
          setTimeout(() => {
            $(accPage).css({ display: "flex", opacity: 0 });
            $(accPage).animate({ opacity: 1 });
          });
        });
      } else if (accPage === "#accCardInfoB") {
        setCurAccInfoPage("#accCardInfoB");
        $("#accCardInfoA").animate({ opacity: 0 }, function () {
          $("#accCardInfoA").css({ display: "none", opacity: 1 });
          setTimeout(() => {
            $(accPage).css({ display: "flex", opacity: 0 });
            $(accPage).animate({ opacity: 1 });
            $("#deleteAccButton").css({ display: "flex", opacity: 1 });
            $("#deleteAccConfirm").css({ display: "none", opacity: 1 });
          });
        });
      }
    }
  };

  const accSecFactors = (secFactor) => {
    if (secFactor === "#accTwoStep") {
      if (!$(secFactor).is(":checked")) {
        setAccInformation({ ...accInformation, accTwoStep: false });
      } else {
        setAccInformation({ ...accInformation, accTwoStep: true });
      }
    } else if (secFactor === "#accSecQues") {
      if (!$(secFactor).is(":checked")) {
        setAccInformation({ ...accInformation, accSecQues: false });
      } else {
        setAccInformation({ ...accInformation, accSecQues: true });
      }
    }
  };

  const updateAcc = () => {
    Axios.post(`http://localhost:3001/updateAcc`, {
      updateAcc: accInformation,
      userID: currentUser.id,
    }).then((response) => {
      // console.log(response.data.result.length);
      if (response.data.update === true) {
        $("#accInfoCard").css({ display: "none" });
        $("#profileCard").css({ display: "flex" });
        $("#accCardInfoA").css({ display: "flex" });
        $("#accCardInfoB").css({ display: "none" });

        setUserAccountsA(
          response.data.result.slice(0, response.data.result.length / 2)
        );
        setUserAccountsB(
          response.data.result.slice(
            response.data.result.length / 2,
            response.data.result.length
          )
        );
      }
    });
  };

  const deleteConfim = () => {
    $("#deleteAccBtn")
      .children()
      .animate({ opacity: 0 }, function () {
        $("#deleteAccBtn").children().css({ display: "none", opacity: 1 });
        setTimeout(() => {
          $("#deleteAccConfirm").css({ display: "flex", opacity: 0 });
          $("#deleteAccConfirm").animate({ opacity: 1 });
        });
      });
  };

  const deleteAcc = (accID) => {
    Axios.post(`http://localhost:3001/deleteAcc`, {
      accID: accID,
      userID: currentUser.id,
    }).then((response) => {
      if (response.data.message === "Deleted") {
        if (identifier === "#accountSideB") {
          $("#accInfoBtnB" + accID)
            .children()
            .animate({ opacity: 0 }, function () {
              $("#accInfoBtnB" + accID).children({
                display: "flex",
                opacity: 1,
              });
              setTimeout(() => {
                $("#accInfoBtnB" + accID).animate(
                  {
                    width: "0rem",
                    height: "0rem",
                  },
                  function () {
                    $("#accInfoBtnB" + accID).css({ display: "none" });
                    $("#accInfoBtnB" + accID).remove();
                  }
                );
              });
            });
        } else if (identifier === "#accountSideA") {
          $("#accInfoBtnA" + accID)
            .children()
            .animate({ opacity: 0 }, function () {
              $("#accInfoBtnA" + accID).children({
                display: "flex",
                opacity: 1,
              });
              setTimeout(() => {
                $("#accInfoBtnA" + accID).animate(
                  {
                    width: "0rem",
                    height: "0rem",
                  },
                  function () {
                    $("#accInfoBtnA" + accID).css({ display: "none" });
                    $("#accInfoBtnA" + accID).remove();
                  }
                );
              });
            });
        }
        setTimeout(() => {
          $("#accInfoCard").animate({ opacity: 0 }, function () {
            $("#accInfoCard").css({ display: "none", opacity: 1 });
            setTimeout(() => {
              $("#profileCard").css({ display: "flex", opacity: 0 });
              $("#profileCard").animate({ opacity: 1 });
              setCurrentPage("#profileCard");
            });
          });
        }, 1750);
      }
    });
  };

  return (
    <div className="accInfoCard" id="accInfoCard">
      <div className="accInfoHeader">
        <h2>Account Info</h2>
      </div>
      <div className="accCardInfoCont">
        <div className="accCardInfoA" id="accCardInfoA">
          {/* <div className="accCardIconCont">
            <div className="accIcon"></div>
          </div> */}
          <div className="accName">
            <label>Account Name</label>
            <input
              id="accNameInput"
              value={accInformation.accName}
              onChange={(e) =>
                setAccInformation({
                  ...accInformation,
                  accName: e.target.value,
                })
              }
            />
          </div>
          <div className="accUsername">
            <label>Account Username</label>
            <input
              id="accUsernameInput"
              value={accInformation.accUsername}
              onChange={(e) =>
                setAccInformation({
                  ...accInformation,
                  accUsername: e.target.value,
                })
              }
            />
          </div>
          <div className="accPass">
            <label>Account Password</label>
            <input
              id="accPassInput"
              value={accInformation.accPassword}
              onChange={(e) =>
                setAccInformation({
                  ...accInformation,
                  accPassword: e.target.value,
                })
              }
            />
          </div>
          <div className="accEmail">
            <label>Account Email</label>
            <input
              id="accEmailInput"
              value={accInformation.accEmail}
              onChange={(e) =>
                setAccInformation({
                  ...accInformation,
                  accEmail: e.target.value,
                })
              }
            />
          </div>
          <div className="accPhone">
            <label>Account Phone #</label>
            <input
              id="accPhoneInput"
              value={accInformation.accPhoneNum}
              onChange={(e) =>
                setAccInformation({
                  ...accInformation,
                  accPhoneNum: e.target.value,
                })
              }
            />
          </div>
          <div className="deleteAccBtn">
            <button id="deleteAccBtn">
              <p id="deleteAccButton" onClick={() => deleteConfim()}>
                Delete
              </p>
              <p
                id="deleteAccConfirm"
                onClick={() => deleteAcc(accInformation.id)}
              >
                Confirm?
              </p>
            </button>
          </div>
        </div>

        <div className="accCardInfoB" id="accCardInfoB">
          <div className="accSecurity1">
            <label>Security Question 1</label>

            <input
              disabled={!accInformation.accSecQues}
              value={accInformation.accSecQueOne}
              id="accSecurity1Input"
              onChange={(e) =>
                setAccInformation({
                  ...accInformation,
                  accSecQueOne: e.target.value,
                })
              }
            />
          </div>
          <div className="accAnswer1">
            <label>Answer</label>
            <input
              disabled={!accInformation.accSecQues}
              value={accInformation.accAnsOne}
              id="accAnswer1Input"
              onChange={(e) =>
                setAccInformation({
                  ...accInformation,
                  accAnsOne: e.target.value,
                })
              }
            />
          </div>
          <div className="accSecurity2">
            <label>Security Question 2</label>
            <input
              disabled={!accInformation.accSecQues}
              value={accInformation.accSecQueTwo}
              id="accSecurity2Input"
              onChange={(e) =>
                setAccInformation({
                  ...accInformation,
                  accSecQueTwo: e.target.value,
                })
              }
            />
          </div>
          <div className="accAnswer2">
            <label>Answer</label>
            <input
              disabled={!accInformation.accSecQues}
              value={accInformation.accAnsTwo}
              id="accAnswer2Input"
              onChange={(e) =>
                setAccInformation({
                  ...accInformation,
                  accAnsTwo: e.target.value,
                })
              }
            />
          </div>
          <div className="accSecurity3">
            <label>Security Question 3</label>
            <input
              disabled={!accInformation.accSecQues}
              value={accInformation.accSecQueThree}
              id="accSecurity3Input"
              onChange={(e) =>
                setAccInformation({
                  ...accInformation,
                  accSecQueThree: e.target.value,
                })
              }
            />
          </div>
          <div className="accAnswer3">
            <label>Answer</label>
            <input
              disabled={!accInformation.accSecQues}
              value={accInformation.accAnsThree}
              id="accAnswer3Input"
              onChange={(e) =>
                setAccInformation({
                  ...accInformation,
                  accAnsThree: e.target.value,
                })
              }
            />
          </div>
          <div className="accTwoStep">
            <label>Two-Step Verification</label>
            <input
              onClick={() => accSecFactors("#accTwoStep")}
              id="accTwoStep"
              type={"checkbox"}
              checked={accInformation.accTwoStep}
            />
          </div>
          <div className="accSecQuestion">
            <label>Security Question</label>
            <input
              onClick={() => accSecFactors("#accSecQues")}
              id="accSecQues"
              type={"checkbox"}
              checked={accInformation.accSecQues}
            />
          </div>
        </div>
      </div>

      <div className="updateBtn">
        <div className="updateBtnCont">
          <button
            className="updateBtnLeft"
            onClick={() => changeAddAccPage("#accCardInfoA")}
          >
            <ChevronLeftIcon />
          </button>
          <button className="updateBtnConfirm" onClick={() => updateAcc()}>
            Update
          </button>
          <button
            className="updateBtnRight"
            onClick={() => changeAddAccPage("#accCardInfoB")}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfoCard;
