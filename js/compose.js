function compose() {
        return Array.prototype.reduceRight.call(arguments, function (prevFunc, currecntFunction) {
            return function(){
                return currecntFunction(prevFunc.apply(null, arguments));
            };
        })
}
//module.exports = compose;