var fs = require("fs");//node 内置模块可直接引入  fs：文件系统操作模块

fs.readFile("./content.txt", "utf-8", function(err, data){
	if(err){
		throw err;
	}
	
	/*
	fs.writeFile("./content222.txt", data+"....", function(err){
		if(err){
			throw err;
		}
	})
	*/
	/*
	fs.appendFile("./content222.txt", data, function(err){
		if(err){
			throw err;
		}
	})
	*/
	/*
	fs.unlink("./content222.txt", function(err){//删除文件
		if(err){
			throw err;
		}
	})
	*/
	
	/*
	fs.mkdir("dir", function(err){
		if(err){
			throw err;
		}
	})
	*/

	fs.rename("./content.txt", "haha.txt", function(err){
		if(err){
			throw err;
		}
	})

});
