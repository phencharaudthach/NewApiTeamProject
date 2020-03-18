const express = require("express");
// const uniqueValidator = require('mongoose-unique-validator');
// const bcrypt = require('bcrypt-nodejs')
const router = express.Router();
// const User = require("../models/user");
const User= require('../models/user');


//Create new User
router.post('/', async (req, res) => {
// const {  name, email, password } = req.body;
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    try{
      console.log("Hello World");
        const newUser = await user.save();
        res.status(201).json(newUser);
    }catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Get All User
router.get("/", async (req, res) => {
  // console.log("Hello World");
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//  Get One User
// //Read User By Name
// router.get("/:name", getUserByName, (req, res) => {
//     res.json(res.user);
//   });

//   //Update Name
//   router.patch("/:name", getUserByName, async (req, res) => {
//     if (req.body.name != null) {
//       res.user.name = req.body.name;
//     }
//     if (req.body.email != null) {
//       res.user.email = req.body.email;
//     }
//     if (req.body.password != null) {
//         res.user.token = req.body.password;
//       }
//     try {
//       const updatedUser = await res.user.save();
//       res.json(updatedUser);
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   });
  
//   //Delete
//   router.delete("/:name", getUserByName, async (req, res) => {
//     try {
//       await res.user.remove();
//       res.json({ message: "Deleted User Profile" });
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });
  
<<<<<<< HEAD
<<<<<<< HEAD
  //get one by username function
  async function getUserByUsername(req, res, next) {
    let user;
    const username = req.params.username;
=======
  //get one by Name function
  async function getUserByName(req, res, next) {
    let user;
    const name = req.params.name;
>>>>>>> c65ba43654fb0a540f29dce3551bf850819b2162
    try {
      user = await User.findOne({ name });
      if (user == null) {
        return res.status(404).json({ message: "Cannot Find User's Name" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.user = user;
    next();
  }
=======
//   //get one by Name function
//   async function getUserByName(req, res, next) {
//     let user;
//     let name = req.params.name;
//     try {
//       user = await User.findOne({ name });
//       if (user == null) {
//         return res.status(404).json({ message: "Cannot Find User's Name" });
//       }
//     } catch (err) {
//       return res.status(500).json({ message: err.message });
//     }
//     res.user = user;
//     next();
//   }
>>>>>>> 999a1f3f7b209bb747f080550764069a6f44d4ee
  
  module.exports = router;