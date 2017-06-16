const express = require('express')
const app = express()
var path = require("path");
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile('./index.html')
    // res.sendFile(path.join(__dirname+'/about.html'));
})

app.get('/preview', function (req, res) {
  res.sendFile('./preview.html')
    // res.sendFile(path.join(__dirname+'/about.html'));
})

app.listen(port, function () {
  console.log('Example app listening on port '+port);
})