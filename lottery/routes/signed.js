var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
	res.render('signed');
});

function randomNum(e) {
	for (var t = '', n = (e = e || 20,
		['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']), a = 0; a < e; a++) {
		t += n[Math.ceil(35 * Math.random())];
	}
	return t;
}


router.get('/getData', async function (req, res, next) {
	let url, queryData = randomNum(20);
	await new Promise((resolve, reject) => {
		url = `https://www.cp91.vip/data/${req.query.type}/lotteryList/${req.query.date}.json??${queryData}`;
		resolve();
	});
	await request({
		method: 'GET',
		url: url,
		headers: {
			'content-type': 'application/json',
			'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) 17     AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36',
		},
		body: {},
		json: true,      //这个针对body是不是支持json

	}, (error, response, body) => {
		res.json({
			status: body.length > 0 ? '1' : '0',
			data: body.length > 0 ? body : '查无数据',
		});
	});
});


module.exports = router;
