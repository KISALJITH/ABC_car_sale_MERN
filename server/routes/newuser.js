const express = require("express")
// const router = express.Router();
const User = require("../models/newuser")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// const router = express.Router();

// LOGIN

app.get("/login",cors(),(req,res)=>{

})

app.post("/login",async(req,res)=>{
    const{email,password}=req.body

    try {
        const check = await User.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    } catch (error) {
        res.json("notexist")
    }
})

// REGISTER
// router.post("/register", async(req,res)=>{
app.post("/register",async(req,res)=>{
    console.log("reigister function")
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try {
        const check = await User.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await User.insertMany([data])
        }

    } catch (error) {
        res.json("notexist")
    }
})

// app.listen(4000,()=>{
//     console.log("port connected");
// })