// write a nodejs server that will expose a method call "get" that will return the value of the key passed in the query string
// example: http://localhost:3000/get?key=hello
// if the key is not passed, return "key not passed"
// if the key is passed, return "hello" + key
// if the url has other methods, return "method not supported"
// when server is listening, log "server is listening on port 3000"

var http = require('http');
var url = require('url');
var axios = require('axios');

// write a function to return a joke using axios
// use the url https://api.chucknorris.io/jokes/random

function getJoke() {
    return axios.get('https://api.chucknorris.io/jokes/random')
        .then(function (response) {
            // console.log(response.data.value);
            return response.data.value;
        })
        .catch(function (error) {
            // console.log(error);
            return error
        });
}

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);

// Update the code below to return the days between 2 dates passed in the query string checking the key to verify that 2 dates are passed
// example: http://localhost:3000/get?key=2018-01-01,2018-01-03
// should return 2

// write a function to verify that the 2 dates are passed in the key separated by a comma



    if (q.pathname === '/get') {
        if (q.query.key) {
            var colors = require('./colors.json');
            var color = colors.find(function (color) {
                return color.color === q.query.key;
            });
            function checkIfDates(key) {
                var dates = key.split(',');
                if (dates.length === 2) {
                    return true;
                }
            }
            if (color) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                console.log(color.code.hex);
                res.write(color.code.hex); //hexString);
                res.end();
            } else if (checkIfDates(q.query.key)) {
                var date1 = new Date(q.query.key.split(',')[0]);
                var date2 = new Date(q.query.key.split(',')[1]);
                var diff = Math.abs(date1.getTime() - date2.getTime());
                var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
                res.writeHead(200, { 'Content-Type': 'text/html' });
                if (diffDays === 999) {
                    res.write('Tombola');
                    res.end();
                } else {
                res.write(diffDays.toString());
                res.end();
                }
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('hello ' + q.query.key);
                res.end();
            }
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('key not passed');
            res.end();
        } 
    }
    else if (q.pathname === '/TellMeAJoke') {
        getJoke()
        .then(function (joke) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(joke);
            res.end();
        })
        .catch(function (error) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(error);
            res.end();
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('method not supported');
        res.end();
    }
}

).listen(3000, function () {
    console.log('server is listening on port 3000');
}
);


