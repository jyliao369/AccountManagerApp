const express = require("express");
const cors = require("cors");

const app = express();

// CORS SETUP
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELET"],
    credentials: true,
  })
);

app.get(`/`, (req, res) => {
  res.send({ message: "hello" });
});

app.get(`/test`, (req, res) => {
  res.send("test");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server running smoothly on port ${PORT}`);
});
