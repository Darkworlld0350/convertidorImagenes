-- Creación de la base de datos llamada img_converter
CREATE DATABASE IF NOT EXISTS img_converter;
-- Usar esta base de datos
USE img_converter;

-- TABLAS

-- Tabla para almacenar usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contraseña VARCHAR(255) NOT NULL
);

-- Tabla para almacenar imagenes
CREATE TABLE IF NOT EXISTS historial_imagenes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre_original VARCHAR(255) NOT NULL,
  nombre_convertido VARCHAR(255) NOT NULL,
  formato VARCHAR(10) NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS sessions (
    session_id VARCHAR(255) NOT NULL PRIMARY KEY,
    expires int NOT NULL,
    data MEDIUMTEXT NOT NULL
);

DROP DATABASE IF EXISTS img_converter;

SHOW TABLES;
SELECT * FROM sessions;
SELECT * FROM usuarios;
SELECT * FROM registros;
SELECT * FROM historial;
