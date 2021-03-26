const express = require("express");
// const bodyParser = require("body-parser");


const InitiateMongoDB = require("./config/db");

// Initiate Mongo Server
InitiateMongoDB();
const user = require("./src/routes/user"); 
const calculations = require("./src/routes/calculations.route"); 

//const authControllers = require("./src/routes/auth.route"); 
//const calculations = require("./src/routes/calculations.route"); 


//const cors = require("cors");

const app = express();
//const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var corsOptions = {
//   origin: "http://localhost:8080"
// };

// app.use(cors(corsOptions));


app.get("/", (req, res) => {
  res.json({ message: "Shapes Area API." });
});

app.use("/calculations", calculations);

app.use("/user", user);
//app.use('/api/v1/auth/', authControllers); 


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

