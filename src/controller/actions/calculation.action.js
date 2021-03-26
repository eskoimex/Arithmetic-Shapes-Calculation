const  handleResError  = require("../../utils/err.util");
const  User  = require("../../models/user");
const  Calculations  = require("../../models/calculation.model");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { secretKey } = process.env;



const shapeCalculation = async (req, res) =>
  {
     let options = {
          expiresIn: "12h",
          issuer: "godark-hasher",
        };
        let token = await JWT.sign(
          secretKey,
          options
        );
        return { token };
     //let shapeDetails = req.body;

    //    let shapeDetails = new User({
    //             shape_name,
    //             dimensions,
    //         });

    // console.log("it got here")
    // return  "it got here"; 

//   try {
//     let foundExistingUser = await User.findOne({
//       where: {
//         email: loginDetails.email,
//       },
//     });
//     if (foundExistingUser) {
//       let correctPW = bcrypt.compareSync(
//         loginDetails.password,
//         foundExistingUser.password
//       );
//       console.log(correctPW);
//       if (!correctPW)
//         return {
//           err: {
//             message: "incorrect password",
//           },
//         };
//       else {
//         let { id, email, isActive } = foundExistingUser;
//         let options = {
//           expiresIn: "12h",
//           issuer: "rubikpay-hasher",
//         };
//         let token = await JWT.sign(
//           { id, email, isActive },
//           secretKey,
//           options
//         );
//         return { token };
//       }
//     } else if (foundExistingUser === null) {
//       let err = { message: "User does not exist. Signup instead!" };
//       return { err };
//     }
  
//   } catch (err) {
//     return { err };
//   }

};

module.exports = {shapeCalculation };
