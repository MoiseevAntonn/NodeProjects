const db = require('../db');
const fs = require('fs');

module.exports = function (req, res) {
	fs.readFile('index.template.html', 'utf8', (err, template) =>  {
		db.getAllPhones((err, phones) => {
			const links = phones.map(phone => `<a href='/details?id=${phone.id}'>${phone.name}</a>`);
			const responseText = template.replace('#links#', links.join(''));
			res.statusCode = 200;
			res.setHeader('Content-type', 'text/html');
			res.write(responseText);	
			res.end();
		});		
	});	
};