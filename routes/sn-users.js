const express = require("express");
// const uniqueValidator = require('mongoose-unique-validator');
// const bcrypt = require('bcrypt-nodejs')
const router = express.Router();
const User = require("../models/user");

//Create new User
router.post('/', async (req, res) => {
const {  name, email, password } = req.body;

    const user = new User ({
        name,
        email,
      password
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Get All Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get One User
//Read User By Name
router.get("/:name", getUserByName, (req, res) => {
    res.json(res.user);
  });

  //Update Name
  router.patch("/:name", getUserByName, async (req, res) => {
    if (req.body.name != null) {
      res.user.name = req.body.name;
    }
    if (req.body.email != null) {
      res.user.email = req.body.email;
    }
    if (req.body.password != null) {
        res.user.token = req.body.password;
      }
    try {
      const updatedUser = await res.user.save();
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  //Delete
  router.delete("/:name", getUserByName, async (req, res) => {
    try {
      await res.user.remove();
      res.json({ message: "Deleted User Profile" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  //get one by Name function
  async function getUserByName(req, res, next) {
    const user;
    const name = req.params.name;
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
  
  module.exports = router;

