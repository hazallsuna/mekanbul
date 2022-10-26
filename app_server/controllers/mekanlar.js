var express = require('express');
var router = express.Router();

const anaSayfa = function(req, res, next) {
  res.render('anasayfa',
    {
      "baslik": "Anasayfa",
      "sayfaBaslik": {
        "siteAd": "MekanBul",
        "slogan": "Civardaki mekanları keşfet!"
      },
      "mekanlar": [
        {
          "ad": "Hazal's Kitchen",
          "adres": "İyaşpark Avm",
          "puan": "4",
          "mesafe": "2km",
          "imkanlar": ["Hamburger", "Pizza"]
        },

        {
          "ad": "Starbucks",
          "adres": "İyaşpark Avm",
          "puan": "3",
          "mesafe": "5km",
          "imkanlar": ["Kahve", "Pasta"]
        }
      ]


    });
}

const mekanBilgisi = function(req, res,) {
  res.render('mekanbilgisi',
    {
      "baslik": 'Mekan Bİlgisi',
      "mekanBaslik": "Hazal's  Kitchen",
      "mekanDetay": {
        "ad": "Hazal's Kitchen",
        "adres": "İyaşpark Avm",
        "puan": "4",
        "saatler": [
          {
            "gunler": "Pazartesi-Cuma",
            "acilis": "09.00",
            "kapanis": "23.00",
            "kapali": false
          },
          {
            "gunler": "Pazartesi-Cuma",
            "acilis": "09.00",
            "kapanis": "23.00",
            "kapali": false

          }
        ],
        "imkanlar": ["Hamburger", "Pizza"],
        "koordinatlar": {
          "enlem": "37.7",
          "boylam": "30.5"
        },
        "yorumlar": [
          {
            "yorumYapan": "Sakine  Hazal Suna",
            "puan": "3",
            "tarih": "20 Ekim  2022",
            "yorumMetni": "kötüydü"
          },
          {
            "yorumYapan": "Zehra Hatipoglu",
            "yorumMetni": "igrenc",
            "tarih": "20 Ekim 2022",
            "puan": "2"
          }
        ]



      }

    });
}
const yorumEkle = function(req, res, next) {
  res.render('yorumekle', { title: 'Yorum Sayfası' });
}
module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle
}