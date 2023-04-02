const express = require("express");
const cors = require("cors");
const { urlencoded } = require("body-parser");
const mysql = require("mysql2");

const app = express();

// CORS SETUP
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELET"],
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

// app.get(`/`, (req, res) => {
//   db.query(`SELECT * FROM users`, [], (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json({ result });
//     }
//   });
// });

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
    `SELECT * FROM userdb WHERE username = ?`,
    [loginUser.username],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length > 0) {
          console.log(result[0].password === loginUser.password);
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

// USERSACCOUNTS
app.post(`/addAcc`, (req, res) => {
  const newAcc = req.body.newAccount;
  console.log(newAcc);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server running smoothly on port ${PORT}`);
});
