var http = require('http');
var fs = require('fs');

var app = http.createServer(function(req,res){
  if(req.method === "GET"){//处理get请求
    switch(req.url){
      case "/index.html":
      fs.readFile("index.html",function(err,data){//读取文件 readFile第一个是读取的文件，
        //第二个 回调函数
        if(err) throw err;
        res.writeHeader(200,{"Content-Type":"text/html"});//设置头，进行响应的内容是html
        res.write(data.toString());
        res.end();
      });
      break;

      case "/add.html":
      fs.readFile("add.html",function(err,data){
        if(err) throw err;
        res.writeHeader(200,{"Content-Type":"text/html"});
        res.write(data.toString());
        res.end();
      });
      break;

      case "/remove.html":
      fs.readFile("remove.html",function(err,data){
        if(err) throw err;
        res.writeHeader(200,{"Content-Type":"text/html"});
        res.write(data.toString());
        res.end();
      });
      break;

      case "/search.html":
      fs.readFile("search.html",function(err,data){
        if(err) throw err;
        res.writeHeader(200,{"Content-Type":"text/html"});
        res.write(data.toString());
        res.end();
      });
      break;

      case "/edit.html":
      fs.readFile("edit.html",function(err,data){
        if(err) throw err;
        res.writeHeader(200,{"Content-Type":"text/html"});
        res.write(data.toString());
        res.end();
      });
      break;

    }
  }
  else{//其他的请求则忽略
    console.log("Not Support");
  }
});

app.listen(7798);
