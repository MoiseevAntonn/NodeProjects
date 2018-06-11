var http = require('http');
var fs = require('fs');
var db = require('./db')
var url = require('url');


/*var pg = require('pg');
var client = new pg.Client({
	database: 'phonestore',
	user: 'dbuser',
	password: 'dbuser'
});


client.connect();

client.query('SELECT * FROM Phone', (err, res) => {
  console.log(err);
  console.log(res.rows); // Hello World!
  client.end()
})*/

var indexHandler = require('./handlers/index.js');
var detailHandler = require('./handlers/detail.js');


http.createServer(function(req,res){
	fs.writeFileSync('data.html','ale blya','utf8');
	fs.readFile('first_project.html','utf8',function(err,data){
		"use strict";
		let u = url.parse(req.url,true);
		let path = u.pathname;
		if (path === '/'){
			indexHandler(res,db,data);
		}else if (path === '/details'){
			detailHandler(res,db,u.query.id);
		}else {
			res.statusCode = 404;
			res.end()
		}
	});
	
}).listen(3000);