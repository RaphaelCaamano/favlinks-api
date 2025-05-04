require('dotenv').config() // this exposes our env variables to our app! 

// Step 1) Establish a connection to our Postgres database  

const Pool = require('pg').Pool // a connection object to Postgres 

const pool = new Pool({ 

user: process.env.DB_USERNAME, 
host: process.env.DB_HOST, 
database: process.env.DB_NAME, 
password: process.env.DB_PASSWORD,  
port: process.env.DB_HOST 
})  

const getFavLinks (req, res) { 
    // use pg to get our data from the database and return it to the user   
    pool.query(SELECT * FROM favlinks', (error, result)=>{   
        if (error) { 
             // do something with the error!  
             //res.status(400).json("Something went wrong") 
             throw error 
