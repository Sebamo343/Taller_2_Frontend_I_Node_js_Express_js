const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde Express!');
});

app.get('/otra-pagina', (req, res) => {
  res.send('Esta es otra página creada con Express.');
});

app.listen(3000, () => {
  console.log('Servidor Express en ejecución en http://localhost:3000');
});