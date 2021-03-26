const  handleResError  = require("../../utils/err.util");
const  User  = require("../../models/user");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { secretKey } = process.env;
const express = require("express");


 const createUser = async ( req, res) => {

  try {
           let email = req.body;
          let password = req.body.password;
          let username = req.body.username;

    // const { username, email, password }=req.body;
           console.log("mmp", email)

    let foundExistingUser = await User.findOne({
        email: email
    });
    let err;
    let user;
    if (foundExistingUser && foundExistingUser !== null) {
      console.log("oooo", foundExistingUser.password)
      err = {
        message: "account already exist. Login instead!",
      };
      return { err, user };
    } else {
      let pwSalt = await bcrypt.genSaltSync(10);
      let pwHash = await bcrypt.hashSync(password, pwSalt);
      let registeredUser = await User.create({
        username: username,
        email: email,
        password: pwHash,
      });
      user = registeredUser.toJSON();
      return { err, user };
    }
  
  } catch (err) {
    console.log(err);
    return { err };
  }

};


const loginUser = async (req, res) =>
  {
     //let loginDetails = req.body;
    // console.log(req.body)
  try {
          let email = req.body;
          let password = req.body;
          console.log(email)
    let foundExistingUser = await User.findOne({
      where: {
        email: email,
      },
    });
    if (foundExistingUser) {
      let correctPW = bcrypt.compareSync(
        password,
        foundExistingUser.password
      );
      console.log(correctPW);
      if (!correctPW)
        return {
          err: {
            message: "incorrect password",
          },
        };
      else {
        let { id, email } = foundExistingUser;
        let options = {
          expiresIn: "12h",
          issuer: "rubikpay-hasher",
        };
        let token = await JWT.sign(
          { id, email, isActive },
          secretKey,
          options
        );
        return { token };
      }
    } else if (foundExistingUser === null) {
      let err = { message: "User does not exist. Signup instead!" };
      return { err };
    }
  
  } catch (err) {
    return { err };
  }

};

module.exports = { createUser, loginUser };
