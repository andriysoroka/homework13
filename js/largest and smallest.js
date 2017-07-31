function largest() {
	return Array.prototype.reduce.apply(arguments, [function(acc, cur) {
		return Math.max(acc, cur);
	}]);
}

function smallest() {
	return Array.prototype.reduce.apply(arguments, [function(acc, cur) {
		return Math.min(acc, cur);
	}]);
}