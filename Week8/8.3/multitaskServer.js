// Require the express web application framework (https://expressjs.com)
var express = require('express');
// Create a new web application by calling the express function
var app = express();
// Get port from environment and store in Express.
var port = normalizePort(process.env.PORT || '8080');
app.set('port', port);
// Normalize a port into a number, string, or false.
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
// Tell our application to serve all the files under the `public_html` directory
app.use(express.static('public_html'));
// ******NEW CODE******
// This is a 'route' method to handle GET request for /powertable
app.get('/powertable', function (request, response) {
    // Add the JS code here to send a message back to the client with the
    // content of the page to be displayed.
    response.write('<html><head>');
    response.write("<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk' crossorigin='anonymous'></head>");
    response.write('<body> <div class="container">');
    response.write('<h1>Table of Power 2 Values</h1>');
    response.write('<p>The following table has been createed dynamically in the express server and contains the values for <b>2^n</b> (for n=0 to 11)</p>');
    response.write("<table class='table table-bordered'><tr>");
    response.write("<th>Index</th>");
    response.write("<th>Value</th></tr>");
    let power, value;
    for(power = 0; power <=11; power++)
    {
        value = Math.pow(2,power);
        response.write("<tr>");
        response.write('<td>2 ^ '+ power +'</td>');
        response.write('<td>'+ value +'</td>');
        response.write('</tr>');
    } 
    response.write('</table>');
    response.write('</div>');
    src = "https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity = "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin = "anonymous"
    src = "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity = "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin = "anonymous"
    src = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
    integrity = "sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
    crossorigin = "anonymous"
    response.write('</body></html>');
    response.send();
});
// ******NEW CODE******
app.get('/powertable/:base', function (req, response) {
    let base = req.params.base;
    response.write('<html><head>');
    response.write("<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk' crossorigin='anonymous'></head>");
    response.write('<body> <div class="container">');
    response.write(`<h1>Table of Power ${base} Values</h1>`);
    response.write(`<p>The following table has been createed dynamically in the express server and contains the values for <b>${base}^n</b> (for n=0 to 11)</p>`);
    response.write("<table class='table table-bordered'><tr>");
    response.write("<th>Index</th>");
    response.write("<th>Value</th></tr>");
    let value, power;
    for(power = 0; power <=11; power++)
    {
        value = Math.pow(base,power);
        response.write("<tr>");
        response.write(`<td>${base} ^ `+ power +'</td>');
        response.write('<td>'+ value +'</td>');
        response.write('</tr>');
    } 
    response.write('</table>');
    response.write('</div>');
    src = "https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity = "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin = "anonymous"
    src = "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity = "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin = "anonymous"
    src = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
    integrity = "sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
    crossorigin = "anonymous"
    response.write('</body></html>');
    response.send();
});

app.get('/powertable/:base/:iteration', function (req, response) {
    let base = req.params.base;
    let iteration = req.params.iteration;
    response.write('<html><head>');
    response.write("<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk' crossorigin='anonymous'></head>");
    response.write('<body> <div class="container">');
    response.write(`<h1>Table of Power ${base} Values</h1>`);
    response.write(`<p>The following table has been createed dynamically in the express server and contains the values for <b>${base}^n</b> (for n=0 to ${iteration - 1})</p>`);
    response.write("<table class='table table-bordered'><tr>");
    response.write("<th>Index</th>");
    response.write("<th>Value</th></tr>");
    let value, power;
    for(power = 0; power < iteration; power++)
    {
        value = Math.pow(base,power);
        response.write("<tr>");
        response.write(`<td>${base} ^ `+ power +'</td>');
        response.write('<td>'+ value +'</td>');
        response.write('</tr>');
    } 
    response.write('</table>');
    response.write('</div>');
    src = "https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity = "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin = "anonymous"
    src = "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity = "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin = "anonymous"
    src = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
    integrity = "sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
    crossorigin = "anonymous"
    response.write('</body></html>');
    response.send();
});
// Tell our application to listen to requests at port 3000 on the localhost
app.listen(port, function () {
    // When the application starts, print to the console that our app is
    // running at http://localhost:8080 (where the port number is 3000 by
    // default). Print another message indicating how to shut the server down.
    console.log(`Web server running at: http://localhost:${port}`);
    console.log("Type Ctrl+C to shut down the web server");
});