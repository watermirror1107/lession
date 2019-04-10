var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var jwt = require('jsonwebtoken');
var fs = require('fs');
var publicKey = fs.readFileSync('./keys/public.key');
var indexRouter = require('./routes/login');
var lotteryRouter = require('./routes/index');
var mulRowRouter = require('./routes/mulrow');
var type1Router = require('./routes/type1');
var type2Router = require('./routes/type2');
var type3Router = require('./routes/type3');


var phoneArr = ['13600922817', '13215080104'];

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express);
// app.set('view engine', 'jade');
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
	var url = req.originalUrl;//获取浏览器中当前访问的nodejs路由地址；
	var token = req.cookies.token; //获取客户端存取的cookie,userCookies为cookie的名称；//有时拿不到cookie值，可能是因为拦截器位置放错，获取该cookie的方式是依赖于nodejs自带的cookie模块，//因此，获取cookie必须在1,2步之后才能使用，否则拿到的cookie就是undefined.
	// console.log('app获得cookie' + req.cookies.userCookies + '真假11111：' + (req.cookies.userCookies == undefined));
	if (url == '/lottery' || url == '/mulrow' || url == '/type1' || url == '/type2' || url == '/type3') { //通过判断控制用户登录后不能访问登录页面；
		jwt.verify(token, publicKey, (error, decoded) => {   //jwt解密的时候第一个参数是token，第二个是加密时候的秘钥要和颁发的时候一致，也可以使用公钥,第三个参数是回调函数，里面的参数第一个是报错，第二个是解密后得到的信息;
			if (error) {
				console.log(error);
				return res.redirect('/');//页面重定向；
			}
			if (!phoneArr.includes(decoded.phone)) {
				return res.redirect('/');//页面重定向；
			}
		});
	}
	next();
});

app.use('/', indexRouter);
app.use('/lottery', lotteryRouter);
app.use('/mulrow', mulRowRouter);
app.use('/type1', type1Router);
app.use('/type2', type2Router);
app.use('/type3', type3Router);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
