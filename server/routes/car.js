const express = require("express");
const router = express.Router();
const Car = require("../models/car");
const auth = require("../middleware/auth");

// router.post("/createcar",auth, async (req,res)=>{

//     console.log(req.body)
//     const car = new Car({
//         ...req.body,
//         "owner":req.user._id
//     });

//     try {
//         await car.save()
//         res.status(201).send(car)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// });

router.post("/createcar", async (req, res) => {
  console.log(req.body);
  const car = new Car(req.body);

  try {
    await car.save();
    res.status(201).send(car);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/cars/me", auth, async (req, res) => {
  try {
    const cars = await Car.find({ owner: req.user._id });

    res.send(cars);
  } catch (error) {
    res.send(error);
  }
});

router.get("/cars/single/:id", auth, async (req, res) => {
  const _id = req.params.id;
  console.log(_id);

  try {
    const car = await Car.findOne({ _id });
    //should check owner id also
    if (!car) {
      return res.status(404).send();
    }
    res.send(car);
  } catch (error) {
    res.status(500).send();
  }
});

router.patch("/cars/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);

  const allowUpdates = ["description", "completion"];
  const isValidOperation = updates.every((update) => {
    return allowUpdates.includes(update);
  });

  if (!isValidOperation) {
    res.send({ ERROR: "INVALID OPERATION!" });
  }

  try {
    //should check owner id also
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!car) {
      return res.status(404).send();
    }
    res.send(car);
  } catch (error) {
    res.status(500).send();
  }
});

router.delete("/cars/:id", auth, async (req, res) => {
  try {
    //should check owner id also
    const car = await Car.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!car) {
      return res.status(404).send();
    }
    res.send(car);
  } catch (error) {
    res.send(e);
  }
});

module.exports = router;
