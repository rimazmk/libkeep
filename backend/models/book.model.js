const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	book: {type: String, required: true},
	page: { type: Number, required: true},
	date: { type: Date, required: true},
	username: {type: String, required: true}
}, {
	timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;