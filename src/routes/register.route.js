const router = require('express').Router()
const middlewares = require('../middlewares/register.middleware')

// Clase de controlador
const RegisterController = require('../controllers/register.controller')
const registerController = new RegisterController()

router.post('/register', middlewares.ValidateRegister, registerController.register)

module.exports = router