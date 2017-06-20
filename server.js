const express = require('express');
const app = express()
var path = require("path");
var port = process.env.PORT || 3000;
var jsonController = require('./controllers/json.controller.js');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile('./index.html')
    // res.sendFile(path.join(__dirname+'/about.html'));
})

app.get('/preview', function (req, res) {
  res.sendFile(path.join(__dirname+'/public/preview.html'))

})


app.get('/getJsonData', jsonController.getJson);

app.listen(port, function () {
  console.log('Example app listening on port '+port);
})