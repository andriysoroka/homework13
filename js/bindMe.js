// Function.prototype.bindMe = function (context) {
//  return function() {
//    return func.apply(context, arguments);
//  };
//}
//Function.prototype.bindMe = function(context, fn) {
//  var bindArgs = [].slice.call(arguments, 2);
//  return function() {
//    var fnArgs = [].slice.call(arguments);
//    return fn.apply(context, bindArgs.concat(fnArgs));
//  };
//};
//  Function.prototype.bindMe = function (context) {
//	  	 var bindArgs = [].slice.call(arguments, 2)
//		return this.apply(conetext, bindArgs);
//}
//  function addPropToNumber(number) { return this.prop + number; }
//var bound = addPropToNumber.bindMe();
////bound(1) 
Function.prototype.bindMe = function() {
	var myBind = this,
		arr = Array.prototype.slice.call(arguments, 1),
		context = arguments[0];
	return function()  {
       return myBind.apply(context, arr);
    }
}