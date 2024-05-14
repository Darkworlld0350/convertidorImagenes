const express = require('express');
const router = express.Router();
const imagenController = require('../controllers/imageController');

router.post('/convertir-imagen', imagenController.convertirImagen);

module.exports = router;

const imagenRoutes = require('./routes/imagenRoutes'); // Asume que guardaste las rutas aquí

app.use('/api', imagenRoutes);

app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});