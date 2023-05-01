import React from "react";
import $ from "jquery";
import Axios from "axios";
import { useEffect, useState } from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Settings = ({
  setUpdateUser,
  updateUser,
  setCurrentUser,
  currentUser,
  setUserAccountsA,
  setUserAccountsB,
  setCurUpdatePage,
  curUpdatePage,
  setCurrentPage,
  currentPage,
}) => {
  const updatePageChange = (updatePage) => {
    if (updatePage !== curUpdatePage) {
      if (updatePage === "#updatePageA") {
        setCurUpdatePage(`#updatePageA`);
        $(`#updatePageB`).animate({ opacity: 0 }, function () {
          $(`#updatePageB`).css({ display: "none", opacity: 1 });

          setTimeout(() => {
            $(`#updatePageA`).css({ display: "flex", opacity: 0 });
            $(`#updatePageA`).animate({ opacity: 1 });
          });
        });
      } else if (updatePage === "#updatePageB") {
        setCurUpdatePage(`#updatePageB`);
        $(`#updatePageA`).animate({ opacity: 0 }, function () {
          $(`#updatePageA`).css({ display: "none", opacity: 1 });

          setTimeout(() => {
            $(`#updatePageB`).css({ display: "flex", opacity: 0 });
            $(`#updatePageB`).animate({ opacity: 1 });
          });
        });
      }
    }
  };

  const updateProfile = () => {
    Axios.post(`http://localhost:3001/updateUser`, {
      updateUser: updateUser,
    }).then((response) => {
      if (response.data.update === true) {
        setCurrentUser(response.data.result[0]);

        $(`#settingsForm`).animate({ opacity: "0" }, function () {
          $(`#settingsForm`).css({ display: "none", opacity: 1 });
          $(`#updatePageA`).css({ display: "flex" });
          $(`#updatePageB`).css({ display: "none" });

          $(`#profileCard`).css({ display: "flex", opacity: 0 });
          $(`#profileCard`).animate({ opacity: 1 });
          setCurrentPage("#profileCard");
        });
      }
    });
  };

  return (
    <div className="settingsForm" id="settingsForm">
      <div className="settingsHeader">
        <h2>Update Profile</h2>
      </div>
      <div className="updatePageCont">
        <div className="updatePageA" id="updatePageA">
          <div className="settingImageCont">
            <div className="settingImg" />
          </div>
          <div className="nameUpdate">
            <div className="firstNameUp">
              <label>First Name</label>
              <input
                value={updateUser.firstName}
                id="firstNameUpInput"
                onChange={(event) =>
                  setUpdateUser({
                    ...updateUser,
                    firstName: event.target.value,
                  })
                }
              />
            </div>
            <div className="lastNameUp">
              <label>Last Name</label>
              <input
                value={updateUser.lastName}
                id="lastNameUpInput"
                onChange={(event) =>
                  setUpdateUser({
                    ...updateUser,
                    lastName: event.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="usernameUp">
            <label>Username</label>
            <input
              value={updateUser.username}
              id="userNameUpInput"
              onChange={(event) =>
                setUpdateUser({
                  ...updateUser,
                  username: event.target.value,
                })
              }
            />
          </div>
          <div className="emailUp">
            <label>Email</label>
            <input
              value={updateUser.email}
              id="emailUpInput"
              onChange={(event) =>
                setUpdateUser({ ...updateUser, email: event.target.value })
              }
            />
          </div>
          <div className="passwordUp">
            <label>Password</label>
            <input
              value={updateUser.password}
              id="passwordUpInput"
              type="password"
              onChange={(event) =>
                setUpdateUser({
                  ...updateUser,
                  password: event.target.value,
                })
              }
            />
          </div>
          <div className="phoneNumUp">
            <label>Phone Number</label>
            <input
              value={updateUser.mobileNum}
              id="phoneNumUpInput"
              onChange={(event) =>
                setUpdateUser({
                  ...updateUser,
                  mobileNum: event.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="updatePageB" id="updatePageB">
          <div className="dobUpdate">
            <div className="dobMonthUp">
              <label>Month</label>
              <input id="dobMonthUpInput" value={updateUser.dobMonth} />
            </div>
            <div className="dobDateUp">
              <label>Date</label>
              <p id="dobDateUp">{updateUser.dobDate}</p>
              <input id="dobDateUpInput" value={updateUser.dobDate} />
            </div>
            <div className="dobYearUp">
              <label>Year</label>
              <p id="dobYearUp">{updateUser.dobYear}</p>
              <input id="dobYearUpInput" value={updateUser.dobYear} />
            </div>
          </div>
          <div className="secQuesOne">
            <label>Security Question 1</label>
            <input
              value={updateUser.secQuestionOne}
              id="secQuesOneInput"
              onChange={(event) =>
                setUpdateUser({
                  ...updateUser,
                  secQuestionOne: event.target.value,
                })
              }
            />
          </div>
          <div className="secAnsOne">
            <label>Answer</label>
            <input
              value={updateUser.secAnsOne}
              id="secAnsOneInput"
              onChange={(event) =>
                setUpdateUser({
                  ...updateUser,
                  secAnsOne: event.target.value,
                })
              }
            />
          </div>
          <div className="secQuesTwo">
            <label>Security Question 2</label>
            <input
              value={updateUser.secQuestionTwo}
              id="secQuesTwoInput"
              onChange={(event) =>
                setUpdateUser({
                  ...updateUser,
                  secQuestionTwo: event.target.value,
                })
              }
            />
          </div>
          <div className="secAnsTwo">
            <label>Answer</label>
            <input
              value={updateUser.secAnsTwo}
              id="secAnsTwoInput"
              onChange={(event) =>
                setUpdateUser({
                  ...updateUser,
                  secAnsTwo: event.target.value,
                })
              }
            />
          </div>
          <div className="secQuesThree">
            <label>Security Question 3</label>
            <input
              value={updateUser.secQuestionThree}
              id="secQuesThreeInput"
              onChange={(event) =>
                setUpdateUser({
                  ...updateUser,
                  secQuestionThree: event.target.value,
                })
              }
            />
          </div>
          <div className="secAnsThree">
            <label>Answer</label>
            <input
              value={updateUser.secAnsThree}
              id="secAnsThreeInput"
              onChange={(event) =>
                setUpdateUser({
                  ...updateUser,
                  secAnsThree: event.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="updateButton">
        <div className="updateButtonCont">
          <button
            className="settingLeftBtn"
            onClick={() => updatePageChange("#updatePageA")}
          >
            <ChevronLeftIcon />
          </button>
          <button className="settingConfirmBtn" onClick={() => updateProfile()}>
            Update
          </button>
          <button
            className="settingRightBtn"
            onClick={() => updatePageChange("#updatePageB")}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
