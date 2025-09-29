const response = require('../utils/responses')
const validator = require('../utils/format.data')
const Token = require('../utils/tokenAccess')

const ValidateTokenAccess = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) return response.BadRequest(res, 'The token authentication is required.')

    try {
        const decoded = Token.VerifyToken(authorization)
        req.user = decoded
        next()

    } catch (error) {
        if (error.message === 'Format is invalid') {
            return response.ErrorAuthorization(res, 'The token is invalid. It must be a Bearer token.')
        }
        if (error.message === 'The token is invalid.') {
            return response.ErrorAuthorization(res, 'The token is required.')
        }
        return response.ErrorAuthorization(res, error.message)
    }
}

const ValidateLogin = (req, res, next) => {
    const { email, password } = req.body
    let error = false
    let details = []

    if (!email || !password) {
        return response.BadRequest(res, 'The email and password are required.')
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

module.exports = { ValidateTokenAccess, ValidateLogin }