// routes/routes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

// Importa las rutas específicas
const index = require('./index');
const login = require('./login');
const registro = require('./registro');

//Cofiguracion de rutas

router.use('/', index);
router.use('/login', login);
router.use('/registro', registro);

module.exports = router;