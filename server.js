const express = require('express')
const app = express()
var path = require("path");

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile('C:/Users/user/Desktop/exampleTask/index.html')
    // res.sendFile(path.join(__dirname+'/about.html'));
})

app.get('/preview', function (req, res) {
  res.sendFile('C:/Users/user/Desktop/exampleTask/preview.html')
    // res.sendFile(path.join(__dirname+'/about.html'));
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080');
})