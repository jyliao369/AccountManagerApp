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

  const updateInfo = (identifier) => {
    // console.log("hello");
    // console.log(identifier);
    if ($("#" + identifier + "Input").css(`display`) === "none") {
      $("#" + identifier + "Input").css({ display: "flex" });
      $("#" + identifier).css({ display: "none" });
    } else if ($("#" + identifier + "Input").css(`display`) === "flex") {
      $("#" + identifier + "Input").css({ display: "none" });
      $("#" + identifier).css({ display: "flex" });
    }
  };

  const check = () => {
    console.log(updateUser);
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
                  onChange={(event) =>
                    setUpdateUser({
                      ...updateUser,
                      lastName: event.target.value,
                    })
                  }
                />
              </div>
            </div>
            <button onClick={() => updateInfo()}>edit</button>
          </div>
          <div className="usernameUp">
            <label>Username</label>
            <div>
              <p id="userNameUp">{updateUser.username}</p>
              <input
                value={updateUser.username}
                id="userNameUpInput"
                onChange={(event) =>
                  setUpdateUser({ ...updateUser, username: event.target.value })
                }
              />
              <button onClick={() => updateInfo("userNameUp")}>edit</button>
            </div>
          </div>
          <div className="emailUp">
            <label>Email</label>
            <div>
              <p id="emailUp">{updateUser.email}</p>
              <input
                value={updateUser.email}
                id="emailUpInput"
                onChange={(event) =>
                  setUpdateUser({ ...updateUser, email: event.target.value })
                }
              />
              <button onClick={() => updateInfo("emailUp")}>edit</button>
            </div>
          </div>
          <div className="passwordUp">
            <label>Password</label>
            <div>
              <p id="passwordUp">{updateUser.password}</p>
              <input
                value={updateUser.password}
                id="passwordUpInput"
                type="password"
                onChange={(event) =>
                  setUpdateUser({ ...updateUser, password: event.target.value })
                }
              />
              <button onClick={() => updateInfo("passwordUp")}>edit</button>
            </div>
          </div>
          <div className="phoneNumUp">
            <label>Phone Number</label>
            <div>
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
              <button onClick={() => updateInfo("phoneNumUp")}>edit</button>
            </div>
          </div>
        </div>

        <div className="updatePageB" id="updatePageB">
          <div className="dobUpInput">
            <div className="dobMonthUp">
              <label>Month</label>
              <div>
                <p>{updateUser.dobMonth}</p>
                <input value={updateUser.dobMonth} />
              </div>
            </div>
            <div className="dobDateUp">
              <label>Date</label>
              <div>
                <p>{updateUser.dobDate}</p>
                <input value={updateUser.dobDate} />
              </div>
            </div>
            <div className="dobYearUp">
              <label>Year</label>
              <div>
                <p>{updateUser.dobYear}</p>
                <input value={updateUser.dobYear} />
              </div>
            </div>
            <button onClick={() => updateInfo()}>edit</button>
          </div>
          <div className="secQuesOne">
            <label>Security Question 1</label>
            <div>
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
              <button onClick={() => updateInfo("secQuesOne")}>edit</button>
            </div>
          </div>
          <div className="secAnsOne">
            <label>Answer</label>
            <div>
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
              <button onClick={() => updateInfo("secAnsOne")}>edit</button>
            </div>
          </div>
          <div className="secQuesTwo">
            <label>Security Question 2</label>
            <div>
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
              <button onClick={() => updateInfo("secQuesTwo")}>edit</button>
            </div>
          </div>
          <div className="secAnsTwo">
            <label>Answer</label>
            <div>
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
              <button onClick={() => updateInfo("secAnsTwo")}>edit</button>
            </div>
          </div>
          <div className="secQuesThree">
            <label>Security Question 3</label>
            <div>
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
              <button onClick={() => updateInfo("secQuesThree")}>edit</button>
            </div>
          </div>
          <div className="secAnsThree">
            <label>Answer</label>
            <div>
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
              <button onClick={() => updateInfo("secAnsThree")}>edit</button>
            </div>
          </div>
        </div>
      </div>

      <div className="updateButton">
        <button onClick={() => updatePageChange("#updatePageA")}>back</button>
        <button onClick={() => check()}>check</button>
        <button onClick={() => updatePageChange("#updatePageB")}>next</button>
      </div>
    </div>
  );
};

export default Settings;
