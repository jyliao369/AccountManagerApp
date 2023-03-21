import React from "react";

const Settings = () => {
  return (
    <div className="settingsPage" id="settingsPage">
      <div className="settingsForm">
        <div className="settingsHeader">
          <h2>Sign Up</h2>
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
        <div className="updateButton">
          <button
          // disabled={confirm("reg")}
          // onClick={() => loginRegister("register")}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;