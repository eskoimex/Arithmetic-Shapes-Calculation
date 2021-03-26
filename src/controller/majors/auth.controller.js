const { handleResSuccess } = require("../../utils/success.util");
const  { loginUser, createUser } = require("../actions/auth.action");
//const loginUser  = require("../actions/auth.action");

const {
  validateSignUpData,
  validateLoginData,
} = require("./../../validators/auth.validator");
const { handleResError } = require("../../utils/err.util");
const dotenv = require("dotenv");
dotenv.config();



const SignUpUserController = async (req, res) => {
  try {
    let { err, value } = validateSignUpData(req.body);
    if (err) handleResError(res, err.details[0], 400);
     else {
      let { err, token } =  createUser(value);
      if (err) handleResError(res, err, 400);
      else handleResSuccess(res, "Signup successful", `Bearer ${token}`, 201);
    }
  } catch (e) {
    handleResError(res, e, 400);
  }
};

const LoginUserController = async (req, res) => {
  try {
    let { err, value } = validateLoginData(req.body);
    if (err) handleResError(res, err.details[0], 400);
    else {
      let { err, token } = await loginUser(value);
      if (err) handleResError(res, err, 400);
      else handleResSuccess(res, "login successful", `Bearer ${token}`, 201);
    }
  } catch (e) {
    handleResError(res, e, 400);
  }
};



module.exports = {SignUpUserController, LoginUserController};

