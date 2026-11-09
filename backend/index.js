const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Base de datos simulada en memoria
let registros = [
  { id: 1, mensaje: "Conexión inicial exitosa con el Contenedor 2 (Backend)" }
];

// Endpoint GET: Leer datos
app.get('/api/datos', (req, res) => {
  res.json({ ok: true, data: registros });
});

// Endpoint POST: Guardar dato (Operación de ida y vuelta)
app.post('/api/datos', (req, res) => {
  const nuevoRegistro = {
    id: registros.length + 1,
    mensaje: req.body.mensaje || "Dato recibido desde el cliente",
    fecha: new Date()
  };
  registros.push(nuevoRegistro);
  res.status(201).json({ ok: true, guardado: nuevoRegistro });
});

app.listen(PORT, () => {
  console.log(`Backend ejecutándose en el puerto ${PORT}`);
});