const { pool } = require('../config/db')
const bcrypt = require('bcrypt')
const GenToken = require('../utils/tokenAccess')

class AuthModel {
    constructor() { }

    async login(object) {
        try {
            const query = 'SELECT id, email, password FROM users WHERE email = $1'
            const params = [object.email]

            const result = await pool.query(query, params)

            if (result.rows.length === 0) throw new Error('User not found.')

            const validationPassword = await bcrypt.compare(object.password, result.rows[0].password)
            if (!validationPassword) throw new Error('Password not valid.')

            const token = GenToken.GenToken(result.rows[0])
            return token
        } catch (error) { console.log(error); throw error }
    }
}

module.exports = AuthModel