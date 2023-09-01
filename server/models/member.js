const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    mobile : {
        type : String,
        required : true,
    },
    NIC : {
        type : String,
        required : true
    },
    district : {
        type : String,
        trim : true,
    },
},{timestamps : true });


const Member = mongoose.model("Member",memberSchema)

module.exports = Member