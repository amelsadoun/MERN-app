import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  clubId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: false
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  registrationLink: {
    type: String,
    required: true,
    trim: true
  },
  socialLinks: {
    type: [String],  // Array of strings to hold multiple social media links
    default: []
  },
  field: {
    type: String,
    required: true,
    enum: ['Hackathon', 'Datathon', 'Workshop', 'Seminar', 'Conference']  // Example event types
  },
  eventType: {
    type: String,
    required: true,
    enum: ['Online', 'Offline', 'Hybrid']  // Example event formats
  },
  upvotes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  imageURL: {
    type: String,
    required: false
  },
});

const Event = mongoose.model('Event', eventSchema);

export default Event;