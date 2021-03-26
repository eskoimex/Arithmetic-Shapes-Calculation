const {
  SignUpUserController,
  LoginUserController,
} = require("./../controller/majors/auth.controller");

const express = require("express")
const router = express.Router();

router.route("/signup").post(SignUpUserController);


router.route("/login").post(LoginUserController);

module.exports = router
