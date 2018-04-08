var http = require("http");

var fs = require("fs");

http.createServer(function(request, response){
	fs.readFile("./haha.txt", "utf-8", function(err, data){
		if(err){
			throw err;
		}else{
			response.end(data);
		}

	})
//监听端口
}).listen(3000);
