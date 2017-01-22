var http = require("http")
var fs = require("fs");

var app = http.createServer(function(req, res) {
    if (req.method === "GET") {
        switch (req.url) {
            case "/index.html":
                fs.readFile("index.html", function(err, data) {
                    if (err) throw err;
                    res.writeHeader(200, {
                        "Content-Type": "text/html"
                    })
                    res.end(data.toString());
                });
                break;

            case "/add.html":
                fs.readFile("add.html", function(err, data) {
                    if (err) throw err;
                    res.writeHeader(200, {
                        "Content-Type": "text/html"
                    })
                    res.end(data.toString());
                });
                break;

            case "/edit.html":
                fs.readFile("edit.html", function(err, data) {
                    if (err) throw err;
                    res.writeHeader(200, {
                        "Content-Type": "text/html"
                    })
                    res.end(data.toString());
                });
                break;

            case "/remove.html":
                fs.readFile("remove.html", function(err, data) {
                    if (err) throw err;
                    res.writeHeader(200, {
                        "Content-Type": "text/html"
                    })
                    res.end(data.toString());
                });
                break;

            case "/search.html":
                fs.readFile("search.html", function(err, data) {
                    if (err) throw err;
                    res.writeHeader(200, {
                        "Content-Type": "text/html"
                    })
                    res.end(data.toString());
                });
                break;
        }
    } else if (req.method === "POST") {
      
    }
});

app.listen(8888);
