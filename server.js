//需求：服务端根据客户端不同的url请求返回相应的json数据

var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	//1.拿到客户端的url地址
	var urlObj=url.parse(req.url);
//	console.log(urlObj);
	var pathname=urlObj.pathname;		
	//2.禁止小图标
	if(req.url=='/favicon.ico'){
		res.end();
		return;
	}
	//3.根据url地址返回相应的数据
	switch(pathname){
		case '/index':
			sendData('data'+pathname+'.json',res);
			break;
		case '/find':
			sendData('data'+pathname+'.json',res);
			break;
		case '/mine':
			sendData('data'+pathname+'.json',res);
			break;
		case '/sq':
			sendData('data'+pathname+'.json',res);
			break;
		case '/zhaohuaxishi':
			sendData('data'+pathname+'.json',res);
			break;	
		default:
			sendData('data'+pathname+'.json',res);
			break;
	}
	
}).listen(8080);

console.log('server2 is running');

function sendData(filePath,res){
	fs.readFile(filePath,function(err,data){
				if(err==null){
					res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});
					res.end(data);
				}else{
					res.writeHead(404,{"Content-Type":"text/plain; charset=utf-8"});
					res.end('文件没有找到');
				}
			})
}
