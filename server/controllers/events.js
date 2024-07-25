import Event from "../models/event.js";

//@desc get all events
//@route GET /events
export const getEvents = async (req, res, next) => {
  try {
    const events = await Event.find();
    // console.log(events);
    res.status(200).json(events);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//@desc get single event
//@route GET /events/:id
export const getEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const event = await Event.findOne({ _id: id });
    res.status(200).json(event);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//@desc create event hh
//@route POST /events
export const createEvent = async (req, res, next) => {
  const event = req.body;
  const newEvent = new Event(event);
  try {
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(409).json({ message: err.message });
    console.log(err.message);
  }
};
