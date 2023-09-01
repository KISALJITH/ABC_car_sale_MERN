const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        trim : true,
        required : true,
        minlength : [6, 'Password must have at least 6 characters']
    },
    address : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        trim : true,
        required : true,
    },
    opentime : {
        type : String,
        required : true,
    },
    tokens:[
        {
            token:{
                type:String,
            }
        }
    ]
}, {timestamps : true });

userSchema.pre("save",async function (next){
    const user = this;

    if(user.isModified("password")){
        user.password = await bcrypt.hash(user.password,8);
    }

    next();
});

userSchema.statics.findByCredentials = async (email,password)=>{
    const user = await User.findOne({email});

    if(!user){
        throw new Error()
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch){
        throw new Error;
    }

    return user;
}

userSchema.methods.generateAuthToken = async function (){
    const user = this;
    const token = jwt.sign({_id: user._id.toString()},"mysecret");
    user.tokens = user.tokens.concat({token});

    await user.save();
    return token;
}

const User = mongoose.model("User",userSchema)

module.exports = User