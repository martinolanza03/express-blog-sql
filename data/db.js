const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rootpassword',
    database: 'blog'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connesso al database MySQL!');
});

module.exports = connection;