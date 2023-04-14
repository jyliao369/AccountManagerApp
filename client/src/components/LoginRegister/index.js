import React from "react";
import $ from "jquery";
import Axios from "axios";
import { useEffect, useState } from "react";
import { securityQuestion, dobMonths } from "../data";

import LockIcon from "@mui/icons-material/Lock";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LoginIcon from "@mui/icons-material/Login";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const LoginRegister = ({ setCurrentUser, currentUser }) => {
  const [loginUser, setLoginUser] = useState({ username: "", password: "" });
  const [registerUser, setRegisterUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneNum: "",
    dobMonth: "",
    dobDate: "",
    dobYear: "",
    securityOne: "",
    ansOne: "",
    securityTwo: "",
    ansTwo: "",
    securityThree: "",
    ansThree: "",
  });
  const [reTypePass, setReTypePass] = useState("");
  const [secQuestion, setSecQuestion] = useState(securityQuestion);

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
        registerUser.securityOne === "" ||
        registerUser.ansOne === "" ||
        registerUser.securityTwo === "" ||
        registerUser.ansTwo === "" ||
        registerUser.securityThree === "" ||
        registerUser.ansThree === "" ||
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

  const passwordCheck = () => {
    if (reTypePass.length >= registerUser.password.length) {
      if (
        registerUser.password !== reTypePass &&
        registerUser.password !== "" &&
        reTypePass !== ""
      ) {
        return <p>Not Matching</p>;
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
        phoneNum: "",
        dobMonth: "",
        dobDate: "",
        dobYear: "",
        securityOne: "",
        ansOne: "",
        securityTwo: "",
        ansTwo: "",
        securityThree: "",
        ansThree: "",
      });
      setReTypePass("");
    } else if (logReg === "reg") {
      $("#logForm").css({ display: "none" });
      $("#regForm").css({ display: "flex" });
      $("#regFormA").css({ display: "flex" });
      $("#regFormB").css({ display: "none" });
      setLoginUser({ username: "", password: "" });
    }
  };

  const loginRegister = (logReg) => {
    if (logReg === "login") {
      Axios.post(`http://localhost:3001/login`, {
        loginUser: loginUser,
      }).then((response) => {
        if (response.data.isLoggedin) {
          $("#logRegForm").css({ display: "none" });
          $("#appMainCont").css({ display: "flex" });
          setLoginUser({ username: "", password: "" });
          setCurrentUser(response.data.result[0]);
        } else {
          console.log(response.data.message);
        }
      });
    } else if (logReg === "register") {
      Axios.post(`http://localhost:3001/register`, {
        registerUser: registerUser,
      }).then((response) => {
        if (response.data.isLoggedin) {
          $("#logRegForm").css({ display: "none" });
          $("#logForm").css({ display: "flex" });
          $("#regForm").css({ display: "none" });
          $("#appMainCont").css({ display: "flex" });
          setRegisterUser({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            phoneNum: "",
            dobMonth: "",
            dobDate: "",
            dobYear: "",
            securityOne: "",
            ansOne: "",
            securityTwo: "",
            ansTwo: "",
            securityThree: "",
            ansThree: "",
          });
          setCurrentUser(response.data.result[0]);
        } else {
          console.log("register failed");
        }
      });
    }
  };

  const changeRegPage = (regPage) => {
    if (regPage === "#regFormA") {
      $(regPage).css({ display: "flex" });
      $("#regFormB").css({ display: "none" });
    } else {
      $(regPage).css({ display: "flex" });
      $("#regFormA").css({ display: "none" });
    }
  };

  return (
    <div className="logRegForm" id="logRegForm">
      <div className="logForm" id="logForm">
        <div className="logRegHeader">
          <h2>Login</h2>
        </div>
        <div className="logoMain">
          <div className="logoCont">
            <LockIcon id="lockIcon" />
            <VpnKeyIcon id="keyIcon" />
          </div>
        </div>
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
            type="password"
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
            <LoginIcon />
            <p>Login</p>
          </button>
        </div>
      </div>

      <div className="regForm" id="regForm">
        <div className="logRegHeader">
          <h2>Sign Up</h2>
        </div>
        <div className="regFormA" id="regFormA">
          <div className="usernameInput">
            <label>Username</label>
            <input
              placeholder="Ex. testninja101"
              value={registerUser.username}
              onChange={(event) =>
                setRegisterUser({
                  ...registerUser,
                  username: event.target.value,
                })
              }
            />
          </div>
          <div className="passwordInput">
            <label>Password</label>
            <input
              type="password"
              placeholder="**********"
              value={registerUser.password}
              onChange={(event) =>
                setRegisterUser({
                  ...registerUser,
                  password: event.target.value,
                })
              }
            />
          </div>
          <div className="passwordInput">
            <div>
              <label>Re-type Password</label>
              {passwordCheck()}
            </div>
            <input
              type="password"
              placeholder="**********"
              value={reTypePass}
              onChange={(event) => setReTypePass(event.target.value)}
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
          <div className="phoneNumInput">
            <label>Mobile Number</label>
            <input
              placeholder="Ex. 111-222-3333"
              value={registerUser.phoneNum}
              onChange={(event) =>
                setRegisterUser({
                  ...registerUser,
                  phoneNum: event.target.value,
                })
              }
            />
          </div>
          <div className="dobInputMain">
            <div className="dobMonthInput">
              <label>Month</label>
              <select
                value={registerUser.dobMonth}
                onChange={(event) =>
                  setRegisterUser({
                    ...registerUser,
                    dobMonth: event.target.value,
                  })
                }
              >
                <option>Month</option>
                {dobMonths.map((month, index) => (
                  <option key={index}>{month}</option>
                ))}
              </select>
            </div>
            <div className="dobDateInput">
              <label>Date</label>
              <input
                placeholder="Ex. 15"
                value={registerUser.dobDate}
                onChange={(event) =>
                  setRegisterUser({
                    ...registerUser,
                    dobDate: event.target.value,
                  })
                }
              />
            </div>
            <div className="dobYearInput">
              <label>Year</label>
              <input
                placeholder="Ex. 2021"
                value={registerUser.dobYear}
                onChange={(event) =>
                  setRegisterUser({
                    ...registerUser,
                    dobYear: event.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="regFormB" id="regFormB">
          <div className="secQuesOneInput">
            <label>Security Question 1:</label>
            <select
              value={registerUser.securityOne}
              onChange={(event) =>
                setRegisterUser({
                  ...registerUser,
                  securityOne: event.target.value,
                })
              }
            >
              <option>Question 1</option>
              {secQuestion.map((question, index) => (
                <option key={index}>{question}</option>
              ))}
            </select>
          </div>
          <div className="secAnsOneInput">
            <label>Answer</label>
            <input
              placeholder="Answer"
              value={registerUser.ansOne}
              onChange={(event) =>
                setRegisterUser({
                  ...registerUser,
                  ansOne: event.target.value,
                })
              }
            />
          </div>
          <div className="secQuesTwoInput">
            <label>Security Question 2:</label>
            <select
              value={registerUser.securityTwo}
              onChange={(event) =>
                setRegisterUser({
                  ...registerUser,
                  securityTwo: event.target.value,
                })
              }
            >
              <option>Question 2</option>
              {secQuestion.map((question, index) => (
                <option key={index}>{question}</option>
              ))}
            </select>
          </div>
          <div className="secAnsTwoInput">
            <label>Answer</label>
            <input
              placeholder="Answer"
              value={registerUser.ansTwo}
              onChange={(event) =>
                setRegisterUser({
                  ...registerUser,
                  ansTwo: event.target.value,
                })
              }
            />
          </div>
          <div className="secQuesThreeInput">
            <label>Security Question 3:</label>
            <select
              value={registerUser.securityThree}
              onChange={(event) =>
                setRegisterUser({
                  ...registerUser,
                  securityThree: event.target.value,
                })
              }
            >
              <option>Question 3</option>
              {secQuestion.map((question, index) => (
                <option key={index}>{question}</option>
              ))}
            </select>
          </div>
          <div className="secAnsThreeInput">
            <label>Answer</label>
            <input
              placeholder="Answer"
              value={registerUser.ansThree}
              onChange={(event) =>
                setRegisterUser({
                  ...registerUser,
                  ansThree: event.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="registerButton">
          <button onClick={() => changeRegPage("#regFormA")}>
            <ArrowBackIosNewIcon />
          </button>
          <button
            disabled={confirm("reg")}
            onClick={() => loginRegister("register")}
          >
            <LoginIcon />
            <p>Login</p>
          </button>
          <button onClick={() => changeRegPage("#regFormB")}>
            <ArrowForwardIosIcon />
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
