//异步式读取文件
var fs = require('fs');
fs.readFile('file.txt','UTF-8',function(err,data){
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});
console.log('end');
