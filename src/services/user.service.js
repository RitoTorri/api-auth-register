// require
const bcrypt = require('bcrypt')

// Clases
const RegisterNodel = require('../models/register.model')
const registerModel = new RegisterNodel()

const Authmodel = require('../models/auth.model')
const authModel = new Authmodel()

class User {
    constructor() { }

    async login(object) {
        try {
            return await authModel.login(object)
        } catch (error) { throw error }
    }

    async register(object) {
        try {
            const password = await bcrypt.hash(object.password, 10)
            object.password = password

            return await registerModel.register(object)
        } catch (error) { throw error }
    }
}

module.exports = User