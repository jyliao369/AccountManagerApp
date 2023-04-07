import React from "react";
import $ from "jquery";
import { useState } from "react";

const AccountInfoCard = ({ setAccInformation, accInformation }) => {
  const changeAddAccPage = (accPage) => {
    if (accPage === "#accCardInfoA") {
      $(accPage).css({ display: "flex" });
      $("#accCardInfoB").css({ display: "none" });
    } else if (accPage === "#accCardInfoB") {
      $(accPage).css({ display: "flex" });
      $("#accCardInfoA").css({ display: "none" });
    }
  };

  const updateInfo = (identifier, test) => {
    if ($("#" + identifier + "Input").css(`display`) === "none") {
      $("#" + identifier + "Input").css({ display: "flex" });
      $("#" + identifier).css({ display: "none" });
    } else if ($("#" + identifier + "Input").css(`display`) === "flex") {
      $("#" + identifier + "Input").css({ display: "none" });
      $("#" + identifier).css({ display: "flex" });
    }
  };

  const checkInfo = () => {
    console.log(accInformation);
  };

  return (
    <div className="accInfoCard" id="accInfoCard">
      <div className="accCardInfoMain">
        <div className="accInfoHeader">
          <h2>Add Account</h2>
        </div>
        <div className="accCardInfoA" id="accCardInfoA">
          <div className="accIconCont">
            <div className="accIcon"></div>
          </div>
          <div className="accName">
            <label>Account Name</label>
            <div>
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
              <button onClick={(e) => updateInfo("accName")}>Edit</button>
            </div>
          </div>
          <div className="accUsername">
            <label>Account Username</label>
            <div>
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
              <button onClick={(e) => updateInfo("accUsername")}>Edit</button>
            </div>
          </div>
          <div className="accPass">
            <label>Account Password</label>
            <div>
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
              <button onClick={(e) => updateInfo("accPass")}>Edit</button>
            </div>
          </div>
          <div className="accEmail">
            <label>Account Email</label>
            <div>
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
              <button onClick={(e) => updateInfo("accEmail")}>Edit</button>
            </div>
          </div>
          <div className="accPhone">
            <label>Account Phone #</label>
            <div>
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
              <button onClick={(e) => updateInfo("accPhone")}>Edit</button>
            </div>
          </div>
          {/* <div className="testChange">
            <label>test</label>
            <div className="testChangeMain">
              <p
                // value={accInformation.accPhoneNum}
                id="testChange"
                // onChange={(e) =>
                //   setNewAccount({ ...newAcccount, accPhoneNum: e.target.value })
                // }
              >
                {testDiv}
              </p>
              <button
                value={testDiv}
                id="testChangeButton"
                onClick={(e) => testChange(e.target.value)}
              >
                test
              </button>
            </div>
          </div> */}
        </div>

        <div className="accCardInfoB" id="accCardInfoB">
          <div className="accSecurity1">
            <label>Security Question 1</label>
            <div>
              <p id="accSecurity1">{accInformation.accSecQueOne}</p>
              <input
                // disabled={!newAcccount.accSecQues}
                value={accInformation.accSecQueOne}
                id="accSecurity1Input"
                onChange={(e) =>
                  setAccInformation({
                    ...accInformation,
                    accSecQueOne: e.target.value,
                  })
                }
              />
              <button onClick={(e) => updateInfo("accSecurity1")}>Edit</button>
            </div>
          </div>
          <div className="accAnswer1">
            <label>Answer</label>
            <div>
              <p id="accAnswer1">{accInformation.accAnsOne}</p>
              <input
                // disabled={!newAcccount.accSecQues}
                value={accInformation.accAnsOne}
                id="accAnswer1Input"
                onChange={(e) =>
                  setAccInformation({
                    ...accInformation,
                    accAnsOne: e.target.value,
                  })
                }
              />
              <button onClick={(e) => updateInfo("accAnswer1")}>Edit</button>
            </div>
          </div>
          <div className="accSecurity2">
            <label>Security Question 2</label>
            <div>
              <p id="accSecurity2">{accInformation.accSecQueTwo}</p>
              <input
                // disabled={!newAcccount.accSecQues}
                value={accInformation.accSecQueTwo}
                id="accSecurity2Input"
                onChange={(e) =>
                  setAccInformation({
                    ...accInformation,
                    accSecQueTwo: e.target.value,
                  })
                }
              />
              <button onClick={(e) => updateInfo("accSecurity2")}>Edit</button>
            </div>
          </div>
          <div className="accAnswer2">
            <label>Answer</label>
            <div>
              <p id="accAnswer2">{accInformation.accAnsTwo}</p>
              <input
                // disabled={!newAcccount.accSecQues}
                value={accInformation.accAnsTwo}
                id="accAnswer2Input"
                onChange={(e) =>
                  setAccInformation({
                    ...accInformation,
                    accAnsTwo: e.target.value,
                  })
                }
              />
              <button onClick={(e) => updateInfo("accAnswer2")}>Edit</button>
            </div>
          </div>
          <div className="accSecurity3">
            <label>Security Question 3</label>
            <div>
              <p id="accSecurity3">{accInformation.accSecQueThree}</p>
              <input
                // disabled={!newAcccount.accSecQues}
                value={accInformation.accSecQueThree}
                id="accSecurity3Input"
                onChange={(e) =>
                  setAccInformation({
                    ...accInformation,
                    accSecQueThree: e.target.value,
                  })
                }
              />
              <button onClick={(e) => updateInfo("accSecurity3")}>Edit</button>
            </div>
          </div>
          <div className="accAnswer3">
            <label>Answer</label>
            <div>
              <p id="accAnswer3">{accInformation.accAnsThree}</p>
              <input
                // disabled={!newAcccount.accSecQues}
                value={accInformation.accAnsThree}
                id="accAnswer3Input"
                onChange={(e) =>
                  setAccInformation({
                    ...accInformation,
                    accAnsThree: e.target.value,
                  })
                }
              />
              <button onClick={(e) => updateInfo("accAnswer3")}>Edit</button>
            </div>
          </div>
          <div className="accTwoStep">
            <label>Two-Step Verification</label>
            <input
              // onClick={() => accSecFactors("#addAccTwo")}
              id="addAccTwo"
              type={"checkbox"}
            />
          </div>
          <div className="accSecQuestion">
            <label>Security Question</label>
            <input
              // onClick={() => accSecFactors("#addAccSec")}
              id="addAccSec"
              type={"checkbox"}
            />
          </div>
        </div>
      </div>

      <div className="updateBtn">
        <button onClick={() => changeAddAccPage("#accCardInfoA")}>back</button>
        {/* <button disabled={addAccConfirm()} onClick={() => addAccounts()}>
          Add Account
        </button> */}
        <button onClick={() => checkInfo()}>check</button>
        <button onClick={() => changeAddAccPage("#accCardInfoB")}>next</button>
      </div>
    </div>
  );
};

export default AccountInfoCard;
