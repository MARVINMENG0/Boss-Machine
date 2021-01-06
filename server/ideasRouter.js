const express = require('express');
const ideasRouter = express.Router();
const dbFunctions = require("./db");

ideasRouter.get('/', (req, res, next) => {
	res.send(dbFunctions.getAllFromDatabase('ideas'));
});

ideasRouter.post('/', (req, res, next) => {
	addToDatabase('ideas', req.query);
	res.status(201).send('Idea Created Successfully');
});

ideasRouter.get('/:ideaId', (req, res, next) => {
	if (dbFunctions.getFromDatabaseById('ideas', req.params.ideaId)) {
		res.send(dbFunctions.getFromDatabaseById('ideas', req.params.ideaId));
	} else {
		res.status(404).send("Idea with that ID does not exist");
	}
});

ideasRouter.put('/:ideaId', (req, res, next) => {
	if (dbFunctions.getFromDatabaseById('ideas', req.params.ideaId)) {
		dbFunctions.getFromDatabaseById('ideas', req.params.ideaId) = req.query;
		res.send(`Idea ${req.params.id} updated successfully`);
	} else {
		res.status(404).send("Idea with that ID does not exist");
	}
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
	if (deleteFromDatabasebyId('ideas', req.params.ideaId)) {
		res.status(204).send();
	} else {
		res.status(404).send(`Idea with ID ${req.params.ideaId} not found`);
	}
})



module.exports = ideasRouter;