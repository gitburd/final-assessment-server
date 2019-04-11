const Pool = require('pg').Pool
const pool = new Pool({
  host: 'localhost',
  database: 'final',
  port: 5432,
  ssl: process.env.NODE_ENV === 'production'
})



  const getApprentices = (request, response) => {
    pool.query('SELECT * FROM apprentices', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getCohorts = (request, response) => {
    pool.query('SELECT * FROM cohorts', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  
  const addApprentice = (request, response) => {
    pool.query(`INSERT INTO apprentices (cohort_id, first_name, last_name) VALUES('${request.body.cohort_id}','${request.body.first_name}','${request.body.last_name}');`,(error, results) => {
      if (error) {
        throw error
      }
      console.log("add apprentice successful - yay!");
    } )
}  



const searchById = (request,response) =>{
 
  var search = request.query.keyword;
 
  const query = `SELECT * FROM apprentices WHERE apprentice_id='${search}'`;
  console.log(search);
  console.log(query);
  pool.query(`${query}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};


const searchByFirst = (request,response) =>{
     
  var search = "%"+request.query.keyword+"%";
 
  const query = `SELECT * FROM apprentices WHERE first_name LIKE'${search}'`;
  console.log(search);
  console.log(query);
  pool.query(`${query}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const searchByLast = (request,response) =>{
     
  var search = "%"+request.query.keyword+"%";
 
  const query = `SELECT * FROM apprentices WHERE (last_name LIKE '${search}')`;
  console.log(search);
  console.log(query);
  pool.query(`${query}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const searchCohortByCity = (request,response) =>{
 
  var search = "%"+request.query.keyword+"%";
 
  const query = `SELECT  a.first_name, a.last_name, c.year FROM apprentices AS a JOIN cohorts AS c ON a.cohort_id = c.cohort_id WHERE c.city LIKE '${search}';`;
  console.log(search);
  console.log(query);
  pool.query(`${query}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const searchCohortByYear = (request,response) =>{
 
  var search =request.query.keyword;
 
  const query = `SELECT  a.first_name, a.last_name, c.city FROM apprentices AS a JOIN cohorts AS c ON a.cohort_id = c.cohort_id WHERE c.year=${search};`;
  console.log(search);
  console.log(query);
  pool.query(`${query}`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};




module.exports = {
    getApprentices,
    getCohorts,
    addApprentice,
    searchByFirst,
    searchByLast,
    searchById,
    searchCohortByCity,
    searchCohortByYear,
}




