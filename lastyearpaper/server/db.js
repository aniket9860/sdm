const mysql = require('mysql2')

const Pool = mysql.createPool({
  connectionLimit: 20,
  user: 'root',
  password: 'root',
  database: 'Bookdb',
  port: 3306,
  host: 'bookdb',
  waitForConnections: true,
  queueLimit: 0,
})

module.exports = {
  Pool,
}