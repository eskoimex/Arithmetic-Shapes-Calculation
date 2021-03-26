
// const express = require("express");
// const router = express.Router();
// const ShapeCalculationController = require ("../controller/majors/calculation.controller");

// router.route("/shape").post(ShapeCalculationController);

// //router.route("/login").post(LoginUserController);








const express = require("express");
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const IsAuthenticated = require("../middleware/auth"); 
const User = require("../models/user");
const {Square, Rectangle, Triangle, Circle} = require("../models/calculation.model");



router.get("/square", IsAuthenticated, async (req, res) => {
  try {
    
    let payload = ({
                shape_name: "Square",
                dimensions :{
                    "side" : 5,
                },
                userId : "user_id"
            });

    res.json(payload);

    
  } catch (err) {
    res.send({ message: `Error in Fetching ${payload.shape} calculation - ${err.message}` });
  }
});


router.post("/square", IsAuthenticated,
    [
        check("shape_name", "Shape name cannot be left blank")
        .not()
        .isEmpty(),
        check("dimensions", "Please enter a valid dimension")
       
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }


        try {
          
        const { userId, shape_name, dimensions} = req.body;
            let formula1 = dimensions.sides * dimensions.sides

        let formula = "(side * side) -> " + `${dimensions.sides} * ${dimensions.sides}`
        let result = formula1.toFixed(2);
        let side = `${dimensions.sides}`;

           let square = new Square({
                userId,
                shape_name,
                dimensions,
                side,
                formula,
                result,
            });

        await square.save().then(()=>{
            console.log("Success");
            res.status(200).send("Success");
        })


        } catch (err) {
            console.log("Error: "+err.message);
            res.status(500).send("Error in Saving");
        }
    }
);





router.get("/rectangle", IsAuthenticated, async (req, res) => {
  try {
    
    let payload = ({
                shape_name: "Rectangle",
                dimensions :{
                    "length"  : 3,
                    "breadth" : 4,
                },
                useId: "user_id"
            });

    res.json(payload);

    
  } catch (err) {
    res.send({ message: `Error in Fetching ${payload.shape} calculation - ${err.message}` });
  }
});



router.post("/rectangle", IsAuthenticated,
    [
        check("shape_name", "Shape name cannot be left blank")
        .not()
        .isEmpty(),
        check("dimensions", "Please enter a valid dimension")
       
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }


        try {
          
        const { userId, shape_name, dimensions} = req.body;
        let formula1 = dimensions.length * dimensions.breadth
        let formula = "(length * breadth) -> " + `${dimensions.length} * ${dimensions.breadth}`
        let result = formula1.toFixed(2);
        let length = `${dimensions.length}`;
        let breadth = `${dimensions.breadth}`;

           let rectangle = new Rectangle({
                userId,
                shape_name,
                dimensions,
                length,
                breadth,
                formula,
                result,
            });

        await rectangle.save().then(()=>{
            console.log("Success");
            res.status(200).send("Success");
        })


        } catch (err) {
            console.log("Error: "+err.message);
            res.status(500).send("Error in Saving");
        }
    }
);



router.get("/triangle", IsAuthenticated, async (req, res) => {
  try {
    
    let payload = ({
                shape_name: "Triangle",
                dimensions :{
                    "length_a" : 3,
                    "length_b" : 4,
                    "length_c" : 5,
                },
                userId: "user_id"
            });

    res.json(payload);

    
  } catch (err) {
    res.send({ message: `Error in Fetching ${payload.shape} calculation - ${err.message}` });
  }
});

router.post("/triangle", IsAuthenticated,
    [
        check("shape_name", "Shape name cannot be left blank")
        .not()
        .isEmpty(),
        check("dimensions", "Please enter a valid dimension")
       
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }


        try {
          
        const { userId, shape_name, dimensions} = req.body;
       
        let lengths = (dimensions.length_a + dimensions.length_b + dimensions.length_c);
         let s = lengths / 2
         let g = ((s - dimensions.length_a) * (s - dimensions.length_b) * (s - dimensions.length_c))
         let formula1 = Math.sqrt(g)

        let formula = "square root of ((s - length_a) * (s -length_b) * (s - length_c)) -> where s= lenghts/2"
        let result = formula1.toFixed(2);
        let length_a = `${dimensions.length_c}`;
        let length_b = `${dimensions.length_b}`;
        let length_c = `${dimensions.length_c}`;

           let triangle = new Triangle({
                userId,
                shape_name,
                dimensions,
                length_a,
                length_b,
                length_c,
                formula,
                result,
            });

        await triangle.save().then(()=>{
            console.log("Success");
            res.status(200).send("Success");
        })


        } catch (err) {
            console.log("Error: "+err.message);
            res.status(500).send("Error in Saving");
        }
    }
);


router.get("/circle", IsAuthenticated, async (req, res) => {
  try {
   // let pi = Math.PI
    let payload = ({
                shape_name: "Circle",
                dimensions :{
                    "radius" : 20,
                },
                userId: "user_id" 
            });

    res.json(payload);

    
  } catch (err) {
    res.send({ message: `Error in Fetching ${payload.shape} calculation - ${err.message}` });
  }
});




router.post("/circle", IsAuthenticated,
    [
        check("shape_name", "Shape name cannot be left blank")
        .not()
        .isEmpty(),
        check("dimensions", "Please enter a valid dimension")
       
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }


        try {
          
        const { userId, shape_name, dimensions} = req.body;
        let pi = Math.PI;
        let formula1 = pi * Math.pow(dimensions.radius, 2) 
        let formula = "(pi * radius to power 2) -> " + `${pi} * ${Math.pow(dimensions.radius, 2) }`
        let result = formula1.toFixed(2);
        let radius = `${dimensions.radius}`;

           let circle = new Circle({
                userId,
                shape_name,
                dimensions,
                radius,
                formula,
                result,
            });

        await circle.save().then(()=>{
            console.log("Success");
            res.status(200).send("Success");
        })


        } catch (err) {
            console.log("Error: "+err.message);
            res.status(500).send("Error in Saving");
        }
    }
);



module.exports = router;
