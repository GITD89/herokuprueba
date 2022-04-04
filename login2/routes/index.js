var express = require('express');
var router = express.Router();
var {client,dbName} = require('../mongodb/mongo');
var passport = require('passport');

passport.deserializeUser(function(id, done) {
  await client.connect();
  const db = client.db(dbName);
  console.log("Connected succesfully to server");
  const collection = db.collection('usuarios');
  db.findById(usuario, function (err, user) {
    done(err, user);
  });
});

/* GET home page. */
router.get('/',(req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
