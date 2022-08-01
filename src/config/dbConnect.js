import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://danisluz:Tbmdani1980@danisluz.nz6graz.mongodb.net/bookstore');

let db = mongoose.connection;

export default db;