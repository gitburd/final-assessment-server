
const Pool = require('pg').Pool
const pool = new Pool({
  host: 'localhost',
  database: 'final',
  port: 5432,
})

const testConnection = (request, response) => {
    pool.query('SELECT * FROM test', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }



module.exports = {
    testConnection
}