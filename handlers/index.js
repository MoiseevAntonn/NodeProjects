module.exports = function(res,db,data){
	"use strict";
	var now = new Date();
	var count = 0;
	data=data.replace(/#time#/i,()=>now.toTimeString());
	data=data.replace(/#count#/i,()=>String(count));
	var links = db.phones.map((phone,index)=>'<a href=\'/details?id='+phone.id+'\'>'+phone.name+'</a>\n')
	data=data.replace(/#links#/i,links);
	res.statusCode = 200;
	res.setHeader('Content-type','text/html');
	res.write(data);
	count++;
	res.end();
};