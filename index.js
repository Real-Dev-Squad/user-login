'use strict';

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const apiResponse = require('./helpers/apiResponse');

const app = express();

const port = process.env.EXPRESS_PORT || 8080;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load routes
app.use('/api/v1', require('./app/routes'));

// throw 404 if URL not found
app.all('*', function (req, res) {
	return apiResponse.errorResponse(res, 'Page not found');
});

app.listen(port, (err, _) => {
	if (err) console.log(`Error... ${err}`);
	console.log(`Server listening on port ${port}`);
});

module.exports = app;
