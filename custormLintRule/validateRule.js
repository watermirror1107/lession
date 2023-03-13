const custormRule = require('./custormRule')
const RuleTester = require('eslint').RuleTester;
const ruleTester = new RuleTester({
    "parserOptions": {//配置编译参数，不然只支持到es5,promise就会报错
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
});
const fs = require('fs');
fs.readFile('./test.js', 'utf8', (err, data) => {
    ruleTester.run('custormRule', custormRule, {
        valid: [data, 'var fo3o=2'],//多个要lint的文件源码
        //也可以写成 { code: "{code}", options: {options}, globals: {globals}, parser: "{parser}", settings: {settings} } 这样可以传递参数
        invalid: [
            {
                code: 'foo',
                errors: [
                    {
                        messageId: 'avoidName'
                    }
                ]
            }
        ]
    })
})

