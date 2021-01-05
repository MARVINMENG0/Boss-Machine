const express = require('express');
const apiRouter = express.Router();

apiRouter.get('/', (req, res, next) => {
	res.status(200).send("Bork henlo fren");
});

module.exports = apiRouter;