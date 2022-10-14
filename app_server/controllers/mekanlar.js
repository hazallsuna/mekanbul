var express = require('express');
var router = express.Router();

const anaSayfa = function (req, res, next) {
  res.render('anasayfa', { title: 'Ana sayfa' });
}

const mekanBilgisi = function (req, res, next) {
  res.render('mekanbilgisi', { title: 'Mekan Bİlgisi' });
}
const yorumEkle = function (req, res, next) {
  res.render('yorumekle', { title: 'Yorum Sayfası' });
}
module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle
}