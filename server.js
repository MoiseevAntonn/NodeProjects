const http = require('http');
const fs = require('fs');
const url = require('url');

const indexHandler = require('./handlers/index.js');
const detailHandler = require('./handlers/detail.js');

http.createServer(function (req, res) {
	const parsedUrl = url.parse(req.url);
	const path = parsedUrl.pathname;
	if (path === '/') {
		indexHandler(req, res);
	} else if (path === '/details') {
		detailHandler(req, res);
	} else {
		res.statusCode = 404;
		res.end()
	}
}).listen(3000);