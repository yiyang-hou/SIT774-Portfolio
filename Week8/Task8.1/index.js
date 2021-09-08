var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send("Welcome to SIT774! This page was served dynamically from the express server.");
});

app.use(express.static('public_html'));
app.listen(8080, function(){
    console.log("Web server running at: http://localhost:8080");
    console.log("Type Ctrl+C to shut down the web server");
    });