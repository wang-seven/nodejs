var fs = require("fs");//node ����ģ���ֱ������  fs���ļ�ϵͳ����ģ��

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
	fs.unlink("./content222.txt", function(err){//ɾ���ļ�
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
