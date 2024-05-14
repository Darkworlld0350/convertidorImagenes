const sharp = require('sharp');
const potrace = require('potrace');

exports.convertirImagen = async (req, res) => {
  try {
    // Verificar si se ha proporcionado un archivo y si es una imagen
    if (!req.file) {
      return res.status(400).send('No se ha proporcionado ningún archivo');
    }

    let formatoDestino = 'png'; // Predeterminado a PNG

    if (req.body.opciones) {
      const opciones = req.body.opciones.toUpperCase();
      if (opciones === 'JPEG') {
        formatoDestino = 'jpeg'; 
      } else if (opciones === 'JPG') {
        formatoDestino = 'jpg'; 
      } else if (opciones === 'SVG' || opciones === 'PNG' || opciones === 'WEBP') {
        formatoDestino = opciones.toLowerCase(); 
      }
    }

    // Convertir la imagen a formato destino
    let buffer;
    if (formatoDestino === 'svg') {
      buffer = await sharp(req.file.buffer).toBuffer();
      buffer = await new Promise((resolve, reject) => {
        potrace.trace(buffer, { threshold: 128 }, (err, svg) => {
          if (err) {
            reject(err);
          } else {
            resolve(svg);
          }
        });
      });
    } else {
      buffer = await sharp(req.file.buffer).toFormat(formatoDestino).toBuffer();
    }

    // Configurar el encabezado Content-Disposition para que el navegador descargue la imagen
    res.set({
      'Content-Type': `image/${formatoDestino}`, // Corrección aquí para asegurar que el tipo MIME es correcto
      'Content-Disposition': `attachment; filename="imagen_convertida.${formatoDestino}"` // Uso de comillas para escapar correctamente
    });

    // Enviar la imagen convertida al cliente
    res.send(buffer);
  } catch (error) {
    console.error('Error al convertir la imagen:', error);
    res.status(500).send('Error interno del servidor');
  }
};
