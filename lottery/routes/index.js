var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */

let date = '2019-03-02';
let url = 'https://www.cp91.vip/data/klft/lotteryList/' + date + '.json?S9DLUWQ76T14YZ1CYPLG';

request({
	method: 'GET',
	url: url,
	headers: {
		'content-type': 'application/json',
		'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) 17     AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36',
	},
	body: {},
	json: true,      //这个针对body是不是支持json

}, (error, response, body) => {
	router.get('/', function (req, res, next) {
		res.render('index', {data: JSON.stringify(body)});
	});
	// console.log(response);
});

module.exports = router;
