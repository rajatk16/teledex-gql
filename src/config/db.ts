require('dotenv').config();
import mongoose from 'mongoose';

const { DATABASE_URL } = process.env;

export const connectDB = async () =>
  mongoose.connect(DATABASE_URL!, (err) => {
    if (err) {
      console.error('Connection to DB failed');
    } else {
      console.log('Connection to DB was successful');
    }
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection failed'));
