import React from "react";
import $ from "jquery";
import Axios from "axios";

const Settings = ({
  setUpdateUser,
  updateUser,
  setCurrentUser,
  currentUser,
}) => {
  const updatePageChange = (updatePage) => {
    if (updatePage === "#updatePageA") {
      $(updatePage).css({ display: "flex" });
      $(`#updatePageB`).css({ display: "none" });
    } else if (updatePage === "#updatePageB") {
      $(updatePage).css({ display: "flex" });
      $(`#updatePageA`).css({ display: "none" });
    }
  };

  const updateInfo = (identifier) => {
    if (identifier === "nameUpdate") {
      if ($("#firstNameUpInput").css("display") === "none") {
        $("#firstNameUp").css({ display: "none" });
        $("#lastNameUp").css({ display: "none" });
        $("#firstNameUpInput").css({ display: "flex" });
        $("#lastNameUpInput").css({ display: "flex" });
      } else {
        $("#firstNameUp").css({ display: "flex" });
        $("#lastNameUp").css({ display: "flex" });
        $("#firstNameUpInput").css({ display: "none" });
        $("#lastNameUpInput").css({ display: "none" });
      }
    } else if (identifier === "dobUpdate") {
      if ($("#dobMonthUpInput").css("display") === "none") {
        $("#dobMonthUp").css({ display: "none" });
        $("#dobDateUp").css({ display: "none" });
        $("#dobYearUp").css({ display: "none" });
        $("#dobMonthUpInput").css({ display: "flex" });
        $("#dobDateUpInput").css({ display: "flex" });
        $("#dobYearUpInput").css({ display: "flex" });
      } else {
        $("#dobMonthUp").css({ display: "flex" });
        $("#dobDateUp").css({ display: "flex" });
        $("#dobYearUp").css({ display: "flex" });
        $("#dobMonthUpInput").css({ display: "none" });
        $("#dobDateUpInput").css({ display: "none" });
        $("#dobYearUpInput").css({ display: "none" });
      }
    } else if (identifier === "secQuesOne") {
      if ($("#" + identifier + "Input").css("display") === "none") {
        $("#" + identifier).css({ display: "none" });
        $("#" + identifier + "Input").css({ display: "flex" });
        $("#secAnsOne").css({ display: "none" });
        $("#secAnsOneInput").css({ display: "flex" });
      } else {
        $("#" + identifier).css({ display: "flex" });
        $("#" + identifier + "Input").css({ display: "none" });
        $("#secAnsOne").css({ display: "flex" });
        $("#secAnsOneInput").css({ display: "none" });
      }
    } else if (identifier === "secQuesTwo") {
      if ($("#" + identifier + "Input").css("display") === "none") {
        $("#" + identifier).css({ display: "none" });
        $("#" + identifier + "Input").css({ display: "flex" });
        $("#secAnsTwo").css({ display: "none" });
        $("#secAnsTwoInput").css({ display: "flex" });
      } else {
        $("#" + identifier).css({ display: "flex" });
        $("#" + identifier + "Input").css({ display: "none" });
        $("#secAnsTwo").css({ display: "flex" });
        $("#secAnsTwoInput").css({ display: "none" });
      }
    } else if (identifier === "secQuesThree") {
      if ($("#" + identifier + "Input").css("display") === "none") {
        $("#" + identifier).css({ display: "none" });
        $("#" + identifier + "Input").css({ display: "flex" });
        $("#secAnsThree").css({ display: "none" });
        $("#secAnsThreeInput").css({ display: "flex" });
      } else {
        $("#" + identifier).css({ display: "flex" });
        $("#" + identifier + "Input").css({ display: "none" });
        $("#secAnsThree").css({ display: "flex" });
        $("#secAnsThreeInput").css({ display: "none" });
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

  const updateProfile = () => {
    Axios.post(`http://localhost:3001/updateUser`, {
      updateUser: updateUser,
    }).then((response) => {
      if (response.data.update === true) {
        setCurrentUser(response.data.result[0]);

        $(`#profileCard`).css({ display: "flex" });
        $(`#settingsForm`).css({ display: "none" });

        $(`#updatePageA`).css({ display: "flex" });
        $(`#updatePageB`).css({ display: "none" });
      }
    });
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
          <div className="nameUpdate">
            <div className="firstNameUp">
              <label>First Name</label>
              <div>
                <p id="firstNameUp">{updateUser.firstName}</p>
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
            </div>
            <div className="lastNameUp">
              <label>Last Name</label>
              <div>
                <p id="lastNameUp">{updateUser.lastName}</p>
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
            <button onClick={() => updateInfo("nameUpdate")}>edit</button>
          </div>
          <div className="usernameUp">
            <div className="usernameUpMain">
              <label>Username</label>
              <div className="usernameUpCont">
                <p id="userNameUp">{updateUser.username}</p>
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
            </div>
            <button onClick={() => updateInfo("userNameUp")}>edit</button>
          </div>
          <div className="emailUp">
            <div className="emailUpMain">
              <label>Email</label>
              <div className="emailUpCont">
                <p id="emailUp">{updateUser.email}</p>
                <input
                  value={updateUser.email}
                  id="emailUpInput"
                  onChange={(event) =>
                    setUpdateUser({ ...updateUser, email: event.target.value })
                  }
                />
              </div>
            </div>
            <button onClick={() => updateInfo("emailUp")}>edit</button>
          </div>
          <div className="passwordUp">
            <div className="passwordUpMain">
              <label>Password</label>
              <div className="passwordUpCont">
                <p id="passwordUp">{updateUser.password}</p>
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
            </div>
            <button onClick={() => updateInfo("passwordUp")}>edit</button>
          </div>
          <div className="phoneNumUp">
            <div className="phoneNumUpMain">
              <label>Phone Number</label>
              <div className="phoneNumUpCont">
                <p id="phoneNumUp">{updateUser.mobileNum}</p>
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
            <button onClick={() => updateInfo("phoneNumUp")}>edit</button>
          </div>
        </div>

        <div className="updatePageB" id="updatePageB">
          <div className="dobUpdate">
            <div className="dobMonthUp">
              <label>Month</label>
              <div>
                <p id="dobMonthUp">{updateUser.dobMonth}</p>
                <input id="dobMonthUpInput" value={updateUser.dobMonth} />
              </div>
            </div>
            <div className="dobDateUp">
              <label>Date</label>
              <div>
                <p id="dobDateUp">{updateUser.dobDate}</p>
                <input id="dobDateUpInput" value={updateUser.dobDate} />
              </div>
            </div>
            <div className="dobYearUp">
              <label>Year</label>
              <div>
                <p id="dobYearUp">{updateUser.dobYear}</p>
                <input id="dobYearUpInput" value={updateUser.dobYear} />
              </div>
            </div>
            <button onClick={() => updateInfo("dobUpdate")}>edit</button>
          </div>
          <div className="secQuesOne">
            <div className="secQuesOneMain">
              <label>Security Question 1</label>
              <div className="secQuesOneCont">
                <p id="secQuesOne">{updateUser.secQuestionOne}</p>
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
            </div>
            <button onClick={() => updateInfo("secQuesOne")}>edit</button>
          </div>
          <div className="secAnsOne">
            <div className="secAnsOneMain">
              <label>Answer</label>
              <div className="secAnsOneCont">
                <p id="secAnsOne">{updateUser.secAnsOne}</p>
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
            </div>
          </div>
          <div className="secQuesTwo">
            <div className="secQuesTwoMain">
              <label>Security Question 2</label>
              <div className="secQuesTwoCont">
                <p id="secQuesTwo">{updateUser.secQuestionTwo}</p>
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
            </div>
            <button onClick={() => updateInfo("secQuesTwo")}>edit</button>
          </div>
          <div className="secAnsTwo">
            <div className="secAnsTwoMain">
              <label>Answer</label>
              <div className="secAnsTwoCont">
                <p id="secAnsTwo">{updateUser.secAnsTwo}</p>
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
            </div>
          </div>
          <div className="secQuesThree">
            <div className="secQuesThreeMain">
              <label>Security Question 3</label>
              <div className="secQuesThreeCont">
                <p id="secQuesThree">{updateUser.secQuestionThree}</p>
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
            </div>
            <button onClick={() => updateInfo("secQuesThree")}>edit</button>
          </div>
          <div className="secAnsThree">
            <div className="secAnsThreeMain">
              <label>Answer</label>
              <div className="secAnsThreeCont">
                <p id="secAnsThree">{updateUser.secAnsThree}</p>
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
        </div>
      </div>

      <div className="updateButton">
        <button onClick={() => updatePageChange("#updatePageA")}>back</button>
        <button onClick={() => updateProfile()}>Update</button>
        <button onClick={() => updatePageChange("#updatePageB")}>next</button>
      </div>
    </div>
  );
};

export default Settings;
