
 Function.prototype.bindMe = function(context) {
	var myBind = this,
		arr = Array.prototype.slice.call(arguments, 1),
		context = arguments[0];
	return function()  {
       return myBind.apply(context, arr);
    }
}
function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.bindMe({
  prop: 9
});
