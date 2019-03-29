var express = require('express');
var sha256 = require('sha256');
var router = express.Router();

/* GET home page. */
let userObj = {
	'13600922817': '61cb2361520098594f85803275badac71e5769dfdbfd0ce9aa826e6801560bbf',
	'13215080104': 'e7ba2e11795ea61defe46ff8cba70cd3c3fcd4f4e2c901066b6b16576c6dde9f',
};
let staticPwd = 'sonjine1107';
let cookieStatic = 'xyyh2019';
router.get('/', function (req, res, next) {
	res.render('login');
});
router.isLogin = false;
router.post('/login', function (req, res, next) {
	let phone = req.body.phone;
	let pwd = req.body.password;
	if (userObj[phone]) {
		if (sha256(pwd + staticPwd) == userObj[phone]) {
			res.cookie('token', sha256(phone + cookieStatic), {maxAge:24*3600*1000,httpOnly: true});
			res.json({
				status: 0,
				msg: '成功',
			});
		} else {
			res.json({
				status: 1,
				msg: '密码错误',
			});
		}
	} else {
		res.json({
			status: 1,
			msg: '无此用户',
		});
	}
});

module.exports = router;
