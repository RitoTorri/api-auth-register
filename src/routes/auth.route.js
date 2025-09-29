const router = require('express').Router()
const middlewares = require('../middlewares/auth.middleware')

// Clase de controlador
const AuthController = require('../controllers/auth.controller')
const authController = new AuthController()

router.post('/login', middlewares.ValidateLogin, authController.login)

module.exports = router