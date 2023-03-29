import React from "react";
import $ from "jquery";
import { useEffect, useState } from "react";
import Axios from "axios";

const AddAccount = ({ setNewAccount, newAcccount }) => {
  // const [newAcccount, setNewAccount] = useState({
  //   accName: "",
  //   accUsername: "",
  //   accPassword: "",
  //   accEmail: "",
  //   accPhoneNum: "",
  //   accTwoStep: false,
  //   accSecQues: false,
  //   accSecOne: "N/A",
  //   accAnsOne: "N/A",
  //   accSecTwo: "N/A",
  //   accAnsTwo: "N/A",
  //   accSecThree: "N/A",
  //   accAnsThree: "N/A",
  // });

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
    console.log(newAcccount);
    // Axios.post(`http://localhost:3001/addAcc`, {
    //   newAccount: newAcccount,
    // }).then((response) => {
    //   console.log(response);
    // });
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
      <div className="addAccountFormMain">
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
              onChange={(e) =>
                setNewAccount({ ...newAcccount, accName: e.target.value })
              }
            />
          </div>
          <div className="addAccUsername">
            <label>Account Username</label>
            <input
              value={newAcccount.accUsername}
              onChange={(e) =>
                setNewAccount({ ...newAcccount, accUsername: e.target.value })
              }
            />
          </div>
          <div className="addAccPass">
            <label>Account Password</label>
            <input
              value={newAcccount.accPassword}
              onChange={(e) =>
                setNewAccount({ ...newAcccount, accPassword: e.target.value })
              }
            />
          </div>
          <div className="addAccEmail">
            <label>Account Email</label>
            <input
              value={newAcccount.accEmail}
              onChange={(e) =>
                setNewAccount({ ...newAcccount, accEmail: e.target.value })
              }
            />
          </div>
          <div className="addAccPhone">
            <label>Account Phone #</label>
            <input
              value={newAcccount.accPhoneNum}
              onChange={(e) =>
                setNewAccount({ ...newAcccount, accPhoneNum: e.target.value })
              }
            />
          </div>
        </div>
        <div className="addAccountPageB" id="addAccountPageB">
          <div className="addAccSecurityA">
            <label>Security Question 1</label>
            <input
              disabled={!newAcccount.accSecQues}
              value={newAcccount.accSecOne}
              onChange={(e) =>
                setNewAccount({ ...newAcccount, accSecOne: e.target.value })
              }
            />
          </div>
          <div className="addAccSecurityA">
            <label>Answer</label>
            <input
              disabled={!newAcccount.accSecQues}
              value={newAcccount.accAnsOne}
              onChange={(e) =>
                setNewAccount({ ...newAcccount, accAnsOne: e.target.value })
              }
            />
          </div>
          <div className="addAccSecurityA">
            <label>Security Question 2</label>
            <input
              disabled={!newAcccount.accSecQues}
              value={newAcccount.accSecTwo}
              onChange={(e) =>
                setNewAccount({ ...newAcccount, accSecTwo: e.target.value })
              }
            />
          </div>
          <div className="addAccSecurityA">
            <label>Answer</label>
            <input
              disabled={!newAcccount.accSecQues}
              value={newAcccount.accAnsTwo}
              onChange={(e) =>
                setNewAccount({ ...newAcccount, accAnsTwo: e.target.value })
              }
            />
          </div>
          <div className="addAccSecurityA">
            <label>Security Question 3</label>
            <input
              disabled={!newAcccount.accSecQues}
              value={newAcccount.accSecThree}
              onChange={(e) =>
                setNewAccount({ ...newAcccount, accSecThree: e.target.value })
              }
            />
          </div>
          <div className="addAccSecurityA">
            <label>Answer</label>
            <input
              disabled={!newAcccount.accSecQues}
              value={newAcccount.accAnsThree}
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
      </div>

      <div className="updateBtn">
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
