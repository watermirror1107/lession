const {default: Validator} = require('async-validator');
//匹配规则
const descriptor = {
    username: [
        {
            required: true,
            message: '请填写用户名'
        },
        {
            min: 2,
            max: 10,
            message: '用户名长度为2-10'
        }
    ],
    age: {
        type: 'number', message: '年龄不符合要求', required: true, validator: function (rule, val) {
            return val >= 18 && val < 60;
        }
    },
    email: [{
        type: 'email'
    }]
};
const validator = new Validator(descriptor);
const testData = {
    username: 'make a wish',
    age: 33,
    email: '123213'
};
//validator实例返回的是一个promise对象
validator.validate(testData).then(data => {

}).catch((err, fields) => {
    console.log(err);
    console.log(fields);
});

