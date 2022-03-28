const express = require("express");
const commons = require("./Common");
const router = express.Router();

router.post("/register", (req, res) => {
  console.log(`DEBUG: Received request to register user`);
  console.log(req.body);

  const result = req.body;
  console.log(result);

  if (
    (!result.uemail && !result.upassword) ||
    result.upassword.trim() == "" ||
    result.uemail.trim() == ""
  ) {
    return res.send({
      status: 400,
      message: "Name or Email, password is required",
    });
  }

  commons.userObject.uemail = result.uemail;
  commons.userObject.upassword = result.upassword;
  delete commons.userObject.tfa;

  return res.send({
    status: 200,
    message: "User is successfully registered",
  });
});

module.exports = router;
