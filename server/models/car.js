//description
//completed : true/false
//owner : mongoose.Schema.Types.ObjectId 

/*const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const carSchema = new Schema({
    brand : {
        type : String,
        required : true,
    },
    NumberPlate : {
        type : String,
        required : true,
    },
    model : {
        type : String,
        required : true,
    },
    year : {
        type : Number,
        required : true,
    },
    type : {
        type : String,
        required : true,
    },
    mileage : {
        type : String,
        required : true,
    },
    description : {
        type : String
    },
    getprice : {
        type : String,
        required : true,
    },
    soldprice : {
        type : String,
        required : true,
    }
});

const Car = mongoose.model("Car",carSchema)

module.exports = Car */

const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const Schema = mongoose.Schema;

const carSchema = new Schema({
    brand : {
        type : String,
        required : true,
    },
    model : {
        type : String,
        required : true,
    }
});

const Car = mongoose.model("Car",carSchema)

module.exports = Car