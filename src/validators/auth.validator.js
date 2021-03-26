const Joi = require("joi");

const SignUpSchema = Joi.object({
  username: Joi.string().min(2).max(40),
  email: Joi.string().email().required(),
  password: Joi.string(),
});

const LoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

 const validateSignUpData = (data) => {
  let { error, value } = SignUpSchema.validate(data);
  return { err: error, value };
};
const validateLoginData = (data) => {
  let { error, value } = LoginSchema.validate(data);
  return { err: error, value };
};


module.exports = { validateSignUpData, validateLoginData };
