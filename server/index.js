const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const login = require("./routes/Login");
const register = require("./routes/Register");
const tfa = require("./routes/TwoFactAuth");

app.use(bodyParser.json());
app.use(cors());
const server = require("http").createServer(app);

app.use(login);
app.use(register);
app.use(tfa);

server.listen("4000", () => {
  console.log("The server started running on http://localhost:4000");
});
