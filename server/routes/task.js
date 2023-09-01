const express = require("express")
const router = express.Router();
const Task = require("../models/task")
const auth = require("../middleware/auth")

router.post("/tasks",auth, async (req,res)=>{

    console.log(req.body)
    const task = new Task({
        ...req.body,
        "owner":req.user._id
    });

    try {
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send(error)
    }
});

router.get("/tasks/me",auth, async (req,res)=>{
    try {
        const tasks = await Task.find({ owner: req.user._id});

        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
});

router.get("/tasks/single/:id",auth, async (req,res)=>{
    const _id = req.params.id;
    console.log(_id);

    try {
        const task = await Task.findOne({ _id });
        //should check owner id also
        if(!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        res.status(500).send();
    }
});

router.patch("/tasks/:id",auth, async(req,res)=>{
    const updates = Object.keys(req.body);

    const allowUpdates = ["description", "completion"];
    const isValidOperation = updates.every((update) => {
        return allowUpdates.includes(update);
    });

    if(!isValidOperation){
        res.send({ ERROR: "INVALID OPERATION!"});
    }

    try {
        //should check owner id also
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        if(!task){
            return res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        res.status(500).send();
    }
});

router.delete("/tasks/:id",auth, async (req,res)=>{
    try {
        //should check owner id also
        const task = await Task.findOneAndDelete({
            _id: req.params.id,
            "owner": req.user._id
        });
        
        if(!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        res.send(e);
    }
});

module.exports = router;