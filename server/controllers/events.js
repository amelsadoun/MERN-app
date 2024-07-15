//@desc get all posts

import Event from "../models/event.js";

//@route GET /posts
export const getEvents = async (req, res, next) => {
  try {
    const events = await Event.find();
    console.log(events);
    res.status(200).json(events);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createEvent = async (req, res, next) => {
  const event = req.body;
  const newEvent = new Event(event);
  try {
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
