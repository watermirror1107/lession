let string = "view{head{clothes{}shoes{}}foot{}}";

function parseStringToObject(string) {
    let x = string.replace(/\{/g, ':{');
    x = x.replace(/\}/g, '},');
    x = `{${x}}`
    x = x.replace(/,}/g, '}');
    x = x.replace(/([^{}',]+):\{/g, '"$1":{');
    return JSON.parse(x);
}

console.log(parseStringToObject(string));
