const express = require('express');
const router = express.Router();
const title = "Matriculas"

router.get('/', function(req, res) {
  res.render('paso1', { title });
});


router.post('/paso2', function(req, res) {
  const curso = req.body.curso;
  res.render('paso2', { title, curso });
});


router.post('/paso3', function(req, res) {
  const curso = req.body.curso;
  const modulos = Array.isArray(req.body.modulos) ? req.body.modulos : [req.body.modulos];
  res.render('paso3', {title, curso, modulos });
});


router.post('/paso4', function(req, res) {
  const pago = req.body.pago;
  const curso = req.body.curso;
  const modulos = Array.isArray(req.body.modulos) ? req.body.modulos : [req.body.modulos];
  let costo = 0;
  if (curso=="java") costo = 1200;
  if (curso=="php") costo = 800;
  if (curso=="net") costo = 1500;
  let total = modulos.length*costo
  if (pago=="efectivo") total = total*0.9
  const detalle = {
    curso,
    modulos,
    pago,
    total
  };
  
  res.render('paso4', {title, detalle });
});


module.exports = router;