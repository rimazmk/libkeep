const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    _creatorId: { type: Schema.ObjectId, required: true},
    name: {type: String, required: true},
    page: { type: Number, required: true},
    // date: { type: Date, required: true}
})

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;