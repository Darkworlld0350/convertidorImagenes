// routes/routes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

// Importa las rutas específicas
const index = require('./index');
const signin = require('./signin');
const signup = require('./signup');
const registrarUsuario = require('./registrar-usuario');



//Cofiguracion de rutas

router.use('/', index);
router.use('/signin', signin);
router.use('/signup', signup);
router.use('/registrar-usuario', registrarUsuario);

module.exports = router;