exports.successResponse = (res, msg, data) => {
	const payload = {
		success: true,
		message: msg,
		data: data
	};
	return res.status(200).json(payload);
};

exports.errorResponse = (res, msg) => {
	const payload = {
		success: false,
		message: msg
	};
	return res.status(500).json(payload);
};

exports.notFoundResponse = (res, msg) => {
	const payload = {
		success: false,
		message: msg
	}
	return res.status(404).json(payload);
};