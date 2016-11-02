var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

/*
var c= 0;
app.get('/counter',function (req, res) {
   c = c + 1;
   res.send(c.toString());
   
});
var names=[];
app.get('/submit-name',function (req,res) {
   var name= req.query.name;
   
   names.push(name);
   res.send(JSON.stringify(names));
   
});

app.get('/articles/:articlesName',function (req,res) { 
    pool.query("SELECT * FROM articles WHERE title =$1", [req.params.articlesName] , function(err, result){
        if(err){
            res.status(500).send(err.toString());
        }
        else { 
        if (result.rows.length === 0){
        res.status(404).send('Article not found');
        }
        else {
            var articlesData=result.rows[0];
            res.send(createTemplate(articlesData));
        
        }
        }
    });
    
  
});

*/
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
