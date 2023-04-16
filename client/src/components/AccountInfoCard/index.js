import React from "react";
import $ from "jquery";
import Axios from "axios";
import { useState } from "react";

const AccountInfoCard = ({
  setCurrentUser,
  currentUser,
  setAccInformation,
  accInformation,
  setUserAccountsA,
  userAccountsA,
  setUserAccountsB,
  userAccountsB,
}) => {
  const changeAddAccPage = (accPage) => {
    if (accPage === "#accCardInfoA") {
      $(accPage).css({ display: "flex" });
      $("#accCardInfoB").css({ display: "none" });
    } else if (accPage === "#accCardInfoB") {
      $(accPage).css({ display: "flex" });
      $("#accCardInfoA").css({ display: "none" });
    }
  };

  const updateInfo = (identifier) => {
    if (identifier === "accSecurity1") {
      if ($("#" + identifier + "Input").css(`display`) === "none") {
        $("#" + identifier).css({ display: "none" });
        $("#" + identifier + "Input").css({ display: "flex" });
        $("#accAnswer1").css({ display: "none" });
        $("#accAnswer1Input").css({ display: "flex" });
      } else {
        $("#" + identifier).css({ display: "flex" });
        $("#" + identifier + "Input").css({ display: "none" });
        $("#accAnswer1").css({ display: "flex" });
        $("#accAnswer1Input").css({ display: "none" });
      }
    } else if (identifier === "accSecurity2") {
      if ($("#" + identifier + "Input").css(`display`) === "none") {
        $("#" + identifier).css({ display: "none" });
        $("#" + identifier + "Input").css({ display: "flex" });
        $("#accAnswer2").css({ display: "none" });
        $("#accAnswer2Input").css({ display: "flex" });
      } else {
        $("#" + identifier).css({ display: "flex" });
        $("#" + identifier + "Input").css({ display: "none" });
        $("#accAnswer2").css({ display: "flex" });
        $("#accAnswer2Input").css({ display: "none" });
      }
    } else if (identifier === "accSecurity3") {
      if ($("#" + identifier + "Input").css(`display`) === "none") {
        $("#" + identifier).css({ display: "none" });
        $("#" + identifier + "Input").css({ display: "flex" });
        $("#accAnswer3").css({ display: "none" });
        $("#accAnswer3Input").css({ display: "flex" });
      } else {
        $("#" + identifier).css({ display: "flex" });
        $("#" + identifier + "Input").css({ display: "none" });
        $("#accAnswer3").css({ display: "flex" });
        $("#accAnswer3Input").css({ display: "none" });
      }
    } else {
      if ($("#" + identifier + "Input").css(`display`) === "none") {
        $("#" + identifier + "Input").css({ display: "flex" });
        $("#" + identifier).css({ display: "none" });
      } else if ($("#" + identifier + "Input").css(`display`) === "flex") {
        $("#" + identifier + "Input").css({ display: "none" });
        $("#" + identifier).css({ display: "flex" });
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

  const deleteAcc = (accID) => {
    Axios.post(`http://localhost:3001/deleteAcc`, {
      accID: accID,
      userID: currentUser.id,
    }).then((response) => {
      // console.log(response.data.message === "deleted");
      if (response.data.message === "deleted") {
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

  return (
    <div className="accInfoCard" id="accInfoCard">
      <div className="accCardInfoMain">
        <div className="accInfoHeader"></div>
        <div className="accCardInfoA" id="accCardInfoA">
          <div className="accCardIconCont">
            <div className="accIcon"></div>
          </div>
          <div className="accName">
            <label>Account Name</label>
            <p id="accName">{accInformation.accName}</p>
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
            <p id="accUsername">{accInformation.accUsername}</p>
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
            <p id="accPass">{accInformation.accPassword}</p>
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
            <p id="accEmail">{accInformation.accEmail}</p>
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
            <p id="accPhone">{accInformation.accPhoneNum}</p>
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
        </div>

        <div className="accCardInfoB" id="accCardInfoB">
          <div className="accSecurity1">
            <label>Security Question 1</label>
            <p id="accSecurity1">{accInformation.accSecQueOne}</p>
            <input
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
            <p id="accAnswer1">{accInformation.accAnsOne}</p>
            <input
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
            <p id="accSecurity2">{accInformation.accSecQueTwo}</p>
            <input
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
            <p id="accAnswer2">{accInformation.accAnsTwo}</p>
            <input
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
            <p id="accSecurity3">{accInformation.accSecQueThree}</p>
            <input
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
            <p id="accAnswer3">{accInformation.accAnsThree}</p>
            <input
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
          <div className="deleteAccBtn">
            <button onClick={() => deleteAcc(accInformation.id)}>delete</button>
          </div>
        </div>
      </div>

      <div className="updateBtn">
        <button onClick={() => changeAddAccPage("#accCardInfoA")}>back</button>
        <button onClick={() => updateAcc()}>Update</button>
        <button onClick={() => changeAddAccPage("#accCardInfoB")}>next</button>
      </div>
    </div>
  );
};

export default AccountInfoCard;
