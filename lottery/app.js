var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var sha256 = require('sha256');

var indexRouter = require('./routes/login');
var lotteryRouter = require('./routes/index');

var app = express();
var arr = ['e437845dff8054b2e6c6f9843a567caed0996a218b1f9a84189a6ab60663933e', 'ee2e195f0ca22585c236b527e7a558b27f441183a78421764ae90934cdfd44a1'];
var tokenStatic = 'wodetian111';
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
	var userCookies = req.cookies.token; //获取客户端存取的cookie,userCookies为cookie的名称；//有时拿不到cookie值，可能是因为拦截器位置放错，获取该cookie的方式是依赖于nodejs自带的cookie模块，//因此，获取cookie必须在1,2步之后才能使用，否则拿到的cookie就是undefined.
	// console.log('app获得cookie' + req.cookies.userCookies + '真假11111：' + (req.cookies.userCookies == undefined));
	if (url == '/lottery') { //通过判断控制用户登录后不能访问登录页面；
		if (!arr.includes(sha256(userCookies + tokenStatic))) {
			return res.redirect('/');//页面重定向；
		}
	}
	next();
});

app.use('/', indexRouter);
app.use('/lottery', lotteryRouter);


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
