const response = require('../utils/responses')
const validator = require('../utils/format.data')

const ValidateRegister = (req, res, next) => {
    const { email, password } = req.body

    let error = false
    let details = []

    if (!email || !password) {
        return response.BadRequest(res, 'The email, password are required.')
    }

    if (validator.formatEmailInvalid(email)) {
        error = true
        details.push('The email is invalid.')
    }

    if (validator.formatPasswordInvalid(password)) {
        error = true
        details.push('The password is invalid.')
    }

    if (error) return response.ParametersInvalid(res, details)
    next()
}

module.exports = { ValidateRegister }