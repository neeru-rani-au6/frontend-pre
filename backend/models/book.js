var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Book = new Schema(
  {
    title: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Title is true"],
    },
    author: {
      type: String,
      lowercase: true,
      trim: true,
    },
    genre: {
      type: String,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      lowercase: true,
      trim: true,
    },
    photoURL: String,
  },
  { timestamps: true }
);

var Book = mongoose.model("book", Book);

module.exports = Book;
