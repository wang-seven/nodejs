function fn01(){
	console.log("module02.js-fn01")
}

function fn02(){
	console.log("module02.js-fn02")
}

/*
module.exports = {
	"fn01":fn01,
	"fn02":fn02
}
*/
exports.fn01 = fn01;
exports.fn02 = fn02;
