import mongoose from "mongoose";

const clubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    // required: true,
  },
  password: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
  },
});

const Club = mongoose.model('Club', clubSchema);

export default Club;