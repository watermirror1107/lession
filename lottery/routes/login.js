var express = require('express');
var sha256 = require('sha256');
var jwt = require('jsonwebtoken');
var fs = require('fs');
var pKey = fs.readFileSync('./keys/private.key');
var router = express.Router();
const payload = {
	phone: '',
};
const secret = 'gangtiejialulu';
/* GET home page. */
let userObj = {
	'13600922817': '61cb2361520098594f85803275badac71e5769dfdbfd0ce9aa826e6801560bbf',
	'13215080104': 'e7ba2e11795ea61defe46ff8cba70cd3c3fcd4f4e2c901066b6b16576c6dde9f',
};
let staticPwd = 'sonjine1107';

router.get('/', function (req, res, next) {
	res.render('login');
});
router.isLogin = false;
router.post('/login', function (req, res, next) {
	let phone = req.body.phone;
	let pwd = req.body.password;
	payload.phone = phone;
	if (userObj[phone]) {
		if (sha256(pwd + staticPwd) == userObj[phone]) {
			//使用hs256颁发秘钥
			const token = jwt.sign(payload, pKey,{algorithm:'RS256'});//第一个参数是要加密的信息，第二个是秘钥，第三个参数是指定算法
			res.cookie('token', token, {maxAge: 24 * 3600 * 1000, httpOnly: true});
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
