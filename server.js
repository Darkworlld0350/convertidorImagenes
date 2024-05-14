const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const conversionController = require('./controllers/conversionController');
const multer = require('multer');
const router = require('./routes/router');
const dotenv = require('dotenv');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const authMiddleWare = require('./middlewares/authMiddleware');
const MySQL = require('mysql2');
const MySQLStore = require('express-mysql-session')(session);
const mysql = require('mysql2/promise'); // Importa mysql2/promise aquí

// Multer para manejar la carga de archivos en la memoria
const storage = multer.memoryStorage();
const upload = multer({ storage });

//Configura Cookie Parser
app.use(cookieParser());

dotenv.config();

//Middleware para procesar los archvivos estaticos para la carpeta public
app.use(express.static('public'));

//app.use(express.urlencoded({extend:true}))
app.use(express.json());

app.use('/', router);

// Middleware para procesar datos de formulario con archivo
app.use(upload.single('seleccionarImg'));

//Middleware para procesar los archivos estáticos para la carpeta public
app.use(express.static('public'));

// Middleware para procesar cuerpos de solicitud en formato JSON
app.use(express.json());

// Establecer vistas y motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Configurar las rutas


// Ruta para manejar la solicitud POST del formulario de carga
app.post('/convertir', conversionController.convertirImagen);

// Puerto del servidor
const port = 3000;
app.listen(port , () => {
    console.log(`SERVER UP running in http://localhost:${port}`);
});
