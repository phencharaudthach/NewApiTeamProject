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

<<<<<<< HEAD
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
=======

// Creating One
router.post('/login', passport.authenticate('local'), (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
      User.findOne({username, password }, function(err, user) {
          if(err) {
            console.log(err);
            return res.status(500).send();
          }
          if (!user){
            console.log("User not found!");
            return res.status(404).send();
    }
      console.log('Loggined In Successfully!');
      res.status(201).send({message:"successfully logged in"});
      
})
 });
>>>>>>> profile_page_v1.0

router.get("/logout", function(req, res){    
  req.session.destroy()
  req.logout();    
  res.clearCookie('session-id');
  res.json({
    message: 'You are successfully logged out!'
  });
  res.redirect("/");
});
<<<<<<< HEAD

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
=======
>>>>>>> profile_page_v1.0

//Get All User
router.get("/", async (req, res) => {
  // console.log("H1ello World");
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


//Note: for some reason cannot logout with get username code active
//may need to move the logout route???

//  Get One User
// //Read User By userName

<<<<<<< HEAD
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
=======
//  Get One User
//Read User By userName

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

>>>>>>> profile_page_v1.0


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
<<<<<<< HEAD

=======
>>>>>>> profile_page_v1.0
    

     //Delete
  router.delete("/:username", async (req, res) => {
<<<<<<< HEAD
    const user = await User.findOneAndRemove(req.params.username);
    if(!user) return res.status(404).send(`Deleted User's Profile`)
  res.json(user)
 });
<<<<<<< HEAD
 
  //get one by Name function
  async function getUserByName(req, res, next) {
    let user;
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


=======


>>>>>>> c517aaf75a52867344bc217671689271f4e48e3d
=======
    const username = req.params.username;
    const user = await User.findOneAndRemove({username});
    if(!user) return res.status(404).send(`Deleted User's Profile`)
  res.json(user)
 });
  
  router.patch('/:username', getUser, async (req, res) => {
    if (req.body.name != null && req.body.name != " ") {
        res.user.name = req.body.name;
    }
    if ( req.body.username != null && req.body.username != " "){
        res.user.username = req.body.username;
    }
    if (req.body.email != null && req.body.email != " ") {
        res.user.email = req.body.email;
    }
    if ( req.body.image != null && req.body.image != " "){
        res.user.image = req.body.image;
    }
    if ( req.body.country != null && req.body.country != " "){
        res.user.country = req.body.country;
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({message: err.message})
    }
});

async function getUser (req, res, next) {
  const username = req.params.username;
    try {
        user = await User.findOne({username})
        if (user == null) {
            return res.status(404).json({message: 'Cannot find user'})
        }
    } catch (err) { 
        return res.status(500).json({message: err.message})
    }

    res.user = user; 
    next();
}
>>>>>>> profile_page_v1.0
  module.exports = router;