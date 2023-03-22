const express = require("express");
const cors = require("cors");
const { urlencoded } = require("body-parser");

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

app.get(`/`, (req, res) => {
  res.send({ message: "hello" });
});

// LOGIN/REGISTER
app.post(`/register`, (req, res) => {
  const registerUser = req.body.registerUser;

  console.log(registerUser);
});

app.post(`/login`, (req, res) => {
  const loginUser = req.body.loginUser;

  console.log(loginUser);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server running smoothly on port ${PORT}`);
});
