// routes/routes.js

const express = require('express');
const router = express.Router();
const imageRoutes = require('./routes/imageRoutes'); 
const authMiddleware = require('../middlewares/authMiddleware');

// Importa las rutas específicas
const index = require('./index');
const signin = require('./signin');
const signup = require('./signup');


//Cofiguracion de rutas

router.use('/', index);
router.use('/signin', signin);
router.use('/signup', signup);
router.use('/imageRoutes', imageRoutes);

module.exports = router;