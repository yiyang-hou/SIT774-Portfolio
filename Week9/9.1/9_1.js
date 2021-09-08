var express = require('express');
var bodyParse = require('body-parser');
var app = express();

app.use(express.static('public_html'));
app.use(bodyParse.urlencoded({ extended: false }));

app.post('/users', function(req, res, next){
    let username = req.body.name;
    let password = req.body.password;
    let comment = req.body.comment;
    let option = req.body.optradio;

    res.write("<h1>Thank you for your query!</h1>");
    res.write(`<b>Username entered:</b> ${username}<br><br>`);
    res.write(`<b>Password entered:</b> ${password}<br><br>`);
    res.write(`<b>Comment entered:</b> ${comment}<br><br>`);
    res.write(`<b>option entered:</b> ${option}<br><br>`);
    res.write("<h3>Looking forward to seeing you again!</h3>");
    res.send();
});

app.listen(8080, function(){
    console.log("Web server running at: http://localhost:8080");
    console.log("Type Ctrl+C to shut down the web server");
    });