let api = {};

api.healthCheck = (req, res) => {
	res.json({
		message: 'success',
	});
};

module.exports = api;
