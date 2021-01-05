const express = require('express');
const minionsRouter = express.Router();
const dbFunctions = require("./db");

minionsRouter.get('/', (req, res, next) => {
	res.send(dbFunctions.getAllFromDatabase('minions'));
});

minionsRouter.post('/', (req, res, next) => {
	addToDatabase('minions', req.query);
	res.status(201).send('Minion Created Successfully');
});

minionsRouter.get('/:minionId', (req, res, next) => {
	if (dbFunctions.getFromDatabaseById('minions', req.params.minionId)) {
		res.send(dbFunctions.getFromDatabaseById('minions', req.params.minionId));
	} else {
		res.status(404).send("Minion with that ID does not exist");
	}
});

minionsRouter.put('/:minionId', (req, res, next) => {
	if (dbFunctions.getFromDatabaseById('minions', req.params.minionId)) {
		dbFunctions.getFromDatabaseById('minions', req.params.minionId) = req.query;
		res.send(`Minion ${req.params.id} updated successfully`);
	} else {
		res.status(404).send("Minion with that ID does not exist");
	}
});

minionsRouter.delete('/:minionId', (req, res, next) => {
	if (deleteFromDatabasebyId('minions', req.params.minionId)) {
		res.status(204).send();
	} else {
		res.status(404).send(`Minion with ID ${req.params.minionId} not found`);
	}
})




module.exports = minionsRouter;