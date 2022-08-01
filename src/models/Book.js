import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    _id: { type: String},
    title: { type: String, require: true},
    author: { type: String, require: true},
    pubCompany: { type: String, require: true},
    numberPages: { type: Number},
  }
);

const books = mongoose.model('books', bookSchema);

export default books;