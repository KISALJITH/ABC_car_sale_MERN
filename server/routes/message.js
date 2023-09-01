const express = require("express")
const router = express.Router();
const Message = require("../models/message")
const auth = require("../middleware/auth")

router.post("/messages",auth, async (req,res)=>{

    console.log(req.body)
    const message = new Message({
        ...req.body,
        "owner":req.user._id
    });

    try {
        await message.save()
        res.status(201).send(message)
    } catch (error) {
        res.status(400).send(error)
    }
});

router.get("/messages/me",auth, async (req,res)=>{
    try {
        const messages = await Message.find({ owner: req.user._id});

        res.send(messages);
    } catch (error) {
        res.send(error);
    }
});

router.get("/messages/single/:id",auth, async (req,res)=>{
    const _id = req.params.id;
    console.log(_id);

    try {
        const message = await Message.findOne({ _id });
        //should check owner id also
        if(!message) {
            return res.status(404).send();
        }
        res.send(message);
    } catch (error) {
        res.status(500).send();
    }
});

router.patch("/messages/:id",auth, async(req,res)=>{
    const updates = Object.keys(req.body);

    const allowUpdates = ["name", "email", "message"];
    const isValidOperation = updates.every((update) => {
        return allowUpdates.includes(update);
    });

    if(!isValidOperation){
        res.send({ ERROR: "INVALID OPERATION!"});
    }

    try {
        //should check owner id also
        const message = await Message.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        if(!message){
            return res.status(404).send();
        }
        res.send(message);
    } catch (error) {
        res.status(500).send();
    }
});

router.delete("/messages/:id",auth, async (req,res)=>{
    try {
        //should check owner id also
        const message = await Messages.findOneAndDelete({
            _id: req.params.id,
            "owner": req.user._id
        });
        
        if(!message) {
            return res.status(404).send();
        }
        res.send(message);
    } catch (error) {
        res.send(e);
    }
});

module.exports = router;