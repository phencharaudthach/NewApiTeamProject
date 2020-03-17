const express = require("express");
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const router = express.Router();
const User = require("../models/user");

//Create new User
router.post('/', async (req, res) => {
const {  username, email,  token, image } = req.body;

    const user = new User ({
        username,
        email,
        token,
        image
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
//Read User By Username
router.get("/:username", getUserByUsername, (req, res) => {
    res.json(res.user);
  });

  //Update Username
  router.patch("/:username", getUserByUsername, async (req, res) => {
    if (req.body.username != null) {
      res.user.username = req.body.username;
    }
    if (req.body.email != null) {
      res.graduate.email = req.body.email;
    }
    if (req.body.token != null) {
        res.graduate.token = req.body.token;
      }

    if (req.body.image != null) {
      res.graduate.image = req.body.image;
    }
    try {
      const updatedUser = await res.user.save();
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  //Delete
  router.delete("/:username", getUserByUsername, async (req, res) => {
    try {
      await res.user.remove();
      res.json({ message: "Deleted User Profile" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  //get one by username function
  async function getUserByUsername(req, res, next) {
    let user;
    const username = req.params.username;
    try {
      user = await User.findOne({ username });
      if (graduate == null) {
        return res.status(404).json({ message: "Cannot Find User" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.user = user;
    next();
  }
  
  module.exports = router;

