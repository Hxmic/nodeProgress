//建立http服务器
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write('<p>This is a start p</p>');
  response.end('<p>this is a end p</p>');
}).listen(8888);
