var express=require('express'),http=require('http');
var static=require('serve-static');
var app=express();
app.set('port',process.env.PORT||8080);
app.set('host','127.0.0.1');
app.use(static(__dirname));
http.createServer(app).listen(app.get('port'),function(){
	console.log('익스프레스 서버를 시작했습니다.:'+app.get('port')+app.get('host'));
})

var myLogger=function(req,res,next){
	console.log('Logged');
	next();
}

// app.use(function(req,res,next){
// 	console.log("첫번쨰 미들웨어에서 요청을 처리함");

// 	req.user='mike';
// 	next();
// });
// app.use(function(req,res,next){
// 	console.log("두번째 미들웨어에서 요청을 처리함");
// 	//res.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
// 	//res.end('<h1>Express 서버에서 '+req.user+'가 응답한 결과입니다.</h1>');
// 	next();
// });

// app.use(function(req,res,next){
// 	console.log('세번째 미들웨어에서 요청을 처리함');
// 	res.send({name:'소너시대',age:20});
// });


// app.get('/',function(req,res){
// 	//res.send('hello world');
// });

var router=express.Router();

router.route('/').get(function(req,res){
	res.redirect('./source/main.html');
});


router.route('/rss').get(function(req,res){
	var feed="http://www.chosun.com/site/data/rss/soccer.xml";
	http.get(feed,function(httpres){
		var rss_res="";
		httpres.setEncoding('utf-8');
		httpres.on('data',function(chunk){
			rss_res+=chunk;
		});
		httpres.on('end',function(){
			res.send(rss_res);
			res.end();
		});
	});
});

app.use('/',router);

app.all('*',function(req,res){
	res.status(404).send('<h1>ERROR-페이지를 찾을 수 없습니다.</h1>');
});

