import React from "react";
import $ from "jquery";

const Settings = () => {
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
    <div className="settingsPage" id="settingsPage">
      <div className="settingsForm">
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
            // placeholder="**********"
            // value={registerUser.password}
            // onChange={(event) =>
            //   setRegisterUser({ ...registerUser, password: event.target.value })
            // }
            />
          </div>
          <div className="phoneNumUpInput">
            <label>Phone Number</label>
            <input />
          </div>
          <div className="dobUpInput">
            <div className="dobMonthUp">
              <label>Month</label>
              <input />
            </div>
            <div className="dobDateUp">
              <label>Date</label>
              <input />
            </div>
            <div className="dobYearUp">
              <label>Year</label>
              <input />
            </div>
          </div>
        </div>

        <div className="updatePageB" id="updatePageB">
          <div>
            <label>Security Question 1</label>
            <input />
          </div>
          <div>
            <label>Answer</label>
            <input />
          </div>
          <div>
            <label>Security Question 2</label>
            <input />
          </div>
          <div>
            <label>Answer</label>
            <input />
          </div>
          <div>
            <label>Security Question 3</label>
            <input />
          </div>
          <div>
            <label>Answer</label>
            <input />
          </div>
        </div>

        <div className="updateButton">
          <button onClick={() => updatePageChange("#updatePageA")}>back</button>
          <button disabled={confirmUpdate()}>Update</button>
          <button onClick={() => updatePageChange("#updatePageB")}>next</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
