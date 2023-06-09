import React from "react";
import $ from "jquery";
import Axios from "axios";
import { useEffect, useState } from "react";
import { securityQuestion, dobMonths } from "../data";

import LockIcon from "@mui/icons-material/Lock";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LoginIcon from "@mui/icons-material/Login";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CheckIcon from "@mui/icons-material/Check";

const LoginRegister = ({
  setCurrentUser,
  currentUser,
  setCurrentPage,
  currentPage,
  setCurrentIcon,
  currentIcon,
}) => {
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
  const [logNotify, setLogNotify] = useState("");
  const [currentRegPage, setCurrentRegPage] = useState("log");
  const [curRegFormPage, setCurRegFormPage] = useState("#regFormA");

  const confirm = (logReg) => {
    if (logReg === "log") {
      if (loginUser.username !== "" && loginUser.password !== "") {
        return false;
      } else {
        return true;
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
    if (logReg !== currentRegPage) {
      if (logReg === "log") {
        setCurrentRegPage("log");
        $("#regForm").animate({ opacity: 0 }, function () {
          $("#regForm").css({ display: "none", opacity: 1 });
          setTimeout(() => {
            $("#logForm").css({ opacity: 0, display: "flex" });
            $("#logForm").animate({ opacity: 1 });
          });
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
        });
      } else if (logReg === "reg") {
        setCurrentRegPage("reg");
        setCurRegFormPage("#regFormA");
        $("#logForm").animate({ opacity: 0 }, function () {
          $("#logForm").css({ display: "none", opacity: 1 });
          setTimeout(() => {
            $("#regFormA").css({ display: "flex", opacity: 1 });
            $("#regFormB").css({ display: "none", opacity: 1 });
            $("#regForm").css({ opacity: 0, display: "flex" });
            $("#regForm").animate({ opacity: 1 });
            setLoginUser({ username: "", password: "" });
            // setLogNotify("");
            // $("#logMessage").css({ display: "none" });
          });
        });
      }
    }
  };

  const loginRegister = (logReg) => {
    if (logReg === "login") {
      setTimeout(() => {
        $("#loginBtn")
          .children()
          .animate({ opacity: 0 }, function () {
            $("#loginBtn").children().css({ display: "none" });
            $("#loginBtn");
            $("#loginBtn").animate(
              {
                width: "2.75rem",
                height: "2.75rem",
              },
              function () {
                $("#loginBtn").css({
                  borderTop: ".35rem solid #269435",
                  animation: "spin 0.5s linear infinite",
                });
              }
            );
          });
      });
      Axios.post(`http://localhost:3001/login`, {
        loginUser: loginUser,
      }).then((response) => {
        if (response.data.isLoggedin) {
          setCurrentUser(response.data.result[0]);
          setTimeout(() => {
            $("#loginBtn").css({
              borderTop: "",
              animation: "",
            });
            $("#checkMark").css({ display: "flex" });
            $("#checkMark").animate({ opacity: 1 });
          }, 5000);
          setTimeout(() => {
            $("#logRegForm").animate({ opacity: 0 }, function () {
              $("#logRegForm").css({ display: "none", opacity: 1 });
              $("#appMainCont").css({ display: "flex", opacity: 0 });
              $("#appMainCont").animate({ opacity: 1 }, function () {});
              setLoginUser({ username: "", password: "" });
              setCurrentPage("#profileCard");
              setCurrentIcon("#homeIcon");
              $("#homeIcon")
                .parent()
                .css({ animation: "float 2s linear infinite" });
            });
          }, 7000);
          setTimeout(() => {
            $("#loginBtn")
              .children()
              .animate({ opacity: 0 }, function () {
                $("#loginBtn").children().css({ display: "none" });
                $("#loginBtn").animate(
                  {
                    width: "10rem",
                    height: "3rem",
                  },
                  function () {
                    $("#loginMark").css({ display: "flex" });
                    $("#loginMark").animate({ opacity: 1 });
                    $("#loginMessage").css({ display: "flex" });
                    $("#loginMessage").animate({ opacity: 1 });
                    $("#loginBtn").prop("disabled", true);
                  }
                );
              });
          }, 8000);
        } else {
          setLogNotify(response.data.message);
          setTimeout(() => {
            $("#loginBtn").css({
              borderTop: "",
              animation: "",
            });
            $("#errorMark").css({ display: "flex" });
            $("#errorMark").animate({ opacity: 1 });
            $("#logNotify").animate({ opacity: 1 });
          }, 5000);
          setTimeout(() => {
            $("#loginBtn")
              .children()
              .animate({ opacity: 0 }, function () {
                $("#loginBtn").children().css({ display: "none" });
                $("#logNotify").animate({ opacity: 0 });
                $("#loginBtn").animate(
                  {
                    width: "10rem",
                    height: "2.75rem",
                  },
                  function () {
                    $("#loginMark").css({ display: "flex" });
                    $("#loginMark").animate({ opacity: 1 });
                    $("#loginMessage").css({ display: "flex" });
                    $("#loginMessage").animate({ opacity: 1 });
                  }
                );
              });
          }, 8000);
        }
      });
    } else if (logReg === "register") {
      setTimeout(() => {
        $("#regSubmitBtn")
          .children()
          .animate({ opacity: 0 }, function () {
            $("#regSubmitBtn").children().css({ display: "none" });
            $("#regSubmitBtn");
            $("#regSubmitBtn").animate(
              {
                width: "2.75rem",
                height: "2.75rem",
              },
              function () {
                $("#regSubmitBtn").css({
                  borderTop: ".35rem solid #3749BE",
                  animation: "spin 0.5s linear infinite",
                });
              }
            );
          });
      });
      Axios.post(`http://localhost:3001/register`, {
        registerUser: registerUser,
      }).then((response) => {
        if (response.data.isLoggedin) {
          setCurrentUser(response.data.result[0]);

          setTimeout(() => {
            $("#regSubmitBtn").css({
              borderTop: "",
              animation: "",
            });
            $("#regCheckMark").css({ display: "flex" });
            $("#regCheckMark").animate({ opacity: 1 });
          }, 5000);
          setTimeout(() => {
            $("#logRegForm").animate({ opacity: 0 }, function () {
              $("#logRegForm").css({ display: "none", opacity: 1 });
              $("#appMainCont").css({ display: "flex", opacity: 0 });
              $("#appMainCont").animate({ opacity: 1 }, function () {});
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
              setCurrentPage("#profileCard");
            });
          }, 7000);
          setTimeout(() => {
            $("#regSubmitBtn")
              .children()
              .animate({ opacity: 0 }, function () {
                $("#regSubmitBtn").children().css({ display: "none" });
                $("#regSubmitBtn").animate(
                  {
                    width: "10rem",
                    height: "2.75rem",
                  },
                  function () {
                    $("#regMark").css({ display: "flex" });
                    $("#regMark").animate({ opacity: 1 });
                    $("#regMessage").css({ display: "flex" });
                    $("#regMessage").animate({ opacity: 1 });
                    $("#regForm").css({ display: "none" });
                    $("#regFormA").css({ display: "flex" });
                    $("#regFormA").css({ display: "none" });
                    $("#logForm").css({ display: "flex" });
                    setCurrentRegPage("log");
                  }
                );
              });
          }, 8000);
        } else {
          console.log("register failed");
        }
      });
    }
  };

  const changeRegPage = (regPage) => {
    if (curRegFormPage !== regPage) {
      if (regPage === "#regFormA") {
        setCurRegFormPage("#regFormA");
        $("#regFormB").animate({ opacity: 0 }, function () {
          $("#regFormB").css({ display: "none" });
          $("#regFormA").css({ display: "flex", opacity: 0 });
          $("#regFormA").animate({ opacity: 1 });
        });
      } else {
        setCurRegFormPage("#regFormB");
        $("#regFormA").animate({ opacity: 0 }, function () {
          $("#regFormA").css({ display: "none" });
          $("#regFormB").css({ display: "flex", opacity: 0 });
          $("#regFormB").animate({ opacity: 1 });
        });
      }
    }
  };

  return (
    <div className="logRegForm" id="logRegForm">
      <div className="logRegFormCont">
        <div className="logForm" id="logForm">
          <div className="logRegHeader">
            <h2>Login</h2>
          </div>
          <div className="logFormCont">
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
            <div className="logNotify" id="logNotify">
              <p id="logMessage">
                <ErrorOutlineIcon id="messageIcon" /> {logNotify}
              </p>
            </div>
          </div>
          <div className="loginButton" id="loginButton">
            <button
              id="loginBtn"
              disabled={confirm("log")}
              onClick={() => loginRegister("login")}
            >
              <CheckIcon id="checkMark" />
              <PriorityHighIcon id="errorMark" />
              <LoginIcon id="loginMark" />
              <p id="loginMessage">Login</p>
            </button>
          </div>
        </div>

        <div className="regForm" id="regForm">
          <div className="logRegHeader">
            <h2>Sign Up</h2>
          </div>
          <div className="regFormCont">
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
                  placeholder="Ex. testninja101@gmail.com"
                  value={registerUser.email}
                  onChange={(event) =>
                    setRegisterUser({
                      ...registerUser,
                      email: event.target.value,
                    })
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
          </div>
          <div className="registerButton">
            <div className="registerButtonCont" id="registerButtonCont">
              <button
                className="leftRegBtn"
                id="leftRegBtn"
                onClick={() => changeRegPage("#regFormA")}
              >
                <ChevronLeftIcon />
              </button>
              <button
                className="regSubmitBtn"
                id="regSubmitBtn"
                disabled={confirm("reg")}
                onClick={() => loginRegister("register")}
              >
                <CheckIcon id="regCheckMark" />
                <LoginIcon id="regMark" />
                <p id="regMessage">Sign In</p>
              </button>
              <button
                className="rightRegBtn"
                id="rightRegBtn"
                onClick={() => changeRegPage("#regFormB")}
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
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
