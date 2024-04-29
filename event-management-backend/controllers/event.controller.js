const Event = require('../models/event.model.js');

// Create an event
exports.createEvent = async (req, res) => {
 try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).send(event);
 } catch (error) {
    res.status(400).send(error);
 }
};

// Get all events
exports.getEvents = async (req, res) => {
 try {
    const events = await Event.find();
    res.send(events);
 } catch (error) {
    res.status(500).send(error);
 }
};

// Get event details by ID
exports.getEventDetails = async (req, res) => {
 try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).send();
    }
    res.send(event);
 } catch (error) {
    res.status(500).send(error);
 }
};

// Update an event by ID
exports.updateEvent = async (req, res) => {
 try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) {
      return res.status(404).send();
    }
    res.send(event);
 } catch (error) {
    res.status(400).send(error);
 }
};

// Delete an event by ID
exports.deleteEvent = async (req, res) => {
 try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).send();
    }
    res.send(event);
 } catch (error) {
    res.status(500).send(error);
 }
};
