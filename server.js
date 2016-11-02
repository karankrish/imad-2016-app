var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
}); 


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
}); 

app.get('/ui/jquery-3.1.1.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery-3.1.1.min.js'));
}); 

app.get('/ui/animate.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'animate.css'));
}); 



app.get('/ui/1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1.jpg'));
});

app.get('/ui/2.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '2.jpeg'));
});

app.get('/ui/3.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '3.jpeg'));
});

app.get('/ui/as.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'as.jpg'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
