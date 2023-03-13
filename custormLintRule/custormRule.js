module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: "Description of the rule",
        },
        messages: {
            avoidName: "Avoid using variables named '{{ name }}'"
        },
        fixable: "code",
        schema: [] // no options
    },
    create: function (context) {
        return {
            Identifier(node) {//识别回调
                if (node.name === "foo") {
                    context.report({
                        node,
                        messageId: "avoidName",
                        data: {
                            name: "foo",//这个参数在上面的Messages中用到
                        },
                        fix: function (fixer) {
                            console.log(fixer)//用来修复，有一下几个属性
                            // insertTextAfter: [Function: insertTextAfter],
                            // insertTextAfterRange: [Function: insertTextAfterRange],
                            // insertTextBefore: [Function: insertTextBefore],
                            // insertTextBeforeRange: [Function: insertTextBeforeRange],
                            // replaceText: [Function: replaceText],
                            // replaceTextRange: [Function: replaceTextRange],
                            // remove: [Function: remove],
                            // removeRange: [Function: removeRange]

                            // return fixer.replaceText(node, "giao");
                        }
                    });
                }
            }
        };
    }
};
