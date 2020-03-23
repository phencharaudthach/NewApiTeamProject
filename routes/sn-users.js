const express = require("express");
const router = express.Router();
const passport = require('passport')
const User = require('../models/user');

router.post('/', function(req, res) { 
  Users=new User({
    username: req.body.username,
    email: req.body.email,
    name: req.body.name,
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

router.post('/login', passport.authenticate('local'), (req, res) => {
  User.findOne({
    username: req.body.username
  }, (err, person) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      success: true,
      status: 'You are successfully logged in!'
    });
  })
});

router.get("/logout", function(req, res){    
  req.session.destroy()
  req.logout();    
  res.clearCookie('session-id');
  res.json({
    message: 'You are successfully logged out!'
  });
  res.redirect("/");
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


//Node: for some reason cannot logout with get username code active
//may need to move the logout route???

//  Get One User
// //Read User By userName

// router.get("/:username", async (req, res) => {
//   let user
//   let username = req.params.username;
//   try {
//     user = await User.findOne({ username });
//     if (user == null) {
//       return res.status(404).json({ message: "Cannot Find User's username" });
//     }
//   }catch (err) {
//     res.status(400).json({ message: err.message });
//   }
//     res.json(user);
//   });



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
    
     //Delete
  router.delete("/:username", async (req, res) => {
    const user = await User.findOneAndRemove(req.params.username);
    if(!user) return res.status(404).send(`Deleted User's Profile`)
  res.json(user)
 });
  

  
  module.exports = router;