//web静态网页

var http = require('http');
var server = http.createServer(function(request ,response ){
  console.log(request.method);
  console.log(request.url);

  if(request.method === "GET"){
    switch(request.url){
      case "/":
      case "/index.html":
      var html = "<html><title>我的名字</title><head></head><body><br>"+
      "<h1>This is my first static web</h1>"+
      "<a href= '/add.html'>ADD</a><br>"+
      "<a href= '/remove.html'>remove</a><br>"+
      "<a href= '/search.html'>search</a><br>"+
      "</body></html>"

      response.setHeader("Content-Type","text/html");
      response.end(html);//返回给浏览器
      break;

      case "/add.html":
      var html = "<html><title>add</title><head><meta charset='utf-8'/></head><body>"+
      "<h1><a href='/index.html'>index</a></h1>"+
      "add"+
      "</body></html>"
      response.setHeader("Content-Type","text/html");
      response.end(html);
      break;

      case "/remove.html":
      var html = "<html><title>remove</title><head></head><body>"+
      "<h1><a href='/index.html'>index</a></h1>"+
      "remove"+
      "</body></html>"
      response.setHeader("Content-Type","text/html");
      response.end(html);

      break;

      case "/search.html":
      var html = "<html><title>search</title><head></head><body>"+
      "<h1><a href='/index.html'>index</a></h1>"+
      "search"+
      "</body></html>"

      response.setHeader("Content-Type","text/html");
      response.end(html);
      break;

      default :
      var html = "<html><title>add</title><head><meta charset='utf-8'/></head><body>"+
      "404 Not Find"
      "</body></html>"
      response.writeHead(404,{"Content-Type":"text/html"});
      response.end(html);

      console.log("invalid request"+request.url);
    }
  }


  response.end();
})
server.listen(8080);
