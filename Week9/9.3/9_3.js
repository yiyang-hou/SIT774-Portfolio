var express = require('express');
var bodyParse = require('body-parser');
var app = express();

app.use(express.static('public_html'));
app.use(bodyParse.urlencoded({ extended: false }));


app.post('/users', function (req, res, next) {   
    var response = '';
    function validation() {
        var flag;
        flag = true;
        if (username.length == 0) {
            response += "Name field is not filled.<br>";
            flag = false;
        }
        if (password.length < 8 || password.length > 20)
        {
            response += "Password is invalid.<br>";
            flag = false;
        }
        if (comment.length >= 100)
        {
            response += "The comment is too long.<br>";
            flag = false;
        }
        if (option == null)
        {
            response += "Selection was not made.<br>";
            flag = false;
        }
        return flag;
    }
    var username = req.body.name;
    var password = req.body.password;
    var comment = req.body.comment;
    var option = req.body.optradio;
    var validity = validation();
    if (validity) {

        res.write(`<b>Username entered:</b> ${username}<br><br>`);
        res.write(`<b>Password entered:</b> ${password}<br><br>`);
        res.write(`<b>Comment entered:</b> ${comment}<br><br>`);
        res.write(`<b>option entered:</b> ${option}<br><br>`);
        res.write("<h3>Looking forward to seeing you again!</h3>");
        res.send();
    }
    else {
        res.write("<h1>Invalid Form</h1>");
        res.write(response);
        res.send();
    }


});

app.listen(8080, function () {
    console.log("Web server running at: http://localhost:8080");
    console.log("Type Ctrl+C to shut down the web server");
});