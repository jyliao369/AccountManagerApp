import React from "react";
import $ from "jquery";
import { useEffect, useState } from "react";
import Axios from "axios";

import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const AddAccount = ({
  setNewAccount,
  newAcccount,
  setCurrentUser,
  currentUser,
  setUserAccountsA,
  userAccountsA,
  setUserAccountsB,
  userAccountsB,
  seCurAccUpdatePage,
  curAccUpdatePage,
  setCurrentPage,
  currentPage,
}) => {
  const changeAddAccPage = (accPage) => {
    if (accPage !== curAccUpdatePage) {
      if (accPage === "#addAccountPageA") {
        seCurAccUpdatePage("#addAccountPageA");
        $(`#addAccountPageB`).animate({ opacity: 0 }, function () {
          $(`#addAccountPageB`).css({ display: "none", opacity: 1 });
          setTimeout(() => {
            $(`#addAccountPageA`).css({ display: "flex", opacity: 0 });
            $(`#addAccountPageA`).animate({ opacity: 1 });
          });
        });
      } else if (accPage === "#addAccountPageB") {
        seCurAccUpdatePage("#addAccountPageB");
        $(`#addAccountPageA`).animate({ opacity: 0 }, function () {
          $(`#addAccountPageA`).css({ display: "none", opacity: 1 });
          setTimeout(() => {
            $(`#addAccountPageB`).css({ display: "flex", opacity: 0 });
            $(`#addAccountPageB`).animate({ opacity: 1 });
          });
        });
      }
    }
  };

  const addAccounts = () => {
    setTimeout(goneAn);
    setTimeout(addingAcc, 1750);
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
  const goneAn = () => {
    for (let a = 0; a < userAccountsA.length; a++) {
      setTimeout(() => {
        $("#accInfoBtnA" + userAccountsA[a].id).animate(
          {
            maxWidth: "24rem",
            height: "3.5rem",
          },
          function () {
            $("#accInfoBtnA" + userAccountsA[a].id).animate(
              {
                maxWidth: "0rem",
                height: "0rem",
              },
              function () {}
            );
          }
        );
      }, 50 * (1 + a));
    }
    for (let b = 0; b < userAccountsB.length; b++) {
      setTimeout(() => {
        $("#accInfoBtnB" + userAccountsB[b].id).animate(
          {
            maxWidth: "24rem",
            height: "3.5rem",
          },
          function () {
            $("#accInfoBtnB" + userAccountsB[b].id).animate(
              {
                maxWidth: "0rem",
                height: "0rem",
              },
              function () {}
            );
          }
        );
      }, 50 * (1 + b));
    }
    setTimeout(() => {
      $("#accountSideA, #accountSideB").css({ opacity: 0 });
      setUserAccountsA([]);
      setUserAccountsB([]);
    }, 1500);
  };

  const addingAcc = () => {
    setTimeout(() => {
      Axios.post(`http://localhost:3001/addAcc`, {
        newAccount: newAcccount,
        userID: currentUser.id,
      }).then((response) => {
        console.log(response.data.result);
        setUserAccountsA(
          response.data.result.slice(0, response.data.result.length / 2)
        );
        setUserAccountsB(
          response.data.result.slice(
            response.data.result.length / 2,
            response.data.result.length
          )
        );

        setTimeout(() => {
          $("#accountSideA, #accountSideB").animate({ opacity: 1 });
        }, 1000);
      });
    });
  };

  return (
    <div className="addAccountForm" id="addAccountForm">
      <div className="addAccHeader">
        <h2>Add Account</h2>
      </div>
      <div className="addAccountFormCont">
        <div className="addAccountPageA" id="addAccountPageA">
          <div className="accIconCont">
            <div className="accIcon">
              <LibraryAddIcon />
            </div>
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
      </div>

      <div className="addAccBtn">
        <div className="addAccBtnCont">
          <button
            className="addAccLeftBtn"
            onClick={() => changeAddAccPage("#addAccountPageA")}
          >
            <ChevronLeftIcon />
          </button>
          <button
            className="addAccSubmitBtn"
            disabled={addAccConfirm()}
            onClick={() => addAccounts()}
          >
            Add Account
          </button>
          <button
            className="addAccRightBtn"
            onClick={() => changeAddAccPage("#addAccountPageB")}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAccount;
