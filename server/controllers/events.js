import Event from "../models/event.js";
//@desc Get all events
//@route GET /events
export const getEvents = async (req, res, next) => {
  try {
    const { field, type, tags, dateFrom, dateTo, searchQuery, page = 1, limit = 10 } = req.query;

    // Create the filter object based on the query parameters
    let filters = {};

    if (searchQuery) {
      filters.name = { $regex: searchQuery, $options: "i" }; // Case-insensitive regex search
    }
    if (field) {
      filters.field = { $in: field }; // Split string to array
    }
    if (type) {
      filters.eventType = { $in: type };
    }
    if (tags) {
      filters.socialLinks = { $in: tags };
    }
    if (dateFrom) {
      filters.startDate = { ...filters.startDate, $gte: new Date(dateFrom) };
    }
    if (dateTo) {
      filters.startDate = { ...filters.startDate, $lte: new Date(dateTo) };
    }

    // Pagination logic
    const events = await Event.find(filters)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalEvents = await Event.countDocuments(filters);

    res.status(200).json({
      events,
      currentPage: page,
      totalPages: Math.ceil(totalEvents / limit),
      totalEvents,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//@desc Get single event
//@route GET /events/:id
export const getEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//@desc Create event
//@route POST /events
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

//@desc Update event
//@route PUT /events/:id
export const updateEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const event = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(id, event, {
      new: true,
    });

    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(updatedEvent);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

//@desc Delete event
//@route DELETE /events/:id
export const deleteEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    await Event.deleteOne({ _id: id });
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
