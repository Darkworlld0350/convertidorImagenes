const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const router = require('./routes/router');
//const authMiddlewares =require('./middlewares/authMiddleware');
//const mysql2 = require('mysql2/promise');
const usuarios = require('./database/table/usuarios');
//const cookieparser = require('cookie-parser');
const dotenv = require('dotenv');

//Configuración Cookie Parser
//app.use(cookieParser());

//Configura dotenv
dotenv.config();

//Configuracion de middleware para manejar sesiones 
//app.use(session( {
    //saveUninitialized: false,
   // store: new MySQLStore
//}));

//Middleware para procesar los archvivos estaticos para la carpeta public
app.use(express.static('public'));

//app.use(express.urlencoded({extend:true}))
app.use(express.json());

app.use('/', router);

// Configuracion para el motor de plantillas pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Puerto del servidor
const port = 3000;
app.listen(port , () => {
    console.log(`SERVER UP running in http://localhost:${port}`);
});