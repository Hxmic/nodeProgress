//声明时间对象
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
//注册事件
event.on('sameevent', function(){
  console.log('这是一个自定义事件');
});
//触发事件
setTimeout(function() {
  // body...
  event.emit('sameevent');
}, 1000)
