function Hello() {
	var name;
	this.setName = function(thyName) {
		name = thyName;
	}
	this.sayHello = function() {
		console.log("Hello, " + name);
	}
}


module.exports = Hello;
/*
 * 不可使用exports=Hello, 而要使用 module.exports = Hello;
 * exports 實際上只是一個和。exports指向同一個物件的變數。它本身會在模組執行結束後釋放，
 * 但module不會， 因此只能透過指定module.exports來改變存取介面
 */

