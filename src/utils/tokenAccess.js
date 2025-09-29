const path = require('path')
const jwt = require('jsonwebtoken')

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const GenToken = async (result) => {
    const token = jwt.sign({
        id: result.id,
        email: result.email,
        name: result.name,
        lastname: result.lastname,
        photo: result.photo,
        biography: result.biography
    }, process.env.ACCESS_KEY, { expiresIn: '3h' })
    return token
}

const VerifyToken = async (authorization) => {
    try {
        const parts = authorization.split(' ')
        if (parts.length !== 2 || parts[0] !== 'Bearer') throw new Error('Format is invalid')

        const token = parts[1]
        if (!token) throw new Error('The token is invalid.')

        const decoded = jwt.verify(token, process.env.ACCESS_KEY)
        return decoded
    } catch (error) { throw error }
}

module.exports = { GenToken, VerifyToken }