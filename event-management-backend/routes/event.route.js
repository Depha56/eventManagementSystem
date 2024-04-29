const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller.js');

router.post('/', eventController.createEvent);

router.get('/', eventController.getEvents);

router.get('/:id', eventController.getEventDetails);

router.put('/:id', eventController.updateEvent);

router.delete('/:id', eventController.deleteEvent);

module.exports = router;
