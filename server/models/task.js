//description
//completed : true/false
//owner : mongoose.Schema.Types.ObjectId 

const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    description : {
        type : String,
        required : true,
    },
    completion : {
        type : Boolean,
        default: false
    }
})

const Task = mongoose.model("Task",taskSchema)

module.exports = Task