const { Pool } = require('pg')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
})

pool.on('error', (err) => {
    console.error('Error connecting to the database:', err)
})

pool.on('connect', () => {
    console.log('Connection established')
})

module.exports = { pool } 