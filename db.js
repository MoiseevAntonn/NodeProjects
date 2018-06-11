//module.exports = {phones:[{id:1,name:'Ale',cost:500},{id:2,name:'asd',cost:450}]}

var pg = require('pg');
var client = new pg.Client({
	database: 'phonestore',
	user: 'dbuser',
	password: 'dbuser'
});


client.connect();

module.exports = {
	getAllPhones:function(callback) {
	client.query('SELECT * FROM Phone', (err, res) => {
  	if (err){
  		callback(err,null);
  	}else if (res){
  		callback(null,res.row);
  	}else {
  		callback(null,null);
  	}
  	client.end()
})
}
}