const STATUS_CODES = require('./apiStatusCodes');

exports.successResponse = function (res, msg, data) {
	const response = {
		message: msg,
	};
	if (data) response.data = data;
	return res.status(STATUS_CODES.SUCCES).json(response);
};

exports.errorResponse = function (res, msg, data) {
	const response = {
		message: msg,
	};
	if (data) response.data = data;
	return res.status(STATUS_CODES.NOT_FOUND).json(response);
};
