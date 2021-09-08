var express = require('express');
var bodyParse = require('body-parser');
var app = express();
var sqlite3 = require('sqlite3').verbose();

app.use(express.static('public_html'));
app.use(bodyParse.urlencoded({ extended: false }));

// persistant file database.
var db = new sqlite3.Database('task10-2_DB');


app.post('/login', function (req, res, next) {
    var inputUsername = req.body.username;
    var inputPassword = req.body.password;
    res.write("<html><head>");
    res.write("<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk' crossorigin='anonymous'></head>");
    res.write("<body><div class='container'>");
    var sql = `SELECT * FROM users WHERE username="${inputUsername}" AND password="${inputPassword}";`
    db.get(sql, function (err, row) {
        if (row) {
            var fullname = row.fullname;
            var username = row.username;
            var wins = row.won;
            var losses = row.lost;
            var drawn = row.drawn;
            var total = wins + losses + drawn;
            var winRate = (wins / total) * 100;
            res.write("<h1 class='text-success'>Login Succesful!</h1>");
            res.write(`<h2>Welcome back <b>${fullname}</b>!</h2><span> username: <b>${username}</b></span>`);
            res.write(`<p>You have competed in ${total} matches and your <i>win percentage</i> is <b>${winRate}%</b>.</p>`);
            res.write("<dl class='row'>");
            res.write("<dt class='col-md-1 text-right text-weight-bold'>WINS:</dt>");
            res.write(`<dd class='col-md-11 text-left'><b>${wins}</b></dd>`);
            res.write("<dt class='col-md-1 text-right text-weight-bold'>LOSSES:</dt>");
            res.write(`<dd class='col-md-11 text-left'><b>${losses}</b></dd>`);
            res.write("<dt class='col-md-1 text-right text-weight-bold'>DRAWN:</dt>");
            res.write(`<dd class='col-md-11 text-left'><b>${drawn}</b></dd>`);
            res.write("</dl>");
            res.write("<p class='text-info'>Keep up the good work and have a nice day!</p>");
        }
        else {
            res.write("<h1 class='text-danger'>Login Failed!</h1>");
            res.write("The entered username and password doesn't match our records!");
        }
        res.write("</div>");
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

    })
});

db.serialize(function () {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT, fullname TEXT, won INTEGER, lost INTEGER, drawn INTEGER)");
    db.run("DELETE FROM users");
    db.run(`INSERT OR IGNORE INTO users VALUES("1", "mickeym", "cheese123", "Mickey Mouse", "3", "44", "3")`);
    db.run(`INSERT OR IGNORE INTO users VALUES("2", "alfred", "pm1903aus", "Alfred Deakin", "43", "2", "5")`);
    db.run(`INSERT OR IGNORE INTO users VALUES("3", "jane", "qwerty", "Jane Smith", "12", "35", "3")`);
    db.run(`INSERT OR IGNORE INTO users VALUES("4", "john", "brian1979", "John Cleese", "27", "5", "18")`);
    db.run(`INSERT OR IGNORE INTO users VALUES("5", "terry", "mointyp1969", "Terry jones", "34", "9", "7")`);
});

app.listen(8080, function () {
    console.log("Web server running at: http://localhost:8080");
    console.log("Type Ctrl+C to shut down the web server");
});
