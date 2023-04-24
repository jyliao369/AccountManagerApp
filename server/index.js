const express = require("express");
const cors = require("cors");
const { urlencoded } = require("body-parser");
const mysql = require("mysql2");

const app = express();

// CORS SETUP
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// BODYPARSER, NEEDED TO PASS DATA FROM FRONT TO BACK
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "rootpassword",
  database: "accmanagerdb",
});

// LOGIN/REGISTER
app.post(`/register`, (req, res) => {
  const registerUser = req.body.registerUser;
  db.query(
    `INSERT INTO userdb
    (username, password, email, firstName, lastName, mobileNum, 
    dobMonth, dobDate, dobYear, secQuestionOne, secAnsOne, 
    secQuestionTwo, secAnsTwo, secQuestionThree, secAnsThree)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      registerUser.username,
      registerUser.password,
      registerUser.email,
      registerUser.firstName,
      registerUser.lastName,
      registerUser.phoneNum,
      registerUser.dobMonth,
      registerUser.dobDate,
      registerUser.dobYear,
      registerUser.securityOne,
      registerUser.ansOne,
      registerUser.securityTwo,
      registerUser.ansTwo,
      registerUser.securityThree,
      registerUser.ansThree,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        db.query(
          `SELECT * FROM userdb WHERE username = ?`,
          [registerUser.username],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send({ isLoggedin: true, result });
            }
          }
        );
      }
    }
  );
});

app.post(`/login`, (req, res) => {
  const loginUser = req.body.loginUser;
  db.query(
    `SELECT id, username, password, email, firstName, lastName 
    FROM userdb WHERE username = ?`,
    [loginUser.username],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length > 0) {
          if (result[0].password === loginUser.password) {
            res.send({ isLoggedin: true, result });
          } else {
            res.send({
              isLoggedin: false,
              message: "Incorrect password or username",
            });
          }
        } else {
          res.send({ isLoggedin: false, message: "No Accounts found" });
        }
      }
    }
  );
});

app.post(`/getUser`, (req, res) => {
  let userID = req.body.userID;
  // console.log(userID);
  db.query(`SELECT * FROM userdb WHERE id =?`, [userID], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post(`/updateUser`, (req, res) => {
  const updateUser = req.body.updateUser;
  db.query(
    `UPDATE userdb
      SET username = '${updateUser.username}', password = '${updateUser.password}', email = '${updateUser.email}',
        firstName = '${updateUser.firstName}', lastName = '${updateUser.lastName}', mobileNum = '${updateUser.mobileNum}',
        dobMonth = '${updateUser.dobMonth}', dobDate = '${updateUser.dobDate}', dobYear = '${updateUser.dobYear}',
        secQuestionOne = '${updateUser.secQuestionOne}', secAnsOne= '${updateUser.secAnsOne}', secQuestionTwo = '${updateUser.secQuestionTwo}', 
        secAnsTwo= '${updateUser.secAnsTwo}', secQuestionThree = '${updateUser.secQuestionThree}', secAnsThree = '${updateUser.secAnsThree}'
      WHERE id = ${updateUser.id}`,
    [],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        db.query(
          `SELECT * FROM userdb WHERE id = ?`,
          [updateUser.id],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send({ update: true, result });
            }
          }
        );
      }
    }
  );
});

app.delete(`/deleteUser/:userID`, (req, res) => {
  const userID = req.params.userID;

  db.query(`DELETE FROM userdb WHERE id = ${userID}`, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      db.query(
        `DELETE FROM accountdb WHERE userID = ${userID}`,
        [],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send({ message: "deleted", result });
          }
        }
      );
    }
  });
});

// USERSACCOUNTS
app.post(`/addAcc`, (req, res) => {
  const newAcc = req.body.newAccount;
  const userID = req.body.userID;
  db.query(
    `INSERT INTO accountdb
     (userID, accName, accUsername, accPassword,
      accEmail, accPhoneNum, accTwoStep, accSecQues,
      accSecQueOne, accAnsOne, accSecQueTwo, accAnsTwo,
      accSecQueThree, accAnsThree) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      userID,
      newAcc.accName,
      newAcc.accUsername,
      newAcc.accPassword,
      newAcc.accEmail,
      newAcc.accPhoneNum,
      newAcc.accTwoStep,
      newAcc.accSecQues,
      newAcc.accSecOne,
      newAcc.accAnsOne,
      newAcc.accSecTwo,
      newAcc.accAnsTwo,
      newAcc.accSecThree,
      newAcc.accAnsThree,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        db.query(
          `SELECT id, accName FROM accountdb WHERE userID = ?`,
          [userID],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          }
        );
      }
    }
  );
});

app.post(`/getAcc`, (req, res) => {
  const userID = req.body.userID;
  db.query(
    `SELECT id, accName FROM accountdb WHERE userID = ?`,
    [userID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post(`/getSpecAcc`, (req, res) => {
  const accountID = req.body.accountID;
  db.query(
    `SELECT * FROM accountdb WHERE id = ?`,
    [accountID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post(`/updateAcc`, (req, res) => {
  const updateAcc = req.body.updateAcc;
  const userID = req.body.userID;
  // console.log(updateAcc);
  // console.log(userID);

  db.query(
    `UPDATE accountdb
      SET accName = '${updateAcc.accName}', accUsername = '${
      updateAcc.accUsername
    }', accPassword = '${updateAcc.accPassword}',
        accEmail = '${updateAcc.accEmail}', accPhoneNum = '${
      updateAcc.accPhoneNum
    }', accTwoStep = '${Number(updateAcc.accTwoStep)}',
        accSecQues = '${Number(updateAcc.accSecQues)}', accSecQueOne = '${
      updateAcc.accSecQueOne
    }', accAnsOne = '${updateAcc.accAnsOne}',
        accSecQueTwo = '${updateAcc.accSecQueTwo}', accAnsTwo = '${
      updateAcc.accAnsTwo
    }', accSecQueThree = '${updateAcc.accSecQueThree}',
        accAnsThree = '${updateAcc.accAnsThree}'
      WHERE id = ${updateAcc.id}`,
    [],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        db.query(
          `SELECT id, accName FROM accountdb WHERE userID = ?`,
          [userID],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send({ update: true, result });
            }
          }
        );
      }
    }
  );
});

app.post(`/deleteAcc`, (req, res) => {
  const accID = req.body.accID;
  const userID = req.body.userID;

  db.query(
    `DELETE FROM accountdb WHERE userID = ${userID} AND id = ${accID}`,
    [],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        db.query(
          `SELECT id, accName FROM accountdb WHERE userID = ?`,
          [userID],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send({ message: "Deleted", result });
            }
          }
        );
      }
    }
  );
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server running smoothly on port ${PORT}`);
});
