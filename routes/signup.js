const express = require('express');
const router = express.Router();

// Ruta para manejar la solicitud GET en la ruta raíz
router.get('/', (req, res) => {
  res.render('signup', { title: 'Signup' });
});

module.exports = router;
