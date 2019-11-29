const router = require('express').Router();
let User = require('../models/user.model');

//Handle get requests 
router.route('/').get((req, res) => {
	//promise that returns json of users
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error:' + err));		
});


//Handle Post requests 
router.route('/add').post((req, res) => {
	var userData = {
		email: req.body.email,
		username: req.body.username,
		password: req.body.password,
	  }
	
	//   User.count({username: userData.username}, (err, count) => {
	// 	  if (count > 0) {
	// 		  res.json(err);
	// 	  }
	//   })

	  //use schema.create to insert data into the db
	  User.create(userData, function (err, user) {
		if (!err) {
			res.json("User added!")
		} else {
			res.status(400).json('Error:' + err);
		}
	  });
})

module.exports = router;