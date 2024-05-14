const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

//Configuración de DotEnv
dotenv.config();

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

router.post('/convertir-imagen', upload.single('archivo'), imagenController.convertirImagen);
