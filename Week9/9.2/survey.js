var express = require('express');
var bodyParse = require('body-parser');
var app = express();

app.use(express.static('public_html'));
app.use(bodyParse.urlencoded({ extended: false }));

app.post('/survey', function(req, res, next){
    var days, day, month, months, date, year, birthday, age;
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let firstname = req.body.fname;
    let surname = req.body.sname;
    let timeNow = new Date();
    let gender = req.body.gender;
    let postCode = req.body.postcode;
    let bday = req.body.bday;
    birthday = new Date(bday);
    day = days[birthday.getDay()];
    month = months[birthday.getMonth()];
    date = birthday.getDate();
    year = birthday.getFullYear();
    age = (timeNow - birthday)/ (60*60*24*1000);
    let food = req.body.food;
    let sport = req.body.sport;
    let genre = req.body.genre;
    let interests = req.body.interests;

    res.write('<html><head>');
    res.write("<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk' crossorigin='anonymous'></head>");
    res.write('<body> <div class="container">');
    res.write("<h1 class='text-center'>SURVEY REPORT</h1>");
    res.write("<div class='card my-3'>");
    res.write("<div class='card-header bg-info text-white'>Survey Report Details</div>");
    res.write("<div class='card-body'>");   
    res.write(`<p>Thank you <b>'${firstname} ${surname}'</b> for completing and submitting this survey. Please check carefully that the detals below are correct.</p>`); 
    res.write(`<p>Survey report reveived on: <i>${timeNow}</i></p>`); 
    res.write("<dl class='row'>"); 
    res.write("<dt class='col-md-3 text-right'>Firstname Entered:</dt>"); 
    res.write(`<dd class='col-md-9 text-left'>${firstname}</dd>`); 
    res.write("<dt class='col-md-3 text-right'>Surname Entered:</dt>"); 
    res.write(`<dd class='col-md-9 text-left'>${surname}</dd>`); 
    res.write("<dt class='col-md-3 text-right'>Gender Entered:</dt>"); 
    res.write(`<dd class='col-md-9 text-left'>${gender}</dd>`); 
    res.write("<dt class='col-md-3 text-right'>Postcode Entered:</dt>"); 
    res.write(`<dd class='col-md-9 text-left'>${postCode}</dd>`); 
    res.write("<dt class='col-md-3 text-right'>Birthday Entered:</dt>"); 
    res.write(`<dd class='col-md-9 text-left'>${bday}</dd>`); 
    res.write("<dt class='col-md-3 text-right'>You were born on:</dt>"); 
    res.write(`<dd class='col-md-9 text-left'>${day} ${date} of ${month}, ${year}</dd>`); 
    res.write("<dt class='col-md-3 text-right'>Age in days:</dt>"); 
    res.write(`<dd class='col-md-9 text-left'>${age}</dd>`); 
    res.write("<dt class='col-md-3 text-right'>Favourite Food:</dt>"); 
    res.write(`<dd class='col-md-9 text-left'>${food}</dd>`); 
    res.write("<dt class='col-md-3 text-right'>Favourite Sports:</dt>"); 
    res.write(`<dd class='col-md-9 text-left'>${sport}</dd>`); 
    res.write("<dt class='col-md-3 text-right'>Favourite Movie Genre:</dt>"); 
    res.write(`<dd class='col-md-9 text-left'>${genre}</dd>`); 
    res.write("<dt class='col-md-3 text-right'>Birthday Entered:</dt>"); 
    res.write(`<dd class='col-md-9 text-left'>${interests}</dd><br>`); 
    res.write("</dl>"); 
    res.write("<p class='text-info'>Thank you for your time and our team will be in touch with you shortly.</p>"); 
    res.write("</div>"); 
    res.write("</div>");           
    res.write('</div>');
    src = "https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity = "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin = "anonymous"
    src = "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity = "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin = "anonymous"
    src = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
    integrity = "sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
    crossorigin = "anonymous"
    res.write('</body></html>');
    res.send();
    // let username = req.body.name;
    // let password = req.body.password;
    // let comment = req.body.comment;
    // let option = req.body.optradio;

    // res.write("<h1>Thank you for your query!</h1>");
    // res.write(`<b>Username entered:</b> ${username}<br><br>`);
    // res.write(`<b>Password entered:</b> ${password}<br><br>`);
    // res.write(`<b>Comment entered:</b> ${comment}<br><br>`);
    // res.write(`<b>option entered:</b> ${option}<br><br>`);
    // res.write("<h3>Looking forward to seeing you again!</h3>");
    // res.send();
});

app.listen(8080, function(){
    console.log("Web server running at: http://localhost:8080");
    console.log("Type Ctrl+C to shut down the web server");
    });