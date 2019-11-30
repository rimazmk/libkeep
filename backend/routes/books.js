const router = require('express').Router();
// const session = require('express-session');
let Book = require('../models/book.model');

router.route('/add/:id').post((req, res) => {
    sess = req.session;
    
    var book = {
		_creatorId: req.params.id,
		name: req.body.name,
        page: req.body.page,
        // date: Date.parse(req.body.date)
	}

	  //use schema.create to insert data into the db
    Book.create(book, function (err, user) {
        if (!err) {
            res.json("Book added!")
        } else {
            res.status(400).json('Error:' + err);
        }
    });

})

module.exports = router;