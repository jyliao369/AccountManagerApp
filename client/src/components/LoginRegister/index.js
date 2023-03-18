import React from "react";
import $ from "jquery";
import { useEffect, useState } from "react";

const LoginRegister = () => {
  const [loginUser, setLoginUser] = useState({ username: "", password: "" });
  const [registerUser, setRegisterUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const [reTypePass, setReTypePass] = useState("");

  const confirm = (logReg) => {
    if (logReg === "log") {
      if (loginUser.username === "" && loginUser.password === "") {
        return true;
      } else {
        return false;
      }
    } else if (logReg === "reg") {
      if (
        registerUser.firstName === "" ||
        registerUser.lastName === "" ||
        registerUser.username === "" ||
        registerUser.email === "" ||
        registerUser.password === "" ||
        reTypePass === "" ||
        reTypePass !== registerUser.password
      ) {
        return true;
      } else {
        return false;
      }
    }
  };

  const switchLogReg = (logReg) => {
    if (logReg === "log") {
      $("#logForm").css({ display: "flex" });
      $("#regForm").css({ display: "none" });
      setRegisterUser({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
      });
      setReTypePass("");
    } else if (logReg === "reg") {
      $("#logForm").css({ display: "none" });
      $("#regForm").css({ display: "flex" });
      setLoginUser({ username: "", password: "" });
    }
  };

  const loginRegister = (logReg) => {
    if (logReg === "login") {
      $("#logRegForm").css({ display: "none" });
      $("#appMainCont").css({ display: "flex" });
      setLoginUser({ username: "", password: "" });
    } else if (logReg === "register") {
      $("#logRegForm").css({ display: "none" });
      $("#appMainCont").css({ display: "flex" });
      setRegisterUser({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="logRegForm" id="logRegForm">
      <div className="logForm" id="logForm">
        <div className="logRegHeader">
          <h2>Login</h2>
        </div>
        <div className="logo"></div>
        <div className="logUserInput">
          <label>Username</label>
          <input
            placeholder="Ex. testninja101"
            value={loginUser.username}
            onChange={(event) =>
              setLoginUser({ ...loginUser, username: event.target.value })
            }
          />
        </div>
        <div className="logPassInput">
          <label>Password</label>
          <input
            placeholder="**********"
            value={loginUser.password}
            onChange={(event) =>
              setLoginUser({ ...loginUser, password: event.target.value })
            }
          />
        </div>
        <div className="loginButton">
          <button
            disabled={confirm("log")}
            onClick={() => loginRegister("login")}
          >
            Login
          </button>
        </div>
      </div>

      <div className="regForm" id="regForm">
        <div className="logRegHeader">
          <h2>Sign Up</h2>
        </div>
        <div className="fullNameInput">
          <div className="nameInput">
            <label>First Name</label>
            <input
              placeholder="Ex. John"
              value={registerUser.firstName}
              onChange={(event) =>
                setRegisterUser({
                  ...registerUser,
                  firstName: event.target.value,
                })
              }
            />
          </div>
          <div className="nameInput">
            <label>Last Name</label>
            <input
              placeholder="Ex. Allen"
              value={registerUser.lastName}
              onChange={(event) =>
                setRegisterUser({
                  ...registerUser,
                  lastName: event.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="usernameInput">
          <label>Username</label>
          <input
            placeholder="Ex. testninja101"
            value={registerUser.username}
            onChange={(event) =>
              setRegisterUser({ ...registerUser, username: event.target.value })
            }
          />
        </div>
        <div className="emailInput">
          <label>Email</label>
          <input
            placeholder="Ex. testninja101"
            value={registerUser.email}
            onChange={(event) =>
              setRegisterUser({ ...registerUser, email: event.target.value })
            }
          />
        </div>
        <div className="passwordInput">
          <label>Password</label>
          <input
            placeholder="**********"
            value={registerUser.password}
            onChange={(event) =>
              setRegisterUser({ ...registerUser, password: event.target.value })
            }
          />
        </div>
        <div className="passwordInput">
          <label>Re-type Password</label>
          <input
            placeholder="**********"
            value={reTypePass}
            onChange={(event) => setReTypePass(event.target.value)}
          />
        </div>
        <div className="registerButton">
          <button
            disabled={confirm("reg")}
            onClick={() => loginRegister("register")}
          >
            Register
          </button>
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
