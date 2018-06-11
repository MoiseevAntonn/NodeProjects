module.exports = function (res,db,id){
	"use strict";
	let phone = db.phones.find(p => p.id === Number(id));
	if (phone === null){
		res.statusCode = 404;
		res.end();
	}else {
		res.statusCode = 200;
		res.setHeader('Content-type','application/json');
		res.write(JSON.stringify(phone));
		res.end();
	}
}