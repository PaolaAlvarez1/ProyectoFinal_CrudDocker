const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'db', // el nombre del servicio del contenedor en docker-compose
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'crud_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

module.exports = db;