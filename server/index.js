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

app.get(`/`, (req, res) => {
  db.query(`SELECT * FROM users`, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ result });
    }
  });
});

// LOGIN/REGISTER
app.post(`/register`, (req, res) => {
  const registerUser = req.body.registerUser;
});

app.post(`/login`, (req, res) => {
  const loginUser = req.body.loginUser;
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
