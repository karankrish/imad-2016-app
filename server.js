var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var config = {
    user: 'karankrish',
    database: 'karankrish',
    host: 'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
    };

var app = express();
app.use(morgan('combined'));

var articles = { 
        'article-one':{
            title:'Article One |karan krishna',
            heading:'Article one',
            date:'sep 5 2016',
            content:'  <p>This is content for my  article one</p>'
        },
        'article-two':{
            title:'Article Two |karan krishna',
            heading:'Article two',
            date:'sep 6 2016',
            content:' <p>This is content for my article one</p>'
        },
        'article-three':{
            title:'Article Three |karan krishna',
            heading:'Article three',
            date:'sep 7 2016',
            content:'<p>This is content for my article one</p>'
        }
};


function createTemplate(data){
    var title=title.data;
    var heading=heading.data;
    var date=date.data;
    var content=content.data;
var htmlTemplate=` 
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width , initial-scale=1"/>
             <link href="/ui/style.css" rel="stylesheet" />
      
        </head>
         <body>
        <div class="contaner">     
            <div>
            <a href ="/">Home</a>
            </div>
            <hr/>
            <h3> ${heading}</h3>
            <div>
                ${date}
                </div>
                <div>
                    ${content}
                    </div>
        </div>
        </body>
    </html> `
;
    return htmlTemplate; 
}

var pool = new Pool(config);
app.get('/test-db',function(req, res){
    pool.query('SELECT * FROM test', function (err, result){
        if(err){
            res.status(500).send(err.toString());
        }else {
            res.send(JSON.stringify(result.rows));
        }
    });
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
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



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
}); 


app.get('/ui/app.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'app.js'));
}); 



app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
