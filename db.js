const pg = require('pg');

module.exports = {
	getAllPhones: function (callback) {
		const client = new pg.Client({
			database: 'phonestore',
			user: 'dbuser',
			password: 'dbuser'
		});

		client.connect();
		client.query('SELECT * FROM Phone', (err, res) => {
			if (err) {
				callback(err, null);
			} else if (res.rowCount > 0) {
				callback(null, res.rows.map(r => ({ id: r.id, name: r.name, cost: r.cost })));
			} else {
				callback(null, null);
			}
			client.end()
		})
	},
	getPhoneById: function (id, callback) {
		const client = new pg.Client({
			database: 'phonestore',
			user: 'dbuser',
			password: 'dbuser'
		});
		
		client.connect();
		client.query(`SELECT * FROM Phone WHERE Id = ${id}`, (err, res) => {
			if (err) {
				callback(err, null);
			} else if (res.rowCount > 0) {
				callback(null, { id: res.rows[0].id, name: res.rows[0].name, cost: res.rows[0].cost });
			} else {
				callback(null, null);
			}
			client.end()
		})
	}
}