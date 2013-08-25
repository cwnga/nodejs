var hello1 = require('./module');
hello1.setName('anson1');

var hello2 = require('./module');
hello2.setName('anson2');
hello1.sayHello();//anson2, 因為hello1 and hello2 是指到同一個實例

