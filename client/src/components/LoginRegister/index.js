import React from "react";
import $ from "jquery";

const LoginRegister = () => {
  const switchLogReg = (logReg) => {
    if (logReg === "log") {
      $("#logForm").css({ display: "flex" });
      $("#regForm").css({ display: "none" });
    } else if (logReg === "reg") {
      $("#logForm").css({ display: "none" });
      $("#regForm").css({ display: "flex" });
    }
  };

  return (
    <div className="logRegForm">
      <div className="logForm" id="logForm">
        <div className="logRegHeader">
          <h2>Login</h2>
        </div>
        <div className="logUserInput">
          <label>Username</label>
          <input placeholder="Ex. testninja101" />
        </div>
        <div className="logPassInput">
          <label>Password</label>
          <input placeholder="**********" />
        </div>
        <div className="loginButton">
          <button>Login</button>
        </div>
      </div>

      <div className="regForm" id="regForm">
        <div className="logRegHeader">
          <h2>Sign Up</h2>
        </div>
        <div className="fullNameInput">
          <div className="nameInput">
            <label>First Name</label>
            <input placeholder="Ex. John" />
          </div>
          <div className="nameInput">
            <label>Last Name</label>
            <input placeholder="Ex. Allen" />
          </div>
        </div>
        <div className="usernameInput">
          <label>Username</label>
          <input placeholder="Ex. testninja101" />
        </div>
        <div className="emailInput">
          <label>Email</label>
          <input placeholder="Ex. testninja101" />
        </div>
        <div className="passwordInput">
          <label>Password</label>
          <input placeholder="**********" />
        </div>
        <div className="passwordInput">
          <label>Re-type Password</label>
          <input placeholder="**********" />
        </div>
        <div className="registerButton">
          <button>Register</button>
        </div>
      </div>

      <div className="logToReg">
        <button onClick={() => switchLogReg("log")}>Login</button>
        <button onClick={() => switchLogReg("reg")}>Sign Up</button>
      </div>
    </div>
  );
};

export default LoginRegister;
