nodejs
======

nodejs

ch3/sample1/
  簡單的module
  exports, require

ch3/sample2/
  説明require只會單次截入，不論require多少次， 還是指到同一個實例

ch3/sample3/
  使用比較笨拙
  exports.hello = Hello;
  hello = require('./hello');
  obj = new hello.Hello();

  使用以下比較直覺
  module.exports = Hello;
  Hello = require('./hello');
  obj = new Hello();


ch3/sample4/
  建立簡單的套件

ch3/sample5/
  使用package.json來建立套件

ch3/sample6/
  debug
  node debug debug.js
