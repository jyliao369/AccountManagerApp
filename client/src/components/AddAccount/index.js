import React from "react";
import $ from "jquery";
import { useEffect, useState } from "react";
import Axios from "axios";

const AddAccount = ({
  setNewAccount,
  newAcccount,
  setCurrentUser,
  currentUser,
  setUserAccountsA,
  userAccountsA,
  setUserAccountsB,
  userAccountsB,
}) => {
  const changeAddAccPage = (accPage) => {
    if (accPage === "#addAccountPageA") {
      $(accPage).css({ display: "flex" });
      $("#addAccountPageB").css({ display: "none" });
    } else if (accPage === "#addAccountPageB") {
      $(accPage).css({ display: "flex" });
      $("#addAccountPageA").css({ display: "none" });
    }
  };

  const addAccounts = () => {
    Axios.post(`http://localhost:3001/addAcc`, {
      newAccount: newAcccount,
      userID: currentUser.id,
    }).then((response) => {
      setUserAccountsA(response.data.slice(0, response.data.length / 2));
      setUserAccountsB(
        response.data.slice(response.data.length / 2, response.data.length)
      );
      $("#profileCardCont").children().css({ display: "none" });
      $("#profileCard").css({ display: "flex" });
    });
  };

  const accSecFactors = (test) => {
    if (test === "#addAccTwo") {
      setNewAccount({ ...newAcccount, accTwoStep: $(test).is(":checked") });
    } else if (test === "#addAccSec") {
      if ($(test).is(":checked")) {
        setNewAccount({
          ...newAcccount,
          accSecQues: $(test).is(":checked"),
          accSecOne: "",
          accAnsOne: "",
          accSecTwo: "",
          accAnsTwo: "",
          accSecThree: "",
          accAnsThree: "",
        });
      } else {
        setNewAccount({
          ...newAcccount,
          accSecQues: $(test).is(":checked"),
          accSecOne: "N/A",
          accAnsOne: "N/A",
          accSecTwo: "N/A",
          accAnsTwo: "N/A",
          accSecThree: "N/A",
          accAnsThree: "N/A",
        });
      }
    }
  };

  const addAccConfirm = () => {
    if (
      newAcccount.accName === "" ||
      newAcccount.accUsername === "" ||
      newAcccount.accPassword === "" ||
      newAcccount.accEmail === "" ||
      newAcccount.accPhoneNum === "" ||
      newAcccount.accSecOne === "" ||
      newAcccount.accAnsOne === "" ||
      newAcccount.accSecTwo === "" ||
      newAcccount.accAnsTwo === "" ||
      newAcccount.accSecThree === "" ||
      newAcccount.accAnsThree === ""
    ) {
      return true;
    }
  };

  return (
    <div className="addAccountForm" id="addAccountForm">
      <div className="addAccHeader">
        <h2>Add Account</h2>
      </div>
      <div className="addAccountPageA" id="addAccountPageA">
        <div className="accIconCont">
          <div className="accIcon"></div>
        </div>
        <div className="addAccName">
          <label>Account Name</label>
          <input
            value={newAcccount.accName}
            placeholder="ex. Netflix Account"
            onChange={(e) =>
              setNewAccount({ ...newAcccount, accName: e.target.value })
            }
          />
        </div>
        <div className="addAccUsername">
          <label>Account Username</label>
          <input
            value={newAcccount.accUsername}
            placeholder="Ex. ninjaNetflix"
            onChange={(e) =>
              setNewAccount({ ...newAcccount, accUsername: e.target.value })
            }
          />
        </div>
        <div className="addAccPass">
          <label>Account Password</label>
          <input
            value={newAcccount.accPassword}
            placeholder="**********"
            onChange={(e) =>
              setNewAccount({ ...newAcccount, accPassword: e.target.value })
            }
          />
        </div>
        <div className="addAccEmail">
          <label>Account Email</label>
          <input
            value={newAcccount.accEmail}
            placeholder="Ex. testninja101@gmail.com"
            onChange={(e) =>
              setNewAccount({ ...newAcccount, accEmail: e.target.value })
            }
          />
        </div>
        <div className="addAccPhone">
          <label>Account Phone #</label>
          <input
            value={newAcccount.accPhoneNum}
            placeholder="111-222-3333"
            onChange={(e) =>
              setNewAccount({ ...newAcccount, accPhoneNum: e.target.value })
            }
          />
        </div>
      </div>
      <div className="addAccountPageB" id="addAccountPageB">
        <div className="addAccSecurityOne">
          <label>Security Question 1</label>
          <input
            disabled={!newAcccount.accSecQues}
            value={newAcccount.accSecOne}
            placeholder="Security Question 1"
            onChange={(e) =>
              setNewAccount({ ...newAcccount, accSecOne: e.target.value })
            }
          />
        </div>
        <div className="addAccAnswerOne">
          <label>Answer</label>
          <input
            disabled={!newAcccount.accSecQues}
            value={newAcccount.accAnsOne}
            placeholder="Answer"
            onChange={(e) =>
              setNewAccount({ ...newAcccount, accAnsOne: e.target.value })
            }
          />
        </div>
        <div className="addAccSecurityTwo">
          <label>Security Question 2</label>
          <input
            disabled={!newAcccount.accSecQues}
            value={newAcccount.accSecTwo}
            placeholder="Security Question 2"
            onChange={(e) =>
              setNewAccount({ ...newAcccount, accSecTwo: e.target.value })
            }
          />
        </div>
        <div className="addAccAnswerTwo">
          <label>Answer</label>
          <input
            disabled={!newAcccount.accSecQues}
            value={newAcccount.accAnsTwo}
            placeholder="Answer"
            onChange={(e) =>
              setNewAccount({ ...newAcccount, accAnsTwo: e.target.value })
            }
          />
        </div>
        <div className="addAccSecurityThree">
          <label>Security Question 3</label>
          <input
            disabled={!newAcccount.accSecQues}
            value={newAcccount.accSecThree}
            placeholder="Security Question 3"
            onChange={(e) =>
              setNewAccount({ ...newAcccount, accSecThree: e.target.value })
            }
          />
        </div>
        <div className="addAccAnswerThree">
          <label>Answer</label>
          <input
            disabled={!newAcccount.accSecQues}
            value={newAcccount.accAnsThree}
            placeholder="Answer"
            onChange={(e) =>
              setNewAccount({ ...newAcccount, accAnsThree: e.target.value })
            }
          />
        </div>
        <div className="addAccSecurityB">
          <label>Two-Step Verification</label>
          <input
            onClick={() => accSecFactors("#addAccTwo")}
            id="addAccTwo"
            type={"checkbox"}
          />
        </div>
        <div className="addAccSecurityB">
          <label>Security Question</label>
          <input
            onClick={() => accSecFactors("#addAccSec")}
            id="addAccSec"
            type={"checkbox"}
          />
        </div>
      </div>

      <div className="addAccBtn">
        <button onClick={() => changeAddAccPage("#addAccountPageA")}>
          back
        </button>
        <button disabled={addAccConfirm()} onClick={() => addAccounts()}>
          Add Account
        </button>
        <button onClick={() => changeAddAccPage("#addAccountPageB")}>
          next
        </button>
      </div>
    </div>
  );
};

export default AddAccount;
