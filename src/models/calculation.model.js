const mongoose = require("mongoose");


const squareSchema = mongoose.Schema({
 shape_name: {
  type: String,
       dimensions :  {
              sides: {type: Number },
        },
        required: true      
  },
  doneAt: {
    type: Date,
    default: Date.now()
  },
  userId:{ 
     type: String,
     required: true 
    },
   side: {type: Number,
            required: true
           },
   formula: 
           {type: String},
   result: {type: String},
});


//RECTANGLE
const rectangleSchema = mongoose.Schema({
 shape_name: {
  type: String,
       dimensions :  {
              length: {type: Number },
              breadth: {type: Number },
        },
        required: true      
  },
  doneAt: {
    type: Date,
    default: Date.now()
  },
  userId:{ 
     type: String,
     required: true 
    },
      length: {
             type: Number,
            required: true
           },
   breadth: 
           {type: Number,
            required: true
           },
   formula: 
           {type: String},
   result: {type: String},
});


//TRIANGLE
const triangleSchema = mongoose.Schema({
 shape_name: {
  type: String,
       dimensions :  {
              length_a: {type: Number },
              length_b: {type: Number },
              length_c: {type: Number },
        },
        required: true      
  },
  doneAt: {
    type: Date,
    default: Date.now()
  },
  userId:{ 
     type: String,
     required: true 
    },
    length_a: {
             type: Number,
             required: true
           },
   length_b: 
           {
             type: Number,
             required: true
           },
    length_c: 
           {
            type: Number,
            required: true
           },        
   formula:{type: String},
   result: {type: String},
});


const circleSchema = mongoose.Schema({
 shape_name: {
  type: String,
       dimensions :  {
              radius: {type: Number },
        },
        required: true      
  },
  doneAt: {
    type: Date,
    default: Date.now()
  },
  userId:{ 
     type: String,
     required: true 
    },
    radius: {
             type: Number,
             required: true
           },
        
   formula:{type: String},
   result: {type: String},
});

const Square =  mongoose.model("Square", squareSchema);
const Rectangle =  mongoose.model("Rectangle", rectangleSchema);
const Triangle =  mongoose.model("Triangle", triangleSchema);
const Circle =  mongoose.model("Circle", circleSchema);

module.exports = {Square, Rectangle, Triangle, Circle} ;