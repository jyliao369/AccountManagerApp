import React from "react";
import $ from "jquery";

const Settings = ({ setUpdateUser, updateUser }) => {
  const updatePageChange = (updatePage) => {
    if (updatePage === "#updatePageA") {
      $(updatePage).css({ display: "flex" });
      $(`#updatePageB`).css({ display: "none" });
    } else if (updatePage === "#updatePageB") {
      $(updatePage).css({ display: "flex" });
      $(`#updatePageA`).css({ display: "none" });
    }
  };

  const confirmUpdate = () => {
    return true;
  };

  return (
    <div className="settingsForm" id="settingsForm">
      <div className="settingsFormMain">
        <div className="settingsHeader">
          <h2>Update Profile</h2>
        </div>
        <div className="updatePageA" id="updatePageA">
          <div className="settingImageCont">
            <div className="settingImg" />
          </div>
          <div className="nameUpdateInput">
            <div className="nameUpInput">
              <label>First Name</label>
              <input
                value={updateUser.firstName}
                //   placeholder="Ex. John"
                //   value={registerUser.firstName}
                //   onChange={(event) =>
                //     setRegisterUser({
                //       ...registerUser,
                //       firstName: event.target.value,
                //     })
                //   }
              />
            </div>
            <div className="nameUpInput">
              <label>Last Name</label>
              <input
                value={updateUser.lastName}
                //   placeholder="Ex. Allen"
                //   value={registerUser.lastName}
                //   onChange={(event) =>
                //     setRegisterUser({
                //       ...registerUser,
                //       lastName: event.target.value,
                //     })
                //   }
              />
            </div>
          </div>
          <div className="usernameUpInput">
            <label>Username</label>
            <input
              value={updateUser.username}
              // placeholder="Ex. testninja101"
              // value={registerUser.username}
              // onChange={(event) =>
              //   setRegisterUser({ ...registerUser, username: event.target.value })
              // }
            />
          </div>
          <div className="emailUpInput">
            <label>Email</label>
            <input
              value={updateUser.email}
              // placeholder="Ex. testninja101"
              // value={registerUser.email}
              // onChange={(event) =>
              //   setRegisterUser({ ...registerUser, email: event.target.value })
              // }
            />
          </div>
          <div className="passwordUpInput">
            <label>Password</label>
            <input
              value={updateUser.password}
              type="password"
              // placeholder="**********"
              // value={registerUser.password}
              // onChange={(event) =>
              //   setRegisterUser({ ...registerUser, password: event.target.value })
              // }
            />
          </div>
        </div>

        <div className="updatePageB" id="updatePageB">
          <div className="phoneNumUpInput">
            <label>Phone Number</label>
            <input value={updateUser.mobileNum} />
          </div>
          <div className="dobUpInput">
            <div className="dobMonthUp">
              <label>Month</label>
              <input value={updateUser.dobMonth} />
            </div>
            <div className="dobDateUp">
              <label>Date</label>
              <input value={updateUser.dobDate} />
            </div>
            <div className="dobYearUp">
              <label>Year</label>
              <input value={updateUser.dobYear} />
            </div>
          </div>
          <div className="secQuesAnsInput">
            <label>Security Question 1</label>
            <input value={updateUser.secQuestionOne} />
          </div>
          <div className="secQuesAnsInput">
            <label>Answer</label>
            <input value={updateUser.secAnsOne} />
          </div>
          <div className="secQuesAnsInput">
            <label>Security Question 2</label>
            <input value={updateUser.secQuestionTwo} />
          </div>
          <div className="secQuesAnsInput">
            <label>Answer</label>
            <input value={updateUser.secAnsTwo} />
          </div>
          <div className="secQuesAnsInput">
            <label>Security Question 3</label>
            <input value={updateUser.secQuestionThree} />
          </div>
          <div className="secQuesAnsInput">
            <label>Answer</label>
            <input value={updateUser.secAnsThree} />
          </div>
        </div>
      </div>

      <div className="updateButton">
        <button onClick={() => updatePageChange("#updatePageA")}>back</button>
        <button onClick={() => updatePageChange("#updatePageB")}>next</button>
      </div>
    </div>
  );
};

export default Settings;
