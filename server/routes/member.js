const express = require("express")
const router = express.Router();
const Member = require("../models/member")
const auth = require("../middleware/auth")

router.post("/addowner",async (req,res)=>{
    console.log(req.body)
    const member = new Member(req.body)

    try {
        await member.save()
        res.status(201).send(member)
    } catch (error) {
        res.status(400).send(error)
    }
});

router.patch("/editmember",auth, async (req,res)=>{
    try {
        const editMember = await Member.findByIdAndUpdate(req.user._id,req.body,{
            new:true
        });

        if(!editMember){
            return res.status(404).send();
        }

        res.status(200).send(editMember);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete("/deletemember",auth, async (req,res)=>{
    try {
        const deletedMember = await Member.findByIdAndDelete(req.user._id)

        if(!deletedMember){
            return res.status(404).send();
        }

        return res.status(200).send(deletedMember);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;