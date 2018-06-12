const db = require('../db');
const url = require('url');

module.exports = function (req, res) {
	const parsedUrl = url.parse(req.url, true);
	const id = parsedUrl.query.id;
	db.getPhoneById(id, (err, phone) => {
		if (phone === null) {
			res.statusCode = 404;
			res.end();
		} else {
			res.statusCode = 200;
			res.setHeader('Content-type', 'application/json');
			res.write(JSON.stringify(phone));
			res.end();
		}
	})
}