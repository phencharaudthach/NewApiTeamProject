const express = require("express");
const router = express.Router();
const passport = require('passport')
const User = require('../models/user');

router.post('/', function(req, res) { 
  Users=new User({
    username: req.body.username,
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
    image: req.body.image,
    country: req.body.country
    }); 

		User.register(Users, req.body.password, function(err, user) { 
			if (err) { 
			res.json({success:false, message:"Your account could not be saved. Error: ", err}) 
			}else{ 
			res.json({success: true, message: "Your account has been saved"}) 
			} 
		}); 
}); 
// //Create new User
// router.post('/', async (req, res) => {
// // const {  name, email, password } = req.body;
//     const user = new User({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password
//     });

//     try{
//       console.log("Hello World");
//         const newUser = await user.save();
//         res.status(201).json(newUser);
//     }catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

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
// //Read User By userName

router.get("/:username", async (req, res) => {
  let user
  let username = req.params.username;
  try {
    user = await User.findOne({ username });
    if (user == null) {
      return res.status(404).json({ message: "Cannot Find User's username" });
    }
  }catch (err) {
    res.status(400).json({ message: err.message });
  }
    res.json(user);
  });



  //  Update Name
  router.put("/:name", async (req, res) => {
    const updatedUser = await User.findOneAndUpdate(req.params.name,{
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        image: req.body.image,
        country: req.body.country
        }, { new: true });

        if(!updatedUser) return res.status(404).send("Can Not Update User With that ID");
        res.json(updatedUser);
      });

      // Updating One
router.patch('/:name', getUser, async (req, res) => {
  if (req.body.name != null && req.body.name != "") {
      res.user.name = req.body.name;
  }
  if ( req.body.username != null && req.body.name != ""){
      res.user.username = req.body.username;
  }
  if (req.body.email != null && req.body.email != "") {
    res.user.email = req.body.email;
}
if ( req.body.password != null && req.body.password != ""){
    res.user.password = req.body.password;
}
if (req.body.image != null && req.body.image != "") {
  res.user.image = req.body.image;
}
if (req.body.country != null && req.body.country != "") {
  res.user.country = req.body.country;
}
  try {
      const updatedUser = await res.user.save();
      res.json(updatedUser);
  } catch (error) {
      res.status(400).json({message: err.message})
  }
});
    
     //Delete
  router.delete("/:id", async (req, res) => {
    const user = await User.findOneAndRemove(req.params.id);
    if(!user) return res.status(404).send(`Deleted User's Profile`)
  res.json(user)
 });
  
 async function getUser (req, res, next) {
  try {
      user = await User.findOneAndUpdate(req.params.name)
      if (user == null) {
          return res.status(404).json({message: 'Cannot find user'})
      }
  } catch (err) { 
      return res.status(500).json({message: err.message})
  }

  res.user = user; 
  next();
}

  module.exports = router;