const express = require('express');
const meetingsRouter = express.Router();
const dbFunctions = require("./db");

meetingsRouter.get('/', (req, res, next) => {
	res.send(dbFunctions.getAllFromDatabase('meetings'));
});

meetingsRouter.post('/', (req, res, next) => {
	addToDatabase('meetings', req.query);
	res.status(201).send('Meeting Created Successfully');
});



meetingsRouter.delete('/', (req, res, next) => {
	db.deleteAllFromDatabase('meetings');
})


module.exports = meetingsRouter;