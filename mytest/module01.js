function fn01(){
	console.log("module01-fn01");
}

function fn02(){
	console.log("module01-fn02");
}

module.exports = {
	"fn01":fn01,
	"fn02":fn02
}

/*
function fn01(){  //��дһ������ fn01
    console.log("module01-fn01");
}
function fn02(){  //��дһ������ fn02
    console.log("module01-fn02");
}

//��¶�ӿ�
module.exports = {
    "fn01":fn01,
    "fn02":fn02
}*/